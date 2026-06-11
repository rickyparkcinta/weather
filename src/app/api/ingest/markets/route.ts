import { jsonError, jsonOk } from "@/lib/api/responses";
import { assertIngestionAuth } from "@/lib/ingest/auth";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { marketsIngestSchema } from "@/lib/validation/schemas";

export async function POST(request: Request) {
  const auth = assertIngestionAuth(request);
  if (!auth.ok) {
    return jsonError(auth.message, auth.status);
  }

  const client = getSupabaseAdminClient();
  if (!client) {
    return jsonError("Live data write client is not configured", 503);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonError("Invalid JSON markets payload", 400);
  }

  const payload = marketsIngestSchema.safeParse(body);
  if (!payload.success) {
    return jsonError("Invalid markets payload", 400, payload.error.flatten());
  }

  const runLog = await client
    .from("ingestion_runs")
    .insert({ source: payload.data.source, records_seen: payload.data.events.length })
    .select("id")
    .single();
  if (runLog.error) {
    return jsonError("Failed to create ingestion run", 500, runLog.error.message);
  }

  try {
    const allSlugs = [...new Set(payload.data.events.flatMap((event) => event.citySlugs))];
    const cities = allSlugs.length
      ? await client.from("cities").select("id, slug").in("slug", allSlugs)
      : { data: [], error: null };
    if (cities.error) throw cities.error;

    const cityBySlug = new Map((cities.data ?? []).map((city) => [String(city.slug), String(city.id)]));
    const eventRows = payload.data.events.map((event) => ({
      provider: event.provider,
      provider_event_id: event.providerEventId,
      title: event.title,
      description: event.description ?? null,
      category: event.category ?? null,
      tags: event.tags,
      city_ids: event.citySlugs.map((slug) => cityBySlug.get(slug)).filter((id): id is string => Boolean(id)),
      country_codes: event.countryCodes,
      probability: event.probability ?? null,
      bid: event.bid ?? null,
      ask: event.ask ?? null,
      volume: event.volume ?? null,
      liquidity: event.liquidity ?? null,
      open_interest: event.openInterest ?? null,
      close_time: event.closeTime ?? null,
      resolution_source: event.resolutionSource ?? null,
      url: event.url ?? null,
      status: event.status ?? null,
      raw: event.raw
    }));

    const upsertEvents =
      eventRows.length > 0
        ? await client
            .from("market_events")
            .upsert(eventRows, { onConflict: "provider,provider_event_id" })
            .select("id, provider_event_id, city_ids")
        : { data: [], error: null };
    if (upsertEvents.error) throw upsertEvents.error;

    const eventByProviderId = new Map((upsertEvents.data ?? []).map((event) => [String(event.provider_event_id), event]));
    const links = (upsertEvents.data ?? []).flatMap((event) =>
      (event.city_ids as string[]).map((cityId) => ({
        city_id: cityId,
        market_event_id: event.id,
        relevance_score: 1,
        link_reason: "Provided by hourly bot payload"
      }))
    );

    if (links.length > 0) {
      const linkResult = await client.from("city_market_links").upsert(links, { onConflict: "city_id,market_event_id" });
      if (linkResult.error) throw linkResult.error;
    }

    const timeseries = payload.data.timeseries.flatMap((point) => {
      const event = eventByProviderId.get(point.providerEventId);
      if (!event) return [];

      return {
        market_event_id: event.id,
        provider: payload.data.source,
        timestamp: point.timestamp,
        probability: point.probability ?? null,
        bid: point.bid ?? null,
        ask: point.ask ?? null,
        volume: point.volume ?? null,
        liquidity: point.liquidity ?? null,
        raw: point.raw
      };
    });

    if (timeseries.length > 0) {
      const tsResult = await client.from("market_timeseries").upsert(timeseries, { onConflict: "market_event_id,timestamp" });
      if (tsResult.error) throw tsResult.error;
    }

    await client
      .from("ingestion_runs")
      .update({
        finished_at: new Date().toISOString(),
        status: "complete",
        records_inserted: eventRows.length + timeseries.length,
        records_updated: 0
      })
      .eq("id", runLog.data?.id);

    return jsonOk({
      records_seen: payload.data.events.length,
      records_inserted: eventRows.length + timeseries.length,
      records_updated: 0
    });
  } catch (error) {
    await client
      .from("ingestion_runs")
      .update({
        finished_at: new Date().toISOString(),
        status: "failed",
        error: error instanceof Error ? error.message : String(error)
      })
      .eq("id", runLog.data?.id);

    return jsonError("Market ingestion failed", 500, error instanceof Error ? error.message : error);
  }
}
