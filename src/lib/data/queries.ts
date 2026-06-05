import {
  demoCities,
  demoForecast,
  demoMarkets,
  demoSignals,
  demoTimeseries,
  getDemoCity
} from "@/lib/demo-data";
import { getDefaultCitySlug, isDemoModeEnabled } from "@/lib/env";
import { mapCity, mapCombinedSignal, mapForecastPoint, mapMarketEvent, mapMarketTimeSeriesPoint } from "@/lib/data/mappers";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { City, DashboardData, MarketEvent } from "@/types/domain";

function fallbackCity(slug?: string) {
  return getDemoCity(slug || getDefaultCitySlug());
}

export function usingDemoData() {
  return isDemoModeEnabled() || !getSupabaseServerClient();
}

export async function listCities(): Promise<City[]> {
  if (usingDemoData()) {
    return demoCities;
  }

  const client = getSupabaseServerClient();
  if (!client) {
    return demoCities;
  }

  const { data, error } = await client.from("cities").select("*").order("importance_score", { ascending: false });
  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((row) => mapCity(row));
}

export async function getCityBySlug(slug: string): Promise<City | null> {
  if (usingDemoData()) {
    return demoCities.find((city) => city.slug === slug) ?? null;
  }

  const client = getSupabaseServerClient();
  if (!client) {
    return demoCities.find((city) => city.slug === slug) ?? null;
  }

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
  if (usingDemoData()) {
    return demoForecast
      .filter((point) => !input.cityId || point.cityId === input.cityId)
      .filter((point) => !input.variable || point.variable === input.variable)
      .filter((point) => !input.from || point.forecastTime >= input.from)
      .filter((point) => !input.to || point.forecastTime <= input.to);
  }

  const client = getSupabaseServerClient();
  if (!client) {
    return [];
  }

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
  if (usingDemoData()) {
    return demoMarkets
      .filter((market) => !input.cityId || market.cityIds.includes(input.cityId))
      .filter((market) => !input.provider || market.provider === input.provider)
      .filter((market) => !input.category || market.category === input.category);
  }

  const client = getSupabaseServerClient();
  if (!client) {
    return [];
  }

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

export async function getMarketById(id: string) {
  if (usingDemoData()) {
    return demoMarkets.find((market) => market.id === id || market.providerEventId === id) ?? null;
  }

  const client = getSupabaseServerClient();
  if (!client) {
    return null;
  }

  const { data, error } = await client
    .from("market_events")
    .select("*")
    .or(`id.eq.${id},provider_event_id.eq.${id}`)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data ? mapMarketEvent(data) : null;
}

export async function getMarketHistory(id: string) {
  const market = await getMarketById(id);
  if (!market) {
    return [];
  }

  if (usingDemoData()) {
    return demoTimeseries.filter((point) => point.marketEventId === market.id);
  }

  const client = getSupabaseServerClient();
  if (!client) {
    return [];
  }

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
  if (usingDemoData()) {
    return demoSignals.filter((signal) => !cityId || signal.cityId === cityId);
  }

  const client = getSupabaseServerClient();
  if (!client) {
    return [];
  }

  let query = client.from("combined_signals").select("*").order("computed_at", { ascending: false });
  if (cityId) query = query.eq("city_id", cityId);

  const { data, error } = await query.limit(100);
  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((row) => mapCombinedSignal(row));
}

export async function getDashboardData(preferredSlug?: string): Promise<DashboardData> {
  const cities = await listCities();
  const selectedCity =
    cities.find((city) => city.slug === (preferredSlug || getDefaultCitySlug())) ??
    cities[0] ??
    fallbackCity(preferredSlug);

  const [forecast, markets, signals] = await Promise.all([
    listForecastPoints({ cityId: selectedCity.id }),
    listMarkets({ cityId: selectedCity.id }),
    listCombinedSignals(selectedCity.id)
  ]);

  return {
    cities,
    selectedCity,
    forecast,
    markets,
    signals,
    demoMode: usingDemoData(),
    generatedAt: new Date().toISOString()
  };
}
