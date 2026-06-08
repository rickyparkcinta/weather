import {
  getMarketById,
  getMarketHistory,
  listCities,
  listCombinedSignals,
  listForecastPoints,
  listWeatherAgentReports
} from "@/lib/data/queries";
import { buildStructuredWeatherExplanation } from "@/lib/intel/analysis";
import { summarizeCalibration } from "@/lib/intel/calibration";
import { computeDynamicErrorBalancing, forecastPointsToModelMembers } from "@/lib/intel/model-stack";
import { parseTemperatureBuckets, summarizeProbability } from "@/lib/intel/probability";
import { resolveSettlementSource } from "@/lib/intel/settlement";
import { computeCombinedSignal } from "@/lib/signals/computeCombinedSignal";
import type {
  CalibrationSummary,
  City,
  CombinedSignal,
  DynamicErrorBalancingResult,
  MarketEvent,
  MarketTimeSeriesPoint,
  ProbabilitySummary,
  SettlementSourceSummary,
  StructuredWeatherExplanation,
  WeatherAgentReport
} from "@/types/domain";

export type MarketIntel = {
  market: MarketEvent;
  history: MarketTimeSeriesPoint[];
  cities: City[];
  signal: CombinedSignal | null;
  weatherImpactReport: WeatherAgentReport | null;
  settlement: SettlementSourceSummary | null;
  modelStack: DynamicErrorBalancingResult;
  probability: ProbabilitySummary;
  calibration: CalibrationSummary;
  explanation: StructuredWeatherExplanation | null;
};

/**
 * Find the combined signal for a market: prefer a stored signal joined by
 * marketEventId, otherwise derive one on the fly from the linked city's forecast.
 */
async function resolveSignal(market: MarketEvent, cities: City[]): Promise<CombinedSignal | null> {
  const stored = (await listCombinedSignals()).find((s) => s.marketEventId === market.id);
  if (stored) return stored;

  const city = cities[0];
  if (!city) return null;

  const forecast = await listForecastPoints({ cityId: city.id });
  if (forecast.length === 0) return null;

  return computeCombinedSignal({ city, market, forecast });
}

export async function getMarketIntel(id: string): Promise<MarketIntel | null> {
  const market = await getMarketById(id);
  if (!market) return null;

  const [history, allCities] = await Promise.all([getMarketHistory(id), listCities()]);
  const cities = allCities.filter((city) => market.cityIds.includes(city.id));
  const signal = await resolveSignal(market, cities.length ? cities : allCities);
  const reportCity = cities[0] ?? allCities.find((city) => market.cityIds.includes(city.id)) ?? null;
  const weatherImpactReport = reportCity
    ? (await listWeatherAgentReports({ cityId: reportCity.id, marketEventId: market.id, limit: 1 }))[0] ?? null
    : null;
  const forecast = reportCity ? await listForecastPoints({ cityId: reportCity.id }) : [];
  const settlement = reportCity ? resolveSettlementSource(reportCity, market) : null;
  const modelStack = computeDynamicErrorBalancing({
    members: forecastPointsToModelMembers(forecast),
    officialObservationValue: settlement?.station.lastObservedValue,
    settlementStationAdjustment: 0,
    cityToStationAdjustment: 0
  });
  const calibration = summarizeCalibration({ forecast, signal, method: "legacy_normal", version: "cal-v1-shadow" });
  const buckets = parseTemperatureBuckets(market.title);
  const probability = summarizeProbability({
    rawModelProbability: signal?.modelProbability ?? null,
    calibratedModelProbability:
      typeof signal?.modelProbability === "number" && typeof calibration.calibratedMean === "number"
        ? Math.max(0, Math.min(1, calibration.calibratedMean))
        : signal?.modelProbability ?? null,
    ensembleProbability: signal?.modelProbability ?? null,
    bucketMean: modelStack.blendedValue,
    bucketSigma: modelStack.modelSpread,
    buckets,
    marketProbability: signal?.marketProbability ?? market.probability,
    confidence: signal?.confidence ?? 0.55,
    fees: 0,
    slippage: typeof market.bid === "number" && typeof market.ask === "number" ? Math.abs(market.ask - market.bid) / 2 : 0,
    riskBuffer: 0.01
  });
  const explanation = settlement
    ? buildStructuredWeatherExplanation({
        market,
        signal,
        settlement,
        modelStack,
        calibration
      })
    : null;

  return { market, history, cities, signal, weatherImpactReport, settlement, modelStack, probability, calibration, explanation };
}
