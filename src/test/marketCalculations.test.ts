import { describe, expect, it } from "vitest";
import {
  calculateAdjustedEdge,
  calculateEdge,
  calculateNetEdge,
  DEFAULT_MARKET_FILTERS,
  enrichEvent,
  enrichEvents,
  filterEvents,
  formatEdge,
  formatProbability,
  getSignalLabel,
  sortEvents,
  summarizeEvents
} from "@/lib/markets/calculations";
import { buildMockCityMarketEvents } from "@/lib/markets/mock-data";
import type { CityMarketEvent, SignalLabel } from "@/lib/markets/types";

const NOW = new Date("2026-06-11T12:00:00.000Z");

function baseEvent(overrides: Partial<CityMarketEvent> = {}): CityMarketEvent {
  return {
    id: "test-event",
    city: "Seoul",
    country: "South Korea",
    countryCode: "KR",
    lat: 37.5665,
    lon: 126.978,
    eventTitle: "Will rainfall exceed 10mm tomorrow?",
    eventCategory: "rain",
    eventWindow: "Tomorrow 00:00–23:59 KST",
    resolutionRule: "Demo rule",
    marketProbability: 0.58,
    aiProbability: 0.72,
    confidence: 0.65,
    volatility: 0.2,
    modelDisagreement: 0.15,
    modelTrend: "Rising",
    forecastModels: ["ECMWF IFS"],
    updatedAt: NOW.toISOString(),
    ...overrides
  };
}

describe("edge calculations", () => {
  it("computes raw edge as ai minus market probability", () => {
    expect(calculateEdge(0.72, 0.58)).toBeCloseTo(0.14);
    expect(calculateEdge(0.38, 0.52)).toBeCloseTo(-0.14);
  });

  it("computes confidence-adjusted edge", () => {
    expect(calculateAdjustedEdge(0.14, 0.65)).toBeCloseTo(0.091);
    expect(calculateAdjustedEdge(-0.1, 0.5)).toBeCloseTo(-0.05);
  });

  it("shrinks net edge toward zero for both directions", () => {
    expect(calculateNetEdge(0.1, { fees: 0.01, slippage: 0.01, riskBuffer: 0.005 })).toBeCloseTo(0.075);
    expect(calculateNetEdge(-0.1, { fees: 0.01, slippage: 0.01, riskBuffer: 0.005 })).toBeCloseTo(-0.075);
  });

  it("never lets costs flip the net edge sign", () => {
    expect(calculateNetEdge(0.02, { fees: 0.02, slippage: 0.02, riskBuffer: 0.01 })).toBe(0);
    expect(calculateNetEdge(-0.02, { fees: 0.02, slippage: 0.02, riskBuffer: 0.01 })).toBe(0);
  });
});

describe("getSignalLabel", () => {
  it("marks low-confidence events as Avoid regardless of edge", () => {
    expect(getSignalLabel(0.2, 0.34)).toBe("Avoid");
    expect(getSignalLabel(-0.2, 0.1)).toBe("Avoid");
  });

  it("classifies long and short thresholds", () => {
    expect(getSignalLabel(0.12, 0.6)).toBe("Strong Long");
    expect(getSignalLabel(0.119, 0.6)).toBe("Weak Long");
    expect(getSignalLabel(0.04, 0.6)).toBe("Weak Long");
    expect(getSignalLabel(0.039, 0.6)).toBe("Neutral");
    expect(getSignalLabel(-0.039, 0.6)).toBe("Neutral");
    expect(getSignalLabel(-0.04, 0.6)).toBe("Weak Short");
    expect(getSignalLabel(-0.119, 0.6)).toBe("Weak Short");
    expect(getSignalLabel(-0.12, 0.6)).toBe("Strong Short");
  });
});

describe("enrichEvent", () => {
  it("derives edge, adjusted edge, net edge, and signal", () => {
    const enriched = enrichEvent(baseEvent());
    expect(enriched.edge).toBeCloseTo(0.14);
    expect(enriched.adjustedEdge).toBeCloseTo(0.091);
    expect(enriched.netEdge).toBeCloseTo(0.066);
    expect(enriched.signal).toBe("Strong Long");
  });
});

describe("formatters", () => {
  it("formats probabilities as whole percentages", () => {
    expect(formatProbability(0.58)).toBe("58%");
    expect(formatProbability(0.005)).toBe("1%");
  });

  it("formats edge in signed points", () => {
    expect(formatEdge(0.14)).toBe("+14 pts");
    expect(formatEdge(-0.065)).toBe("-6.5 pts");
    expect(formatEdge(0)).toBe("0 pts");
  });
});

