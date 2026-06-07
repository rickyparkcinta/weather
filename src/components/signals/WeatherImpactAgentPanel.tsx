import { AlertTriangle, BarChart3, CloudRain, Gauge, Info, ListChecks } from "lucide-react";
import type { ReactNode } from "react";
import { formatDateTime } from "@/lib/utils";
import type { WeatherAgentReport } from "@/types/domain";

type Recommendation = {
  direction?: unknown;
  score?: unknown;
  confidence?: unknown;
  rationale?: unknown;
  riskNotes?: unknown;
};

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
  return Array.isArray(value) ? value.map((item) => String(item)).filter(Boolean) : [];
}

function recommendation(value: unknown): Recommendation | null {
  return value && typeof value === "object" && !Array.isArray(value) ? (value as Recommendation) : null;
}

function snapshotNumber(report: WeatherAgentReport, key: string) {
  return numberValue(report.weatherSnapshot[key]);
}

function formatInput(value: number | null, suffix: string) {
  return value === null ? "n/a" : `${value}${suffix}`;
}

export function WeatherImpactAgentPanel({ report }: { report: WeatherAgentReport | null }) {
  if (!report) {
    return (
      <section className="rounded-md border border-white/12 bg-white/[0.04] p-5">
        <h2 className="flex items-center gap-2 text-base font-semibold text-white">
          <BarChart3 size={16} className="text-cyan-200" />
          Weatherbot Impact Report
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          No weather impact report has been computed for this linked market yet.
        </p>
      </section>
    );
  }

  const recommendations = report.recommendations.map(recommendation).filter((item): item is Recommendation => Boolean(item));
  const temperatureF = snapshotNumber(report, "temperatureF");
  const precipitationProbability = snapshotNumber(report, "precipitationProbability");
  const windMph = snapshotNumber(report, "windMph");
  const humidity = snapshotNumber(report, "humidity");

  return (
    <section className="rounded-md border border-cyan-200/20 bg-cyan-300/[0.05] p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="flex items-center gap-2 text-base font-semibold text-white">
            <BarChart3 size={16} className="text-cyan-200" />
            Weatherbot Impact Report
          </h2>
          <p className="mt-1 text-xs text-slate-500">{report.modelVersion}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:min-w-48">
          <Metric label="Score" value={report.score === null ? "n/a" : String(Math.round(report.score))} />
          <Metric label="Confidence" value={report.confidence ?? "n/a"} />
        </div>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-4">
        <Metric icon={<Gauge size={14} />} label="Wind" value={formatInput(windMph, " mph")} />
        <Metric icon={<CloudRain size={14} />} label="Precip" value={formatInput(precipitationProbability, "%")} />
        <Metric label="Temp" value={formatInput(temperatureF, "F")} />
        <Metric label="Humidity" value={formatInput(humidity, "%")} />
      </div>

      {recommendations.length ? (
        <div className="mt-5">
          <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-100">
            <ListChecks size={15} className="text-cyan-200" />
            Ranked Recommendations
          </h3>
          <div className="mt-3 space-y-2">
            {recommendations.map((item, index) => (
              <div key={`${textValue(item.direction) ?? "direction"}-${index}`} className="rounded-md border border-white/10 bg-black/20 p-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-semibold capitalize text-white">{textValue(item.direction) ?? "n/a"}</div>
                  <div className="font-mono text-sm text-cyan-100">
                    {numberValue(item.score) === null ? "n/a" : Math.round(numberValue(item.score) ?? 0)}
                    <span className="ml-2 text-xs uppercase text-slate-500">{textValue(item.confidence) ?? "n/a"}</span>
                  </div>
                </div>
                <BulletList items={stringList(item.rationale)} className="mt-2" />
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <TextBlock icon={<Info size={15} />} title="Rationale" items={report.rationale} empty="No rationale recorded." />
        <TextBlock icon={<AlertTriangle size={15} />} title="Risk Notes" items={report.riskNotes} empty="No risk notes recorded." />
      </div>

      <div className="mt-4 grid gap-2 text-xs text-slate-500 sm:grid-cols-2">
        <div>Computed {formatDateTime(report.computedAt)}</div>
        <div>Status {report.status}</div>
      </div>
      <p className="mt-4 border-t border-white/10 pt-3 text-xs leading-5 text-slate-500">{report.disclaimer}</p>
    </section>
  );
}

function Metric({ label, value, icon }: { label: string; value: string; icon?: ReactNode }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/20 p-3">
      <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-slate-500">
        {icon}
        {label}
      </div>
      <div className="mt-1 font-mono text-sm text-white">{value}</div>
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
  items: unknown[];
  empty: string;
}) {
  const values = stringList(items);
  return (
    <div>
      <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-100">
        {icon}
        {title}
      </h3>
      <BulletList items={values.length ? values : [empty]} className="mt-2" />
    </div>
  );
}

function BulletList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-1.5 text-sm leading-6 text-slate-300 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200/70" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
