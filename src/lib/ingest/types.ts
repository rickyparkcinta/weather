import type { CombinedSignalStatus, JsonRecord } from "@/types/domain";

export type AdapterInput = {
  idempotencyKey?: string;
  runTime?: string;
  options?: JsonRecord;
};

export type RawProviderPayload = {
  providerId: string;
  fetchedAt: string;
  sourceUrl?: string | null;
  payload: unknown;
  metadata?: JsonRecord;
};

export type NormalizedForecastRunRecord = {
  kind: "forecast_run";
  provider: string;
  model: string;
  runTime: string;
  sourceUrl?: string | null;
  status?: "running" | "complete" | "stale" | "failed";
  metadata?: JsonRecord;
};

export type NormalizedForecastPointRecord = {
  kind: "forecast_point";
  citySlug: string;
  provider: string;
  model: string;
  runTime: string;
  forecastTime: string;
  variable: string;
  value: number;
  unit: string;
  confidence?: number | null;
  raw?: JsonRecord;
};

export type NormalizedMarketEventRecord = {
  kind: "market_event";
  provider: string;
  providerEventId: string;
  title: string;
  description?: string | null;
  category?: string | null;
  tags?: string[];
  citySlugs?: string[];
  countryCodes?: string[];
  probability?: number | null;
  bid?: number | null;
  ask?: number | null;
  volume?: number | null;
  liquidity?: number | null;
  openInterest?: number | null;
  closeTime?: string | null;
  resolutionSource?: string | null;
  url?: string | null;
  status?: string | null;
  raw?: JsonRecord;
};

export type NormalizedMarketTimeseriesRecord = {
  kind: "market_timeseries";
  provider: string;
  providerEventId: string;
  timestamp: string;
  probability?: number | null;
  bid?: number | null;
  ask?: number | null;
  volume?: number | null;
  liquidity?: number | null;
  raw?: JsonRecord;
};

export type NormalizedSignalRecord = {
  kind: "combined_signal";
  citySlug: string;
  providerEventId?: string | null;
  forecastVariable?: string | null;
  signalType?: string | null;
  modelProbability?: number | null;
  marketProbability?: number | null;
  disagreement?: number | null;
  rawEdge?: number | null;
  adjustedEdge?: number | null;
  confidence?: number | null;
  freshnessStatus?: "fresh" | "aging" | "stale" | "unknown";
  status: CombinedSignalStatus;
  explanation?: string | null;
  raw?: JsonRecord;
};

export type NormalizedRecord =
  | NormalizedForecastRunRecord
  | NormalizedForecastPointRecord
  | NormalizedMarketEventRecord
  | NormalizedMarketTimeseriesRecord
  | NormalizedSignalRecord;

export type ForecastPointRecord = NormalizedForecastPointRecord;
export type MarketEventRecord = NormalizedMarketEventRecord;
export type SignalOutput = NormalizedSignalRecord;

export type ProviderRunLog = {
  id?: string;
  providerId: string;
  providerType: ProviderAdapter["type"];
  adapterVersion: string;
  idempotencyKey?: string | null;
  fetchedAt: string;
  staleAfter: string;
  status: "running" | "complete" | "stale" | "failed";
  recordsSeen: number;
  recordsInserted: number;
  recordsUpdated: number;
  error?: string | null;
  metadata: JsonRecord;
};

export type ProviderAdapter = {
  id: string;
  type: "weather" | "market" | "observation";
  version: string;
  fetch: (input: AdapterInput) => Promise<RawProviderPayload>;
  normalize: (payload: RawProviderPayload) => Promise<NormalizedRecord[]>;
};

export type NormalizedWriteResult = {
  recordsSeen: number;
  forecastRunsUpserted: number;
  forecastPointsUpserted: number;
  marketEventsUpserted: number;
  marketTimeseriesUpserted: number;
  marketLinksUpserted: number;
  signalsInserted: number;
};
