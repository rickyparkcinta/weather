import { getDefaultCitySlug } from "@/lib/env";
import { mapCity, mapCombinedSignal, mapForecastPoint, mapMarketEvent, mapMarketTimeSeriesPoint, mapWeatherAgentReport } from "@/lib/data/mappers";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { City, DashboardData, MarketEvent } from "@/types/domain";

function requireLiveClient() {
  const client = getSupabaseServerClient();
  if (!client) {
    throw new Error(
      "Live data is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
    );
  }

  return client;
}

export async function listCities(): Promise<City[]> {
  const client = requireLiveClient();
  const { data, error } = await client.from("cities").select("*").order("importance_score", { ascending: false });
  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((row) => mapCity(row));
}

export async function getCityBySlug(slug: string): Promise<City | null> {
  const client = requireLiveClient();
  const { data, error } = await client.from("cities").select("*").eq("slug", slug).maybeSingle();
  if (error) {
    throw new Error(error.message);
  }

  return data ? mapCity(data) : null;
}

export async function listForecastPoints(input: {
  cityId?: string;
  variable?: string;
  from?: string;
  to?: string;
}) {
  const client = requireLiveClient();
  let query = client.from("forecast_points").select("*").order("forecast_time", { ascending: true });
  if (input.cityId) query = query.eq("city_id", input.cityId);
  if (input.variable) query = query.eq("variable", input.variable);
  if (input.from) query = query.gte("forecast_time", input.from);
  if (input.to) query = query.lte("forecast_time", input.to);

  const { data, error } = await query.limit(500);
  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((row) => mapForecastPoint(row));
}

export async function listMarkets(input: {
  cityId?: string;
  provider?: string;
  category?: string;
} = {}): Promise<MarketEvent[]> {
  const client = requireLiveClient();
  let query = client.from("market_events").select("*").order("volume", { ascending: false, nullsFirst: false });
  if (input.cityId) query = query.contains("city_ids", [input.cityId]);
  if (input.provider) query = query.eq("provider", input.provider);
  if (input.category) query = query.eq("category", input.category);

  const { data, error } = await query.limit(100);
  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((row) => mapMarketEvent(row));
}

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function getMarketById(id: string) {
  const client = requireLiveClient();

  // Look up by primary key only when the id is a valid UUID; otherwise treat it
  // as a provider event id. Interpolating arbitrary input into a PostgREST
  // `or()` filter string would allow filter injection and fails with a
  // Postgres type error for non-UUID ids.
  if (UUID_PATTERN.test(id)) {
    const { data, error } = await client.from("market_events").select("*").eq("id", id).maybeSingle();
    if (error) {
      throw new Error(error.message);
    }
    if (data) {
      return mapMarketEvent(data);
    }
  }

  const { data, error } = await client.from("market_events").select("*").eq("provider_event_id", id).limit(1);
  if (error) {
    throw new Error(error.message);
  }

  const row = data?.[0];
  return row ? mapMarketEvent(row) : null;
}

export async function getMarketHistory(id: string) {
  const market = await getMarketById(id);
  if (!market) {
    return [];
  }

  const client = requireLiveClient();
  const { data, error } = await client
    .from("market_timeseries")
    .select("*")
    .eq("market_event_id", market.id)
    .order("timestamp", { ascending: true })
    .limit(500);

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((row) => mapMarketTimeSeriesPoint(row));
}

export async function listCombinedSignals(cityId?: string) {
  const client = requireLiveClient();
  let query = client.from("combined_signals").select("*").order("computed_at", { ascending: false });
  if (cityId) query = query.eq("city_id", cityId);

  const { data, error } = await query.limit(100);
  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((row) => mapCombinedSignal(row));
}

export async function listWeatherAgentReports(input: {
  cityId?: string;
  marketEventId?: string;
  limit?: number;
} = {}) {
  const client = requireLiveClient();
  let query = client.from("weather_agent_reports").select("*").order("computed_at", { ascending: false });
  if (input.cityId) query = query.eq("city_id", input.cityId);
  if (input.marketEventId) query = query.eq("market_event_id", input.marketEventId);

  const { data, error } = await query.limit(input.limit ?? 200);
  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((row) => mapWeatherAgentReport(row));
}

export type DashboardDataResult =
  | { ok: true; data: DashboardData }
  | { ok: false; reason: "unconfigured" | "empty" | "read_failed"; message: string };

/**
 * Non-throwing wrapper around getDashboardData so dashboard pages can render
 * a clean setup/empty screen instead of an error boundary when the database
 * is unconfigured or has not been seeded yet.
 */
export async function loadDashboardData(preferredSlug?: string): Promise<DashboardDataResult> {
  if (!getSupabaseServerClient()) {
    return {
      ok: false,
      reason: "unconfigured",
      message: "The live database connection is not configured for this deployment."
    };
  }

  try {
    const cities = await listCities();
    if (cities.length === 0) {
      return {
        ok: false,
        reason: "empty",
        message: "The database is reachable but has no cities yet. Run the real API sync to populate it."
      };
    }
    return { ok: true, data: await getDashboardData(preferredSlug) };
  } catch (error) {
    return {
      ok: false,
      reason: "read_failed",
      message: error instanceof Error ? error.message : "Live data read failed."
    };
  }
}

export async function getDashboardData(preferredSlug?: string): Promise<DashboardData> {
  const cities = await listCities();
  const selectedCity =
    cities.find((city) => city.slug === (preferredSlug || getDefaultCitySlug())) ?? cities[0];

  if (!selectedCity) {
    throw new Error("No cities are available. Run the real API sync to populate the database.");
  }

  const [forecast, markets, signals, weatherAgentReports] = await Promise.all([
    listForecastPoints({ cityId: selectedCity.id }),
    listMarkets({ cityId: selectedCity.id }),
    listCombinedSignals(selectedCity.id),
    listWeatherAgentReports({ cityId: selectedCity.id, limit: 200 })
  ]);

  return {
    cities,
    selectedCity,
    forecast,
    markets,
    signals,
    weatherAgentReports,
    generatedAt: new Date().toISOString()
  };
}
