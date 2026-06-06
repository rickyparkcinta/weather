import type { SupabaseClient } from "@supabase/supabase-js";
import { demoCities } from "../demo-data.ts";
import { mapCity, mapMarketEvent } from "../data/mappers.ts";
import { computeCombinedSignal } from "../signals/computeCombinedSignal.ts";
import { kalshiAdapter } from "../../providers/markets/kalshi.ts";
import { fetchPolymarketEventsByTag } from "../../providers/markets/polymarket.ts";
import { openMeteoAdapter } from "../../providers/weather/openMeteo.ts";
import type { City, CombinedSignal, ForecastPoint, MarketEvent } from "../../types/domain.ts";

type SyncClient = SupabaseClient;

export type RealApiSyncOptions = {
  cityLimit?: number;
  forecastDays?: number;
  marketLimit?: number;
  marketQueries?: string[];
  includeKalshi?: boolean;
  includePolymarket?: boolean;
};

export type RealApiSyncResult = {
  cities: {
    catalogUpserted: number;
    selected: number;
  };
  forecast: {
    provider: "open-meteo";
    recordsSeen: number;
    recordsUpserted: number;
    errors: string[];
  };
  markets: {
    providers: string[];
    recordsSeen: number;
    recordsLinked: number;
    recordsUpserted: number;
    timeseriesUpserted: number;
    errors: string[];
  };
  signals: {
    recordsComputed: number;
    recordsInserted: number;
  };
};

const DEFAULT_CITY_LIMIT = 30;
const DEFAULT_FORECAST_DAYS = 3;
const DEFAULT_MARKET_LIMIT = 40;
const FORECAST_CHUNK_SIZE = 750;
const MARKET_CHUNK_SIZE = 250;
const DEFAULT_MARKET_QUERIES = ["weather", "rain", "temperature", "heat", "snow", "storm", "hurricane", "typhoon", "wind"];
const POLYMARKET_TAGS = ["weather", "climate"];
const WEATHER_TERMS = [
  "air quality",
  "climate",
  "cold",
  "flood",
  "heat",
  "hottest",
  "hurricane",
  "precipitation",
  "rain",
  "snow",
  "storm",
  "temperature",
  "typhoon",
  "weather",
  "wind"
];

const CITY_ALIASES: Record<string, string[]> = {
  "buenos-aires": ["buenos aires"],
  "cape-town": ["cape town"],
  "delhi": ["new delhi"],
  "hong-kong": ["hong kong"],
  "los-angeles": ["los angeles", "la"],
  "mexico-city": ["mexico city"],
  "new-york": ["new york", "new york city", "nyc"],
  "sao-paulo": ["sao paulo", "são paulo"]
};

function optionNumber(value: number | undefined, fallback: number, min: number, max: number) {
  if (typeof value !== "number" || !Number.isFinite(value)) return fallback;
  return Math.max(min, Math.min(max, Math.trunc(value)));
}

function optionBoolean(value: boolean | undefined, fallback: boolean) {
  return typeof value === "boolean" ? value : fallback;
}

function normalizeOptions(options: RealApiSyncOptions = {}) {
  const cityLimit = optionNumber(options.cityLimit, DEFAULT_CITY_LIMIT, 1, 50);
  return {
    cityLimit,
    forecastDays: optionNumber(options.forecastDays, DEFAULT_FORECAST_DAYS, 1, 7),
    marketLimit: optionNumber(options.marketLimit, DEFAULT_MARKET_LIMIT, 5, 100),
    marketQueries: options.marketQueries?.length ? options.marketQueries : DEFAULT_MARKET_QUERIES,
    includeKalshi: optionBoolean(options.includeKalshi, true),
    includePolymarket: optionBoolean(options.includePolymarket, true)
  };
}

