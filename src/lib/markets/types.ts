export type WeatherEventCategory =
  | "rain"
  | "temperature"
  | "wind"
  | "snow"
  | "storm"
  | "humidity";

export type SignalLabel =
  | "Strong Long"
  | "Weak Long"
  | "Neutral"
  | "Weak Short"
  | "Strong Short"
  | "Avoid";

export type ModelTrend = "Rising" | "Falling" | "Stable" | "Volatile";

/**
 * A city-level weather prediction-market event as displayed in the Weather AI
 * dashboard feed. Probabilities are decimals (0.58 = 58%); the UI formats them
 * as percentages. Derived metrics (edge, adjusted edge, net edge, signal) live
 * on EnrichedCityMarketEvent and are computed in calculations.ts.
 */
export type CityMarketEvent = {
  id: string;
  city: string;
  country: string;
  countryCode: string;
  region?: string;
  lat: number;
  lon: number;
  eventTitle: string;
  eventCategory: WeatherEventCategory;
  eventWindow: string;
  resolutionRule: string;
  marketProbability: number;
  aiProbability: number;
  confidence: number;
  /** Run-to-run forecast volatility, 0 (steady) to 1 (very volatile). */
  volatility: number;
  /** Cross-model disagreement, 0 (consensus) to 1 (split). */
  modelDisagreement: number;
  modelTrend: ModelTrend;
  forecastModels: string[];
  liquidity?: number;
  fees?: number;
  slippage?: number;
  riskBuffer?: number;
  source?: string;
  riskNotes?: string[];
  updatedAt: string;
};

export type CityMarketEventDerived = {
  /** Raw edge: aiProbability − marketProbability, in decimal points. */
  edge: number;
  /** Confidence-adjusted edge: edge × confidence. */
  adjustedEdge: number;
  /** Net edge after demo fees, slippage, and risk buffer. */
  netEdge: number;
  signal: SignalLabel;
};

export type EnrichedCityMarketEvent = CityMarketEvent & CityMarketEventDerived;

export type MarketSortKey =
  | "signal"
  | "edge"
  | "confidence"
  | "updated"
  | "city";

export type MarketFilterState = {
  search: string;
  category: WeatherEventCategory | "all";
  signal: SignalLabel | "all";
  /** Minimum absolute raw edge in decimal (0.04 = 4 pts). */
  minEdge: number;
  /** Minimum confidence in decimal (0.5 = 50%). */
  minConfidence: number;
  sort: MarketSortKey;
};

export type MarketFeedSummary = {
  totalEvents: number;
  strongLongCount: number;
  /** Mean absolute raw edge across events, decimal. */
  averageEdge: number | null;
  /** Mean confidence across events, decimal. */
  averageConfidence: number | null;
  lastUpdatedAt: string | null;
};
