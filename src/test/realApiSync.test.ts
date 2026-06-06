import { describe, expect, it } from "vitest";
import { fixtureCities } from "@/test/fixtures";
import { linkMarketToCities, realApiSyncOptionsFromEnv } from "@/lib/sync/real-api-sync";
import type { MarketEvent } from "@/types/domain";

function market(overrides: Partial<MarketEvent>): MarketEvent {
  return {
    id: "market-1",
    provider: "polymarket",
    providerEventId: "market-1",
    title: "Will Hong Kong issue a typhoon warning?",
    description: null,
    category: "weather",
    tags: ["weather", "typhoon"],
    cityIds: [],
    countryCodes: [],
    probability: 0.4,
    bid: null,
    ask: null,
    volume: null,
    liquidity: null,
    openInterest: null,
    closeTime: null,
    resolutionSource: null,
    url: null,
    status: "active",
    raw: {},
    ...overrides
  };
}

describe("real API sync helpers", () => {
  it("links provider markets to seeded city aliases", () => {
    const linked = linkMarketToCities(market({}), fixtureCities);
    expect(linked.map((city) => city.slug)).toEqual(["hong-kong"]);
  });

  it("parses sync options from environment", () => {
    const options = realApiSyncOptionsFromEnv({
      REAL_API_SYNC_CITY_LIMIT: "12",
      REAL_API_SYNC_FORECAST_DAYS: "2",
      REAL_API_SYNC_INCLUDE_KALSHI: "false",
      REAL_API_SYNC_MARKET_QUERIES: "weather, rain"
    });

    expect(options.cityLimit).toBe(12);
    expect(options.forecastDays).toBe(2);
    expect(options.includeKalshi).toBe(false);
    expect(options.marketQueries).toEqual(["weather", "rain"]);
  });
});
