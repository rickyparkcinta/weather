import { describe, expect, it } from "vitest";
import { fixtureCities, fixtureForecast, fixtureMarkets } from "@/test/fixtures";
import { computeCombinedSignal } from "@/lib/signals/computeCombinedSignal";

describe("computeCombinedSignal", () => {
  it("detects model-above-market precipitation disagreement", () => {
    const city = fixtureCities.find((item) => item.slug === "seoul")!;
    const market = fixtureMarkets.find((item) => item.providerEventId === "KX-SEOUL-RAIN")!;
    const forecast = fixtureForecast.filter((point) => point.cityId === city.id);

    const signal = computeCombinedSignal({ city, market, forecast });

    expect(signal.forecastVariable).toBe("precipitation_probability");
    expect(signal.status).toBe("model_above_market");
    expect(signal.disagreement).toBeGreaterThan(0.1);
  });

  it("marks non-weather markets as insufficient data", () => {
    const city = fixtureCities[0];
    const market = fixtureMarkets.find((item) => item.providerEventId === "PM-GLOBAL-MACRO")!;
    const forecast = fixtureForecast.filter((point) => point.cityId === city.id);

    const signal = computeCombinedSignal({ city, market, forecast });

    expect(signal.status).toBe("insufficient_data");
    expect(signal.modelProbability).toBeNull();
  });
});
