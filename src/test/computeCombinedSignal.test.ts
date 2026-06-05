import { describe, expect, it } from "vitest";
import { demoCities, demoForecast, demoMarkets } from "@/lib/demo-data";
import { computeCombinedSignal } from "@/lib/signals/computeCombinedSignal";

describe("computeCombinedSignal", () => {
  it("detects model-above-market precipitation disagreement", () => {
    const city = demoCities.find((item) => item.slug === "seoul")!;
    const market = demoMarkets.find((item) => item.providerEventId === "DEMO-KX-SEOUL-RAIN")!;
    const forecast = demoForecast.filter((point) => point.cityId === city.id);

    const signal = computeCombinedSignal({ city, market, forecast });

    expect(signal.forecastVariable).toBe("precipitation_probability");
    expect(signal.status).toBe("model_above_market");
    expect(signal.disagreement).toBeGreaterThan(0.1);
  });

  it("marks non-weather markets as insufficient data", () => {
    const city = demoCities[0];
    const market = demoMarkets.find((item) => item.providerEventId === "DEMO-PM-GLOBAL-MACRO")!;
    const forecast = demoForecast.filter((point) => point.cityId === city.id);

    const signal = computeCombinedSignal({ city, market, forecast });

    expect(signal.status).toBe("insufficient_data");
    expect(signal.modelProbability).toBeNull();
  });
});
