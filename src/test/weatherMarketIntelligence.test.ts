import { describe, expect, it } from "vitest";
import { evaluateOperationalAlerts } from "@/lib/intel/alerts";
import { summarizeCalibration } from "@/lib/intel/calibration";
import { computeDynamicErrorBalancing, forecastPointsToModelMembers } from "@/lib/intel/model-stack";
import { calculateBucketProbabilities, calculateMarketEdge, parseTemperatureBuckets, summarizeProbability } from "@/lib/intel/probability";
import { listProviderHealth } from "@/lib/intel/providers";
import { getRealtimeStatus } from "@/lib/intel/realtime";
import { resolveSettlementSource } from "@/lib/intel/settlement";
import { fixtureCities, fixtureForecast, fixtureMarkets } from "@/test/fixtures";

describe("weather market intelligence helpers", () => {
  it("matches a weather market to a settlement station", () => {
    const city = fixtureCities.find((item) => item.slug === "hong-kong")!;
    const market = fixtureMarkets.find((item) => item.providerEventId === "PM-HK-TYPHOON")!;

    const settlement = resolveSettlementSource(city, market);

    expect(settlement.station.code).toMatch(/HKO-HK|VHHH/);
    expect(settlement.provider.name).toContain("Hong Kong");
    expect(settlement.rule.timezone).toBe("Asia/Hong_Kong");
  });

  it("parses temperature buckets and detects bucket probabilities", () => {
    const buckets = parseTemperatureBuckets("Will New York temperature exceed 90F next week?");
    const probabilities = calculateBucketProbabilities({ buckets, mean: 33, sigma: 2.5 });

    expect(buckets[0]?.kind).toBe("above_or_equal");
    expect(probabilities[0]?.probability).toBeGreaterThan(0.1);
    expect(probabilities[0]?.impossible).toBe(false);
  });

  it("calculates model-market edge with confidence and penalties", () => {
    const edge = calculateMarketEdge({
      modelProbability: 0.72,
      marketProbability: 0.58,
      confidence: 0.65,
      fees: 0.01,
      slippage: 0.02,
      riskBuffer: 0.01
    });

    expect(edge.rawEdge).toBe(0.14);
    expect(edge.adjustedEdge).toBe(0.091);
    expect(edge.netEdge).toBe(0.051);
  });

  it("summarizes probability with market-neutral labels", () => {
    const summary = summarizeProbability({
      rawModelProbability: 0.72,
      marketProbability: 0.58,
      confidence: 0.7,
      riskBuffer: 0.01
    });

    expect(summary.label).toBe("Model-over-market signal");
    expect(summary.confidenceAdjustedProbability).toBe(0.504);
  });

  it("weights model members with Dynamic Error Balancing", () => {
    const city = fixtureCities.find((item) => item.slug === "seoul")!;
    const points = fixtureForecast.filter((point) => point.cityId === city.id);
    const result = computeDynamicErrorBalancing({ members: forecastPointsToModelMembers(points) });

    expect(result.method).toBe("dynamic_error_balancing");
    expect(result.weights.reduce((sum, weight) => sum + weight.weight, 0)).toBeGreaterThan(0.99);
    expect(result.blendedValue).not.toBeNull();
  });

  it("exposes provider health, calibration, alerts, and realtime fallback", () => {
    const providers = listProviderHealth();
    const calibration = summarizeCalibration({ verification: [{ probability: 0.8, outcome: 1 }, { probability: 0.3, outcome: 0 }] });
    const realtime = getRealtimeStatus();
    const alerts = evaluateOperationalAlerts({ providers: [{ ...providers[0], status: "degraded" }], settlements: [] });

    expect(providers.length).toBeGreaterThan(3);
    expect(calibration.brierScore).toBeLessThan(0.1);
    expect(realtime.pollingIntervalMs).toBe(60_000);
    expect(alerts[0]?.type).toBe("provider_outage");
  });
});
