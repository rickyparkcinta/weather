import type { ForecastPoint, JsonRecord, MarketEvent } from "../../types/domain.ts";

export type PickDirection = "over" | "under" | "home" | "away";
export type ConfidenceBand = "avoid" | "watch" | "lean" | "strong";
export type MarketShape = "total" | "side";

export type WeatherSnapshotInput = {
  temperatureF: number | null;
  precipitationProbability: number | null;
  windMph: number | null;
  humidity: number | null;
  unavailable: string[];
  sourcePoints: Array<{
    variable: string;
    value: number;
    unit: string;
    forecastTime: string;
    runTime: string;
    provider: string;
    model: string;
  }>;
};

export type WeatherImpactRecommendation = {
  direction: PickDirection;
  score: number;
  confidence: ConfidenceBand;
  rationale: string[];
  riskNotes: string[];
};

export type WeatherImpactReport = {
  reportType: "weather_impact";
  score: number;
  confidence: ConfidenceBand;
  status: "computed" | "unavailable";
  weatherSnapshot: WeatherSnapshotInput;
  recommendations: WeatherImpactRecommendation[];
  rationale: string[];
  riskNotes: string[];
  disclaimer: string;
  modelVersion: "weatherbot-v1-ts";
  computedAt: string;
  raw: JsonRecord;
};

const MODEL_VERSION = "weatherbot-v1-ts" as const;
const REPORT_TYPE = "weather_impact" as const;
const DISCLAIMER =
  "Analytics and reporting only. This report is not financial advice, does not execute trades, does not connect wallets, and must not be used to automate wagering.";

function clampScore(score: number) {
  return Math.max(0, Math.min(100, Math.round(score)));
}

function confidenceBand(score: number): ConfidenceBand {
  if (score >= 75) return "strong";
  if (score >= 62) return "lean";
  if (score >= 45) return "watch";
  return "avoid";
}

function finiteNumber(value: unknown) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

function latestPoint(points: ForecastPoint[], names: string[]) {
  const normalized = new Set(names.map((name) => name.toLowerCase()));
  return [...points]
    .filter((point) => normalized.has(point.variable.toLowerCase()))
    .sort((a, b) => new Date(b.forecastTime).getTime() - new Date(a.forecastTime).getTime())[0] ?? null;
}

function toFahrenheit(value: number, unit: string) {
  const normalized = unit.toLowerCase();
  if (normalized === "c" || normalized.includes("celsius") || normalized === "°c") return (value * 9) / 5 + 32;
  return value;
}

function toMph(value: number, unit: string) {
  const normalized = unit.toLowerCase();
  if (normalized.includes("km/h") || normalized.includes("kph")) return value * 0.621371;
  if (normalized.includes("m/s")) return value * 2.23694;
  if (normalized.includes("knot")) return value * 1.15078;
  return value;
}

function toPercent(value: number, unit: string) {
  const normalized = unit.toLowerCase();
  if (normalized.includes("probability") || normalized === "ratio" || normalized === "fraction") {
    return value <= 1 ? value * 100 : value;
  }
  return value <= 1 ? value * 100 : value;
}

function validateRange(value: number | null, min: number, max: number) {
  if (value === null || value < min || value > max) return null;
  return value;
}

export function deriveWeatherSnapshot(forecast: ForecastPoint[]): WeatherSnapshotInput {
  const temperature = latestPoint(forecast, ["temperature_2m", "temperature", "temp"]);
  const precipitation = latestPoint(forecast, ["precipitation_probability", "precip_probability", "rain_probability"]);
  const wind = latestPoint(forecast, ["wind_speed_10m", "wind_speed", "wind"]);
  const humidity = latestPoint(forecast, ["relative_humidity_2m", "humidity"]);

  const unavailable: string[] = [];
  const temperatureF = validateRange(
    temperature ? toFahrenheit(temperature.value, temperature.unit) : null,
    -100,
    160
  );
  const precipitationProbability = validateRange(
    precipitation ? toPercent(precipitation.value, precipitation.unit) : null,
    0,
    100
  );
  const windMph = validateRange(wind ? toMph(wind.value, wind.unit) : null, 0, 250);
  const humidityPercent = validateRange(humidity ? toPercent(humidity.value, humidity.unit) : null, 0, 100);

  if (temperature && temperatureF === null) unavailable.push("temperature");
  if (precipitation && precipitationProbability === null) unavailable.push("precipitation_probability");
  if (wind && windMph === null) unavailable.push("wind");
  if (humidity && humidityPercent === null) unavailable.push("humidity");
  if (!temperature) unavailable.push("temperature");
  if (!precipitation) unavailable.push("precipitation_probability");
  if (!wind) unavailable.push("wind");

  return {
    temperatureF: temperatureF === null ? null : Number(temperatureF.toFixed(1)),
    precipitationProbability: precipitationProbability === null ? null : Number(precipitationProbability.toFixed(1)),
    windMph: windMph === null ? null : Number(windMph.toFixed(1)),
    humidity: humidityPercent === null ? null : Number(humidityPercent.toFixed(1)),
    unavailable: [...new Set(unavailable)],
    sourcePoints: [temperature, precipitation, wind, humidity]
      .filter((point): point is ForecastPoint => Boolean(point))
      .map((point) => ({
        variable: point.variable,
        value: point.value,
        unit: point.unit,
        forecastTime: point.forecastTime,
        runTime: point.runTime,
        provider: point.provider,
        model: point.model
      }))
  };
}

