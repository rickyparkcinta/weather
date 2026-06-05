import { jsonError, jsonOk } from "@/lib/api/responses";
import { assertIngestionAuth } from "@/lib/ingest/auth";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { forecastIngestSchema } from "@/lib/validation/schemas";

export async function POST(request: Request) {
  const auth = assertIngestionAuth(request);
  if (!auth.ok) {
    return jsonError(auth.message, auth.status);
  }

  const client = getSupabaseAdminClient();
  if (!client) {
    return jsonError("Supabase admin client is not configured", 503);
  }

  const payload = forecastIngestSchema.safeParse(await request.json());
  if (!payload.success) {
    return jsonError("Invalid forecast payload", 400, payload.error.flatten());
  }

  const runLog = await client
    .from("ingestion_runs")
    .insert({ source: payload.data.source, records_seen: payload.data.points.length })
    .select("id")
    .single();
  if (runLog.error) {
    return jsonError("Failed to create ingestion run", 500, runLog.error.message);
  }

  try {
    const runResult = await client
      .from("forecast_runs")
      .upsert(
        {
          provider: payload.data.run.provider,
          model: payload.data.run.model,
          run_time: payload.data.run.runTime,
          source_url: payload.data.run.sourceUrl ?? null,
          status: "complete",
          metadata: { source: payload.data.source }
        },
        { onConflict: "provider,model,run_time" }
      )
      .select("id")
      .single();

    if (runResult.error) throw runResult.error;

    const slugs = [...new Set(payload.data.points.map((point) => point.citySlug))];
    const cities = await client.from("cities").select("id, slug, lat, lon").in("slug", slugs);
    if (cities.error) throw cities.error;

    const cityBySlug = new Map((cities.data ?? []).map((city) => [String(city.slug), city]));
    const rows = payload.data.points.flatMap((point) => {
      const city = cityBySlug.get(point.citySlug);
      if (!city) return [];

      return {
        city_id: city.id,
        forecast_run_id: runResult.data.id,
        provider: payload.data.run.provider,
        model: payload.data.run.model,
        run_time: payload.data.run.runTime,
        forecast_time: point.forecastTime,
        variable: point.variable,
        value: point.value,
        unit: point.unit,
        lat: city.lat,
        lon: city.lon,
        confidence: point.confidence ?? null,
        raw: point.raw
      };
    });

    if (rows.length > 0) {
      const upsert = await client
        .from("forecast_points")
        .upsert(rows, { onConflict: "city_id,provider,model,run_time,forecast_time,variable" });
      if (upsert.error) throw upsert.error;
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

    return jsonOk({ records_seen: payload.data.points.length, records_inserted: rows.length, records_updated: 0 });
  } catch (error) {
    await client
      .from("ingestion_runs")
      .update({
        finished_at: new Date().toISOString(),
        status: "failed",
        error: error instanceof Error ? error.message : String(error)
      })
      .eq("id", runLog.data?.id);

    return jsonError("Forecast ingestion failed", 500, error instanceof Error ? error.message : error);
  }
}
