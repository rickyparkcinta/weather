import { jsonError, jsonOk } from "@/lib/api/responses";
import { createSubmittedPayloadAdapter } from "@/lib/ingest/adapters/submitted-payload";
import { assertIngestionAuth } from "@/lib/ingest/auth";
import { writeNormalizedRecords } from "@/lib/ingest/normalized-writes";
import { getRunFreshness, isExpiredRunningRun } from "@/lib/ingest/run-status";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { ingestRunSchema } from "@/lib/validation/schemas";

function idempotencyKeyFrom(request: Request, body: unknown) {
  const header = request.headers.get("idempotency-key") ?? request.headers.get("Idempotency-Key") ?? undefined;
  const bodyKey = body && typeof body === "object" && "idempotencyKey" in body ? String(body.idempotencyKey ?? "") : "";
  return bodyKey || header;
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

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonError("Invalid JSON ingestion run payload", 400);
  }

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
      if (!isExpiredRunningRun(existing.data.stale_after)) {
        return jsonError("Ingestion run is already in progress for this idempotency key", 409, {
          providerRunLogId: existing.data.id
        });
      }

      const expired = await client
        .from("provider_run_logs")
        .update({
          finished_at: new Date().toISOString(),
          status: "failed",
          error: "Previous running provider run expired before completion"
        })
        .eq("id", existing.data.id);

      if (expired.error) {
        return jsonError("Failed to expire stale running provider run", 500, expired.error.message);
      }
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
  const freshness = getRunFreshness(fetchedAt, payload.data.staleAfterMinutes);
  const adapter = createSubmittedPayloadAdapter(payload.data, fetchedAt);

  const providerRunRow = {
    provider_id: adapter.id,
    provider_type: adapter.type,
    adapter_version: adapter.version,
    idempotency_key: idempotencyKey ?? null,
    finished_at: null,
    fetched_at: fetchedAt,
    status: "running",
    records_seen: payload.data.records.length,
    records_inserted: 0,
    records_updated: 0,
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

  const ingestionRunRow = {
    source: adapter.id,
    idempotency_key: idempotencyKey ?? null,
    finished_at: null,
    status: "running",
    records_seen: payload.data.records.length,
    records_inserted: 0,
    records_updated: 0,
    error: null,
    metadata: {
      providerRunLogId: providerRunLog.data.id,
      providerType: adapter.type,
      adapterVersion: adapter.version,
      idempotencyKey: idempotencyKey ?? null
    }
  };
  const ingestionRun = idempotencyKey
    ? await client.from("ingestion_runs").upsert(ingestionRunRow, { onConflict: "idempotency_key" }).select("id").single()
    : await client.from("ingestion_runs").insert(ingestionRunRow).select("id").single();

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

    const providerRunUpdate = await client
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
    if (providerRunUpdate.error) {
      throw new Error(providerRunUpdate.error.message);
    }

    const ingestionRunUpdate = await client
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
    if (ingestionRunUpdate.error) {
      throw new Error(ingestionRunUpdate.error.message);
    }

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
