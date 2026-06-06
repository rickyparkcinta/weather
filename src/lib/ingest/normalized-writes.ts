import type { SupabaseClient } from "@supabase/supabase-js";
import type { JsonRecord } from "@/types/domain";
import type {
  NormalizedForecastRunRecord,
  NormalizedRecord,
  NormalizedWriteResult
} from "@/lib/ingest/types";

type CityRow = {
  id: string;
  slug: string;
  lat: number | null;
  lon: number | null;
};

function key(parts: Array<string | null | undefined>) {
  return parts.map((part) => part ?? "").join(":");
}

function unique<T>(items: T[]) {
  return [...new Set(items)];
}

function withAuditRaw(raw: JsonRecord | undefined, context: WriteContext): JsonRecord {
  return {
    ...(raw ?? {}),
    ingestionSource: context.providerId,
    providerRunLogId: context.providerRunLogId,
    ...(context.idempotencyKey ? { idempotencyKey: context.idempotencyKey } : {})
  };
}

export type WriteContext = {
  providerId: string;
  providerRunLogId?: string;
  idempotencyKey?: string;
  stale: boolean;
};

async function loadCities(client: SupabaseClient, records: NormalizedRecord[]) {
  const slugs = unique(
    records.flatMap((record) => {
      if (record.kind === "forecast_point" || record.kind === "combined_signal") return [record.citySlug];
      if (record.kind === "market_event") return record.citySlugs ?? [];
      return [];
    })
  );

  if (slugs.length === 0) {
    return new Map<string, CityRow>();
  }

  const result = await client.from("cities").select("id, slug, lat, lon").in("slug", slugs);
  if (result.error) {
    throw new Error(result.error.message);
  }

  return new Map((result.data ?? []).map((city) => [String(city.slug), city as CityRow]));
}

function collectForecastRuns(records: NormalizedRecord[], context: WriteContext) {
  const runs = new Map<string, NormalizedForecastRunRecord>();

  for (const record of records) {
    if (record.kind === "forecast_run") {
      runs.set(key([record.provider, record.model, record.runTime]), record);
    }
    if (record.kind === "forecast_point") {
      const runKey = key([record.provider, record.model, record.runTime]);
      if (!runs.has(runKey)) {
        runs.set(runKey, {
          kind: "forecast_run",
          provider: record.provider,
          model: record.model,
          runTime: record.runTime,
          status: context.stale ? "stale" : "complete",
          metadata: { inferredFrom: "forecast_point" }
        });
      }
    }
  }

  return [...runs.values()];
}

async function upsertForecast(
  client: SupabaseClient,
  records: NormalizedRecord[],
  cities: Map<string, CityRow>,
  context: WriteContext
) {
  const runs = collectForecastRuns(records, context);
  const runRows = runs.map((run) => ({
    provider: run.provider,
    model: run.model,
    run_time: run.runTime,
    source_url: run.sourceUrl ?? null,
    status: context.stale ? "stale" : (run.status ?? "complete"),
    metadata: {
      ...(run.metadata ?? {}),
      ingestionSource: context.providerId,
      providerRunLogId: context.providerRunLogId,
      ...(context.idempotencyKey ? { idempotencyKey: context.idempotencyKey } : {})
    }
  }));

  const runResult =
    runRows.length > 0
      ? await client.from("forecast_runs").upsert(runRows, { onConflict: "provider,model,run_time" }).select("id, provider, model, run_time")
      : { data: [], error: null };
  if (runResult.error) {
    throw new Error(runResult.error.message);
  }

  const runByKey = new Map((runResult.data ?? []).map((run) => [key([String(run.provider), String(run.model), String(run.run_time)]), String(run.id)]));
  const pointRows = records.flatMap((record) => {
    if (record.kind !== "forecast_point") return [];

    const city = cities.get(record.citySlug);
    if (!city) return [];

    return {
      city_id: city.id,
      forecast_run_id: runByKey.get(key([record.provider, record.model, record.runTime])) ?? null,
      provider: record.provider,
      model: record.model,
      run_time: record.runTime,
      forecast_time: record.forecastTime,
      variable: record.variable,
      value: record.value,
      unit: record.unit,
      lat: city.lat,
      lon: city.lon,
      confidence: record.confidence ?? null,
      raw: withAuditRaw(record.raw, context)
    };
  });

  if (pointRows.length > 0) {
    const pointResult = await client.from("forecast_points").upsert(pointRows, { onConflict: "city_id,provider,model,run_time,forecast_time,variable" });
    if (pointResult.error) {
      throw new Error(pointResult.error.message);
    }
  }

  return {
    forecastRunsUpserted: runRows.length,
    forecastPointsUpserted: pointRows.length
  };
}

async function loadMarketEvents(client: SupabaseClient, providerEventIds: string[]) {
  if (providerEventIds.length === 0) {
    return new Map<string, { id: string; provider: string; provider_event_id: string }>();
  }

  const result = await client.from("market_events").select("id, provider, provider_event_id").in("provider_event_id", providerEventIds);
  if (result.error) {
    throw new Error(result.error.message);
  }

  return new Map((result.data ?? []).map((event) => [key([String(event.provider), String(event.provider_event_id)]), event]));
}

