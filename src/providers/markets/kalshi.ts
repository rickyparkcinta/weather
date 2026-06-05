import { z } from "zod";
import type { MarketEvent } from "@/types/domain";
import type { MarketFetchOptions, MarketProviderAdapter, MarketProviderResult } from "@/providers/markets/types";

const kalshiMarketSchema = z.object({
  ticker: z.string(),
  title: z.string(),
  subtitle: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  yes_bid: z.number().optional().nullable(),
  yes_ask: z.number().optional().nullable(),
  last_price: z.number().optional().nullable(),
  volume: z.number().optional().nullable(),
  liquidity: z.number().optional().nullable(),
  open_interest: z.number().optional().nullable(),
  close_time: z.string().optional().nullable(),
  status: z.string().optional().nullable()
}).passthrough();

export function normalizeKalshiMarket(input: unknown): MarketEvent {
  const market = kalshiMarketSchema.parse(input);
  const probability = market.last_price ?? market.yes_ask ?? market.yes_bid ?? null;

  return {
    id: `kalshi-${market.ticker}`,
    provider: "kalshi",
    providerEventId: market.ticker,
    title: market.title,
    description: market.subtitle ?? null,
    category: market.category ?? null,
    tags: market.category ? [market.category.toLowerCase()] : [],
    cityIds: [],
    countryCodes: [],
    probability,
    bid: market.yes_bid ?? null,
    ask: market.yes_ask ?? null,
    volume: market.volume ?? null,
    liquidity: market.liquidity ?? null,
    openInterest: market.open_interest ?? null,
    closeTime: market.close_time ?? null,
    resolutionSource: null,
    url: `https://kalshi.com/markets/${market.ticker}`,
    status: market.status ?? null,
    raw: market
  };
}

export const kalshiAdapter: MarketProviderAdapter = {
  name: "kalshi",
  async fetchMarkets(options?: MarketFetchOptions): Promise<MarketProviderResult<MarketEvent[]>> {
    const url = new URL("https://api.elections.kalshi.com/trade-api/v2/markets");
    if (options?.limit) url.searchParams.set("limit", String(options.limit));
    if (options?.query) url.searchParams.set("search", options.query);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        return { ok: false, error: { code: "kalshi_http", message: `Kalshi returned ${response.status}`, retryable: response.status >= 500 } };
      }

      const json = (await response.json()) as { markets?: unknown[] };
      return { ok: true, data: (json.markets ?? []).map(normalizeKalshiMarket) };
    } catch (error) {
      return { ok: false, error: { code: "kalshi_fetch_failed", message: error instanceof Error ? error.message : String(error), retryable: true } };
    }
  }
};
