import { jsonError, jsonOk } from "@/lib/api/responses";
import { assertIngestionAuth } from "@/lib/ingest/auth";
import { writeNormalizedRecords } from "@/lib/ingest/normalized-writes";
import type { ProviderAdapter } from "@/lib/ingest/types";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { ingestRunSchema } from "@/lib/validation/schemas";

function idempotencyKeyFrom(request: Request, body: unknown) {
  const header = request.headers.get("idempotency-key") ?? request.headers.get("Idempotency-Key") ?? undefined;
  const bodyKey = body && typeof body === "object" && "idempotencyKey" in body ? String(body.idempotencyKey ?? "") : "";
  return bodyKey || header;
}

function staleStatus(fetchedAt: string, staleAfterMinutes: number) {
  const staleAfter = new Date(new Date(fetchedAt).getTime() + staleAfterMinutes * 60 * 1000);
  const stale = staleAfter.getTime() < Date.now();
  return {
    stale,
    staleAfter: staleAfter.toISOString(),
    status: stale ? "stale" : "complete"
  } as const;
}

export async function POST(request: Request) {
  const auth = assertIngestionAuth(request);
  if (!auth.ok) {
    return jsonError(auth.message, auth.status);
  }

  const client = getSupabaseAdminClient();
  if (!client) {
    return jsonError("Supabase admin client is not configured", 503);
  }

  const body = await request.json();
  const payload = ingestRunSchema.safeParse({
    ...(body && typeof body === "object" ? body : {}),
    idempotencyKey: idempotencyKeyFrom(request, body)
  });

  if (!payload.success) {
    return jsonError("Invalid ingestion run payload", 400, payload.error.flatten());
  }

  const idempotencyKey = payload.data.idempotencyKey;
  if (idempotencyKey) {
    const existing = await client.from("provider_run_logs").select("*").eq("idempotency_key", idempotencyKey).maybeSingle();
    if (existing.error) {
      return jsonError("Failed to check idempotency key", 500, existing.error.message);
    }

    if (existing.data?.status === "running") {
      return jsonError("Ingestion run is already in progress for this idempotency key", 409, {
        providerRunLogId: existing.data.id
      });
    }

    if (existing.data?.status === "complete" || existing.data?.status === "stale") {
      return jsonOk({
        idempotent: true,
        providerRunLogId: existing.data.id,
        status: existing.data.status,
        result: existing.data.metadata?.result ?? null
      });
    }
  }

  const fetchedAt = payload.data.fetchedAt ?? new Date().toISOString();
  const freshness = staleStatus(fetchedAt, payload.data.staleAfterMinutes);
  const adapter: ProviderAdapter = {
    id: payload.data.providerId,
    type: payload.data.providerType,
    version: payload.data.adapterVersion,
    fetch: async () => ({
      providerId: payload.data.providerId,
      fetchedAt,
      payload: payload.data.records,
      metadata: payload.data.metadata
    }),
    normalize: async () => payload.data.records
  };

  const providerRunRow = {
    provider_id: adapter.id,
    provider_type: adapter.type,
    adapter_version: adapter.version,
    idempotency_key: idempotencyKey ?? null,
    fetched_at: fetchedAt,
    status: "running",
    records_seen: payload.data.records.length,
    stale_after: freshness.staleAfter,
    error: null,
    metadata: { ...payload.data.metadata, request: { staleAfterMinutes: payload.data.staleAfterMinutes } }
  };
  const providerRunLog = idempotencyKey
    ? await client.from("provider_run_logs").upsert(providerRunRow, { onConflict: "idempotency_key" }).select("id").single()
    : await client.from("provider_run_logs").insert(providerRunRow).select("id").single();

  if (providerRunLog.error) {
    return jsonError("Failed to create provider run log", 500, providerRunLog.error.message);
  }

  const ingestionRun = await client
    .from("ingestion_runs")
    .insert({
      source: adapter.id,
      records_seen: payload.data.records.length,
      metadata: {
        providerRunLogId: providerRunLog.data.id,
        providerType: adapter.type,
        adapterVersion: adapter.version,
        idempotencyKey: idempotencyKey ?? null
      }
    })
    .select("id")
    .single();

  if (ingestionRun.error) {
    return jsonError("Failed to create ingestion run", 500, ingestionRun.error.message);
  }

  try {
    const raw = await adapter.fetch({ idempotencyKey, options: payload.data.metadata });
    const normalizedRecords = await adapter.normalize(raw);
    const result = await writeNormalizedRecords(client, normalizedRecords, {
      providerId: adapter.id,
      providerRunLogId: providerRunLog.data.id,
      idempotencyKey,
      stale: freshness.stale
    });
    const recordsInserted =
      result.forecastRunsUpserted +
      result.forecastPointsUpserted +
      result.marketEventsUpserted +
      result.marketTimeseriesUpserted +
      result.marketLinksUpserted +
      result.signalsInserted;

    await client
      .from("provider_run_logs")
      .update({
        finished_at: new Date().toISOString(),
        status: freshness.status,
        records_seen: result.recordsSeen,
        records_inserted: recordsInserted,
        records_updated: 0,
        metadata: { ...payload.data.metadata, result, raw: { fetchedAt: raw.fetchedAt, sourceUrl: raw.sourceUrl ?? null } }
      })
      .eq("id", providerRunLog.data.id);

    await client
      .from("ingestion_runs")
      .update({
        finished_at: new Date().toISOString(),
        status: freshness.status,
        records_seen: result.recordsSeen,
        records_inserted: recordsInserted,
        records_updated: 0,
        metadata: {
          providerRunLogId: providerRunLog.data.id,
          providerType: adapter.type,
          adapterVersion: adapter.version,
          idempotencyKey: idempotencyKey ?? null,
          result
        }
      })
      .eq("id", ingestionRun.data.id);

    return jsonOk({
      idempotent: false,
      providerRunLogId: providerRunLog.data.id,
      ingestionRunId: ingestionRun.data.id,
      status: freshness.status,
      result
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);

    await client
      .from("provider_run_logs")
      .update({
        finished_at: new Date().toISOString(),
        status: "failed",
        error: message,
        metadata: { ...payload.data.metadata, failedAt: new Date().toISOString() }
      })
      .eq("id", providerRunLog.data.id);

    await client
      .from("ingestion_runs")
      .update({
        finished_at: new Date().toISOString(),
        status: "failed",
        error: message
      })
      .eq("id", ingestionRun.data.id);

    return jsonError("Ingestion run failed", 500, message);
  }
}
