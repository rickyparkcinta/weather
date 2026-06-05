import { getEnv } from "@/lib/env";
import type { City } from "@/types/domain";
import { kalshiAdapter } from "@/providers/markets/kalshi";
import { polymarketAdapter } from "@/providers/markets/polymarket";
import { openMeteoAdapter } from "@/providers/weather/openMeteo";

export function providerFetchDebugEnabled() {
  return getEnv("ENABLE_PROVIDER_FETCH_DEBUG")?.toLowerCase() === "true";
}

export async function fetchProviderDebugSnapshot(city: City) {
  if (!providerFetchDebugEnabled()) {
    return {
      enabled: false,
      weather: [],
      markets: []
    };
  }

  const [weather, kalshi, polymarket] = await Promise.all([
    openMeteoAdapter.fetchForecastForCity(city),
    kalshiAdapter.fetchMarkets({ limit: 25 }),
    polymarketAdapter.fetchMarkets({ limit: 25 })
  ]);

  return {
    enabled: true,
    weather: weather.ok ? weather.data : [],
    markets: [...(kalshi.ok ? kalshi.data : []), ...(polymarket.ok ? polymarket.data : [])],
    errors: [weather, kalshi, polymarket].filter((result) => !result.ok)
  };
}
