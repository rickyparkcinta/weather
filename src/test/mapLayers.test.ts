import { describe, expect, it } from "vitest";
import { fixtureCities, fixtureForecast, fixtureMarkets } from "@/test/fixtures";
import { buildMapLayerPayload } from "@/lib/map/layers";

describe("canonical map layers", () => {
  it("builds forecast, market, and signal feature collections", () => {
    const city = fixtureCities.find((item) => item.slug === "seoul")!;
    const market = fixtureMarkets.find((item) => item.providerEventId === "KX-SEOUL-RAIN")!;
    const payload = buildMapLayerPayload({
      city,
      cities: fixtureCities,
      forecast: fixtureForecast.filter((point) => point.cityId === city.id),
      markets: [market],
      signals: [
        {
          cityId: city.id,
          marketEventId: market.id,
          forecastVariable: "precipitation_probability",
          signalType: "weather_market_disagreement",
          modelProbability: 0.72,
          marketProbability: 0.58,
          disagreement: 0.14,
          rawEdge: 0.14,
          adjustedEdge: 0.112,
          confidence: 0.8,
          freshnessStatus: "fresh",
          status: "divergent",
          explanation: "Fixture signal"
        }
      ],
      generatedAt: "2026-06-05T00:00:00Z"
    });

    expect(payload.layers.forecast.features.length).toBeGreaterThan(0);
    expect(payload.layers.markets.features).toHaveLength(1);
    expect(payload.layers.signals.features).toHaveLength(1);
    expect(payload.layers.signals.features[0].properties).toMatchObject({
      layer: "signal",
      rawEdge: 0.14,
      adjustedEdge: 0.112,
      confidence: 0.8,
      state: "divergent"
    });
  });

  it("degrades stale signal state in layer properties", () => {
    const city = fixtureCities.find((item) => item.slug === "seoul")!;
    const market = fixtureMarkets.find((item) => item.providerEventId === "KX-SEOUL-RAIN")!;
    const payload = buildMapLayerPayload({
      city,
      cities: fixtureCities,
      forecast: [],
      markets: [market],
      signals: [
        {
          cityId: city.id,
          marketEventId: market.id,
          forecastVariable: "precipitation_probability",
          signalType: "weather_market_disagreement",
          modelProbability: 0.72,
          marketProbability: 0.58,
          disagreement: 0.14,
          rawEdge: 0.14,
          adjustedEdge: 0.112,
          confidence: 0.8,
          freshnessStatus: "stale",
          status: "divergent",
          explanation: "Fixture signal"
        }
      ],
      generatedAt: "2026-06-05T00:00:00Z"
    });

    expect(payload.layers.signals.features[0].properties.state).toBe("stale");
    expect(payload.layers.signals.features[0].properties.staleAfter).toBeNull();
  });
});
