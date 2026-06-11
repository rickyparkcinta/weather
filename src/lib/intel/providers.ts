import { getEnv } from "@/lib/env";
import type { ProviderHealth } from "@/types/domain";

export type WeatherProviderAdapter = {
  id: string;
  name: string;
  providerType: ProviderHealth["providerType"];
  publicDocumentationUrl: string | null;
  configured: boolean;
  supports: string[];
};

export const weatherProviderAdapters: WeatherProviderAdapter[] = [
  {
    id: "open-meteo",
    name: "Open-Meteo",
    providerType: "weather",
    publicDocumentationUrl: "https://open-meteo.com/en/docs",
    configured: true,
    supports: ["forecast", "archive", "hourly_points"]
  },
  {
    id: "noaa-nws",
    name: "NOAA / NWS",
    providerType: "observation",
    publicDocumentationUrl: "https://www.weather.gov/documentation/services-web-api",
    configured: true,
    supports: ["observations", "alerts", "station_metadata"]
  },
  {
    id: "metar",
    name: "METAR aviation weather",
    providerType: "observation",
    publicDocumentationUrl: "https://aviationweather.gov/data/api/",
    configured: true,
    supports: ["airport_station", "latest_observation"]
  },
  {
    id: "gfs",
    name: "GFS-style model adapter",
    providerType: "weather",
    publicDocumentationUrl: "https://www.emc.ncep.noaa.gov/emc/pages/numerical_forecast_systems/gfs.php",
    configured: true,
    supports: ["model_runs", "forecast_grid", "forecast_points"]
  },
  {
    id: "ecmwf",
    name: "ECMWF-style model adapter",
    providerType: "weather",
    publicDocumentationUrl: "https://www.ecmwf.int/en/forecasts/datasets/open-data",
    configured: true,
    supports: ["model_runs", "ensemble_shadow", "forecast_points"]
  },
  {
    id: "national-provider",
    name: "National provider abstraction",
    providerType: "weather",
    publicDocumentationUrl: null,
    configured: Boolean(getEnv("WEATHER_PROVIDER_KEYS")),
    supports: ["MGM", "JMA", "AMOS", "HKO", "CWA", "CMA/NMC"]
  },
  {
    id: "manual-provider",
    name: "Manual provider adapter",
    providerType: "weather",
    publicDocumentationUrl: null,
    configured: true,
    supports: ["operator_upload", "future_private_adapter_boundary"]
  }
];

function minutesSince(value: string | null) {
  if (!value) return null;
  const ms = Date.now() - new Date(value).getTime();
  return Number.isFinite(ms) ? Math.max(0, Math.round(ms / 60_000)) : null;
}

function statusFromFreshness(lastSuccessAt: string | null, staleAfter: string | null): ProviderHealth["status"] {
  if (!lastSuccessAt) return "unknown";
  if (staleAfter && Date.now() > new Date(staleAfter).getTime()) return "stale";
  return "online";
}

export function buildProviderHealth(input: Partial<ProviderHealth> & Pick<ProviderHealth, "providerId" | "name" | "providerType">): ProviderHealth {
  const lastSuccessAt = input.lastSuccessAt ?? null;
  const staleAfter = input.staleAfter ?? null;
  return {
    providerId: input.providerId,
    name: input.name,
    providerType: input.providerType,
    status: input.status ?? statusFromFreshness(lastSuccessAt, staleAfter),
    lastSuccessAt,
    lastAttemptAt: input.lastAttemptAt ?? lastSuccessAt,
    staleAfter,
    latencyMs: input.latencyMs ?? null,
    error: input.error ?? null,
    freshnessMinutes: input.freshnessMinutes ?? minutesSince(lastSuccessAt)
  };
}

/**
 * Provider registry health derived from configuration only. Timestamps,
 * latency, and freshness stay null until a real run log backs them; status is
 * "unknown" rather than a claimed "online" for adapters that have never run.
 */
export function listProviderHealth(): ProviderHealth[] {
  return [
    ...weatherProviderAdapters.map((adapter) =>
      buildProviderHealth({
        providerId: adapter.id,
        name: adapter.name,
        providerType: adapter.providerType,
        status: "unknown"
      })
    ),
    buildProviderHealth({
      providerId: "polymarket",
      name: "Polymarket market adapter",
      providerType: "market",
      status: "unknown",
      error: getEnv("MARKET_PROVIDER_KEYS") || getEnv("POLYMARKET_API_KEY") ? null : "Market provider keys are not configured."
    }),
    buildProviderHealth({
      providerId: "supabase-realtime",
      name: "Supabase Realtime",
      providerType: "cache",
      status: "unknown",
      error: getEnv("ENABLE_REALTIME") === "true" ? null : "Realtime updates are not enabled."
    })
  ];
}
