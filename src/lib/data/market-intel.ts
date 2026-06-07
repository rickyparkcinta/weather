import {
  getMarketById,
  getMarketHistory,
  listCities,
  listCombinedSignals,
  listForecastPoints,
  listWeatherAgentReports
} from "@/lib/data/queries";
import { computeCombinedSignal } from "@/lib/signals/computeCombinedSignal";
import type { City, CombinedSignal, MarketEvent, MarketTimeSeriesPoint, WeatherAgentReport } from "@/types/domain";

export type MarketIntel = {
  market: MarketEvent;
  history: MarketTimeSeriesPoint[];
  cities: City[];
  signal: CombinedSignal | null;
  weatherImpactReport: WeatherAgentReport | null;
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

  return { market, history, cities, signal, weatherImpactReport };
}
