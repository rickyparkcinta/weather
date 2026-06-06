import { describe, expect, it } from "vitest";
import { fixtureMarkets, fixtureSignals } from "@/test/fixtures";
import { findTopModelMarketGap } from "@/lib/signals/findTopModelMarketGap";

describe("findTopModelMarketGap", () => {
  it("selects the strongest positive model-market probability gap", () => {
    const candidate = findTopModelMarketGap({ signals: fixtureSignals, markets: fixtureMarkets });

    expect(candidate?.market.providerEventId).toBe("KX-SEOUL-RAIN");
    expect(candidate?.marketReferenceProbability).toBe(0.57);
    expect(candidate?.probabilityGap).toBe(0.16);
  });

  it("returns null when no model probability is above the market reference probability", () => {
    const candidate = findTopModelMarketGap({
      signals: fixtureSignals,
      markets: fixtureMarkets.map((market) =>
        market.providerEventId === "KX-SEOUL-RAIN" ? { ...market, ask: 0.74 } : market
      )
    });

    expect(candidate).toBeNull();
  });
});
