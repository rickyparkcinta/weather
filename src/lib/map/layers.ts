import { classifySignal } from "@/lib/signals/classify";
import type { City, CombinedSignal, ForecastPoint, MarketEvent } from "@/types/domain";

type LayerFeatureProperties = Record<string, string | number | boolean | null>;

export type CanonicalMapLayerPayload = {
  generatedAt: string;
  city: Pick<City, "id" | "slug" | "name" | "lat" | "lon">;
  layers: {
    forecast: GeoJSON.FeatureCollection<GeoJSON.Point, LayerFeatureProperties>;
    markets: GeoJSON.FeatureCollection<GeoJSON.Point, LayerFeatureProperties>;
    signals: GeoJSON.FeatureCollection<GeoJSON.Point, LayerFeatureProperties>;
  };
  summary: {
    forecastPoints: number;
    markets: number;
    signals: number;
  };
};

function latestTimestamp(values: Array<string | null | undefined>) {
  return values
    .map((value) => (value ? new Date(value).getTime() : Number.NaN))
    .filter((value) => Number.isFinite(value))
    .sort((a, b) => b - a)[0];
}

export function computeFreshness(values: Array<string | null | undefined>) {
  const latest = latestTimestamp(values);
  if (!latest) return "unknown" as const;

  const ageHours = (Date.now() - latest) / (1000 * 60 * 60);
  if (ageHours <= 6) return "fresh" as const;
  if (ageHours <= 24) return "aging" as const;
  return "stale" as const;
}

function pointFeature(coordinates: [number, number], properties: LayerFeatureProperties): GeoJSON.Feature<GeoJSON.Point, LayerFeatureProperties> {
  return {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates
    },
    properties
  };
}

function signalEdge(signal: CombinedSignal) {
  if (typeof signal.rawEdge === "number") return signal.rawEdge;
  if (typeof signal.modelProbability === "number" && typeof signal.marketProbability === "number") {
    return Number((signal.modelProbability - signal.marketProbability).toFixed(3));
  }
  return null;
}

function addHoursIso(value: string | null | undefined, hours: number) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return new Date(date.getTime() + hours * 3_600_000).toISOString();
}

function rawTimestamp(raw: Record<string, unknown>, key: string) {
  return typeof raw[key] === "string" ? raw[key] : null;
}

export function buildMapLayerPayload(input: {
  city: City;
  cities: City[];
  forecast: ForecastPoint[];
  markets: MarketEvent[];
  signals: CombinedSignal[];
  generatedAt?: string;
}): CanonicalMapLayerPayload {
  const cityById = new Map(input.cities.map((city) => [city.id, city]));
  const forecastFeatures = input.forecast.flatMap((point) => {
    const lon = typeof point.lon === "number" ? point.lon : input.city.lon;
    const lat = typeof point.lat === "number" ? point.lat : input.city.lat;
    if (!Number.isFinite(lon) || !Number.isFinite(lat)) return [];

    return pointFeature([lon, lat], {
      layer: "forecast",
      id: point.id,
      provider: point.provider,
      model: point.model,
      variable: point.variable,
      value: point.value,
      unit: point.unit,
      confidence: point.confidence,
      freshness: computeFreshness([point.createdAt, point.runTime]),
      forecastTime: point.forecastTime,
      runTime: point.runTime,
      staleAfter: addHoursIso(point.runTime, 24)
    });
  });

  const marketFeatures = input.markets.flatMap((market) => {
    const city = market.cityIds.map((id) => cityById.get(id)).find(Boolean) ?? input.city;
    if (!Number.isFinite(city.lon) || !Number.isFinite(city.lat)) return [];
    const fetchedAt = rawTimestamp(market.raw, "fetchedAt");
    const marketSnapshot = fetchedAt ?? market.updatedAt ?? market.createdAt ?? null;

    return pointFeature([city.lon, city.lat], {
      layer: "market",
      id: market.id,
      provider: market.provider,
      providerEventId: market.providerEventId,
      title: market.title,
      probability: market.probability,
      bid: market.bid,
      ask: market.ask,
      liquidity: market.liquidity,
      volume: market.volume,
      status: market.status,
      freshness: computeFreshness([marketSnapshot]),
      fetchedAt,
      marketSnapshot,
      staleAfter: addHoursIso(marketSnapshot, 24)
    });
  });

  const marketById = new Map(input.markets.map((market) => [market.id, market]));
  const signalFeatures = input.signals.flatMap((signal) => {
    const market = signal.marketEventId ? marketById.get(signal.marketEventId) : null;
    const city = market?.cityIds.map((id) => cityById.get(id)).find(Boolean) ?? input.city;
    if (!Number.isFinite(city.lon) || !Number.isFinite(city.lat)) return [];

    const rawEdge = signalEdge(signal);
    const freshness = signal.freshnessStatus ?? computeFreshness([signal.computedAt]);
    const displayState = classifySignal({ ...signal, freshnessStatus: freshness }).state;

    return pointFeature([city.lon, city.lat], {
      layer: "signal",
      id: signal.id ?? null,
      marketEventId: signal.marketEventId,
      forecastVariable: signal.forecastVariable,
      signalType: signal.signalType,
      modelProbability: signal.modelProbability,
      marketProbability: signal.marketProbability,
      disagreement: signal.disagreement,
      rawEdge,
      adjustedEdge: signal.adjustedEdge ?? (rawEdge !== null && typeof signal.confidence === "number" ? Number((rawEdge * signal.confidence).toFixed(3)) : null),
      confidence: signal.confidence ?? null,
      freshness,
      state: displayState,
      computedAt: signal.computedAt ?? null,
      staleAfter: addHoursIso(signal.computedAt, 24),
      explanation: signal.explanation
    });
  });

  return {
    generatedAt: input.generatedAt ?? new Date().toISOString(),
    city: {
      id: input.city.id,
      slug: input.city.slug,
      name: input.city.name,
      lat: input.city.lat,
      lon: input.city.lon
    },
    layers: {
      forecast: {
        type: "FeatureCollection",
        features: forecastFeatures
      },
      markets: {
        type: "FeatureCollection",
        features: marketFeatures
      },
      signals: {
        type: "FeatureCollection",
        features: signalFeatures
      }
    },
    summary: {
      forecastPoints: forecastFeatures.length,
      markets: marketFeatures.length,
      signals: signalFeatures.length
    }
  };
}
