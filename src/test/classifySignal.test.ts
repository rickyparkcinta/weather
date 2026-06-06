import { describe, expect, it } from "vitest";
import {
  classifySignal,
  confidenceLabel,
  effectiveGap,
  formatSignedPercent,
  freshnessLabel
} from "@/lib/signals/classify";
import type { CombinedSignal } from "@/types/domain";

function signal(overrides: Partial<CombinedSignal>): CombinedSignal {
  return {
    cityId: "c1",
    marketEventId: "m1",
    forecastVariable: "precipitation_probability",
    signalType: "weather_market_disagreement",
    modelProbability: 0.7,
    marketProbability: 0.5,
    disagreement: 0.2,
    rawEdge: 0.2,
    adjustedEdge: 0.12,
    confidence: 0.7,
    freshnessStatus: "fresh",
    status: "model_above_market",
    explanation: null,
    ...overrides
  };
}

describe("classifySignal", () => {
  it("labels a large adjusted probability gap as divergent", () => {
    expect(classifySignal(signal({ adjustedEdge: 0.12 })).state).toBe("divergent");
  });

  it("labels a modest probability gap as watch", () => {
    expect(classifySignal(signal({ adjustedEdge: 0.04 })).state).toBe("watch");
  });

  it("labels a tiny probability gap as aligned", () => {
    expect(classifySignal(signal({ adjustedEdge: 0.01 })).state).toBe("aligned");
  });

  it("labels a large negative probability gap as divergent", () => {
    expect(classifySignal(signal({ adjustedEdge: -0.1 })).state).toBe("divergent");
  });

  it("degrades stale data before reading divergence strength", () => {
    expect(classifySignal(signal({ adjustedEdge: 0.2, freshnessStatus: "stale" })).state).toBe("stale");
  });

  it("uses high uncertainty when confidence is too low", () => {
    expect(classifySignal(signal({ confidence: 0.2 })).state).toBe("high_uncertainty");
  });

  it("uses unavailable when data is insufficient", () => {
    expect(
      classifySignal(signal({ status: "insufficient_data", modelProbability: null, adjustedEdge: null }))
        .state
    ).toBe("unavailable");
  });
});

describe("signal helpers", () => {
  it("prefers adjusted gap, then raw gap, then model-market difference", () => {
    expect(effectiveGap(signal({ adjustedEdge: 0.1 }))).toBe(0.1);
    expect(effectiveGap(signal({ adjustedEdge: null, rawEdge: 0.2 }))).toBe(0.2);
    expect(
      effectiveGap(signal({ adjustedEdge: null, rawEdge: null, modelProbability: 0.6, marketProbability: 0.4 }))
    ).toBeCloseTo(0.2);
  });

  it("formats signed percentages", () => {
    expect(formatSignedPercent(0.12)).toBe("+12%");
    expect(formatSignedPercent(-0.07)).toBe("−7%");
    expect(formatSignedPercent(0)).toBe("0%");
    expect(formatSignedPercent(null)).toBe("n/a");
  });

  it("maps freshness and confidence to labels", () => {
    expect(freshnessLabel("fresh").label).toBe("Fresh");
    expect(freshnessLabel(null).label).toBe("Unknown");
    expect(confidenceLabel(0.8).label).toBe("High");
    expect(confidenceLabel(0.2).label).toBe("Very low");
  });
});
