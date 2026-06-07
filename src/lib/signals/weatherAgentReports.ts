import type { SignalTone } from "@/lib/signals/classify";
import type { CombinedSignal, WeatherAgentReport } from "@/types/domain";

export function getLatestWeatherAgentReportForSignal(
  signal: CombinedSignal,
  reports: WeatherAgentReport[]
): WeatherAgentReport | null {
  if (!signal.marketEventId) return null;

  const matches = reports.filter(
    (report) => report.cityId === signal.cityId && report.marketEventId === signal.marketEventId
  );
  if (!matches.length) return null;

  return matches.sort((a, b) => timestamp(b.computedAt) - timestamp(a.computedAt))[0] ?? null;
}

export function getWeatherAgentReportStatusLabel(status: string | null | undefined) {
  switch (status) {
    case "computed":
      return "Computed";
    case "watch":
      return "Watch";
    case "stale":
      return "Stale";
    case "unavailable":
      return "Unavailable";
    case "error":
      return "Error";
    default:
      return "Unavailable";
  }
}

export function getWeatherAgentReportTone(status: string | null | undefined): SignalTone {
  switch (status) {
    case "computed":
      return "positive";
    case "watch":
    case "stale":
      return "warning";
    case "error":
      return "negative";
    case "unavailable":
      return "muted";
    default:
      return "muted";
  }
}

function timestamp(value: string | null | undefined) {
  if (!value) return 0;
  const parsed = new Date(value).getTime();
  return Number.isNaN(parsed) ? 0 : parsed;
}
