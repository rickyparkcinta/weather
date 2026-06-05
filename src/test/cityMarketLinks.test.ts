import { describe, expect, it } from "vitest";
import { demoCities, demoMarkets } from "@/lib/demo-data";

describe("city market links", () => {
  it("links Seoul demo weather market to Seoul city id", () => {
    const city = demoCities.find((item) => item.slug === "seoul")!;
    const market = demoMarkets.find((item) => item.providerEventId === "DEMO-KX-SEOUL-RAIN")!;

    expect(market.cityIds).toContain(city.id);
  });
});
