import { listCities, listCombinedSignals, listForecastPoints, listMarkets } from "@/lib/data/queries";
import { classifySignal, effectiveGap, type SignalState } from "@/lib/signals/classify";
import type { City, CombinedSignal, ForecastPoint, MarketEvent } from "@/types/domain";

export type RankedSignal = {
  signal: CombinedSignal;
  city: City | null;
  market: MarketEvent | null;
  forecast: ForecastPoint | null;
  state: SignalState;
  gap: number | null;
  confidence: number | null;
  freshness: CombinedSignal["freshnessStatus"];
  liquidity: number | null;
  eventType: string | null;
};

function eventTypeFor(signal: CombinedSignal, market: MarketEvent | null): string | null {
  if (signal.forecastVariable) {
    if (signal.forecastVariable.startsWith("temperature")) return "temperature";
    if (signal.forecastVariable.startsWith("precip")) return "precipitation";
    if (signal.forecastVariable.startsWith("snow")) return "snow";
    if (signal.forecastVariable.startsWith("wind")) return "wind";
    if (signal.forecastVariable.startsWith("air")) return "air_quality";
  }
  return market?.category ?? null;
}

/**
 * Build a ranked list of weather-market signals joined with their city and market
 * context. Sorted by absolute adjusted probability gap, then confidence,
 * freshness, and liquidity.
 */
export async function getRankedSignals(): Promise<RankedSignal[]> {
  const [signals, markets, cities, forecast] = await Promise.all([
    listCombinedSignals(),
    listMarkets(),
    listCities(),
    listForecastPoints({})
  ]);

  const marketById = new Map(markets.map((m) => [m.id, m]));
  const cityById = new Map(cities.map((c) => [c.id, c]));
  const forecastByKey = latestForecastBySignalKey(forecast);

  const freshnessRank: Record<string, number> = { fresh: 3, aging: 2, stale: 1, unknown: 0 };

  const ranked: RankedSignal[] = signals.map((signal) => {
    const market = signal.marketEventId ? marketById.get(signal.marketEventId) ?? null : null;
    const city = cityById.get(signal.cityId) ?? null;
    const forecastPoint = signal.forecastVariable
      ? forecastByKey.get(signalKey(signal.cityId, signal.forecastVariable)) ?? null
      : null;
    const meta = classifySignal(signal);
    const gap = effectiveGap(signal);

    return {
      signal,
      city,
      market,
      forecast: forecastPoint,
      state: meta.state,
      gap,
      confidence: typeof signal.confidence === "number" ? signal.confidence : null,
      freshness: signal.freshnessStatus ?? "unknown",
      liquidity: market?.liquidity ?? null,
      eventType: eventTypeFor(signal, market)
    };
  });

  return ranked.sort((a, b) => {
    const gapDelta = Math.abs(b.gap ?? 0) - Math.abs(a.gap ?? 0);
    if (Math.abs(gapDelta) > 1e-6) return gapDelta;
    const confDelta = (b.confidence ?? 0) - (a.confidence ?? 0);
    if (Math.abs(confDelta) > 1e-6) return confDelta;
    const freshDelta =
      (freshnessRank[b.freshness ?? "unknown"] ?? 0) - (freshnessRank[a.freshness ?? "unknown"] ?? 0);
    if (freshDelta !== 0) return freshDelta;
    return (b.liquidity ?? 0) - (a.liquidity ?? 0);
  });
}

function signalKey(cityId: string, variable: string) {
  return `${cityId}::${variable}`;
}

function latestForecastBySignalKey(forecast: ForecastPoint[]) {
  const byKey = new Map<string, ForecastPoint>();

  for (const point of forecast) {
    const key = signalKey(point.cityId, point.variable);
    const current = byKey.get(key);
    if (!current || forecastTimestamp(point) > forecastTimestamp(current)) {
      byKey.set(key, point);
    }
  }

  return byKey;
}

function forecastTimestamp(point: ForecastPoint) {
  const value = point.createdAt ?? point.forecastTime ?? point.runTime;
  const timestamp = new Date(value).getTime();
  return Number.isFinite(timestamp) ? timestamp : 0;
}
