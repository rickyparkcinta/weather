import { getHealthReport } from "@/lib/data/health";
import { getMarketIntel } from "@/lib/data/market-intel";
import { getCityBySlug, listCities, listCombinedSignals, listForecastPoints, listMarkets, usingDemoData } from "@/lib/data/queries";
import { defaultAlertRules, evaluateOperationalAlerts } from "@/lib/intel/alerts";
import { listDemoProviderHealth, buildDemoIngestionLogs, weatherProviderAdapters } from "@/lib/intel/providers";
import { getRealtimeStatus } from "@/lib/intel/realtime";
import { resolveSettlementSource } from "@/lib/intel/settlement";
import { effectiveGap } from "@/lib/signals/classify";
import type { City, CompactMarketSummary, CombinedSignal, MarketEvent, ProviderHealth } from "@/types/domain";

function freshnessFromMarket(market: MarketEvent) {
  const timestamp = typeof market.raw.fetchedAt === "string" ? market.raw.fetchedAt : market.updatedAt ?? market.createdAt ?? null;
  if (!timestamp) return "unknown";
  const ageHours = (Date.now() - new Date(timestamp).getTime()) / 3_600_000;
  if (!Number.isFinite(ageHours)) return "unknown";
  if (ageHours <= 6) return "fresh";
  if (ageHours <= 24) return "aging";
  return "stale";
}

function compactSummary(market: MarketEvent, signal: CombinedSignal | null, city: City | null): CompactMarketSummary {
  const settlement = city ? resolveSettlementSource(city, market) : null;
  return {
    marketId: market.id,
    title: market.title,
    city: city?.name ?? null,
    provider: market.provider,
    marketProbability: signal?.marketProbability ?? market.probability,
    modelProbability: signal?.modelProbability ?? null,
    edge: signal ? effectiveGap(signal) : null,
    confidence: signal?.confidence ?? null,
    settlementSource: settlement ? `${settlement.station.code} ${settlement.station.name}` : market.resolutionSource ?? "unmapped",
    freshness: signal?.freshnessStatus ?? freshnessFromMarket(market)
  };
}

export async function getMarketSummary(id: string) {
  const intel = await getMarketIntel(id);
  if (!intel) return null;
  return {
    ...compactSummary(intel.market, intel.signal, intel.cities[0] ?? null),
    settlement: intel.settlement,
    probability: intel.probability,
    calibration: intel.calibration,
    modelStack: intel.modelStack,
    explanation: intel.explanation
  };
}

export async function getCitySummary(slug: string) {
  const city = await getCityBySlug(slug);
  if (!city) return null;
  const [forecast, markets, signals] = await Promise.all([
    listForecastPoints({ cityId: city.id }),
    listMarkets({ cityId: city.id }),
    listCombinedSignals(city.id)
  ]);
  return {
    city,
    forecast,
    markets: markets.map((market) => compactSummary(market, signals.find((signal) => signal.marketEventId === market.id) ?? null, city)),
    signals,
    settlements: markets.map((market) => resolveSettlementSource(city, market)),
    generatedAt: new Date().toISOString(),
    demoMode: usingDemoData()
  };
}

export async function getTopSignals(limit = 10) {
  const [markets, cities, signals] = await Promise.all([listMarkets(), listCities(), listCombinedSignals()]);
  return [...signals]
    .sort((a, b) => Math.abs(effectiveGap(b) ?? 0) - Math.abs(effectiveGap(a) ?? 0))
    .slice(0, limit)
    .map((signal) => {
      const market = markets.find((item) => item.id === signal.marketEventId) ?? null;
      const city = cities.find((item) => item.id === signal.cityId) ?? null;
      return market
        ? compactSummary(market, signal, city)
        : {
            marketId: signal.marketEventId ?? "unmapped",
            title: signal.forecastVariable ?? "Unmapped signal",
            city: city?.name ?? null,
            provider: "unknown",
            marketProbability: signal.marketProbability,
            modelProbability: signal.modelProbability,
            edge: effectiveGap(signal),
            confidence: signal.confidence ?? null,
            settlementSource: "unmapped",
            freshness: signal.freshnessStatus ?? "unknown"
          };
    });
}

export async function getEdgeSummaries(limit = 20) {
  return getTopSignals(limit);
}

export async function getProviderStatus() {
  const health = listDemoProviderHealth();
  return {
    providers: health,
    adapters: weatherProviderAdapters,
    generatedAt: new Date().toISOString(),
    demoMode: usingDemoData()
  };
}

export async function getIngestionStatus() {
  return {
    logs: buildDemoIngestionLogs(),
    generatedAt: new Date().toISOString(),
    demoMode: usingDemoData()
  };
}

export async function getCacheStatus() {
  return {
    cache: {
      status: "placeholder",
      hitRate: null,
      missRate: null,
      lastGoodSnapshotKey: "riweather:last-good-snapshot",
      notes: "Cache hit/miss counters are reserved for the production cache adapter."
    },
    realtime: getRealtimeStatus(),
    generatedAt: new Date().toISOString()
  };
}

export async function getSystemStatus() {
  const [health, providers, ingestion, cache, topSignals] = await Promise.all([
    getHealthReport(),
    getProviderStatus(),
    getIngestionStatus(),
    getCacheStatus(),
    getTopSignals(5)
  ]);
  const providerRows: ProviderHealth[] = providers.providers;
  const alerts = evaluateOperationalAlerts({
    providers: providerRows,
    settlements: [],
    edge: topSignals[0]?.edge ?? null
  });

  return {
    mode: health.demoMode ? "demo" : "production",
    health,
    providers: providerRows,
    ingestion: ingestion.logs,
    cache: cache.cache,
    realtime: cache.realtime,
    alerts,
    alertRules: defaultAlertRules,
    topSignals,
    generatedAt: new Date().toISOString()
  };
}
