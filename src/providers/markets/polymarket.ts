import { z } from "zod";
import type { MarketEvent } from "@/types/domain";
import type { MarketFetchOptions, MarketProviderAdapter, MarketProviderResult } from "@/providers/markets/types";

const gammaMarketSchema = z.object({
  id: z.union([z.string(), z.number()]),
  question: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  tags: z.array(z.union([z.string(), z.object({ label: z.string().optional(), slug: z.string().optional() }).passthrough()])).optional(),
  volume: z.union([z.number(), z.string()]).optional().nullable(),
  liquidity: z.union([z.number(), z.string()]).optional().nullable(),
  endDate: z.string().optional().nullable(),
  active: z.boolean().optional(),
  closed: z.boolean().optional(),
  slug: z.string().optional(),
  outcomePrices: z.union([z.string(), z.array(z.union([z.string(), z.number()]))]).optional().nullable()
}).passthrough();

function numberFromUnknown(value: unknown) {
  if (typeof value === "number") return value;
  if (typeof value === "string") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

function parseOutcomeProbability(value: unknown) {
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value) as unknown;
      return parseOutcomeProbability(parsed);
    } catch {
      return numberFromUnknown(value);
    }
  }

  if (Array.isArray(value)) {
    return numberFromUnknown(value[0]);
  }

  return numberFromUnknown(value);
}

export function normalizePolymarketGammaMarket(input: unknown): MarketEvent {
  const market = gammaMarketSchema.parse(input);
  const tags =
    market.tags?.map((tag) => (typeof tag === "string" ? tag : tag.slug ?? tag.label)).filter((tag): tag is string => Boolean(tag)) ?? [];
  const id = String(market.id);

  return {
    id: `polymarket-${id}`,
    provider: "polymarket",
    providerEventId: id,
    title: market.question ?? market.title ?? "Untitled Polymarket market",
    description: market.description ?? null,
    category: market.category ?? null,
    tags,
    cityIds: [],
    countryCodes: [],
    probability: parseOutcomeProbability(market.outcomePrices),
    bid: null,
    ask: null,
    volume: numberFromUnknown(market.volume),
    liquidity: numberFromUnknown(market.liquidity),
    openInterest: null,
    closeTime: market.endDate ?? null,
    resolutionSource: null,
    url: market.slug ? `https://polymarket.com/event/${market.slug}` : "https://polymarket.com/",
    status: market.closed ? "closed" : market.active === false ? "inactive" : "active",
    raw: market
  };
}

export const polymarketAdapter: MarketProviderAdapter = {
  name: "polymarket",
  async fetchMarkets(options?: MarketFetchOptions): Promise<MarketProviderResult<MarketEvent[]>> {
    const url = new URL("https://gamma-api.polymarket.com/markets");
    url.searchParams.set("limit", String(options?.limit ?? 50));
    if (options?.query) url.searchParams.set("search", options.query);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        return { ok: false, error: { code: "polymarket_http", message: `Polymarket returned ${response.status}`, retryable: response.status >= 500 } };
      }

      const json = await response.json();
      const records = Array.isArray(json) ? json : Array.isArray(json?.data) ? json.data : [];
      return { ok: true, data: records.map(normalizePolymarketGammaMarket) };
    } catch (error) {
      return { ok: false, error: { code: "polymarket_fetch_failed", message: error instanceof Error ? error.message : String(error), retryable: true } };
    }
  }
};
