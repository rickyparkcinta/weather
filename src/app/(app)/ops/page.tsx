import Link from "next/link";
import { AlertTriangle, Bell, Clock3, Database, Gauge, RadioTower, RefreshCw, ServerCog } from "lucide-react";
import { ProductHeader } from "@/components/shell/ProductHeader";
import { getSystemStatus } from "@/lib/data/intelligence";
import { localizedPath } from "@/lib/i18n";
import { formatDateTime } from "@/lib/utils";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Ops · RiWeather",
  description: "Provider health, ingestion freshness, cache state, stale records, and alert framework status."
};

export default async function OpsPage() {
  const status = await getSystemStatus();

  return (
    <main className="min-h-[100dvh] bg-[#06080b] text-slate-100">
      <ProductHeader />
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-6 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white md:text-3xl">Ops</h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
              Operational view for provider health, ingestion cadence, forecast and market freshness, cache status,
              stale settlement sources, and alert rules.
            </p>
          </div>
          <div className="flex gap-2">
            <Link href={localizedPath("en", "/admin/health")} className="inline-flex h-10 items-center gap-2 rounded-md border border-white/12 px-3 text-sm text-slate-100 hover:bg-white/8">
              <Gauge size={15} />
              Health
            </Link>
            <Link href={localizedPath("en", "/ops/payments")} className="inline-flex h-10 items-center gap-2 rounded-md border border-white/12 px-3 text-sm text-slate-100 hover:bg-white/8">
              <Database size={15} />
              Payments
            </Link>
          </div>
        </div>

        <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Metric icon={<RadioTower size={16} />} label="Providers" value={String(status.providers.length)} />
          <Metric icon={<RefreshCw size={16} />} label="Ingestion jobs" value={String(status.ingestion.length)} />
          <Metric icon={<Bell size={16} />} label="Alerts" value={String(status.alerts.length)} />
          <Metric icon={<Clock3 size={16} />} label="Generated" value={formatDateTime(status.generatedAt)} />
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.8fr)]">
          <div className="rounded-md border border-white/12 bg-white/[0.04]">
            <SectionHeader title="Provider Health" description="Weather, market, observation, realtime, and cache provider states." />
            <div className="overflow-x-auto">
              <table className="w-full min-w-[780px] border-collapse text-left text-sm">
                <thead className="bg-white/[0.055] text-[11px] uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Provider</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Last success</th>
                    <th className="px-4 py-3">Stale after</th>
                    <th className="px-4 py-3">Latency</th>
                  </tr>
                </thead>
                <tbody>
                  {status.providers.map((provider) => (
                    <tr key={provider.providerId} className="border-t border-white/8">
                      <td className="px-4 py-3 font-medium text-white">{provider.name}</td>
                      <td className="px-4 py-3 text-slate-300">{provider.providerType}</td>
                      <td className="px-4 py-3"><StatusPill status={provider.status} /></td>
                      <td className="px-4 py-3 text-slate-300">{formatDateTime(provider.lastSuccessAt)}</td>
                      <td className="px-4 py-3 text-slate-300">{formatDateTime(provider.staleAfter)}</td>
                      <td className="px-4 py-3 font-mono text-slate-300">{provider.latencyMs === null ? "n/a" : `${provider.latencyMs}ms`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-md border border-white/12 bg-white/[0.04] p-5">
              <h2 className="flex items-center gap-2 text-base font-semibold text-white">
                <ServerCog size={16} />
                Runtime State
              </h2>
              <div className="mt-4 grid gap-3">
                <Detail label="Mode" value={status.mode} />
                <Detail label="Realtime mode" value={status.realtime.mode} />
                <Detail label="Polling fallback" value={`${status.realtime.pollingIntervalMs / 1000}s`} />
                <Detail label="Cache hit/miss" value={status.cache.hitRate === null ? "placeholder" : `${status.cache.hitRate}/${status.cache.missRate}`} />
              </div>
            </div>

            <div className="rounded-md border border-white/12 bg-white/[0.04] p-5">
              <h2 className="flex items-center gap-2 text-base font-semibold text-white">
                <AlertTriangle size={16} />
                Alerts
              </h2>
              <div className="mt-4 space-y-2">
                {status.alerts.length ? (
                  status.alerts.map((alert) => (
                    <div key={`${alert.ruleId}-${alert.message}`} className="rounded-md border border-amber-300/20 bg-amber-300/[0.06] p-3 text-sm text-amber-50">
                      {alert.message}
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-slate-400">No active operational alerts.</p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-md border border-white/12 bg-white/[0.04]">
          <SectionHeader title="Ingestion Freshness" description="Latest job rows and placeholder counts for stale cities, stale markets, and failed jobs." />
          <div className="grid gap-3 p-4 md:grid-cols-3">
            {status.ingestion.map((log) => (
              <div key={log.id} className="rounded-md border border-white/10 bg-black/20 p-4">
                <div className="text-[11px] uppercase tracking-wide text-slate-500">{log.providerId}</div>
                <div className="mt-1 text-sm font-semibold text-white">{log.jobType}</div>
                <div className="mt-2 text-xs text-slate-400">{formatDateTime(log.finishedAt)} · {log.status}</div>
                <div className="mt-3 grid grid-cols-3 gap-2 font-mono text-xs text-slate-300">
                  <span>seen {log.recordsSeen}</span>
                  <span>new {log.recordsInserted}</span>
                  <span>upd {log.recordsUpdated}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <Detail label="Failed jobs" value={String(status.ingestion.filter((log) => log.status === "failed").length)} />
          <Detail label="Stale cities" value="not yet tracked — reserved for live freshness query" />
          <Detail label="Stale markets" value="not yet tracked — reserved for live freshness query" />
          <Detail label="Calibration" value="cal-v1-shadow (shadow mode — not fit on live verification)" />
          <Detail label="Verification" value="planned — no live runs yet" />
          <Detail label="Alert channels" value="framework only — no delivery channels wired" />
        </section>

        <section className="mt-8 rounded-md border border-white/12 bg-white/[0.04]">
          <SectionHeader
            title="Capability Status"
            description="What is live versus partial, shadow, planned, framework-only, or not implemented in this build."
          />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead className="bg-white/[0.055] text-[11px] uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Capability</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Notes</th>
                </tr>
              </thead>
              <tbody>
                {status.capabilities.map((capability) => (
                  <tr key={capability.key} className="border-t border-white/8 align-top">
                    <td className="px-4 py-3 font-medium text-white">{capability.label}</td>
                    <td className="px-4 py-3"><CapabilityPill status={capability.status} /></td>
                    <td className="px-4 py-3 text-slate-400">{capability.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}

function CapabilityPill({ status }: { status: string }) {
  const classes =
    status === "live"
      ? "border-emerald-300/25 bg-emerald-300/10 text-emerald-100"
      : status === "partial" || status === "shadow"
        ? "border-amber-300/25 bg-amber-300/10 text-amber-100"
        : status === "not-implemented"
          ? "border-red-300/25 bg-red-300/10 text-red-100"
          : "border-white/15 bg-white/8 text-slate-300";
  return <span className={`whitespace-nowrap rounded-full border px-2 py-1 text-xs ${classes}`}>{status}</span>;
}

function SectionHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="border-b border-white/10 px-5 py-4">
      <h2 className="text-base font-semibold text-white">{title}</h2>
      <p className="mt-1 text-sm text-slate-500">{description}</p>
    </div>
  );
}

function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/12 bg-white/[0.04] p-4">
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-wide text-slate-500">
        {icon}
        {label}
      </div>
      <div className="mt-2 font-mono text-xl text-white">{value}</div>
    </div>
  );
}

function StatusPill({ status }: { status: string }) {
  const classes =
    status === "online"
      ? "border-emerald-300/25 bg-emerald-300/10 text-emerald-100"
      : status === "stale" || status === "degraded"
        ? "border-amber-300/25 bg-amber-300/10 text-amber-100"
        : "border-white/15 bg-white/8 text-slate-300";
  return <span className={`rounded-full border px-2 py-1 text-xs ${classes}`}>{status}</span>;
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/20 p-3">
      <div className="text-[11px] uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-1 break-words text-sm text-white">{value}</div>
    </div>
  );
}
