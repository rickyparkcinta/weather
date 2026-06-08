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
  | "high_uncertainty"
  // Legacy statuses accepted from older rows and adapters. UI maps these into
  // the neutral display states above.
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

export type WeatherAgentReport = {
  id: string;
  cityId: string | null;
  marketEventId: string | null;
  reportType: string;
  score: number | null;
  confidence: string | null;
  status: string;
  weatherSnapshot: JsonRecord;
  recommendations: unknown[];
  rationale: string[];
  riskNotes: string[];
  disclaimer: string;
  modelVersion: string;
  computedAt: string | null;
  raw: JsonRecord;
};

export type DashboardData = {
  cities: City[];
  selectedCity: City;
  forecast: ForecastPoint[];
  markets: MarketEvent[];
  signals: CombinedSignal[];
  weatherAgentReports: WeatherAgentReport[];
  demoMode: boolean;
  generatedAt: string;
};

export type OfficialSourceProvider = {
  id: string;
  name: string;
  providerType: "weather_agency" | "aviation_weather" | "market_provider" | "manual" | "model";
  countryCode: string | null;
  documentationUrl: string | null;
  status: "online" | "degraded" | "stale" | "offline" | "unknown";
  attribution: string | null;
  lastCheckedAt: string | null;
};

export type SettlementStation = {
  id: string;
  code: string;
  name: string;
  stationType: "airport" | "national_weather_agency" | "local_official" | "fallback";
  providerId: string;
  countryCode: string | null;
  lat: number;
  lon: number;
  timezone: string;
  elevationM: number | null;
  sourceConfidence: number;
  status: "online" | "degraded" | "stale" | "offline" | "unknown";
  metadataUrl: string | null;
  lastObservedAt: string | null;
  lastObservedValue: number | null;
  lastObservedUnit: string | null;
};

export type SettlementStationAlias = {
  id: string;
  stationId: string;
  alias: string;
  provider: string | null;
};

export type CityStationLink = {
  id: string;
  cityId: string;
  stationId: string;
  priority: number;
  distanceKm: number;
  linkType: "primary" | "market_specific" | "fallback";
  notes: string | null;
};

export type MarketSettlementRule = {
  id: string;
  marketEventId: string;
  stationId: string | null;
  providerId: string | null;
  eventWindowStart: string | null;
  eventWindowEnd: string | null;
  timezone: string;
  variable: string;
  threshold: number | null;
  operator: ">=" | ">" | "<=" | "<" | "=" | "range" | "bucket" | "unknown";
  sourceConfidence: number;
  notes: string | null;
};

export type SettlementSourceSummary = {
  station: SettlementStation;
  provider: OfficialSourceProvider;
  rule: MarketSettlementRule;
  cityDistanceKm: number;
  aliases: string[];
  stale: boolean;
  status: "fresh" | "aging" | "stale" | "unknown";
};

export type WeatherObservation = {
  id: string;
  stationId: string;
  observedAt: string;
  variable: string;
  value: number;
  unit: string;
  provider: string;
  qualityFlag: "ok" | "suspect" | "missing" | "corrected";
  raw: JsonRecord;
};

export type ProviderHealth = {
  providerId: string;
  name: string;
  providerType: "weather" | "market" | "observation" | "ai" | "payments" | "cache";
  status: "online" | "degraded" | "stale" | "offline" | "unknown";
  lastSuccessAt: string | null;
  lastAttemptAt: string | null;
  staleAfter: string | null;
  latencyMs: number | null;
  error: string | null;
  freshnessMinutes: number | null;
};

export type IngestionLog = {
  id: string;
  providerId: string;
  jobType: string;
  status: "running" | "complete" | "stale" | "failed";
  startedAt: string;
  finishedAt: string | null;
  recordsSeen: number;
  recordsInserted: number;
  recordsUpdated: number;
  error: string | null;
};

export type ModelMember = {
  id: string;
  provider: string;
  model: string;
  runTime: string;
  leadTimeHours: number;
  variable: string;
  value: number;
  unit: string;
  recentError: number | null;
  leadTimeSkill: number | null;
  freshnessMinutes: number | null;
  runToRunDelta: number | null;
};

export type ModelWeight = {
  memberId: string;
  provider: string;
  model: string;
  weight: number;
  penalties: {
    error: number;
    freshness: number;
    volatility: number;
  };
  components: {
    recentErrorSkill: number;
    leadTimeSkill: number;
    providerFreshness: number;
  };
};

