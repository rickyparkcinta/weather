import { jsonError, jsonOk } from "@/lib/api/responses";
import { assertIngestionAuth } from "@/lib/ingest/auth";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { combinedSignalsIngestSchema } from "@/lib/validation/schemas";

export async function POST(request: Request) {
  const auth = assertIngestionAuth(request);
  if (!auth.ok) {
    return jsonError(auth.message, auth.status);
  }

  const client = getSupabaseAdminClient();
  if (!client) {
    return jsonError("Supabase admin client is not configured", 503);
  }

  const payload = combinedSignalsIngestSchema.safeParse(await request.json());
  if (!payload.success) {
    return jsonError("Invalid combined-signals payload", 400, payload.error.flatten());
  }

  const runLog = await client
    .from("ingestion_runs")
    .insert({ source: "combined-signals", records_seen: payload.data.signals.length })
    .select("id")
    .single();
  if (runLog.error) {
    return jsonError("Failed to create ingestion run", 500, runLog.error.message);
  }

  try {
    const cityResult = await client.from("cities").select("id").eq("slug", payload.data.citySlug).maybeSingle();
    if (cityResult.error) throw cityResult.error;
    if (!cityResult.data) {
      await client
        .from("ingestion_runs")
        .update({
          finished_at: new Date().toISOString(),
          status: "failed",
          error: "City not found"
        })
        .eq("id", runLog.data.id);
      return jsonError("City not found", 404);
    }
    const cityId = cityResult.data.id;

    const providerEventIds = payload.data.signals.map((signal) => signal.providerEventId);
    const markets = await client.from("market_events").select("id, provider_event_id").in("provider_event_id", providerEventIds);
    if (markets.error) throw markets.error;

    const marketByProviderId = new Map((markets.data ?? []).map((market) => [String(market.provider_event_id), String(market.id)]));
    const rows = payload.data.signals.map((signal) => ({
      city_id: cityId,
      market_event_id: marketByProviderId.get(signal.providerEventId) ?? null,
      forecast_variable: signal.forecastVariable ?? null,
      signal_type: signal.signalType ?? "weather_market_disagreement",
      model_probability: signal.modelProbability ?? null,
      market_probability: signal.marketProbability ?? null,
      disagreement: signal.disagreement ?? null,
      raw_edge: signal.rawEdge ?? null,
      adjusted_edge: signal.adjustedEdge ?? null,
      confidence: signal.confidence ?? null,
      freshness_status: signal.freshnessStatus ?? "unknown",
      status: signal.status,
      explanation: signal.explanation ?? null,
      raw: signal.raw
    }));

    if (rows.length > 0) {
      const insert = await client.from("combined_signals").insert(rows);
      if (insert.error) throw insert.error;
    }

    await client
      .from("ingestion_runs")
      .update({
        finished_at: new Date().toISOString(),
        status: "complete",
        records_inserted: rows.length,
        records_updated: 0
      })
      .eq("id", runLog.data?.id);

    return jsonOk({ records_seen: rows.length, records_inserted: rows.length, records_updated: 0 });
  } catch (error) {
    await client
      .from("ingestion_runs")
      .update({
        finished_at: new Date().toISOString(),
        status: "failed",
        error: error instanceof Error ? error.message : String(error)
      })
      .eq("id", runLog.data?.id);

    return jsonError("Combined-signal ingestion failed", 500, error instanceof Error ? error.message : error);
  }
}
