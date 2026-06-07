import type { SupabaseClient } from "@supabase/supabase-js";
import { buildWeatherImpactReport, type WeatherImpactReport } from "../signals/weatherImpactReport.ts";
import type { ForecastPoint, JsonRecord, MarketEvent } from "../../types/domain.ts";

type Row = Record<string, unknown>;

export type WeatherImpactAgentOptions = {
  cityId?: string;
  marketEventId?: string;
  limit?: number;
};

export type WeatherImpactAgentResult = {
  scannedLinks: number;
  reportsComputed: number;
  reportsInserted: number;
  combinedSignalsUpdated: number;
  errors: Array<{ cityId: string; marketEventId: string; message: string }>;
};

function text(value: unknown) {
  return typeof value === "string" ? value : null;
}

function numberOrNull(value: unknown) {
  if (typeof value === "number") return value;
  if (typeof value === "string") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

function stringArray(value: unknown) {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
}

function record(value: unknown): JsonRecord {
  return value && typeof value === "object" && !Array.isArray(value) ? (value as JsonRecord) : {};
}

function mapForecastPoint(row: Row): ForecastPoint {
  return {
    id: String(row.id),
    cityId: String(row.city_id),
    forecastRunId: text(row.forecast_run_id),
    provider: String(row.provider),
    model: String(row.model),
    runTime: String(row.run_time),
    forecastTime: String(row.forecast_time),
    variable: String(row.variable),
    value: Number(row.value),
    unit: String(row.unit),
    lat: numberOrNull(row.lat),
    lon: numberOrNull(row.lon),
    confidence: numberOrNull(row.confidence),
    raw: record(row.raw),
    createdAt: text(row.created_at) ?? undefined
  };
}

function mapMarketEvent(row: Row): MarketEvent {
  return {
    id: String(row.id),
    provider: String(row.provider),
    providerEventId: String(row.provider_event_id),
    title: String(row.title),
    description: text(row.description),
    category: text(row.category),
    tags: stringArray(row.tags),
    cityIds: stringArray(row.city_ids),
    countryCodes: stringArray(row.country_codes),
    probability: numberOrNull(row.probability),
    bid: numberOrNull(row.bid),
    ask: numberOrNull(row.ask),
    volume: numberOrNull(row.volume),
    liquidity: numberOrNull(row.liquidity),
    openInterest: numberOrNull(row.open_interest),
    closeTime: text(row.close_time),
    resolutionSource: text(row.resolution_source),
    url: text(row.url),
    status: text(row.status),
    raw: record(row.raw),
    createdAt: text(row.created_at) ?? undefined,
    updatedAt: text(row.updated_at) ?? undefined
  };
}

async function loadMarkets(client: SupabaseClient, options: WeatherImpactAgentOptions) {
  let query = client.from("market_events").select("*").order("updated_at", { ascending: false });
  if (options.marketEventId) query = query.eq("id", options.marketEventId);
  const { data, error } = await query.limit(options.limit ?? 500);
  if (error) throw new Error(error.message);
  return new Map((data ?? []).map((row) => [String(row.id), mapMarketEvent(row as Row)]));
}

async function loadLinks(client: SupabaseClient, options: WeatherImpactAgentOptions) {
  let query = client.from("city_market_links").select("city_id, market_event_id").order("created_at", { ascending: false });
  if (options.cityId) query = query.eq("city_id", options.cityId);
  if (options.marketEventId) query = query.eq("market_event_id", options.marketEventId);
  const { data, error } = await query.limit(options.limit ?? 500);
  if (error) throw new Error(error.message);
  return (data ?? []).map((row) => ({
    cityId: String(row.city_id),
    marketEventId: String(row.market_event_id)
  }));
}

async function loadLatestForecast(client: SupabaseClient, cityId: string) {
  const { data, error } = await client
    .from("forecast_points")
    .select("*")
    .eq("city_id", cityId)
    .order("run_time", { ascending: false })
    .order("forecast_time", { ascending: false })
    .limit(200);

  if (error) throw new Error(error.message);
  return (data ?? []).map((row) => mapForecastPoint(row as Row));
}

function rowFromReport(cityId: string, marketEventId: string, report: WeatherImpactReport) {
  return {
    city_id: cityId,
    market_event_id: marketEventId,
    report_type: report.reportType,
    score: report.score,
    confidence: report.confidence,
    status: report.status,
    weather_snapshot: report.weatherSnapshot,
    recommendations: report.recommendations,
    rationale: report.rationale,
    risk_notes: report.riskNotes,
    disclaimer: report.disclaimer,
    model_version: report.modelVersion,
    computed_at: report.computedAt,
    raw: report.raw
  };
}

function compactReport(reportId: string | null, report: WeatherImpactReport) {
  return {
    id: reportId,
    score: report.score,
    confidence: report.confidence,
    status: report.status,
    topRecommendation: report.recommendations[0] ?? null,
    weatherSnapshot: {
      temperatureF: report.weatherSnapshot.temperatureF,
      precipitationProbability: report.weatherSnapshot.precipitationProbability,
      windMph: report.weatherSnapshot.windMph,
      unavailable: report.weatherSnapshot.unavailable
    },
    computedAt: report.computedAt,
    modelVersion: report.modelVersion,
    disclaimer: report.disclaimer
  };
}

async function insertReport(client: SupabaseClient, cityId: string, marketEventId: string, report: WeatherImpactReport) {
  const { data, error } = await client
    .from("weather_agent_reports")
    .insert(rowFromReport(cityId, marketEventId, report))
    .select("id")
    .maybeSingle();

  if (error) throw new Error(error.message);
  return text((data as Row | null)?.id);
}

async function updateCombinedSignalRaw(
  client: SupabaseClient,
  cityId: string,
  marketEventId: string,
  reportId: string | null,
  report: WeatherImpactReport
) {
  const existing = await client
    .from("combined_signals")
    .select("id, raw")
    .eq("city_id", cityId)
    .eq("market_event_id", marketEventId)
    .order("computed_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (existing.error) throw new Error(existing.error.message);
  if (!existing.data) return false;

  const raw = {
    ...record((existing.data as Row).raw),
    weatherImpactReport: compactReport(reportId, report)
  };
  const update = await client.from("combined_signals").update({ raw }).eq("id", String((existing.data as Row).id));
  if (update.error) throw new Error(update.error.message);
  return true;
}

export async function runWeatherImpactAgent(
  client: SupabaseClient,
  options: WeatherImpactAgentOptions = {}
): Promise<WeatherImpactAgentResult> {
  const [markets, links] = await Promise.all([loadMarkets(client, options), loadLinks(client, options)]);
  const result: WeatherImpactAgentResult = {
    scannedLinks: links.length,
    reportsComputed: 0,
    reportsInserted: 0,
    combinedSignalsUpdated: 0,
    errors: []
  };

  const forecastByCity = new Map<string, ForecastPoint[]>();

  for (const link of links) {
    const market = markets.get(link.marketEventId);
    if (!market) continue;

    try {
      let forecast = forecastByCity.get(link.cityId);
      if (!forecast) {
        forecast = await loadLatestForecast(client, link.cityId);
        forecastByCity.set(link.cityId, forecast);
      }

      const report = buildWeatherImpactReport({ market, forecast });
      result.reportsComputed += 1;
      const reportId = await insertReport(client, link.cityId, link.marketEventId, report);
      result.reportsInserted += 1;
      const updatedSignal = await updateCombinedSignalRaw(client, link.cityId, link.marketEventId, reportId, report);
      if (updatedSignal) result.combinedSignalsUpdated += 1;
    } catch (error) {
      result.errors.push({
        cityId: link.cityId,
        marketEventId: link.marketEventId,
        message: error instanceof Error ? error.message : String(error)
      });
    }
  }

  return result;
}
