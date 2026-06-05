import { describe, expect, it } from "vitest";
import { demoMarkets, demoSignals } from "@/lib/demo-data";
import { findBestBuyCandidate } from "@/lib/signals/findBestBuyCandidate";

describe("findBestBuyCandidate", () => {
  it("selects the strongest yes-side edge after buy price", () => {
    const candidate = findBestBuyCandidate({ signals: demoSignals, markets: demoMarkets });

    expect(candidate?.market.providerEventId).toBe("DEMO-KX-SEOUL-RAIN");
    expect(candidate?.buyPrice).toBe(0.57);
    expect(candidate?.edge).toBe(0.16);
  });

  it("does not recommend markets where the model is not above the buy price", () => {
    const candidate = findBestBuyCandidate({
      signals: demoSignals,
      markets: demoMarkets.map((market) =>
        market.providerEventId === "DEMO-KX-SEOUL-RAIN" ? { ...market, ask: 0.74 } : market
      )
    });

    expect(candidate).toBeNull();
  });
});
