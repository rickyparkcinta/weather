import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import {
  WEATHER_IMPACT_AGENT_DISCLAIMER,
  WeatherImpactAgentPanel
} from "@/components/signals/WeatherImpactAgentPanel";
import {
  getLatestWeatherAgentReportForSignal,
  getWeatherAgentReportStatusLabel,
  getWeatherAgentReportTone
} from "@/lib/signals/weatherAgentReports";
import type { CombinedSignal, WeatherAgentReport } from "@/types/domain";

const cityId = "00000000-0000-4000-8000-000000000001";
const marketEventId = "30000000-0000-4000-8000-000000000001";

function signal(overrides: Partial<CombinedSignal> = {}): CombinedSignal {
  return {
    id: "signal-1",
    cityId,
    marketEventId,
    forecastVariable: "precipitation_probability",
    signalType: "model_market_gap",
    modelProbability: 0.62,
    marketProbability: 0.5,
    disagreement: 0.12,
    rawEdge: 0.12,
    adjustedEdge: 0.08,
    confidence: 0.7,
    freshnessStatus: "fresh",
    status: "watch",
    explanation: "Fixture signal.",
    computedAt: "2026-06-07T00:00:00.000Z",
    raw: {},
    ...overrides
  };
}

function report(overrides: Partial<WeatherAgentReport> = {}): WeatherAgentReport {
  return {
    id: "report-1",
    cityId,
    marketEventId,
    reportType: "weather_impact",
    score: 68,
    confidence: "lean",
    status: "computed",
    weatherSnapshot: {
      temperature_f: 62,
      wind_mph: 14,
      precipitation_probability: 40,
      humidity_percent: 60,
      freshness_status: "fresh"
    },
    recommendations: [],
    rationale: ["Wind is elevated."],
    riskNotes: ["Forecast can move."],
    disclaimer: "stored disclaimer",
    modelVersion: "weatherbot-v1-ts",
    computedAt: "2026-06-07T00:00:00.000Z",
    raw: {},
    ...overrides
  };
}

describe("weather agent reports", () => {
  it("uses the newest matching report", () => {
    const older = report({ id: "older", computedAt: "2026-06-06T00:00:00.000Z" });
    const newer = report({ id: "newer", computedAt: "2026-06-07T00:00:00.000Z" });

    expect(getLatestWeatherAgentReportForSignal(signal(), [older, newer])?.id).toBe("newer");
  });

  it("ignores nonmatching city and market reports", () => {
    const ignoredCity = report({ id: "wrong-city", cityId: "other-city", computedAt: "2026-06-08T00:00:00.000Z" });
    const ignoredMarket = report({ id: "wrong-market", marketEventId: "other-market", computedAt: "2026-06-08T00:00:00.000Z" });
    const matching = report({ id: "matching", computedAt: "2026-06-07T00:00:00.000Z" });

    expect(getLatestWeatherAgentReportForSignal(signal(), [ignoredCity, ignoredMarket, matching])?.id).toBe("matching");
  });

  it("maps stale status correctly", () => {
    expect(getWeatherAgentReportStatusLabel("stale")).toBe("Stale");
    expect(getWeatherAgentReportTone("stale")).toBe("warning");
  });

  it("maps computed status correctly", () => {
    expect(getWeatherAgentReportStatusLabel("computed")).toBe("Computed");
    expect(getWeatherAgentReportTone("computed")).toBe("positive");
  });

  it("returns null and renders the no-report state when no report matches", () => {
    expect(getLatestWeatherAgentReportForSignal(signal({ marketEventId: null }), [report()])).toBeNull();

    const html = renderToStaticMarkup(createElement(WeatherImpactAgentPanel, { report: null }));
    expect(html).toContain("No weather-impact report yet.");
  });

  it("does not include forbidden CTA words in helper labels or component static copy", () => {
    const helperLabels = ["computed", "watch", "stale", "unavailable", "error"]
      .map(getWeatherAgentReportStatusLabel)
      .join(" ");
    const componentCopy = renderToStaticMarkup(
      createElement(WeatherImpactAgentPanel, { report: report() })
    ).replace(WEATHER_IMPACT_AGENT_DISCLAIMER, "");
    const text = `${helperLabels} ${componentCopy}`.toLowerCase();

    for (const phrase of ["place bet", "trade", "wager", "buy", "sell", "guaranteed edge", "guaranteed profit", "auto execute"]) {
      expect(text).not.toContain(phrase);
    }
  });
});
