import { describe, expect, it } from "vitest";
import { fixtureCities } from "@/test/fixtures";
import { normalizeKalshiMarket } from "@/providers/markets/kalshi";
import { normalizePolymarketGammaMarket } from "@/providers/markets/polymarket";
import { normalizeOpenMeteoHourlyResponse } from "@/providers/weather/openMeteo";

describe("provider normalization", () => {
  it("normalizes Kalshi market probabilities", () => {
    const market = normalizeKalshiMarket({
      ticker: "KXRAIN",
      title: "Will it rain in Seoul?",
      subtitle: "Rain contract",
      category: "Weather",
      yes_bid: 0.61,
      yes_ask: 0.64,
      volume: 1000
    });

    expect(market.provider).toBe("kalshi");
    expect(market.providerEventId).toBe("KXRAIN");
    expect(market.probability).toBe(0.64);
  });

  it("normalizes Polymarket Gamma outcome prices", () => {
    const market = normalizePolymarketGammaMarket({
      id: "123",
      question: "Will a typhoon affect Hong Kong?",
      slug: "demo-typhoon",
      outcomePrices: "[0.31,0.69]",
      volume: "1200",
      tags: [{ slug: "weather" }]
    });

    expect(market.provider).toBe("polymarket");
    expect(market.probability).toBe(0.31);
    expect(market.tags).toContain("weather");
  });

  it("normalizes Open-Meteo hourly records into forecast points", () => {
    const city = fixtureCities[0];
    const points = normalizeOpenMeteoHourlyResponse(
      {
        hourly: {
          time: ["2026-06-05T00:00"],
          temperature_2m: [24.5],
          precipitation_probability: [63]
        }
      },
      city,
      "2026-06-05T00:00:00Z"
    );

    expect(points).toHaveLength(2);
    expect(points[0].cityId).toBe(city.id);
    expect(points.map((point) => point.variable)).toContain("temperature_2m");
  });
});
