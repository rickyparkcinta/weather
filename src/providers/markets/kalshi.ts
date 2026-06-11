import { z } from "zod";
import type { MarketEvent } from "@/types/domain";
import type { MarketFetchOptions, MarketProviderAdapter, MarketProviderResult } from "@/providers/markets/types";

const PROVIDER_FETCH_TIMEOUT_MS = 15_000;

const kalshiMarketSchema = z.object({
  ticker: z.string(),
  title: z.string(),
  subtitle: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  yes_bid: z.union([z.number(), z.string()]).optional().nullable(),
  yes_ask: z.union([z.number(), z.string()]).optional().nullable(),
  last_price: z.union([z.number(), z.string()]).optional().nullable(),
  yes_bid_dollars: z.union([z.number(), z.string()]).optional().nullable(),
  yes_ask_dollars: z.union([z.number(), z.string()]).optional().nullable(),
  last_price_dollars: z.union([z.number(), z.string()]).optional().nullable(),
  volume: z.union([z.number(), z.string()]).optional().nullable(),
  volume_dollars: z.union([z.number(), z.string()]).optional().nullable(),
  liquidity: z.union([z.number(), z.string()]).optional().nullable(),
  liquidity_dollars: z.union([z.number(), z.string()]).optional().nullable(),
  open_interest: z.union([z.number(), z.string()]).optional().nullable(),
  close_time: z.string().optional().nullable(),
  status: z.string().optional().nullable()
}).passthrough();

function numberFromUnknown(value: unknown) {
  if (typeof value === "number") return Number.isFinite(value) ? value : null;
  if (typeof value === "string") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

function probabilityFromPrice(value: unknown) {
  const parsed = numberFromUnknown(value);
  if (parsed === null) return null;

  return parsed > 1 ? parsed / 100 : parsed;
}

export function normalizeKalshiMarket(input: unknown): MarketEvent {
  const market = kalshiMarketSchema.parse(input);
  const probability =
    probabilityFromPrice(market.last_price_dollars) ??
    probabilityFromPrice(market.last_price) ??
    probabilityFromPrice(market.yes_ask_dollars) ??
    probabilityFromPrice(market.yes_ask) ??
    probabilityFromPrice(market.yes_bid_dollars) ??
    probabilityFromPrice(market.yes_bid);

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
    bid: probabilityFromPrice(market.yes_bid_dollars) ?? probabilityFromPrice(market.yes_bid),
    ask: probabilityFromPrice(market.yes_ask_dollars) ?? probabilityFromPrice(market.yes_ask),
    volume: numberFromUnknown(market.volume_dollars) ?? numberFromUnknown(market.volume),
    liquidity: numberFromUnknown(market.liquidity_dollars) ?? numberFromUnknown(market.liquidity),
    openInterest: numberFromUnknown(market.open_interest),
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
      const response = await fetch(url, { signal: AbortSignal.timeout(PROVIDER_FETCH_TIMEOUT_MS) });
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
