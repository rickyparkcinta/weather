import { describe, expect, it } from "vitest";
import { demoCities } from "@/lib/demo-data";
import { getDashboardData, listMarkets } from "@/lib/data/queries";

describe("query helpers in demo mode", () => {
  it("returns dashboard data for a requested city", async () => {
    const data = await getDashboardData("seoul");

    expect(data.selectedCity.slug).toBe("seoul");
    expect(data.cities.length).toBeGreaterThanOrEqual(30);
    expect(data.demoMode).toBe(true);
  });

  it("filters demo markets by city id", async () => {
    const seoul = demoCities.find((city) => city.slug === "seoul")!;
    const markets = await listMarkets({ cityId: seoul.id });

    expect(markets.every((market) => market.cityIds.includes(seoul.id))).toBe(true);
  });
});
