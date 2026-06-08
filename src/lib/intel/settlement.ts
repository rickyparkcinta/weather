import type {
  City,
  CityStationLink,
  MarketEvent,
  MarketSettlementRule,
  OfficialSourceProvider,
  SettlementSourceSummary,
  SettlementStation,
  SettlementStationAlias
} from "@/types/domain";

const nowIso = () => new Date().toISOString();

export const officialSourceProviders: OfficialSourceProvider[] = [
  {
    id: "noaa-nws",
    name: "NOAA / National Weather Service",
    providerType: "weather_agency",
    countryCode: "US",
    documentationUrl: "https://www.weather.gov/documentation/services-web-api",
    status: "online",
    attribution: "NOAA/NWS public weather data",
    lastCheckedAt: nowIso()
  },
  {
    id: "metar-aviation",
    name: "Aviation METAR Network",
    providerType: "aviation_weather",
    countryCode: null,
    documentationUrl: "https://aviationweather.gov/data/api/",
    status: "online",
    attribution: "Public aviation weather observations where available",
    lastCheckedAt: nowIso()
  },
  {
    id: "hko",
    name: "Hong Kong Observatory",
    providerType: "weather_agency",
    countryCode: "HK",
    documentationUrl: "https://www.hko.gov.hk/en/abouthko/opendata_intro.htm",
    status: "online",
    attribution: "Hong Kong Observatory open data",
    lastCheckedAt: nowIso()
  },
  {
    id: "jma",
    name: "Japan Meteorological Agency",
    providerType: "weather_agency",
    countryCode: "JP",
    documentationUrl: "https://www.jma.go.jp/jma/en/Activities/observations.html",
    status: "online",
    attribution: "Japan Meteorological Agency public observations",
    lastCheckedAt: nowIso()
  },
  {
    id: "open-meteo",
    name: "Open-Meteo",
    providerType: "model",
    countryCode: null,
    documentationUrl: "https://open-meteo.com/en/docs",
    status: "online",
    attribution: "Open-Meteo forecast and archive APIs",
    lastCheckedAt: nowIso()
  }
];

export const settlementStations: SettlementStation[] = [
  station("KNYC", "New York City Central Park", "national_weather_agency", "noaa-nws", "US", 40.7789, -73.9692, "America/New_York", 0.84, 23.4, "C"),
  station("KJFK", "John F. Kennedy International Airport", "airport", "metar-aviation", "US", 40.6398, -73.7789, "America/New_York", 0.8, 21.8, "C"),
  station("EGLL", "London Heathrow Airport", "airport", "metar-aviation", "GB", 51.4775, -0.4614, "Europe/London", 0.78, 17.9, "C"),
  station("RJTT", "Tokyo Haneda Airport", "airport", "metar-aviation", "JP", 35.5523, 139.7798, "Asia/Tokyo", 0.78, 24.1, "C"),
  station("RKSS", "Seoul Gimpo Airport", "airport", "metar-aviation", "KR", 37.5583, 126.7906, "Asia/Seoul", 0.78, 21.2, "C"),
  station("VHHH", "Hong Kong International Airport", "airport", "metar-aviation", "HK", 22.308, 113.9185, "Asia/Hong_Kong", 0.77, 28.4, "C"),
  station("HKO-HK", "Hong Kong Observatory Headquarters", "local_official", "hko", "HK", 22.3022, 114.1746, "Asia/Hong_Kong", 0.91, 29.1, "C"),
  station("WSSS", "Singapore Changi Airport", "airport", "metar-aviation", "SG", 1.3644, 103.9915, "Asia/Singapore", 0.78, 30.3, "C"),
  station("LFPG", "Paris Charles de Gaulle Airport", "airport", "metar-aviation", "FR", 49.0097, 2.5479, "Europe/Paris", 0.74, 19.2, "C"),
  station("EDDB", "Berlin Brandenburg Airport", "airport", "metar-aviation", "DE", 52.3667, 13.5033, "Europe/Berlin", 0.74, 18.8, "C"),
  station("YSSY", "Sydney Airport", "airport", "metar-aviation", "AU", -33.9461, 151.1772, "Australia/Sydney", 0.77, 16.6, "C")
];

export const settlementStationAliases: SettlementStationAlias[] = [
  { id: "alias-hko-hq", stationId: "HKO-HK", alias: "Hong Kong Observatory", provider: "hko" },
  { id: "alias-vhhh", stationId: "VHHH", alias: "HKIA", provider: "metar" },
  { id: "alias-knyc", stationId: "KNYC", alias: "Central Park", provider: "noaa-nws" },
  { id: "alias-rkss", stationId: "RKSS", alias: "Gimpo", provider: "metar" }
];

function station(
  code: string,
  name: string,
  stationType: SettlementStation["stationType"],
  providerId: string,
  countryCode: string,
  lat: number,
  lon: number,
  timezone: string,
  sourceConfidence: number,
  lastObservedValue: number,
  lastObservedUnit: string
): SettlementStation {
  return {
    id: code,
    code,
    name,
    stationType,
    providerId,
    countryCode,
    lat,
    lon,
    timezone,
    elevationM: null,
    sourceConfidence,
    status: "online",
    metadataUrl: null,
    lastObservedAt: new Date(Date.now() - 58 * 60_000).toISOString(),
    lastObservedValue,
    lastObservedUnit
  };
}

function degreesToRadians(degrees: number) {
  return (degrees * Math.PI) / 180;
}

