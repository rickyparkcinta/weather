import { z } from "zod";
import type { MarketEvent } from "@/types/domain";
import type { MarketFetchOptions, MarketProviderAdapter, MarketProviderResult } from "@/providers/markets/types";

const PROVIDER_FETCH_TIMEOUT_MS = 15_000;

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

const gammaEventSchema = z.object({
  id: z.union([z.string(), z.number()]),
  slug: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional().nullable(),
  category: z.string().optional().nullable(),
  tags: z.array(z.union([z.string(), z.object({ label: z.string().optional(), slug: z.string().optional() }).passthrough()])).optional(),
  endDate: z.string().optional().nullable(),
  active: z.boolean().optional(),
  closed: z.boolean().optional(),
  markets: z.array(gammaMarketSchema).optional()
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

function tagsFromUnknown(tags: z.infer<typeof gammaMarketSchema>["tags"]) {
  return tags?.map((tag) => (typeof tag === "string" ? tag : tag.slug ?? tag.label)).filter((tag): tag is string => Boolean(tag)) ?? [];
}

function arrayFromJsonData(input: unknown): unknown[] {
  if (Array.isArray(input)) return input;
  if (input && typeof input === "object" && "data" in input) {
    const data = (input as { data?: unknown }).data;
    return Array.isArray(data) ? data : [];
  }
  return [];
}

export function normalizePolymarketGammaMarket(input: unknown): MarketEvent {
  const market = gammaMarketSchema.parse(input);
  const tags = tagsFromUnknown(market.tags);
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

export function normalizePolymarketGammaEvent(input: unknown, tagSlug?: string): MarketEvent[] {
  const event = gammaEventSchema.parse(input);
  const eventTags = tagsFromUnknown(event.tags);
  const category = tagSlug ?? event.category ?? eventTags[0] ?? null;

  return (event.markets ?? []).map((marketInput) => {
    const market = gammaMarketSchema.parse(marketInput);
    const normalized = normalizePolymarketGammaMarket(market);
    const marketTags = tagsFromUnknown(market.tags);

    return {
      ...normalized,
      title: normalized.title === "Untitled Polymarket market" ? event.title ?? normalized.title : normalized.title,
      description: normalized.description ?? event.description ?? null,
      category,
      tags: [...new Set([...eventTags, ...marketTags, ...(tagSlug ? [tagSlug] : [])])],
      closeTime: normalized.closeTime ?? event.endDate ?? null,
      url: event.slug ? `https://polymarket.com/event/${event.slug}` : normalized.url,
      status: event.closed || market.closed ? "closed" : event.active === false || market.active === false ? "inactive" : normalized.status,
      raw: { event, market }
    };
  });
}

export async function fetchPolymarketEventsByTag(tagSlug: string, limit = 50): Promise<MarketProviderResult<MarketEvent[]>> {
  const url = new URL("https://gamma-api.polymarket.com/events");
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("tag_slug", tagSlug);

  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(PROVIDER_FETCH_TIMEOUT_MS) });
    if (!response.ok) {
      return { ok: false, error: { code: "polymarket_events_http", message: `Polymarket events returned ${response.status}`, retryable: response.status >= 500 } };
    }

    const records = (await response.json()) as unknown;
    const events = arrayFromJsonData(records);
    return { ok: true, data: events.flatMap((event) => normalizePolymarketGammaEvent(event, tagSlug)) };
  } catch (error) {
    return { ok: false, error: { code: "polymarket_events_fetch_failed", message: error instanceof Error ? error.message : String(error), retryable: true } };
  }
}

export const polymarketAdapter: MarketProviderAdapter = {
  name: "polymarket",
  async fetchMarkets(options?: MarketFetchOptions): Promise<MarketProviderResult<MarketEvent[]>> {
    const url = new URL("https://gamma-api.polymarket.com/markets");
    url.searchParams.set("limit", String(options?.limit ?? 50));
    if (options?.query) url.searchParams.set("search", options.query);

    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(PROVIDER_FETCH_TIMEOUT_MS) });
      if (!response.ok) {
        return { ok: false, error: { code: "polymarket_http", message: `Polymarket returned ${response.status}`, retryable: response.status >= 500 } };
      }

      const json = (await response.json()) as unknown;
      const records = arrayFromJsonData(json);
      return { ok: true, data: records.map(normalizePolymarketGammaMarket) };
    } catch (error) {
      return { ok: false, error: { code: "polymarket_fetch_failed", message: error instanceof Error ? error.message : String(error), retryable: true } };
    }
  }
};