function parseEnvNumber(env: Record<string, string | undefined>, name: string) {
  const value = env[name];
  if (!value) return undefined;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function parseEnvBoolean(env: Record<string, string | undefined>, name: string) {
  const value = env[name]?.trim().toLowerCase();
  if (!value) return undefined;
  if (["1", "true", "yes"].includes(value)) return true;
  if (["0", "false", "no"].includes(value)) return false;
  return undefined;
}

export function realApiSyncOptionsFromEnv(env: Record<string, string | undefined>): RealApiSyncOptions {
  return {
    cityLimit: parseEnvNumber(env, "REAL_API_SYNC_CITY_LIMIT"),
    forecastDays: parseEnvNumber(env, "REAL_API_SYNC_FORECAST_DAYS"),
    marketLimit: parseEnvNumber(env, "REAL_API_SYNC_MARKET_LIMIT"),
    marketQueries: env.REAL_API_SYNC_MARKET_QUERIES?.split(",").map((query) => query.trim()).filter(Boolean),
    includeKalshi: parseEnvBoolean(env, "REAL_API_SYNC_INCLUDE_KALSHI"),
    includePolymarket: parseEnvBoolean(env, "REAL_API_SYNC_INCLUDE_POLYMARKET")
  };
}

function cityCatalogRows() {
  return demoCities.map((city) => ({
    slug: city.slug,
    name: city.name,
    country: city.country,
    country_code: city.countryCode,
    region: city.region,
    lat: city.lat,
    lon: city.lon,
    timezone: city.timezone,
    population: city.population,
    importance_score: city.importanceScore
  }));
}

function uniqueBy<T>(records: T[], keyFor: (record: T) => string) {
  const seen = new Set<string>();
  return records.filter((record) => {
    const key = keyFor(record);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function marketText(market: MarketEvent) {
  return `${market.title} ${market.description ?? ""} ${market.category ?? ""} ${market.tags.join(" ")}`.toLowerCase();
}

function isWeatherMarket(market: MarketEvent) {
  const text = marketText(market);
  return WEATHER_TERMS.some((term) => text.includes(term));
}

function cityTerms(city: City) {
  return [
    city.name.toLowerCase(),
    city.slug.replaceAll("-", " "),
    ...(city.countryCode ? [city.countryCode.toLowerCase()] : []),
    ...(CITY_ALIASES[city.slug] ?? [])
  ];
}

export function linkMarketToCities(market: MarketEvent, cities: City[]) {
  const text = marketText(market);
  return cities.filter((city) => cityTerms(city).some((term) => term.length > 2 && text.includes(term)));
}

function isoFromOpenMeteoTime(value: string) {
  if (/z$/i.test(value) || /[+-]\d\d:\d\d$/.test(value)) {
    return new Date(value).toISOString();
  }

  const withSeconds = value.length === 16 ? `${value}:00` : value;
  return new Date(`${withSeconds}Z`).toISOString();
}

function hourFloor(date = new Date()) {
  const next = new Date(date);
  next.setUTCMinutes(0, 0, 0);
  return next.toISOString();
}

async function upsertCityCatalog(client: SyncClient) {
  const rows = cityCatalogRows();
  const result = await client.from("cities").upsert(rows, { onConflict: "slug" });
  if (result.error) {
    throw new Error(result.error.message);
  }

  const cities = await client.from("cities").select("*").order("importance_score", { ascending: false });
  if (cities.error) {
    throw new Error(cities.error.message);
  }

  return {
    rowsUpserted: rows.length,
    cities: (cities.data ?? []).map((row) => mapCity(row))
  };
}

async function upsertForecastRows(client: SyncClient, rows: Record<string, unknown>[]) {
  for (let index = 0; index < rows.length; index += FORECAST_CHUNK_SIZE) {
    const chunk = rows.slice(index, index + FORECAST_CHUNK_SIZE);
    const result = await client
      .from("forecast_points")
      .upsert(chunk, { onConflict: "city_id,provider,model,run_time,forecast_time,variable" });

    if (result.error) {
      throw new Error(result.error.message);
    }
  }
}

async function syncForecast(client: SyncClient, cities: City[], forecastDays: number) {
  const runTime = hourFloor();
  const to = new Date(Date.now() + forecastDays * 24 * 60 * 60 * 1000).toISOString();
  const errors: string[] = [];
  const points: ForecastPoint[] = [];

  const run = await client
    .from("forecast_runs")
    .upsert(
      {
        provider: "open-meteo",
        model: "best_match",
        run_time: runTime,
        source_url: "https://open-meteo.com/",
        status: "complete",
        metadata: { source: "real-api-sync" }
      },
      { onConflict: "provider,model,run_time" }
    )
    .select("id")
    .single();

  if (run.error) {
    throw new Error(run.error.message);
  }

  for (const city of cities) {
    const result = await openMeteoAdapter.fetchForecastForCity(city, { from: runTime, to });
    if (!result.ok) {
      errors.push(`${city.slug}: ${result.error.message}`);
      continue;
    }

    points.push(
      ...result.data.map((point) => ({
        ...point,
        forecastRunId: String(run.data.id),
        runTime
      }))
    );
  }

  const rows = points.map((point) => ({
    city_id: point.cityId,
    forecast_run_id: run.data.id,
    provider: point.provider,
    model: point.model,
    run_time: runTime,
    forecast_time: isoFromOpenMeteoTime(point.forecastTime),
    variable: point.variable,
    value: point.value,
    unit: point.unit,
    lat: point.lat,
    lon: point.lon,
    confidence: point.confidence,
    raw: { ...point.raw, source: "real-api-sync" }
  }));

  if (rows.length > 0) {
    await upsertForecastRows(client, rows);
  }

  return {
    result: {
      provider: "open-meteo" as const,
      recordsSeen: points.length,
      recordsUpserted: rows.length,
      errors
    },
    points
  };
}

async function fetchMarketCandidates(options: ReturnType<typeof normalizeOptions>, cities: City[]) {
  const providers: string[] = [];
  const errors: string[] = [];
  const markets: MarketEvent[] = [];
  const cityQueries = cities.slice(0, Math.min(8, options.cityLimit)).map((city) => city.name);
  const queries = uniqueBy([...options.marketQueries, ...cityQueries], (query) => query.toLowerCase());

  if (options.includeKalshi) {
    providers.push("kalshi");
    for (const query of queries) {
      const result = await kalshiAdapter.fetchMarkets({ query, limit: options.marketLimit });
      if (result.ok) {
        markets.push(...result.data);
      } else {
        errors.push(`kalshi:${query}: ${result.error.message}`);
      }
    }
  }

  if (options.includePolymarket) {
    providers.push("polymarket");
    for (const tag of POLYMARKET_TAGS) {
      const result = await fetchPolymarketEventsByTag(tag, options.marketLimit);
      if (result.ok) {
        markets.push(...result.data);
      } else {
        errors.push(`polymarket:${tag}: ${result.error.message}`);
      }
    }
  }

  return {
    providers,
    errors,
    markets: uniqueBy(markets, (market) => `${market.provider}:${market.providerEventId}`)
  };
}

function attachMarketLinks(market: MarketEvent, cities: City[]) {
  const linkedCities = linkMarketToCities(market, cities);
  const cityIds = linkedCities.map((city) => city.id);
  const countryCodes = linkedCities.map((city) => city.countryCode).filter((code): code is string => Boolean(code));
  const citySlugs = linkedCities.map((city) => city.slug);

  return {
    ...market,
    cityIds,
    countryCodes: [...new Set([...market.countryCodes, ...countryCodes])],
    raw: {
      ...market.raw,
      source: "real-api-sync",
      linkedCitySlugs: citySlugs
    }
  };
}

function marketRows(markets: MarketEvent[]) {
  return markets.map((market) => ({
    provider: market.provider,
    provider_event_id: market.providerEventId,
    title: market.title,
    description: market.description,
    category: market.category,
    tags: market.tags,
    city_ids: market.cityIds,
    country_codes: market.countryCodes,
    probability: market.probability,
    bid: market.bid,
    ask: market.ask,
    volume: market.volume,
    liquidity: market.liquidity,
    open_interest: market.openInterest,
    close_time: market.closeTime,
    resolution_source: market.resolutionSource,
    url: market.url,
    status: market.status,
    raw: market.raw
  }));
}

async function upsertMarkets(client: SyncClient, rows: Record<string, unknown>[]) {
  const records: MarketEvent[] = [];

  for (let index = 0; index < rows.length; index += MARKET_CHUNK_SIZE) {
    const chunk = rows.slice(index, index + MARKET_CHUNK_SIZE);
    const result = await client.from("market_events").upsert(chunk, { onConflict: "provider,provider_event_id" }).select("*");
    if (result.error) {
      throw new Error(result.error.message);
    }
    records.push(...(result.data ?? []).map((row) => mapMarketEvent(row)));
  }

  return records;
}

async function upsertMarketLinks(client: SyncClient, markets: MarketEvent[]) {
  const rows = markets.flatMap((market) =>
    market.cityIds.map((cityId) => ({
      city_id: cityId,
      market_event_id: market.id,
      relevance_score: 1,
      link_reason: "Matched by built-in real API sync"
    }))
  );

  if (rows.length === 0) return 0;

  const result = await client.from("city_market_links").upsert(rows, { onConflict: "city_id,market_event_id" });
  if (result.error) {
    throw new Error(result.error.message);
  }

  return rows.length;
}

async function upsertMarketTimeseries(client: SyncClient, markets: MarketEvent[]) {
  const timestamp = new Date().toISOString();
  const rows = markets
    .filter((market) => market.probability !== null || market.bid !== null || market.ask !== null)
    .map((market) => ({
      market_event_id: market.id,
      provider: market.provider,
      timestamp,
      probability: market.probability,
      bid: market.bid,
      ask: market.ask,
      volume: market.volume,
      liquidity: market.liquidity,
      raw: { source: "real-api-sync" }
    }));

  if (rows.length === 0) return 0;

  const result = await client.from("market_timeseries").upsert(rows, { onConflict: "market_event_id,timestamp" });
  if (result.error) {
    throw new Error(result.error.message);
  }

  return rows.length;
}

async function syncMarkets(client: SyncClient, cities: City[], options: ReturnType<typeof normalizeOptions>) {
  const fetched = await fetchMarketCandidates(options, cities);
  const linked = fetched.markets.filter(isWeatherMarket).map((market) => attachMarketLinks(market, cities)).filter((market) => market.cityIds.length > 0);
  const upserted = linked.length > 0 ? await upsertMarkets(client, marketRows(linked)) : [];
  const linkCount = await upsertMarketLinks(client, upserted);
  const timeseriesCount = await upsertMarketTimeseries(client, upserted);

  return {
    result: {
      providers: fetched.providers,
      recordsSeen: fetched.markets.length,
      recordsLinked: linkCount,
      recordsUpserted: upserted.length,
      timeseriesUpserted: timeseriesCount,
      errors: fetched.errors
    },
    markets: upserted
  };
}

async function syncSignals(client: SyncClient, cities: City[], forecast: ForecastPoint[], markets: MarketEvent[]) {
  const forecastByCity = new Map<string, ForecastPoint[]>();
  for (const point of forecast) {
    const current = forecastByCity.get(point.cityId) ?? [];
    current.push(point);
    forecastByCity.set(point.cityId, current);
  }

  const cityById = new Map(cities.map((city) => [city.id, city]));
  const signals: CombinedSignal[] = [];
  for (const market of markets) {
    for (const cityId of market.cityIds) {
      const city = cityById.get(cityId);
      if (!city) continue;
      signals.push(computeCombinedSignal({ city, market, forecast: forecastByCity.get(cityId) ?? [] }));
    }
  }

  const selectedCityIds = cities.map((city) => city.id);
  if (selectedCityIds.length > 0) {
    const deleteResult = await client.from("combined_signals").delete().in("city_id", selectedCityIds).contains("raw", { source: "real-api-sync" });
    if (deleteResult.error) {
      throw new Error(deleteResult.error.message);
    }
  }

  const rows = signals.map((signal) => ({
    city_id: signal.cityId,
    market_event_id: signal.marketEventId,
    forecast_variable: signal.forecastVariable,
    signal_type: signal.signalType,
    model_probability: signal.modelProbability,
    market_probability: signal.marketProbability,
    disagreement: signal.disagreement,
    raw_edge: signal.rawEdge ?? null,
    adjusted_edge: signal.adjustedEdge ?? null,
    confidence: signal.confidence ?? null,
    freshness_status: signal.freshnessStatus ?? "unknown",
    status: signal.status,
    explanation: signal.explanation,
    raw: { ...(signal.raw ?? {}), source: "real-api-sync" }
  }));

  if (rows.length > 0) {
    const result = await client.from("combined_signals").insert(rows);
    if (result.error) {
      throw new Error(result.error.message);
    }
  }

  return {
    recordsComputed: signals.length,
    recordsInserted: rows.length
  };
}

export async function syncRealApiData(client: SyncClient, options: RealApiSyncOptions = {}): Promise<RealApiSyncResult> {
  const normalized = normalizeOptions(options);
  const run = await client
    .from("ingestion_runs")
    .insert({ source: "real-api-sync", records_seen: 0, metadata: { options: normalized } })
    .select("id")
    .single();

  if (run.error) {
    throw new Error(run.error.message);
  }

  try {
    const citySync = await upsertCityCatalog(client);
    const selectedCities = citySync.cities.slice(0, normalized.cityLimit);
    const forecastSync = await syncForecast(client, selectedCities, normalized.forecastDays);
    const marketSync = await syncMarkets(client, selectedCities, normalized);
    const signalSync = await syncSignals(client, selectedCities, forecastSync.points, marketSync.markets);

    const result: RealApiSyncResult = {
      cities: {
        catalogUpserted: citySync.rowsUpserted,
        selected: selectedCities.length
      },
      forecast: forecastSync.result,
      markets: marketSync.result,
      signals: signalSync
    };

    await client
      .from("ingestion_runs")
      .update({
        finished_at: new Date().toISOString(),
        status: "complete",
        records_seen: result.forecast.recordsSeen + result.markets.recordsSeen,
        records_inserted: result.forecast.recordsUpserted + result.markets.recordsUpserted + result.signals.recordsInserted,
        records_updated: result.markets.timeseriesUpserted,
        metadata: { options: normalized, result }
      })
      .eq("id", run.data.id);

    return result;
  } catch (error) {
    await client
      .from("ingestion_runs")
      .update({
        finished_at: new Date().toISOString(),
        status: "failed",
        error: error instanceof Error ? error.message : String(error),
        metadata: { options: normalized }
      })
      .eq("id", run.data.id);

    throw error;
  }
}