export type DynamicErrorBalancingResult = {
  method: "dynamic_error_balancing";
  modelMean: number | null;
  clusterMean: number | null;
  modelSpread: number | null;
  runToRunVolatility: number | null;
  recentTrend: number | null;
  officialObservationCorrection: number;
  settlementStationAdjustment: number;
  cityToStationAdjustment: number;
  blendedValue: number | null;
  unit: string | null;
  fallbackModelHierarchy: string[];
  weights: ModelWeight[];
  generatedAt: string;
};

export type TemperatureBucket = {
  id: string;
  label: string;
  kind: "exact" | "range" | "above_or_equal" | "below_or_equal";
  min: number | null;
  max: number | null;
  inclusiveMin: boolean;
  inclusiveMax: boolean;
  unit: "C" | "F";
};

export type BucketProbability = {
  bucket: TemperatureBucket;
  probability: number;
  overlaps: string[];
  impossible: boolean;
};

export type ProbabilitySummary = {
  rawModelProbability: number | null;
  calibratedModelProbability: number | null;
  ensembleProbability: number | null;
  eventProbability: number | null;
  confidenceScore: number;
  confidenceAdjustedProbability: number | null;
  uncertaintyBand: [number, number] | null;
  buckets: BucketProbability[];
  marketProbability: number | null;
  rawEdge: number | null;
  adjustedEdge: number | null;
  netEdge: number | null;
  label: "Model-over-market signal" | "Market-over-model signal" | "Neutral" | "Avoid: uncertainty too high";
};

export type CalibrationSummary = {
  method: "legacy_normal" | "recent_bias_correction" | "model_skill_weighting" | "emos_shadow";
  version: string;
  modelMean: number | null;
  calibratedMean: number | null;
  uncertaintySigma: number | null;
  historicalError: number | null;
  brierScore: number | null;
  reliabilityBins: { bin: string; forecastProbability: number; observedFrequency: number | null; count: number }[];
  generatedAt: string;
};

export type MarketContract = {
  id: string;
  marketEventId: string;
  providerContractId: string;
  outcome: string;
  price: number | null;
  bid: number | null;
  ask: number | null;
  liquidity: number | null;
  raw: JsonRecord;
};

export type MarketBucketMapping = {
  id: string;
  marketEventId: string;
  contractId: string | null;
  bucket: TemperatureBucket;
  parserVersion: string;
  warnings: string[];
};

export type MarketEdgeSnapshot = {
  id: string;
  marketEventId: string;
  computedAt: string;
  modelProbability: number | null;
  marketProbability: number | null;
  rawEdge: number | null;
  adjustedEdge: number | null;
  netEdge: number | null;
  confidence: number;
  label: ProbabilitySummary["label"];
};

export type StructuredWeatherExplanation = {
  weatherPathSummary: string;
  baselineScenario: string;
  upsideWeatherScenario: string;
  downsideWeatherScenario: string;
  invalidationConditions: string[];
  confirmationConditions: string[];
  nextObservationCheckpoints: string[];
  evidenceChain: string[];
  modelLayerExplanation: string;
  settlementSourceExplanation: string;
  generatedBy: "deterministic" | "llm";
};

export type AlertType =
  | "probability_crosses_threshold"
  | "market_edge_crosses_threshold"
  | "station_observation_updates"
  | "forecast_run_changes"
  | "provider_outage"
  | "stale_settlement_source"
  | "major_model_disagreement"
  | "run_to_run_volatility_spike";

export type AlertRule = {
  id: string;
  type: AlertType;
  label: string;
  enabled: boolean;
  threshold: number | null;
  channels: ("web" | "email" | "telegram" | "webhook")[];
};

export type SubscriptionPlan = {
  id: string;
  name: string;
  description: string;
  entitlements: string[];
  active: boolean;
};

export type UserSubscription = {
  id: string;
  userId: string;
  planId: string;
  status: "trialing" | "active" | "past_due" | "canceled" | "incomplete";
  currentPeriodEnd: string | null;
};

export type EntitlementCheck = {
  allowed: boolean;
  planId: string | null;
  entitlement: string;
  reason: string;
};

export type CompactMarketSummary = {
  marketId: string;
  title: string;
  city: string | null;
  provider: string;
  marketProbability: number | null;
  modelProbability: number | null;
  edge: number | null;
  confidence: number | null;
  settlementSource: string;
  freshness: string;
};