async function upsertMarkets(
  client: SupabaseClient,
  records: NormalizedRecord[],
  cities: Map<string, CityRow>,
  context: WriteContext
) {
  const marketRecords = records.filter((record) => record.kind === "market_event");
  const eventRows = marketRecords.map((event) => {
    const cityIds = (event.citySlugs ?? []).map((slug) => cities.get(slug)?.id).filter((id): id is string => Boolean(id));

    return {
      provider: event.provider,
      provider_event_id: event.providerEventId,
      title: event.title,
      description: event.description ?? null,
      category: event.category ?? null,
      tags: event.tags ?? [],
      city_ids: cityIds,
      country_codes: event.countryCodes ?? [],
      probability: event.probability ?? null,
      bid: event.bid ?? null,
      ask: event.ask ?? null,
      volume: event.volume ?? null,
      liquidity: event.liquidity ?? null,
      open_interest: event.openInterest ?? null,
      close_time: event.closeTime ?? null,
      resolution_source: event.resolutionSource ?? null,
      url: event.url ?? null,
      status: event.status ?? (context.stale ? "stale" : null),
      raw: withAuditRaw(event.raw, context)
    };
  });

  const eventResult =
    eventRows.length > 0
      ? await client.from("market_events").upsert(eventRows, { onConflict: "provider,provider_event_id" }).select("id, provider, provider_event_id, city_ids")
      : { data: [], error: null };
  if (eventResult.error) {
    throw new Error(eventResult.error.message);
  }

  const links = (eventResult.data ?? []).flatMap((event) =>
    ((event.city_ids ?? []) as string[]).map((cityId) => ({
      city_id: cityId,
      market_event_id: String(event.id),
      relevance_score: 1,
      link_reason: `Normalized ingestion from ${context.providerId}`
    }))
  );

  if (links.length > 0) {
    const linkResult = await client.from("city_market_links").upsert(links, { onConflict: "city_id,market_event_id" });
    if (linkResult.error) {
      throw new Error(linkResult.error.message);
    }
  }

  const providerEventIds = unique(
    records.flatMap((record) => {
      if (record.kind === "market_event" || record.kind === "market_timeseries") return [record.providerEventId];
      if (record.kind === "combined_signal" && record.providerEventId) return [record.providerEventId];
      return [];
    })
  );
  const eventByKey = await loadMarketEvents(client, providerEventIds);

  const timeseriesRows = records.flatMap((record) => {
    if (record.kind !== "market_timeseries") return [];
    const event = eventByKey.get(key([record.provider, record.providerEventId]));
    if (!event) return [];

    return {
      market_event_id: event.id,
      provider: record.provider,
      timestamp: record.timestamp,
      probability: record.probability ?? null,
      bid: record.bid ?? null,
      ask: record.ask ?? null,
      volume: record.volume ?? null,
      liquidity: record.liquidity ?? null,
      raw: withAuditRaw(record.raw, context)
    };
  });

  if (timeseriesRows.length > 0) {
    const timeseriesResult = await client.from("market_timeseries").upsert(timeseriesRows, { onConflict: "market_event_id,timestamp" });
    if (timeseriesResult.error) {
      throw new Error(timeseriesResult.error.message);
    }
  }

  return {
    marketEventsUpserted: eventRows.length,
    marketLinksUpserted: links.length,
    marketTimeseriesUpserted: timeseriesRows.length,
    eventByProviderEventId: new Map(
      [...eventByKey.values()].map((event) => [String(event.provider_event_id), String(event.id)])
    )
  };
}

async function insertSignals(
  client: SupabaseClient,
  records: NormalizedRecord[],
  cities: Map<string, CityRow>,
  marketEventIdByProviderId: Map<string, string>,
  context: WriteContext
) {
  const signals = records.filter((record) => record.kind === "combined_signal");

  if (context.idempotencyKey && signals.length > 0) {
    const deleteResult = await client.from("combined_signals").delete().contains("raw", { idempotencyKey: context.idempotencyKey });
    if (deleteResult.error) {
      throw new Error(deleteResult.error.message);
    }
  }

  const rows = signals.flatMap((signal) => {
    const city = cities.get(signal.citySlug);
    if (!city) return [];

    return {
      city_id: city.id,
      market_event_id: signal.providerEventId ? (marketEventIdByProviderId.get(signal.providerEventId) ?? null) : null,
      forecast_variable: signal.forecastVariable ?? null,
      signal_type: signal.signalType ?? "weather_market_disagreement",
      model_probability: signal.modelProbability ?? null,
      market_probability: signal.marketProbability ?? null,
      disagreement: signal.disagreement ?? null,
      raw_edge: signal.rawEdge ?? null,
      adjusted_edge: signal.adjustedEdge ?? null,
      confidence: signal.confidence ?? null,
      freshness_status: signal.freshnessStatus ?? (context.stale ? "stale" : "unknown"),
      status: context.stale ? "stale" : signal.status,
      explanation: signal.explanation ?? null,
      raw: withAuditRaw(signal.raw, context)
    };
  });

  if (rows.length > 0) {
    const result = await client.from("combined_signals").insert(rows);
    if (result.error) {
      throw new Error(result.error.message);
    }
  }

  return rows.length;
}

export async function writeNormalizedRecords(
  client: SupabaseClient,
  records: NormalizedRecord[],
  context: WriteContext
): Promise<NormalizedWriteResult> {
  const cities = await loadCities(client, records);
  const forecast = await upsertForecast(client, records, cities, context);
  const markets = await upsertMarkets(client, records, cities, context);
  const signalsInserted = await insertSignals(client, records, cities, markets.eventByProviderEventId, context);

  return {
    recordsSeen: records.length,
    forecastRunsUpserted: forecast.forecastRunsUpserted,
    forecastPointsUpserted: forecast.forecastPointsUpserted,
    marketEventsUpserted: markets.marketEventsUpserted,
    marketTimeseriesUpserted: markets.marketTimeseriesUpserted,
    marketLinksUpserted: markets.marketLinksUpserted,
    signalsInserted
  };
}
