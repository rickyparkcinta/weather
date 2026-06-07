"use client";

import { CheckCircle2, CircleDashed, Hammer, RefreshCw, TriangleAlert } from "lucide-react";
import type { GraphStats, WorkbenchReport, WorkbenchStepStatus } from "@/lib/graph/types";
import { formatDateTime } from "@/lib/utils";

function StepIcon({ status }: { status: WorkbenchStepStatus }) {
  if (status === "complete") return <CheckCircle2 size={16} className="text-emerald-400" />;
  if (status === "stale") return <TriangleAlert size={16} className="text-amber-400" />;
  if (status === "error") return <TriangleAlert size={16} className="text-rose-400" />;
  return <CircleDashed size={16} className="text-slate-500" />;
}

function MetricTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/30 p-3">
      <div className="text-[10px] uppercase tracking-[0.14em] text-slate-500">{label}</div>
      <div className="mt-1 font-mono text-lg text-slate-100">{value}</div>
    </div>
  );
}

export function Workbench({
  report,
  stats,
  demoMode,
  generatedAt,
  onRebuild,
  rebuilding
}: {
  report: WorkbenchReport;
  stats: GraphStats;
  demoMode: boolean;
  generatedAt: string;
  onRebuild: () => void;
  rebuilding: boolean;
}) {
  const { steps, metrics, console: consoleLines } = report;

  return (
    <div className="mx-auto grid max-w-7xl gap-5 px-4 py-6 md:px-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-2 rounded-md border border-cyan-200/15 bg-cyan-300/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100">
            <Hammer size={14} />
            Workbench
          </div>
          <h2 className="mt-3 text-2xl font-semibold text-white">Data build pipeline</h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-400">
            Step-by-step build of the relationship graph from cities, forecast runs, markets, links, and combined
            signals — with provenance, freshness, and stale-record accounting.
          </p>
        </div>
        <button
          type="button"
          onClick={onRebuild}
          className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm text-slate-100 hover:bg-white/15"
        >
          <RefreshCw size={15} className={rebuilding ? "animate-spin" : undefined} />
          Rebuild
        </button>
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <section className="rounded-md border border-white/10 bg-white/[0.03] p-4">
          <h3 className="text-sm font-semibold text-white">Build steps</h3>
          <ol className="mt-3 grid gap-2">
            {steps.map((step) => (
              <li
                key={step.key}
                className="flex items-start gap-3 rounded-md border border-white/10 bg-black/20 p-3"
              >
                <StepIcon status={step.status} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-slate-100">{step.label}</span>
                    {step.count !== null ? (
                      <span className="font-mono text-xs text-slate-400">{step.count}</span>
                    ) : null}
                  </div>
                  <p className="mt-0.5 text-xs leading-5 text-slate-400">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid content-start gap-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <MetricTile label="Agents / providers" value={String(metrics.agentCount)} />
            <MetricTile label="Provider runs" value={String(metrics.providerRuns)} />
            <MetricTile label="Forecast points" value={String(metrics.forecastPointsLoaded)} />
            <MetricTile label="Markets linked" value={String(metrics.marketsLinked)} />
            <MetricTile label="Signals generated" value={String(metrics.signalsGenerated)} />
            <MetricTile label="Stale records" value={String(metrics.staleRecords)} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <MetricTile label="Graph nodes" value={String(stats.nodeCount)} />
            <MetricTile label="Graph edges" value={String(stats.edgeCount)} />
          </div>
          <div className="rounded-md border border-white/10 bg-black/30 p-3 text-xs leading-5 text-slate-400">
            <div>
              Last successful sync:{" "}
              <span className="font-mono text-slate-200">{formatDateTime(metrics.lastSuccessfulSync)}</span>
            </div>
            <div className="mt-1">
              Latest run: <span className="font-mono text-slate-200">{formatDateTime(stats.latestRunAt)}</span>
            </div>
            <div className="mt-1">
              Mode: <span className="font-mono text-slate-200">{demoMode ? "demo dataset" : "live"}</span>
            </div>
          </div>
        </section>
      </div>

      <section>
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">Console</h3>
          <span className="font-mono text-[11px] text-slate-500">build {formatDateTime(generatedAt)}</span>
        </div>
        <div className="mt-2 max-h-72 overflow-y-auto rounded-md border border-white/10 bg-black p-3 font-mono text-xs leading-6">
          {consoleLines.map((entry, index) => (
            <div key={`${entry.at}-${index}`} className="flex gap-3">
              <span className="shrink-0 text-slate-600">{new Date(entry.at).toISOString().slice(11, 19)}</span>
              <span
                className={
                  entry.level === "error"
                    ? "text-rose-400"
                    : entry.level === "warn"
                      ? "text-amber-300"
                      : "text-emerald-300"
                }
              >
                {entry.level.toUpperCase()}
              </span>
              <span className="text-slate-300">{entry.message}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
