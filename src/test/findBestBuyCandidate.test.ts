import { describe, expect, it } from "vitest";
import { fixtureMarkets, fixtureSignals } from "@/test/fixtures";
import { findBestBuyCandidate } from "@/lib/signals/findBestBuyCandidate";

describe("findBestBuyCandidate", () => {
  it("selects the strongest yes-side edge after buy price", () => {
    const candidate = findBestBuyCandidate({ signals: fixtureSignals, markets: fixtureMarkets });

    expect(candidate?.market.providerEventId).toBe("KX-SEOUL-RAIN");
    expect(candidate?.buyPrice).toBe(0.57);
    expect(candidate?.edge).toBe(0.16);
  });

  it("does not recommend markets where the model is not above the buy price", () => {
    const candidate = findBestBuyCandidate({
      signals: fixtureSignals,
      markets: fixtureMarkets.map((market) =>
        market.providerEventId === "KX-SEOUL-RAIN" ? { ...market, ask: 0.74 } : market
      )
    });

    expect(candidate).toBeNull();
  });
});
