import type { CombinedSignal, MarketEvent } from "@/types/domain";

export type BuyCandidate = {
  signal: CombinedSignal;
  market: MarketEvent;
  buyPrice: number;
  edge: number;
};

function getBuyPrice(signal: CombinedSignal, market: MarketEvent) {
  return market.ask ?? market.probability ?? signal.marketProbability;
}

export function findBestBuyCandidate({
  signals,
  markets,
  minEdge = 0.05
}: {
  signals: CombinedSignal[];
  markets: MarketEvent[];
  minEdge?: number;
}): BuyCandidate | null {
  const marketById = new Map(markets.map((market) => [market.id, market]));

  const candidates = signals
    .flatMap((signal) => {
      if (signal.status !== "model_above_market" || !signal.marketEventId || signal.modelProbability === null) {
        return [];
      }

      const market = marketById.get(signal.marketEventId);
      if (!market) {
        return [];
      }

      const buyPrice = getBuyPrice(signal, market);
      if (buyPrice === null || buyPrice === undefined) {
        return [];
      }

      const edge = Number((signal.modelProbability - buyPrice).toFixed(3));
      if (edge < minEdge) {
        return [];
      }

      return [{ signal, market, buyPrice, edge }];
    })
    .sort((a, b) => b.edge - a.edge || (b.market.volume ?? 0) - (a.market.volume ?? 0));

  return candidates[0] ?? null;
}
