import { listCities, listCombinedSignals, listMarkets } from "@/lib/data/queries";
import type { CityMarketEvent, WeatherEventCategory } from "@/lib/markets/types";
import type { CombinedSignal, MarketEvent } from "@/types/domain";

function categoryFor(signal: CombinedSignal, market: MarketEvent): WeatherEventCategory | null {
  switch (signal.forecastVariable) {
    case "precipitation_probability":
      return "rain";
    case "snow_probability":
      return "snow";
    case "temperature_2m":
      return "temperature";
    case "wind_speed_10m": {
      const text = market.title.toLowerCase();
      return text.includes("storm") || text.includes("hurricane") || text.includes("typhoon") ? "storm" : "wind";
    }
    default:
      return null;
  }
}

function eventWindowFor(market: MarketEvent) {
  if (!market.closeTime) return "Until provider close";
  const close = new Date(market.closeTime);
  if (!Number.isFinite(close.getTime())) return "Until provider close";
  return `Closes ${close.toISOString().slice(0, 16).replace("T", " ")} UTC`;
}

/**
 * City market events for the dashboard feed, joined from live cities, market
 * events, and combined signals. Only signals with both a model and a market
 * probability and a mappable weather category are included; fields without a
 * live source (run-to-run volatility, model trend, model inputs) stay unset.
 */
export async function listLiveCityMarketEvents(): Promise<CityMarketEvent[]> {
  const [cities, markets, signals] = await Promise.all([listCities(), listMarkets(), listCombinedSignals()]);
  const cityById = new Map(cities.map((city) => [city.id, city]));
  const marketById = new Map(markets.map((market) => [market.id, market]));

  const events: CityMarketEvent[] = [];
  const seen = new Set<string>();

  for (const signal of signals) {
    if (signal.modelProbability === null || signal.marketProbability === null || !signal.marketEventId) continue;

    const market = marketById.get(signal.marketEventId);
    const city = cityById.get(signal.cityId);
    if (!market || !city) continue;

    const category = categoryFor(signal, market);
    if (!category) continue;

    // Signals arrive newest first; keep only the latest per market/city pair.
    const key = `${market.id}:${city.id}`;
    if (seen.has(key)) continue;
    seen.add(key);

    const updatedAt = signal.computedAt ?? market.updatedAt ?? market.createdAt;
    if (!updatedAt) continue;

    events.push({
      id: key,
      city: city.name,
      country: city.country,
      countryCode: city.countryCode ?? "",
      region: city.region ?? undefined,
      lat: city.lat,
      lon: city.lon,
      eventTitle: market.title,
      eventCategory: category,
      eventWindow: eventWindowFor(market),
      resolutionRule: market.resolutionSource ?? "Resolves per the provider's published market rules.",
      marketProbability: signal.marketProbability,
      aiProbability: signal.modelProbability,
      confidence: signal.confidence ?? 0,
      modelDisagreement: signal.disagreement ?? undefined,
      liquidity: market.liquidity ?? undefined,
      source: market.provider,
      updatedAt
    });
  }

  return events;
}
