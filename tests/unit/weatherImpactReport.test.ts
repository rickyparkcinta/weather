import { describe, expect, it } from "vitest";
import { buildWeatherImpactReport } from "@/lib/signals/weatherImpactReport";
import type { ForecastPoint, MarketEvent } from "@/types/domain";

const cityId = "00000000-0000-4000-8000-000000000001";
const marketId = "30000000-0000-4000-8000-000000000001";
const runTime = "2026-06-07T00:00:00.000Z";

function forecastPoint(variable: string, value: number, unit: string): ForecastPoint {
  return {
    id: `${variable}-${value}`,
    cityId,
    provider: "fixture",
    model: "fixture-model",
    runTime,
    forecastTime: "2026-06-07T12:00:00.000Z",
    variable,
    value,
    unit,
    confidence: 0.8,
    raw: {}
  };
}

function market(overrides: Partial<MarketEvent> = {}): MarketEvent {
  return {
    id: marketId,
    provider: "fixture",
    providerEventId: "TOTAL-1",
    title: "Will the game total go over 42.5 points?",
    description: "Weather-linked total market.",
    category: "weather",
    tags: ["weather", "total", "over", "under"],
    cityIds: [cityId],
    countryCodes: ["US"],
    probability: 0.5,
    bid: 0.49,
    ask: 0.51,
    volume: 1000,
    liquidity: 1000,
    openInterest: null,
    closeTime: null,
    resolutionSource: "fixture",
    url: null,
    status: "active",
    raw: {},
    createdAt: runTime,
    updatedAt: runTime,
    ...overrides
  };
}

const baseForecast = [
  forecastPoint("temperature_2m", 45, "F"),
  forecastPoint("precipitation_probability", 20, "%"),
  forecastPoint("wind_speed_10m", 8, "mph")
];

describe("buildWeatherImpactReport", () => {
  it("strengthens under when wind and precipitation are high", () => {
    const report = buildWeatherImpactReport({
      market: market(),
      forecast: [
        forecastPoint("temperature_2m", 30, "F"),
        forecastPoint("precipitation_probability", 70, "%"),
        forecastPoint("wind_speed_10m", 22, "mph")
      ],
      computedAt: runTime
    });

    expect(report.recommendations[0]).toMatchObject({
      direction: "under",
      confidence: "strong"
    });
    expect(report.recommendations[0].score).toBeGreaterThan(report.recommendations[1].score);
  });

  it("penalizes over when wind is high", () => {
    const report = buildWeatherImpactReport({
      market: market(),
      forecast: [
        forecastPoint("temperature_2m", 60, "F"),
        forecastPoint("precipitation_probability", 10, "%"),
        forecastPoint("wind_speed_10m", 24, "mph")
      ],
      computedAt: runTime
    });

    const over = report.recommendations.find((item) => item.direction === "over");
    expect(over?.score).toBeLessThan(50);
  });

  it("marks invalid precipitation and humidity inputs unavailable", () => {
    const report = buildWeatherImpactReport({
      market: market(),
      forecast: [
        forecastPoint("temperature_2m", 60, "F"),
        forecastPoint("precipitation_probability", 140, "%"),
        forecastPoint("relative_humidity_2m", -1, "%"),
        forecastPoint("wind_speed_10m", 8, "mph")
      ],
      computedAt: runTime
    });

    expect(report.weatherSnapshot.precipitationProbability).toBeNull();
    expect(report.weatherSnapshot.humidity).toBeNull();
    expect(report.weatherSnapshot.unavailable).toEqual(expect.arrayContaining(["precipitation_probability", "humidity"]));
    expect(report.riskNotes.join(" ")).toContain("precipitation_probability input is unavailable");
  });

  it("ranks recommendations by score", () => {
    const report = buildWeatherImpactReport({ market: market(), forecast: baseForecast, computedAt: runTime });
    const scores = report.recommendations.map((item) => item.score);

    expect(scores).toEqual([...scores].sort((a, b) => b - a));
  });

  it("includes analytics-only disclaimer", () => {
    const report = buildWeatherImpactReport({ market: market(), forecast: baseForecast, computedAt: runTime });

    expect(report.disclaimer).toContain("Analytics and reporting only");
    expect(report.disclaimer).toContain("does not execute trades");
    expect(report.disclaimer).toContain("does not connect wallets");
  });

  it("does not expose bet execution, wallet, or trade submission fields", () => {
    const report = buildWeatherImpactReport({ market: market(), forecast: baseForecast, computedAt: runTime });
    const text = JSON.stringify(report).toLowerCase();

    expect(text).not.toContain("execute_bet");
    expect(text).not.toContain("wallet_address");
    expect(text).not.toContain("submit_trade");
    expect(Object.keys(report)).not.toEqual(expect.arrayContaining(["wallet", "trade", "betExecution"]));
  });
});
