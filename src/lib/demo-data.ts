import type {
  City,
  CombinedSignal,
  ForecastPoint,
  MarketEvent,
  MarketTimeSeriesPoint
} from "@/types/domain";

const now = new Date("2026-06-05T00:00:00.000Z");

function cityId(index: number) {
  return `00000000-0000-4000-8000-${index.toString().padStart(12, "0")}`;
}

function pointId(index: number) {
  return `20000000-0000-4000-8000-${index.toString().padStart(12, "0")}`;
}

function hoursFromNow(hours: number) {
  return new Date(now.getTime() + hours * 60 * 60 * 1000).toISOString();
}

export const demoCities: City[] = [
  ["new-york", "New York", "United States", "US", "North America", 40.7128, -74.006, "America/New_York", 18804000, 99],
  ["london", "London", "United Kingdom", "GB", "Europe", 51.5072, -0.1276, "Europe/London", 9558000, 98],
  ["tokyo", "Tokyo", "Japan", "JP", "Asia", 35.6762, 139.6503, "Asia/Tokyo", 37400068, 100],
  ["seoul", "Seoul", "South Korea", "KR", "Asia", 37.5665, 126.978, "Asia/Seoul", 9963000, 97],
  ["singapore", "Singapore", "Singapore", "SG", "Asia", 1.3521, 103.8198, "Asia/Singapore", 5637000, 96],
  ["paris", "Paris", "France", "FR", "Europe", 48.8566, 2.3522, "Europe/Paris", 11020000, 95],
  ["berlin", "Berlin", "Germany", "DE", "Europe", 52.52, 13.405, "Europe/Berlin", 3571000, 92],
  ["dubai", "Dubai", "United Arab Emirates", "AE", "Middle East", 25.2048, 55.2708, "Asia/Dubai", 3331000, 91],
  ["sydney", "Sydney", "Australia", "AU", "Oceania", -33.8688, 151.2093, "Australia/Sydney", 5312000, 93],
  ["hong-kong", "Hong Kong", "Hong Kong", "HK", "Asia", 22.3193, 114.1694, "Asia/Hong_Kong", 7497000, 94],
  ["los-angeles", "Los Angeles", "United States", "US", "North America", 34.0522, -118.2437, "America/Los_Angeles", 12488000, 93],
  ["chicago", "Chicago", "United States", "US", "North America", 41.8781, -87.6298, "America/Chicago", 8498000, 90],
  ["toronto", "Toronto", "Canada", "CA", "North America", 43.6532, -79.3832, "America/Toronto", 6313000, 90],
  ["mexico-city", "Mexico City", "Mexico", "MX", "North America", 19.4326, -99.1332, "America/Mexico_City", 21804000, 91],
  ["sao-paulo", "São Paulo", "Brazil", "BR", "South America", -23.5558, -46.6396, "America/Sao_Paulo", 22430000, 92],
  ["buenos-aires", "Buenos Aires", "Argentina", "AR", "South America", -34.6037, -58.3816, "America/Argentina/Buenos_Aires", 15625000, 88],
  ["cape-town", "Cape Town", "South Africa", "ZA", "Africa", -33.9249, 18.4241, "Africa/Johannesburg", 4778000, 84],
  ["mumbai", "Mumbai", "India", "IN", "Asia", 19.076, 72.8777, "Asia/Kolkata", 21297000, 94],
  ["delhi", "Delhi", "India", "IN", "Asia", 28.7041, 77.1025, "Asia/Kolkata", 32941000, 95],
  ["jakarta", "Jakarta", "Indonesia", "ID", "Asia", -6.2088, 106.8456, "Asia/Jakarta", 33756000, 93],
  ["shanghai", "Shanghai", "China", "CN", "Asia", 31.2304, 121.4737, "Asia/Shanghai", 29210000, 95],
  ["beijing", "Beijing", "China", "CN", "Asia", 39.9042, 116.4074, "Asia/Shanghai", 21893000, 94],
  ["moscow", "Moscow", "Russia", "RU", "Europe", 55.7558, 37.6173, "Europe/Moscow", 12680000, 89],
  ["istanbul", "Istanbul", "Turkey", "TR", "Europe/Asia", 41.0082, 28.9784, "Europe/Istanbul", 15656000, 90],
  ["lagos", "Lagos", "Nigeria", "NG", "Africa", 6.5244, 3.3792, "Africa/Lagos", 15388000, 88],
  ["nairobi", "Nairobi", "Kenya", "KE", "Africa", -1.2921, 36.8219, "Africa/Nairobi", 5545000, 84],
  ["cairo", "Cairo", "Egypt", "EG", "Africa", 30.0444, 31.2357, "Africa/Cairo", 22183000, 88],
  ["riyadh", "Riyadh", "Saudi Arabia", "SA", "Middle East", 24.7136, 46.6753, "Asia/Riyadh", 7682000, 86],
  ["madrid", "Madrid", "Spain", "ES", "Europe", 40.4168, -3.7038, "Europe/Madrid", 6751000, 87],
  ["rome", "Rome", "Italy", "IT", "Europe", 41.9028, 12.4964, "Europe/Rome", 4298000, 86]
].map((city, index) => ({
  id: cityId(index + 1),
  slug: city[0] as string,
  name: city[1] as string,
  country: city[2] as string,
  countryCode: city[3] as string,
  region: city[4] as string,
  lat: city[5] as number,
  lon: city[6] as number,
  timezone: city[7] as string,
  population: city[8] as number,
  importanceScore: city[9] as number,
  createdAt: now.toISOString(),
  updatedAt: now.toISOString()
}));

