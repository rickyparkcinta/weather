import { getEnv } from "@/lib/env";
import type { IngestionLog, ProviderHealth } from "@/types/domain";

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
  const lastSuccessAt = input.lastSuccessAt ?? new Date(Date.now() - 45 * 60_000).toISOString();
  const staleAfter = input.staleAfter ?? new Date(Date.now() + 75 * 60_000).toISOString();
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

export function listDemoProviderHealth(): ProviderHealth[] {
  return [
    ...weatherProviderAdapters.map((adapter, index) =>
      buildProviderHealth({
        providerId: adapter.id,
        name: adapter.name,
        providerType: adapter.providerType,
        status: adapter.configured ? "online" : "unknown",
        latencyMs: 120 + index * 24
      })
    ),
    buildProviderHealth({
      providerId: "polymarket-style",
      name: "Polymarket-style market adapter",
      providerType: "market",
      status: getEnv("MARKET_PROVIDER_KEYS") || getEnv("POLYMARKET_API_KEY") ? "online" : "unknown",
      latencyMs: 210
    }),
    buildProviderHealth({
      providerId: "supabase-realtime",
      name: "Supabase Realtime",
      providerType: "cache",
      status: getEnv("ENABLE_REALTIME") === "true" ? "online" : "unknown",
      latencyMs: null
    })
  ];
}

export function buildDemoIngestionLogs(): IngestionLog[] {
  return [
    {
      id: "ingest-open-meteo-demo",
      providerId: "open-meteo",
      jobType: "forecast_points",
      status: "complete",
      startedAt: new Date(Date.now() - 72 * 60_000).toISOString(),
      finishedAt: new Date(Date.now() - 70 * 60_000).toISOString(),
      recordsSeen: 320,
      recordsInserted: 120,
      recordsUpdated: 200,
      error: null
    },
    {
      id: "ingest-market-demo",
      providerId: "polymarket-style",
      jobType: "market_prices",
      status: "complete",
      startedAt: new Date(Date.now() - 49 * 60_000).toISOString(),
      finishedAt: new Date(Date.now() - 47 * 60_000).toISOString(),
      recordsSeen: 44,
      recordsInserted: 8,
      recordsUpdated: 36,
      error: null
    }
  ];
}
