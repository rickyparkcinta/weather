import { describe, expect, it } from "vitest";
import { fixtureCities, fixtureMarkets } from "@/test/fixtures";

describe("city market links", () => {
  it("links Seoul weather market to Seoul city id", () => {
    const city = fixtureCities.find((item) => item.slug === "seoul")!;
    const market = fixtureMarkets.find((item) => item.providerEventId === "KX-SEOUL-RAIN")!;

    expect(market.cityIds).toContain(city.id);
  });
});
