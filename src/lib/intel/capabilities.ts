import { getEnv } from "@/lib/env";

export type CapabilityStatus = "live" | "partial" | "shadow" | "planned" | "framework-only" | "not-implemented";

export type Capability = {
  key: string;
  label: string;
  status: CapabilityStatus;
  note: string;
};

/**
 * Single source of truth for what is actually live versus scaffolding.
 * Surfaced on /ops and /api/system/status so the product never overclaims.
 */
export function listCapabilities(): Capability[] {
  return [
    {
      key: "official-weather-ingest",
      label: "Official weather ingest",
      status: "live",
      note: "Open-Meteo hourly forecasts synced into forecast_points via the authenticated sync route and daily Vercel cron."
    },
    {
      key: "forecast-model-ingest",
      label: "Forecast model ingest",
      status: "partial",
      note: "Open-Meteo best_match is live. GFS, ECMWF, and Windy adapters are integration boundaries that require an external GRIB/data worker."
    },
    {
      key: "market-ingest",
      label: "Prediction-market ingest",
      status: "live",
      note: "Polymarket Gamma and Kalshi public market APIs synced into market_events and market_timeseries."
    },
    {
      key: "model-blending",
      label: "Model blending",
      status: "partial",
      note: "Blending runs over available forecast points; with a single live model source the blend is effectively single-member."
    },
    {
      key: "dynamic-error-balancing",
      label: "Dynamic Error Balancing",
      status: "shadow",
      note: "Weights are computed and shown for diagnostics, but recent-error inputs are not yet fed by live verification results."
    },
    {
      key: "probability-calibration",
      label: "Probability calibration",
      status: "shadow",
      note: "cal-v1-shadow runs alongside raw model output; calibration parameters are not yet fit on live verification history."
    },
    {
      key: "verification",
      label: "Forecast verification",
      status: "planned",
      note: "Verification against settlement-station observations is designed but has no live runs yet."
    },
    {
      key: "ai-correction",
      label: "AI correction",
      status: "planned",
      note: "The weather impact agent is rule-based today; model-driven correction is gated on a configured AI provider key.",
    },
    {
      key: "alerts",
      label: "Alerts",
      status: "framework-only",
      note: "Alert rules are evaluated at request time on ops surfaces; no delivery channels (email/telegram/webhook) are wired."
    },
    {
      key: "payments",
      label: "Payments & subscriptions",
      status: "framework-only",
      note: "Plan and entitlement skeleton only. No checkout or billing provider is integrated.",
    },
    {
      key: "realtime",
      label: "Realtime updates",
      status: getEnv("ENABLE_REALTIME") === "true" ? "partial" : "framework-only",
      note: "Polling fallback is the default; Supabase Realtime channels activate only when ENABLE_REALTIME=true."
    },
    {
      key: "automatic-trading",
      label: "Automatic trading",
      status: "not-implemented",
      note: "Order routing is not enabled in this build. The product provides research diagnostics only and never places trades."
    }
  ];
}
