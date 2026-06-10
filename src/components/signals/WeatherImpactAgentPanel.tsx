import { AlertTriangle, BarChart3, CloudRain, Info, ListChecks, Thermometer, Wind } from "lucide-react";
import type { ReactNode } from "react";
import { Badge } from "@/components/ui/SignalBadge";
import {
  getWeatherAgentReportStatusLabel,
  getWeatherAgentReportTone
} from "@/lib/signals/weatherAgentReports";
import { cn, formatDateTime } from "@/lib/utils";
import type { WeatherAgentReport } from "@/types/domain";

export const WEATHER_IMPACT_AGENT_DISCLAIMER =
  "Decision support only. Order routing is not enabled in this build; current views are research and analytics only.";

type ReportView = {
  score: number | null;
  confidence: string | null;
  status: string;
  weatherSnapshot: Record<string, unknown>;
  recommendations: unknown[];
  rationale: string[];
  riskNotes: string[];
  computedAt: string | null;
  modelVersion: string | null;
};

export function WeatherImpactAgentPanel({
  report,
  compact = false,
  fallback
}: {
  report: WeatherAgentReport | null;
  compact?: boolean;
  fallback?: unknown;
}) {
  const fallbackView = report ? null : reportFromFallback(fallback);
  const view = report ? reportView(report) : fallbackView;

  if (!view) {
    return (
      <section className={panelClass(compact, "border-white/10 bg-black/15")}>
        <PanelHeader status={null} modelVersion={null} compact={compact} />
        <p className="mt-3 text-sm leading-6 text-slate-400">No weather-impact report yet.</p>
      </section>
    );
  }

  const topRecommendation = formatRecommendation(view.recommendations[0]);

  return (
    <section className={panelClass(compact, "border-cyan-200/20 bg-cyan-300/[0.05]")}>
      <PanelHeader status={view.status} modelVersion={view.modelVersion} compact={compact} />

      <div className={cn("mt-3 grid gap-2", compact ? "grid-cols-2" : "sm:grid-cols-4")}>
        <Metric label="Score" value={formatNullable(view.score)} />
        <Metric label="Confidence" value={view.confidence ?? "n/a"} />
        <Metric label="Computed" value={formatDateTime(view.computedAt)} />
        <Metric label="Model" value={view.modelVersion ?? "n/a"} />
      </div>

      {view.status === "stale" ? (
        <p className="mt-3 rounded-md border border-amber-300/20 bg-amber-300/10 px-3 py-2 text-sm leading-6 text-amber-100">
          Report is stale; waiting for fresh forecast or market data.
        </p>
      ) : null}

      {fallbackView ? (
        <FallbackDetails view={view} />
      ) : (
        <FullDetails view={view} topRecommendation={topRecommendation} compact={compact} />
      )}

      <p className="mt-4 border-t border-white/10 pt-3 text-xs leading-5 text-slate-500">
        {WEATHER_IMPACT_AGENT_DISCLAIMER}
      </p>
    </section>
  );
}

function PanelHeader({
  status,
  modelVersion,
  compact
}: {
  status: string | null;
  modelVersion: string | null;
  compact: boolean;
}) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-2">
      <div className="min-w-0">
        <h2 className={cn("flex items-center gap-2 font-semibold text-white", compact ? "text-sm" : "text-base")}>
          <BarChart3 size={16} className="shrink-0 text-cyan-200" />
          Weather Impact Agent
        </h2>
        {modelVersion ? <p className="mt-1 truncate text-xs text-slate-500">{modelVersion}</p> : null}
      </div>
      {status ? (
        <Badge tone={getWeatherAgentReportTone(status)}>{getWeatherAgentReportStatusLabel(status)}</Badge>
      ) : null}
    </div>
  );
}

function FullDetails({
  view,
  topRecommendation,
  compact
}: {
  view: ReportView;
  topRecommendation: string | null;
  compact: boolean;
}) {
  return (
    <>
      <div className={cn("mt-3 grid gap-2", compact ? "grid-cols-2" : "sm:grid-cols-5")}>
        <Metric icon={<Thermometer size={14} />} label="Temp" value={snapshotValue(view.weatherSnapshot, ["temperature_f", "temperatureF"], "F")} />
        <Metric icon={<Wind size={14} />} label="Wind" value={snapshotValue(view.weatherSnapshot, ["wind_mph", "windMph"], " mph")} />
        <Metric
          icon={<CloudRain size={14} />}
          label="Precip"
          value={snapshotValue(view.weatherSnapshot, ["precipitation_probability", "precipitationProbability"], "%")}
        />
        <Metric label="Humidity" value={snapshotValue(view.weatherSnapshot, ["humidity_percent", "humidity"], "%")} />
        <Metric label="Freshness" value={snapshotText(view.weatherSnapshot, ["freshness_status", "freshnessStatus"])} />
      </div>

      {topRecommendation ? (
        <div className="mt-4 rounded-md border border-white/10 bg-black/20 p-3">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-100">
            <ListChecks size={15} className="text-cyan-200" />
            Top recommendation
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{topRecommendation}</p>
        </div>
      ) : null}

      <div className={cn("mt-4 grid gap-4", compact ? "" : "md:grid-cols-2")}>
        <TextBlock icon={<Info size={15} />} title="Rationale" items={view.rationale} empty="No rationale recorded." />
        <TextBlock icon={<AlertTriangle size={15} />} title="Risk notes" items={view.riskNotes} empty="No risk notes recorded." />
      </div>
    </>
  );
}

