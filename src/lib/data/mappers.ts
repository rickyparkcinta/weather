import type {
  City,
  CombinedSignal,
  ForecastPoint,
  MarketEvent,
  MarketTimeSeriesPoint,
  WeatherAgentReport
} from "@/types/domain";

type Row = Record<string, unknown>;

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

function record(value: unknown) {
  return value && typeof value === "object" && !Array.isArray(value) ? (value as Record<string, unknown>) : {};
}

function array(value: unknown) {
  return Array.isArray(value) ? value : [];
}

export function mapCity(row: Row): City {
  return {
    id: String(row.id),
    slug: String(row.slug),
    name: String(row.name),
    country: String(row.country),
    countryCode: text(row.country_code),
    region: text(row.region),
    lat: Number(row.lat),
    lon: Number(row.lon),
    timezone: text(row.timezone),
    population: numberOrNull(row.population),
    importanceScore: Number(row.importance_score ?? 0),
    createdAt: text(row.created_at) ?? undefined,
    updatedAt: text(row.updated_at) ?? undefined
  };
}

export function mapForecastPoint(row: Row): ForecastPoint {
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

export function mapMarketEvent(row: Row): MarketEvent {
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

export function mapMarketTimeSeriesPoint(row: Row): MarketTimeSeriesPoint {
  return {
    id: text(row.id) ?? undefined,
    marketEventId: String(row.market_event_id),
    provider: String(row.provider),
    timestamp: String(row.timestamp),
    probability: numberOrNull(row.probability),
    bid: numberOrNull(row.bid),
    ask: numberOrNull(row.ask),
    volume: numberOrNull(row.volume),
    liquidity: numberOrNull(row.liquidity),
    raw: record(row.raw)
  };
}

export function mapCombinedSignal(row: Row): CombinedSignal {
  const status = String(row.status ?? "insufficient_data");

  return {
    id: text(row.id) ?? undefined,
    cityId: String(row.city_id),
    marketEventId: text(row.market_event_id),
    forecastVariable: text(row.forecast_variable),
    signalType: text(row.signal_type),
    modelProbability: numberOrNull(row.model_probability),
    marketProbability: numberOrNull(row.market_probability),
    disagreement: numberOrNull(row.disagreement),
    status:
      status === "aligned" ||
      status === "watch" ||
      status === "divergent" ||
      status === "stale" ||
      status === "unavailable" ||
      status === "high_uncertainty" ||
      status === "avoid" ||
      status === "market_above_model" ||
      status === "model_above_market" ||
      status === "insufficient_data"
        ? status
        : "insufficient_data",
    rawEdge: numberOrNull(row.raw_edge),
    adjustedEdge: numberOrNull(row.adjusted_edge),
    confidence: numberOrNull(row.confidence),
    freshnessStatus:
      row.freshness_status === "fresh" ||
      row.freshness_status === "aging" ||
      row.freshness_status === "stale" ||
      row.freshness_status === "unknown"
        ? row.freshness_status
        : null,
    explanation: text(row.explanation),
    computedAt: text(row.computed_at) ?? undefined,
    raw: record(row.raw)
  };
}

export function mapWeatherAgentReport(row: Row): WeatherAgentReport {
  return {
    id: String(row.id),
    cityId: text(row.city_id),
    marketEventId: text(row.market_event_id),
    reportType: String(row.report_type ?? "weather_impact"),
    score: numberOrNull(row.score),
    confidence: text(row.confidence),
    status: String(row.status ?? "computed"),
    weatherSnapshot: record(row.weather_snapshot),
    recommendations: array(row.recommendations),
    rationale: stringArray(row.rationale),
    riskNotes: stringArray(row.risk_notes),
    disclaimer: String(row.disclaimer ?? ""),
    modelVersion: String(row.model_version ?? "weatherbot-v1-ts"),
    computedAt: text(row.computed_at),
    raw: record(row.raw)
  };
}
