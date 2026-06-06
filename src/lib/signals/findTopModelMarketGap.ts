import type { CombinedSignal, MarketEvent } from "@/types/domain";

export type ModelMarketGapCandidate = {
  signal: CombinedSignal;
  market: MarketEvent;
  marketReferenceProbability: number;
  probabilityGap: number;
};

function getMarketReferenceProbability(signal: CombinedSignal, market: MarketEvent) {
  return market.ask ?? market.probability ?? signal.marketProbability;
}

export function findTopModelMarketGap({
  signals,
  markets,
  minGap = 0.05
}: {
  signals: CombinedSignal[];
  markets: MarketEvent[];
  minGap?: number;
}): ModelMarketGapCandidate | null {
  const marketById = new Map(markets.map((market) => [market.id, market]));

  const candidates = signals
    .flatMap((signal) => {
      if (!signal.marketEventId || signal.modelProbability === null) {
        return [];
      }

      const market = marketById.get(signal.marketEventId);
      if (!market) {
        return [];
      }

      const marketReferenceProbability = getMarketReferenceProbability(signal, market);
      if (marketReferenceProbability === null || marketReferenceProbability === undefined) {
        return [];
      }

      const probabilityGap = Number((signal.modelProbability - marketReferenceProbability).toFixed(3));
      if (probabilityGap < minGap) {
        return [];
      }

      return [{ signal, market, marketReferenceProbability, probabilityGap }];
    })
    .sort(
      (a, b) =>
        b.probabilityGap - a.probabilityGap ||
        (b.market.volume ?? 0) - (a.market.volume ?? 0)
    );

  return candidates[0] ?? null;
}
