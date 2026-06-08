import type { AlertRule, AlertType, ProviderHealth, SettlementSourceSummary } from "@/types/domain";

export const defaultAlertRules: AlertRule[] = [
  rule("prob-cross", "probability_crosses_threshold", "Probability crosses threshold", 0.1),
  rule("edge-cross", "market_edge_crosses_threshold", "Model-market gap crosses threshold", 0.08),
  rule("station-update", "station_observation_updates", "Station observation updates", null),
  rule("forecast-run", "forecast_run_changes", "Forecast run changes", null),
  rule("provider-outage", "provider_outage", "Provider outage", null),
  rule("stale-settlement", "stale_settlement_source", "Stale settlement source", null),
  rule("model-disagreement", "major_model_disagreement", "Major model disagreement", 0.12),
  rule("volatility-spike", "run_to_run_volatility_spike", "Run-to-run volatility spike", 0.1)
];

function rule(id: string, type: AlertType, label: string, threshold: number | null): AlertRule {
  return {
    id,
    type,
    label,
    enabled: true,
    threshold,
    channels: ["web", "email", "telegram", "webhook"]
  };
}

export function evaluateOperationalAlerts(input: {
  providers: ProviderHealth[];
  settlements: SettlementSourceSummary[];
  edge?: number | null;
  volatility?: number | null;
}) {
  const alerts: { ruleId: string; type: AlertType; severity: "info" | "warn" | "error"; message: string }[] = [];

  for (const provider of input.providers) {
    if (provider.status === "offline" || provider.status === "degraded") {
      alerts.push({
        ruleId: "provider-outage",
        type: "provider_outage",
        severity: provider.status === "offline" ? "error" : "warn",
        message: `${provider.name} is ${provider.status}.`
      });
    }
  }

  for (const settlement of input.settlements) {
    if (settlement.stale) {
      alerts.push({
        ruleId: "stale-settlement",
        type: "stale_settlement_source",
        severity: "warn",
        message: `${settlement.station.code} settlement source is stale.`
      });
    }
  }

  if (typeof input.edge === "number" && Math.abs(input.edge) >= 0.08) {
    alerts.push({
      ruleId: "edge-cross",
      type: "market_edge_crosses_threshold",
      severity: "info",
      message: `Model-market gap is ${Math.round(input.edge * 100)} percentage points.`
    });
  }

  if (typeof input.volatility === "number" && input.volatility >= 0.1) {
    alerts.push({
      ruleId: "volatility-spike",
      type: "run_to_run_volatility_spike",
      severity: "warn",
      message: "Run-to-run volatility is elevated."
    });
  }

  return alerts;
}