function marketShape(market: MarketEvent): MarketShape {
  const text = `${market.title} ${market.category ?? ""} ${market.tags.join(" ")}`.toLowerCase();
  if (/\b(over|under|total|points|runs|goals|score)\b/.test(text)) return "total";
  return "side";
}

function americanOddsFromProbability(probability: number | null) {
  if (probability === null || probability <= 0 || probability >= 1) return null;
  if (probability >= 0.5) return -Math.round((probability / (1 - probability)) * 100);
  return Math.round(((1 - probability) / probability) * 100);
}

function consensusPrice(market: MarketEvent) {
  const raw = market.raw ?? {};
  const explicit = finiteNumber(raw.consensus_price ?? raw.consensusPrice ?? raw.price ?? raw.yes_price ?? raw.yesPrice);
  return explicit ?? americanOddsFromProbability(market.probability);
}

function applyWeatherRules(direction: PickDirection, shape: MarketShape, snapshot: WeatherSnapshotInput) {
  let score = 50;
  const rationale: string[] = [];
  const riskNotes: string[] = [];

  if (shape === "total") {
    if (typeof snapshot.windMph === "number" && snapshot.windMph >= 20) {
      score += direction === "under" ? 16 : -16;
      rationale.push("Wind at or above 20 mph materially favors lower totals.");
    } else if (typeof snapshot.windMph === "number" && snapshot.windMph >= 12) {
      score += direction === "under" ? 7 : -7;
      rationale.push("Wind at or above 12 mph modestly favors lower totals.");
    }

    if (typeof snapshot.precipitationProbability === "number" && snapshot.precipitationProbability >= 65) {
      score += direction === "under" ? 10 : -10;
      rationale.push("Precipitation probability at or above 65% supports lower totals.");
    } else if (typeof snapshot.precipitationProbability === "number" && snapshot.precipitationProbability >= 35) {
      riskNotes.push("Precipitation probability is elevated enough to keep this in watch mode.");
    }

    if (typeof snapshot.temperatureF === "number" && snapshot.temperatureF <= 32) {
      score += direction === "under" ? 5 : -5;
      rationale.push("Freezing temperatures can suppress total scoring conditions.");
    }

    if (typeof snapshot.temperatureF === "number" && snapshot.temperatureF >= 85 && direction === "over") {
      score += 3;
      rationale.push("Warm temperatures add a small over-supporting factor.");
    }
  } else {
    riskNotes.push("Weather signal is weaker for side markets than totals.");
    if (
      (typeof snapshot.windMph === "number" && snapshot.windMph >= 20) ||
      (typeof snapshot.precipitationProbability === "number" && snapshot.precipitationProbability >= 60)
    ) {
      score += 4;
      rationale.push("Severe conditions can increase variance.");
    }
  }

  for (const field of snapshot.unavailable) {
    riskNotes.push(`${field} input is unavailable or outside accepted range.`);
  }

  return { score, rationale, riskNotes };
}

function applyPriceRule(score: number, price: number | null, rationale: string[], riskNotes: string[]) {
  if (price === null) {
    riskNotes.push("Consensus price is unavailable.");
    return score;
  }

  if (price >= -115 && price <= 105) {
    rationale.push("Consensus price sits in the balanced -115 to +105 range.");
    return score + 4;
  }
  if (price < -130) {
    riskNotes.push("Consensus price is below -130, reducing report strength.");
    return score - 8;
  }
  if (price > 130) {
    riskNotes.push("Consensus price is above +130, reducing report strength.");
    return score - 3;
  }
  return score;
}

function rankedDirections(shape: MarketShape): PickDirection[] {
  return shape === "total" ? ["under", "over"] : ["home", "away"];
}

export function buildWeatherImpactReport(input: {
  market: MarketEvent;
  forecast: ForecastPoint[];
  computedAt?: string;
}): WeatherImpactReport {
  const computedAt = input.computedAt ?? new Date().toISOString();
  const snapshot = deriveWeatherSnapshot(input.forecast);
  const shape = marketShape(input.market);
  const price = consensusPrice(input.market);

  const recommendations = rankedDirections(shape)
    .map((direction) => {
      const weather = applyWeatherRules(direction, shape, snapshot);
      const score = clampScore(applyPriceRule(weather.score, price, weather.rationale, weather.riskNotes));
      return {
        direction,
        score,
        confidence: confidenceBand(score),
        rationale: weather.rationale,
        riskNotes: [...new Set(weather.riskNotes)]
      };
    })
    .sort((a, b) => b.score - a.score);

  const top = recommendations[0];
  const status = snapshot.unavailable.includes("temperature") &&
    snapshot.unavailable.includes("precipitation_probability") &&
    snapshot.unavailable.includes("wind")
    ? "unavailable"
    : "computed";

  return {
    reportType: REPORT_TYPE,
    score: top?.score ?? 0,
    confidence: top?.confidence ?? "avoid",
    status,
    weatherSnapshot: snapshot,
    recommendations,
    rationale: [...new Set(recommendations.flatMap((item) => item.rationale))],
    riskNotes: [...new Set(recommendations.flatMap((item) => item.riskNotes))],
    disclaimer: DISCLAIMER,
    modelVersion: MODEL_VERSION,
    computedAt,
    raw: {
      marketShape: shape,
      consensusPrice: price,
      source: "HeritageInnovation/weatherbot TypeScript port"
    }
  };
}
