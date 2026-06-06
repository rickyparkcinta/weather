import { describe, expect, it } from "vitest";
import { fixtureCities, fixtureForecast, fixtureMarkets } from "@/test/fixtures";
import { computeCombinedSignal } from "@/lib/signals/computeCombinedSignal";

describe("computeCombinedSignal", () => {
  it("detects fresh precipitation divergence", () => {
    const city = fixtureCities.find((item) => item.slug === "seoul")!;
    const market = fixtureMarkets.find((item) => item.providerEventId === "KX-SEOUL-RAIN")!;
    const now = new Date().toISOString();
    const forecast = fixtureForecast
      .filter((point) => point.cityId === city.id)
      .map((point) => ({ ...point, runTime: now, createdAt: now }));
    const freshMarket = { ...market, createdAt: now, updatedAt: now };

    const signal = computeCombinedSignal({ city, market: freshMarket, forecast });

    expect(signal.forecastVariable).toBe("precipitation_probability");
    expect(signal.status).toBe("divergent");
    expect(signal.disagreement).toBeGreaterThan(0.1);
  });

  it("marks non-weather markets as unavailable", () => {
    const city = fixtureCities[0];
    const market = fixtureMarkets.find((item) => item.providerEventId === "PM-GLOBAL-MACRO")!;
    const forecast = fixtureForecast.filter((point) => point.cityId === city.id);

    const signal = computeCombinedSignal({ city, market, forecast });

    expect(signal.status).toBe("unavailable");
    expect(signal.modelProbability).toBeNull();
  });
});
