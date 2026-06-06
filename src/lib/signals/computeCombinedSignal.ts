import type { City, CombinedSignal, ForecastPoint, MarketEvent } from "@/types/domain";

const WEATHER_KEYWORDS = [
  "rain",
  "precipitation",
  "snow",
  "temperature",
  "heat",
  "cold",
  "storm",
  "hurricane",
  "typhoon",
  "wind",
  "air quality"
];

function clampProbability(value: number) {
  return Math.max(0, Math.min(1, value));
}

function rounded(value: number) {
  return Number(value.toFixed(3));
}

function freshnessStatus(timestamps: string[]) {
  const latest = timestamps
    .map((timestamp) => new Date(timestamp).getTime())
    .filter((value) => Number.isFinite(value))
    .sort((a, b) => b - a)[0];

  if (!latest) return "unknown" as const;

  const ageHours = (Date.now() - latest) / (1000 * 60 * 60);
  if (ageHours <= 6) return "fresh" as const;
  if (ageHours <= 24) return "aging" as const;
  return "stale" as const;
}

function confidenceScore(forecast: ForecastPoint[], freshness: ReturnType<typeof freshnessStatus>) {
  const confidenceValues = forecast
    .map((point) => point.confidence)
    .filter((value): value is number => typeof value === "number" && Number.isFinite(value));
  const base = confidenceValues.length > 0
    ? confidenceValues.reduce((sum, value) => sum + value, 0) / confidenceValues.length
    : 0.55;
  const freshnessPenalty = freshness === "stale" ? 0.25 : freshness === "aging" ? 0.1 : freshness === "unknown" ? 0.15 : 0;
  return rounded(clampProbability(base - freshnessPenalty));
}

function findWeatherVariable(market: MarketEvent) {
  const haystack = `${market.title} ${market.category ?? ""} ${market.tags.join(" ")}`.toLowerCase();

  if (haystack.includes("rain") || haystack.includes("precipitation")) return "precipitation_probability";
  if (haystack.includes("snow")) return "snow_probability";
  if (haystack.includes("temperature") || haystack.includes("heat") || haystack.includes("cold")) return "temperature_2m";
  if (haystack.includes("storm") || haystack.includes("hurricane") || haystack.includes("typhoon") || haystack.includes("wind")) return "wind_speed_10m";
  if (haystack.includes("air quality")) return "air_quality_index";

  return null;
}

function parseTemperatureThreshold(title: string) {
  const fahrenheit = title.match(/(\d{2,3})\s?f\b/i);
  if (fahrenheit) {
    return ((Number(fahrenheit[1]) - 32) * 5) / 9;
  }

  const celsius = title.match(/(\d{1,2})\s?(?:c|°c|degrees celsius)\b/i);
  return celsius ? Number(celsius[1]) : null;
}

function deriveModelProbability(market: MarketEvent, forecast: ForecastPoint[]) {
  const variable = findWeatherVariable(market);
  if (!variable) {
    return { variable: null, probability: null };
  }

  const points = forecast.filter((point) => point.variable === variable);
  if (points.length === 0) {
    return { variable, probability: null };
  }

  const average = points.reduce((sum, point) => sum + point.value, 0) / points.length;

  if (variable === "precipitation_probability" || variable === "snow_probability") {
    return { variable, probability: clampProbability(average > 1 ? average / 100 : average) };
  }

  if (variable === "temperature_2m") {
    const threshold = parseTemperatureThreshold(market.title);
    if (threshold === null) {
      return { variable, probability: null };
    }
    return { variable, probability: clampProbability(0.5 + (average - threshold) / 18) };
  }

  if (variable === "wind_speed_10m") {
    const threshold = market.title.toLowerCase().includes("typhoon") || market.title.toLowerCase().includes("hurricane") ? 60 : 35;
    return { variable, probability: clampProbability(average / threshold) };
  }

  if (variable === "air_quality_index") {
    return { variable, probability: clampProbability((average - 50) / 100) };
  }

  return { variable, probability: null };
}

export function computeCombinedSignal(input: {
  city: City;
  market: MarketEvent;
  forecast: ForecastPoint[];
}): CombinedSignal {
  const text = `${input.market.title} ${input.market.category ?? ""} ${input.market.tags.join(" ")}`.toLowerCase();
  const looksWeatherRelated = WEATHER_KEYWORDS.some((keyword) => text.includes(keyword));

  if (!looksWeatherRelated || input.market.probability === null) {
    return {
      cityId: input.city.id,
      marketEventId: input.market.id,
      forecastVariable: null,
      signalType: "weather_market_disagreement",
      modelProbability: null,
      marketProbability: input.market.probability,
      disagreement: null,
      rawEdge: null,
      adjustedEdge: null,
      confidence: 0,
      freshnessStatus: "unknown",
      status: "insufficient_data",
      explanation: "Insufficient weather-specific model signal. Informational only, not financial advice.",
      raw: { citySlug: input.city.slug }
    };
  }

  const model = deriveModelProbability(input.market, input.forecast);
  if (model.probability === null) {
    const freshness = freshnessStatus(input.forecast.map((point) => point.createdAt ?? point.runTime));
    return {
      cityId: input.city.id,
      marketEventId: input.market.id,
      forecastVariable: model.variable,
      signalType: "weather_market_disagreement",
      modelProbability: null,
      marketProbability: input.market.probability,
      disagreement: null,
      rawEdge: null,
      adjustedEdge: null,
      confidence: confidenceScore(input.forecast, freshness),
      freshnessStatus: freshness,
      status: "insufficient_data",
      explanation: "The market appears weather-related, but no reliable model-probability proxy could be derived. Informational only, not financial advice.",
      raw: { citySlug: input.city.slug }
    };
  }

  const freshness = freshnessStatus([
    ...input.forecast.map((point) => point.createdAt ?? point.runTime),
    input.market.updatedAt ?? input.market.createdAt ?? input.market.closeTime ?? ""
  ]);
  const confidence = confidenceScore(input.forecast, freshness);
  const rawEdge = model.probability - input.market.probability;
  const disagreement = Math.abs(rawEdge);
  const status =
    disagreement < 0.1
      ? "aligned"
      : model.probability > input.market.probability
        ? "model_above_market"
        : "market_above_model";

  return {
    cityId: input.city.id,
    marketEventId: input.market.id,
    forecastVariable: model.variable,
    signalType: "weather_market_disagreement",
    modelProbability: rounded(model.probability),
    marketProbability: input.market.probability,
    disagreement: rounded(disagreement),
    rawEdge: rounded(rawEdge),
    adjustedEdge: rounded(rawEdge * confidence),
    confidence,
    freshnessStatus: freshness,
    status,
    explanation: "Forecast-model proxy and market-implied probability were compared with confidence and freshness context. Informational only, not financial advice.",
    computedAt: new Date().toISOString(),
    raw: { citySlug: input.city.slug }
  };
}