export const demoForecast: ForecastPoint[] = demoCities.flatMap((city, cityIndex) => {
  const heatBias = Math.max(-8, Math.min(12, 28 - Math.abs(city.lat) * 0.22));
  const rainBase = city.region === "Asia" || city.region === "Africa" ? 0.52 : 0.34;

  return [
    {
      variable: "temperature_2m",
      value: Number((heatBias + (cityIndex % 7) * 0.8).toFixed(1)),
      unit: "C",
      confidence: 0.74
    },
    {
      variable: "precipitation_probability",
      value: Number(Math.min(0.88, rainBase + (cityIndex % 5) * 0.07).toFixed(2)),
      unit: "probability",
      confidence: 0.69
    },
    {
      variable: "wind_speed_10m",
      value: Number((9 + (cityIndex % 6) * 2.4).toFixed(1)),
      unit: "km/h",
      confidence: 0.66
    },
    {
      variable: "air_quality_index",
      value: 48 + (cityIndex % 9) * 8,
      unit: "AQI",
      confidence: 0.61
    }
  ].map((point, pointIndex) => ({
    id: pointId(cityIndex * 10 + pointIndex + 1),
    cityId: city.id,
    forecastRunId: "10000000-0000-4000-8000-000000000001",
    provider: "demo",
    model: "blended-gfs-ecmwf",
    runTime: now.toISOString(),
    forecastTime: hoursFromNow(12 + pointIndex * 6),
    lat: city.lat,
    lon: city.lon,
    raw: { demo: true },
    ...point
  }));
});

export const demoMarkets: MarketEvent[] = [
  {
    id: "30000000-0000-4000-8000-000000000001",
    provider: "kalshi",
    providerEventId: "DEMO-KX-SEOUL-RAIN",
    title: "Will Seoul record measurable rain this weekend?",
    description: "Demo normalized weather market linked to Seoul precipitation signals.",
    category: "weather",
    tags: ["weather", "rain", "precipitation", "seoul"],
    cityIds: [cityId(4)],
    countryCodes: ["KR"],
    probability: 0.55,
    bid: 0.53,
    ask: 0.57,
    volume: 126000,
    liquidity: 34000,
    openInterest: 67000,
    closeTime: hoursFromNow(72),
    resolutionSource: "Demo source",
    url: "https://kalshi.com/",
    status: "active",
    raw: { demo: true },
    createdAt: now.toISOString(),
    updatedAt: now.toISOString()
  },
  {
    id: "30000000-0000-4000-8000-000000000002",
    provider: "polymarket",
    providerEventId: "DEMO-PM-HK-TYPHOON",
    title: "Will a named typhoon warning affect Hong Kong before July?",
    description: "Demo weather-risk contract linked to Hong Kong.",
    category: "climate",
    tags: ["weather", "typhoon", "wind", "hong-kong"],
    cityIds: [cityId(10)],
    countryCodes: ["HK"],
    probability: 0.31,
    bid: 0.3,
    ask: 0.33,
    volume: 410000,
    liquidity: 91000,
    openInterest: 118000,
    closeTime: hoursFromNow(600),
    resolutionSource: "Demo source",
    url: "https://polymarket.com/",
    status: "active",
    raw: { demo: true },
    createdAt: now.toISOString(),
    updatedAt: now.toISOString()
  },
  {
    id: "30000000-0000-4000-8000-000000000003",
    provider: "kalshi",
    providerEventId: "DEMO-KX-NYC-TEMP",
    title: "Will New York temperature exceed 90F next week?",
    description: "Demo temperature-threshold market linked to New York.",
    category: "weather",
    tags: ["weather", "temperature", "heat", "new-york"],
    cityIds: [cityId(1)],
    countryCodes: ["US"],
    probability: 0.46,
    bid: 0.44,
    ask: 0.48,
    volume: 272000,
    liquidity: 57000,
    openInterest: 101000,
    closeTime: hoursFromNow(168),
    resolutionSource: "Demo source",
    url: "https://kalshi.com/",
    status: "active",
    raw: { demo: true },
    createdAt: now.toISOString(),
    updatedAt: now.toISOString()
  },
  {
    id: "30000000-0000-4000-8000-000000000004",
    provider: "polymarket",
    providerEventId: "DEMO-PM-GLOBAL-MACRO",
    title: "Will global macro volatility rise after the next central-bank cycle?",
    description: "Demo global prediction-market event linked to major financial centers.",
    category: "economics",
    tags: ["macro", "rates", "global"],
    cityIds: [cityId(1), cityId(2), cityId(3), cityId(5)],
    countryCodes: ["US", "GB", "JP", "SG"],
    probability: 0.62,
    bid: 0.6,
    ask: 0.64,
    volume: 930000,
    liquidity: 220000,
    openInterest: 370000,
    closeTime: hoursFromNow(960),
    resolutionSource: "Demo source",
    url: "https://polymarket.com/",
    status: "active",
    raw: { demo: true },
    createdAt: now.toISOString(),
    updatedAt: now.toISOString()
  }
];