function FallbackDetails({ view }: { view: ReportView }) {
  return (
    <div className="mt-4 grid gap-4">
      <TextBlock icon={<Info size={15} />} title="Top rationale" items={view.rationale} empty="No rationale recorded." />
      <TextBlock icon={<AlertTriangle size={15} />} title="Top risk notes" items={view.riskNotes} empty="No risk notes recorded." />
    </div>
  );
}

function Metric({ label, value, icon }: { label: string; value: string; icon?: ReactNode }) {
  return (
    <div className="min-w-0 rounded-md border border-white/10 bg-black/20 p-2">
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wide text-slate-500">
        {icon}
        {label}
      </div>
      <div className="mt-1 truncate font-mono text-xs text-white">{value}</div>
    </div>
  );
}

function TextBlock({
  icon,
  title,
  items,
  empty
}: {
  icon: ReactNode;
  title: string;
  items: string[];
  empty: string;
}) {
  const values = items.length ? items : [empty];
  return (
    <div>
      <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-100">
        {icon}
        {title}
      </h3>
      <ul className="mt-2 space-y-1.5 text-sm leading-6 text-slate-300">
        {values.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200/70" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function reportView(report: WeatherAgentReport): ReportView {
  return {
    score: report.score,
    confidence: report.confidence,
    status: report.status,
    weatherSnapshot: report.weatherSnapshot,
    recommendations: report.recommendations,
    rationale: report.rationale,
    riskNotes: report.riskNotes,
    computedAt: report.computedAt,
    modelVersion: report.modelVersion
  };
}

function reportFromFallback(value: unknown): ReportView | null {
  const record = objectRecord(value);
  if (!record) return null;
  const topRecommendation = objectRecord(record.topRecommendation);
  return {
    score: numberValue(record.score),
    confidence: textValue(record.confidence),
    status: textValue(record.status) ?? "computed",
    weatherSnapshot: objectRecord(record.weatherSnapshot) ?? {},
    recommendations: topRecommendation ? [topRecommendation] : [],
    rationale: stringList(record.topRationale).concat(stringList(topRecommendation?.rationale)),
    riskNotes: stringList(record.topRiskNotes).concat(stringList(topRecommendation?.riskNotes)),
    computedAt: textValue(record.computedAt),
    modelVersion: textValue(record.modelVersion)
  };
}

function formatRecommendation(value: unknown) {
  if (typeof value === "string") return value;
  const record = objectRecord(value);
  if (!record) return null;
  const direction = textValue(record.direction);
  const score = numberValue(record.score);
  const confidence = textValue(record.confidence);
  return [direction, score === null ? null : `score ${Math.round(score)}`, confidence]
    .filter(Boolean)
    .join(" · ") || null;
}

function snapshotValue(record: Record<string, unknown>, keys: string[], suffix: string) {
  const value = keys.map((key) => numberValue(record[key])).find((item): item is number => item !== null);
  return value === undefined ? "n/a" : `${value}${suffix}`;
}

function snapshotText(record: Record<string, unknown>, keys: string[]) {
  return keys.map((key) => textValue(record[key])).find((item): item is string => item !== null) ?? "n/a";
}

function objectRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === "object" && !Array.isArray(value) ? (value as Record<string, unknown>) : null;
}

function numberValue(value: unknown) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

function textValue(value: unknown) {
  return typeof value === "string" && value.trim() ? value : null;
}

function stringList(value: unknown) {
  if (Array.isArray(value)) return value.map((item) => String(item)).filter(Boolean);
  const text = textValue(value);
  return text ? [text] : [];
}

function formatNullable(value: number | null) {
  return value === null ? "n/a" : String(Math.round(value));
}

function panelClass(compact: boolean, color: string) {
  return cn("mt-3 rounded-md border", color, compact ? "p-3" : "p-5");
}
