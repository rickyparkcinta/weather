import type { MarketEvent } from "@/types/domain";

export type MarketProviderResult<T> = { ok: true; data: T } | { ok: false; error: { code: string; message: string; retryable?: boolean } };

export type MarketFetchOptions = {
  query?: string;
  category?: string;
  limit?: number;
};

export type MarketProviderAdapter = {
  name: string;
  fetchMarkets(options?: MarketFetchOptions): Promise<MarketProviderResult<MarketEvent[]>>;
};