export const demoTimeseries: MarketTimeSeriesPoint[] = demoMarkets.flatMap((market, marketIndex) =>
  Array.from({ length: 12 }, (_, index) => {
    const wobble = (Math.sin(index / 2 + marketIndex) * 0.035) + (index - 6) * 0.004;
    const probability = Math.max(0.02, Math.min(0.98, (market.probability ?? 0.5) + wobble));

    return {
      id: `40000000-0000-4000-8000-${(marketIndex * 100 + index + 1).toString().padStart(12, "0")}`,
      marketEventId: market.id,
      provider: market.provider,
      timestamp: hoursFromNow(-11 + index),
      probability: Number(probability.toFixed(3)),
      bid: Number(Math.max(0.01, probability - 0.015).toFixed(3)),
      ask: Number(Math.min(0.99, probability + 0.015).toFixed(3)),
      volume: (market.volume ?? 10000) + index * 1800,
      liquidity: market.liquidity,
      raw: { demo: true }
    };
  })
);

export const demoSignals: CombinedSignal[] = [
  {
    id: "50000000-0000-4000-8000-000000000001",
    cityId: cityId(4),
    marketEventId: demoMarkets[0].id,
    forecastVariable: "precipitation_probability",
    signalType: "weather_market_disagreement",
    modelProbability: 0.73,
    marketProbability: 0.55,
    disagreement: 0.18,
    rawEdge: 0.18,
    adjustedEdge: 0.124,
    confidence: 0.69,
    freshnessStatus: "fresh",
    status: "divergent",
    explanation:
      "Forecast-model precipitation probability sits above the market-implied probability with fresh inputs.",
    computedAt: now.toISOString(),
    raw: { demo: true }
  },
  {
    id: "50000000-0000-4000-8000-000000000002",
    cityId: cityId(10),
    marketEventId: demoMarkets[1].id,
    forecastVariable: "wind_speed_10m",
    signalType: "weather_market_disagreement",
    modelProbability: 0.24,
    marketProbability: 0.31,
    disagreement: 0.07,
    rawEdge: -0.07,
    adjustedEdge: -0.045,
    confidence: 0.64,
    freshnessStatus: "aging",
    status: "watch",
    explanation:
      "Market-implied typhoon risk sits modestly above the forecast-model proxy while inputs are aging.",
    computedAt: now.toISOString(),
    raw: { demo: true }
  },
  {
    id: "50000000-0000-4000-8000-000000000003",
    cityId: cityId(1),
    marketEventId: demoMarkets[2].id,
    forecastVariable: "temperature_2m",
    signalType: "weather_market_disagreement",
    modelProbability: 0.35,
    marketProbability: 0.46,
    disagreement: 0.11,
    rawEdge: -0.11,
    adjustedEdge: -0.072,
    confidence: 0.66,
    freshnessStatus: "fresh",
    status: "divergent",
    explanation:
      "Market-implied heat probability is above the forecast-model proxy with fresh inputs.",
    computedAt: now.toISOString(),
    raw: { demo: true }
  }
];

export function getDemoCity(slug: string) {
  return demoCities.find((city) => city.slug === slug) ?? demoCities[3];
}