export function distanceKm(a: Pick<City, "lat" | "lon">, b: Pick<SettlementStation, "lat" | "lon">) {
  const earthKm = 6371;
  const dLat = degreesToRadians(b.lat - a.lat);
  const dLon = degreesToRadians(b.lon - a.lon);
  const lat1 = degreesToRadians(a.lat);
  const lat2 = degreesToRadians(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return Number((2 * earthKm * Math.asin(Math.sqrt(h))).toFixed(1));
}

function matchStation(city: City, market: MarketEvent) {
  const haystack = `${city.slug} ${city.name} ${market.title} ${market.tags.join(" ")}`.toLowerCase();
  if (haystack.includes("hong kong") || haystack.includes("hong-kong") || city.countryCode === "HK") {
    return haystack.includes("airport") ? stationByCode("VHHH") : stationByCode("HKO-HK");
  }
  if (haystack.includes("new york") || city.slug === "new-york") return stationByCode("KNYC");
  if (haystack.includes("london") || city.slug === "london") return stationByCode("EGLL");
  if (haystack.includes("tokyo") || city.slug === "tokyo") return stationByCode("RJTT");
  if (haystack.includes("seoul") || city.slug === "seoul") return stationByCode("RKSS");
  if (haystack.includes("singapore") || city.slug === "singapore") return stationByCode("WSSS");
  if (haystack.includes("paris") || city.slug === "paris") return stationByCode("LFPG");
  if (haystack.includes("berlin") || city.slug === "berlin") return stationByCode("EDDB");
  if (haystack.includes("sydney") || city.slug === "sydney") return stationByCode("YSSY");

  return nearestStation(city);
}

function stationByCode(code: string) {
  return settlementStations.find((stationItem) => stationItem.code === code) ?? settlementStations[0];
}

function nearestStation(city: City) {
  return [...settlementStations].sort((a, b) => distanceKm(city, a) - distanceKm(city, b))[0] ?? settlementStations[0];
}

function inferVariable(market: MarketEvent) {
  const text = `${market.title} ${market.tags.join(" ")}`.toLowerCase();
  if (text.includes("rain") || text.includes("precip")) return "precipitation";
  if (text.includes("snow")) return "snowfall";
  if (text.includes("wind") || text.includes("typhoon") || text.includes("hurricane")) return "wind_speed";
  if (text.includes("temperature") || text.includes("heat") || text.includes("cold")) return "temperature";
  return "weather_event";
}

function inferOperator(market: MarketEvent): MarketSettlementRule["operator"] {
  const text = market.title.toLowerCase();
  if (/\b(between|range)\b/.test(text)) return "range";
  if (/\b(exceed|above|over|at least|>=)\b/.test(text)) return ">=";
  if (/\b(below|under|at most|<=)\b/.test(text)) return "<=";
  if (/\bexactly\b/.test(text)) return "=";
  return "unknown";
}

function inferThreshold(market: MarketEvent) {
  const match = market.title.match(/(-?\d+(?:\.\d+)?)\s?(?:f|c|mm|in|mph|kph|km\/h)?\b/i);
  return match ? Number(match[1]) : null;
}

function sourceStatus(stationItem: SettlementStation): SettlementSourceSummary["status"] {
  if (!stationItem.lastObservedAt) return "unknown";
  const ageHours = (Date.now() - new Date(stationItem.lastObservedAt).getTime()) / 3_600_000;
  if (!Number.isFinite(ageHours)) return "unknown";
  if (ageHours <= 6) return "fresh";
  if (ageHours <= 24) return "aging";
  return "stale";
}

export function buildCityStationLink(city: City, stationItem: SettlementStation, linkType: CityStationLink["linkType"] = "primary"): CityStationLink {
  return {
    id: `${city.id}:${stationItem.id}:${linkType}`,
    cityId: city.id,
    stationId: stationItem.id,
    priority: linkType === "primary" ? 1 : linkType === "market_specific" ? 0 : 5,
    distanceKm: distanceKm(city, stationItem),
    linkType,
    notes: linkType === "fallback" ? "Nearest public station fallback." : null
  };
}

export function resolveSettlementSource(city: City, market: MarketEvent): SettlementSourceSummary {
  const stationItem = matchStation(city, market);
  const provider =
    officialSourceProviders.find((item) => item.id === stationItem.providerId) ??
    officialSourceProviders.find((item) => item.id === "open-meteo") ??
    officialSourceProviders[0];
  const eventEnd = market.closeTime ?? new Date(Date.now() + 24 * 60 * 60_000).toISOString();
  const eventStart = new Date(new Date(eventEnd).getTime() - 24 * 60 * 60_000).toISOString();
  const status = sourceStatus(stationItem);
  const rule: MarketSettlementRule = {
    id: `${market.id}:${stationItem.id}:rule`,
    marketEventId: market.id,
    stationId: stationItem.id,
    providerId: provider.id,
    eventWindowStart: eventStart,
    eventWindowEnd: eventEnd,
    timezone: stationItem.timezone || city.timezone || "UTC",
    variable: inferVariable(market),
    threshold: inferThreshold(market),
    operator: inferOperator(market),
    sourceConfidence: stationItem.sourceConfidence,
    notes: market.resolutionSource ?? "Derived public settlement-source mapping. Confirm provider rule text before resolution."
  };

  return {
    station: stationItem,
    provider,
    rule,
    cityDistanceKm: distanceKm(city, stationItem),
    aliases: settlementStationAliases
      .filter((alias) => alias.stationId === stationItem.id)
      .map((alias) => alias.alias),
    stale: status === "stale",
    status
  };
}
