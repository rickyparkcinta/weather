import { getEnv } from "@/lib/env";

export type RealtimeEventType =
  | "observation_patch"
  | "forecast_patch"
  | "probability_patch"
  | "market_price_patch"
  | "provider_status_patch"
  | "city_summary_patch";

export type RealtimeStatus = {
  enabled: boolean;
  mode: "supabase_realtime" | "polling";
  pollingIntervalMs: number;
  reconnectState: "connected" | "connecting" | "polling" | "disabled";
  cacheKey: string;
  events: RealtimeEventType[];
  generatedAt: string;
};

export function getRealtimeStatus(): RealtimeStatus {
  const enabled = getEnv("ENABLE_REALTIME") === "true";
  const hasSupabase = Boolean(getEnv("NEXT_PUBLIC_SUPABASE_URL") && getEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY"));
  const realtime = enabled && hasSupabase;

  return {
    enabled,
    mode: realtime ? "supabase_realtime" : "polling",
    pollingIntervalMs: 60_000,
    reconnectState: realtime ? "connecting" : enabled ? "polling" : "disabled",
    cacheKey: "riweather:last-good-snapshot",
    events: [
      "observation_patch",
      "forecast_patch",
      "probability_patch",
      "market_price_patch",
      "provider_status_patch",
      "city_summary_patch"
    ],
    generatedAt: new Date().toISOString()
  };
}