describe("filterEvents", () => {
  const events = enrichEvents([
    baseEvent(),
    baseEvent({
      id: "london-wind",
      city: "London",
      country: "United Kingdom",
      countryCode: "GB",
      eventCategory: "wind",
      marketProbability: 0.52,
      aiProbability: 0.38,
      confidence: 0.71
    }),
    baseEvent({ id: "low-confidence", city: "Toronto", countryCode: "CA", eventCategory: "snow", confidence: 0.2 })
  ]);

  it("matches search against city and title", () => {
    expect(filterEvents(events, { search: "london" })).toHaveLength(1);
    expect(filterEvents(events, { search: "rainfall" })).toHaveLength(3);
    expect(filterEvents(events, { search: "zurich" })).toHaveLength(0);
  });

  it("filters by category, signal, and minimums", () => {
    expect(filterEvents(events, { category: "wind" })).toHaveLength(1);
    expect(filterEvents(events, { signal: "Avoid" }).map((event) => event.id)).toEqual(["low-confidence"]);
    expect(filterEvents(events, { minEdge: 0.13 })).toHaveLength(3);
    expect(filterEvents(events, { minEdge: 0.15 })).toHaveLength(0);
    expect(filterEvents(events, { minConfidence: 0.7 }).map((event) => event.id)).toEqual(["london-wind"]);
  });
});

describe("sortEvents", () => {
  const events = enrichEvents([
    baseEvent({ id: "neutral", marketProbability: 0.5, aiProbability: 0.51 }),
    baseEvent({ id: "avoid", confidence: 0.2 }),
    baseEvent({ id: "strong-short", marketProbability: 0.6, aiProbability: 0.4, confidence: 0.7 }),
    baseEvent({ id: "strong-long-small", marketProbability: 0.5, aiProbability: 0.63, confidence: 0.5 }),
    baseEvent({ id: "strong-long-big", marketProbability: 0.5, aiProbability: 0.68, confidence: 0.8 })
  ]);

  it("ranks Strong Long first, then adjusted edge, by default", () => {
    const sorted = sortEvents(events, "signal");
    expect(sorted.map((event) => event.id)).toEqual([
      "strong-long-big",
      "strong-long-small",
      "strong-short",
      "neutral",
      "avoid"
    ]);
  });

  it("sorts by confidence and city when requested", () => {
    expect(sortEvents(events, "confidence")[0].id).toBe("strong-long-big");
    expect(sortEvents(events, "city").every((event) => event.city === "Seoul")).toBe(true);
  });

  it("does not mutate the input array", () => {
    const before = events.map((event) => event.id);
    sortEvents(events, "edge");
    expect(events.map((event) => event.id)).toEqual(before);
  });
});

describe("summarizeEvents", () => {
  it("returns null aggregates for an empty feed", () => {
    expect(summarizeEvents([]).averageEdge).toBeNull();
    expect(summarizeEvents([]).lastUpdatedAt).toBeNull();
  });

  it("counts strong longs and averages magnitudes", () => {
    const summary = summarizeEvents(
      enrichEvents([
        baseEvent(),
        baseEvent({ id: "short", marketProbability: 0.6, aiProbability: 0.46, confidence: 0.7 })
      ])
    );
    expect(summary.totalEvents).toBe(2);
    expect(summary.strongLongCount).toBe(1);
    expect(summary.averageEdge).toBeCloseTo(0.14);
    expect(summary.averageConfidence).toBeCloseTo(0.675);
  });
});

describe("mock data", () => {
  const events = enrichEvents(buildMockCityMarketEvents(NOW));

  it("includes at least 12 events with unique ids and valid probabilities", () => {
    expect(events.length).toBeGreaterThanOrEqual(12);
    expect(new Set(events.map((event) => event.id)).size).toBe(events.length);
    for (const event of events) {
      expect(event.marketProbability).toBeGreaterThan(0);
      expect(event.marketProbability).toBeLessThan(1);
      expect(event.aiProbability).toBeGreaterThan(0);
      expect(event.aiProbability).toBeLessThan(1);
      expect(event.confidence).toBeGreaterThan(0);
      expect(event.confidence).toBeLessThanOrEqual(1);
      expect(event.forecastModels.length).toBeGreaterThan(0);
      expect(new Date(event.updatedAt).getTime()).toBeLessThanOrEqual(NOW.getTime());
    }
  });

  it("covers every signal label and multiple categories", () => {
    const signals = new Set(events.map((event) => event.signal));
    const expected: SignalLabel[] = ["Strong Long", "Weak Long", "Neutral", "Weak Short", "Strong Short", "Avoid"];
    for (const label of expected) {
      expect(signals.has(label)).toBe(true);
    }
    expect(new Set(events.map((event) => event.eventCategory)).size).toBeGreaterThanOrEqual(5);
  });

  it("matches the Seoul example from the product spec", () => {
    const seoul = events.find((event) => event.id === "wm-seoul-rain-10mm");
    expect(seoul?.signal).toBe("Strong Long");
    expect(formatEdge(seoul!.edge)).toBe("+14 pts");
    expect(formatProbability(seoul!.marketProbability)).toBe("58%");
    expect(formatProbability(seoul!.aiProbability)).toBe("72%");
  });

  it("respects DEFAULT_MARKET_FILTERS as a no-op filter", () => {
    expect(filterEvents(events, DEFAULT_MARKET_FILTERS)).toHaveLength(events.length);
  });
});
