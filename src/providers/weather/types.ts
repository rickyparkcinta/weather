import type { City, ForecastPoint } from "@/types/domain";

export type ProviderError = {
  code: string;
  message: string;
  retryable?: boolean;
};

export type ProviderResult<T> = { ok: true; data: T } | { ok: false; error: ProviderError };

export type ForecastFetchOptions = {
  variables?: string[];
  from?: string;
  to?: string;
};

export type WeatherProviderAdapter = {
  name: string;
  fetchForecastForCity(city: City, options?: ForecastFetchOptions): Promise<ProviderResult<ForecastPoint[]>>;
};
