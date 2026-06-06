export type JsonRecord = Record<string, unknown>;

export type City = {
  id: string;
  slug: string;
  name: string;
  country: string;
  countryCode: string | null;
  region: string | null;
  lat: number;
  lon: number;
  timezone: string | null;
  population: number | null;
  importanceScore: number;
  createdAt?: string;
  updatedAt?: string;
};

export type ForecastPoint = {
  id: string;
  cityId: string;
  forecastRunId?: string | null;
  provider: string;
  model: string;
  runTime: string;
  forecastTime: string;
  variable: string;
  value: number;
  unit: string;
  lat?: number | null;
  lon?: number | null;
  confidence: number | null;
  raw: JsonRecord;
  createdAt?: string;
};

export type ForecastRun = {
  id: string;
  provider: string;
  model: string;
  runTime: string;
  sourceUrl: string | null;
  status: string;
  metadata: JsonRecord;
  createdAt?: string;
};

export type MarketEvent = {
  id: string;
  provider: string;
  providerEventId: string;
  title: string;
  description: string | null;
  category: string | null;
  tags: string[];
  cityIds: string[];
  countryCodes: string[];
  probability: number | null;
  bid: number | null;
  ask: number | null;
  volume: number | null;
  liquidity: number | null;
  openInterest: number | null;
  closeTime: string | null;
  resolutionSource: string | null;
  url: string | null;
  status: string | null;
  raw: JsonRecord;
  createdAt?: string;
  updatedAt?: string;
};

export type MarketTimeSeriesPoint = {
  id?: string;
  marketEventId: string;
  provider: string;
  timestamp: string;
  probability: number | null;
  bid: number | null;
  ask: number | null;
  volume: number | null;
  liquidity: number | null;
  raw: JsonRecord;
};

export type CityMarketLink = {
  id: string;
  cityId: string;
  marketEventId: string;
  relevanceScore: number;
  linkReason: string | null;
  createdAt?: string;
};

export type CombinedSignalStatus =
  | "aligned"
  | "watch"
  | "divergent"
  | "stale"
  | "unavailable"
  | "avoid"
  | "market_above_model"
  | "model_above_market"
  | "insufficient_data";

export type CombinedSignal = {
  id?: string;
  cityId: string;
  marketEventId: string | null;
  forecastVariable: string | null;
  signalType: string | null;
  modelProbability: number | null;
  marketProbability: number | null;
  disagreement: number | null;
  rawEdge?: number | null;
  adjustedEdge?: number | null;
  confidence?: number | null;
  freshnessStatus?: "fresh" | "aging" | "stale" | "unknown" | null;
  status: CombinedSignalStatus;
  explanation: string | null;
  computedAt?: string;
  raw?: JsonRecord;
};

export type DashboardData = {
  cities: City[];
  selectedCity: City;
  forecast: ForecastPoint[];
  markets: MarketEvent[];
  signals: CombinedSignal[];
  demoMode: boolean;
  generatedAt: string;
};
