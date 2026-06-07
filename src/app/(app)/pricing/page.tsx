import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Database,
  Download,
  FileText,
  Gauge,
  LineChart,
  ShieldCheck,
  Users
} from "lucide-react";
import { ProductHeader } from "@/components/shell/ProductHeader";
import { NonAdvisoryNotice } from "@/components/ui/NonAdvisoryNotice";
import { Badge } from "@/components/ui/SignalBadge";
import { usingDemoData } from "@/lib/data/queries";

export const metadata = {
  title: "Pricing · Weather AI",
  description:
    "Research, professional, data API, and enterprise pricing structure for weather-risk intelligence and data access."
};

const TIERS = [
  {
    name: "Research",
    buyer: "Independent analysts",
    priceStyle: "Monthly",
    icon: FileText,
    summary: "Read-only dashboard access for city, market, and signal research.",
    features: ["Weather Risk Dashboard", "Signals page", "Methodology docs", "Freshness and confidence badges", "Research-only exports"]
  },
  {
    name: "Professional",
    buyer: "Weather-market analysts and funds",
    priceStyle: "Monthly or annual",
    icon: LineChart,
    summary: "Analyst workflow with richer history, market diagnostics, and signal monitoring.",
    features: ["All Research features", "Historical signal archive", "Market probability history", "Source/provenance panels", "Priority methodology support"]
  },
  {
    name: "Data API",
    buyer: "Quant and data teams",
    priceStyle: "Usage plus seats",
    icon: Database,
    summary: "Structured access to forecast, market, time-series, signal, and run-log records.",
    features: ["Forecast API", "Combined Signal API", "Bulk CSV/Parquet export", "Data dictionary", "API limits and seat controls"]
  },
  {
    name: "Enterprise",
    buyer: "Insurers, ILS, energy, agriculture, logistics",
    priceStyle: "Custom contract",
    icon: Building2,
    summary: "Commercial licensing, custom coverage, archive delivery, and risk-research packages.",
    features: ["Custom city/station coverage", "Weather-linked research briefs", "Enterprise data license", "Dedicated support", "Security and procurement review"]
  }
];

const MATRIX = [
  ["Live dashboard", "Included", "Included", "Included", "Included"],
  ["Signal archive", "Limited", "Extended", "API delivery", "Custom history"],
  ["API access", "No", "Limited preview", "Included", "Custom limits"],
  ["Bulk exports", "No", "CSV samples", "CSV/Parquet", "Custom delivery"],
  ["Weather-linked research", "Docs only", "Brief templates", "Data support", "Custom package"],
  ["Support", "Standard", "Priority", "Data support", "Enterprise support"]
];

export default function PricingPage() {
  const demoMode = usingDemoData();

  return (
    <main className="min-h-[100dvh] bg-[#06080b] text-slate-100">
      <ProductHeader active="pricing" demoMode={demoMode} />
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 md:px-8">
        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_360px] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-cyan-200/15 bg-cyan-300/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100">
              <Gauge size={14} />
              Data-business pricing
            </div>
            <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">
              Pricing for weather-risk intelligence and data access
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
              Plans are organized around data access, refresh cadence, historical archive depth, exports, API limits,
              support, and enterprise licensing. They do not price or promise investment outcomes.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Badge tone="neutral">Dashboard</Badge>
              <Badge tone="positive">Data API</Badge>
              <Badge tone="warning">Historical archive</Badge>
              <Badge tone="muted">Research only</Badge>
            </div>
          </div>

          <aside className="rounded-md border border-white/10 bg-white/[0.035] p-4">
            <h2 className="text-sm font-semibold text-white">Commercial packaging</h2>
            <div className="mt-4 grid gap-3">
              <MiniMetric icon={<Users size={15} />} label="Seat model" value="Analysts and data teams" />
              <MiniMetric icon={<Download size={15} />} label="Delivery" value="UI, API, CSV, Parquet" />
              <MiniMetric icon={<ShieldCheck size={15} />} label="Usage" value="Research analytics only" />
            </div>
          </aside>
        </section>

        <NonAdvisoryNotice className="mt-8" />

        <section className="mt-8 grid gap-4 lg:grid-cols-4">
          {TIERS.map((tier) => {
            const Icon = tier.icon;
            return (
              <article key={tier.name} className="flex min-h-full flex-col rounded-md border border-white/10 bg-white/[0.035] p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md border border-cyan-200/20 bg-cyan-300/10 text-cyan-100">
                    <Icon size={18} />
                  </span>
                  <span className="rounded-md border border-white/10 bg-black/20 px-2 py-1 text-[11px] uppercase tracking-[0.12em] text-slate-400">
                    {tier.priceStyle}
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-white">{tier.name}</h2>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-500">{tier.buyer}</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">{tier.summary}</p>
                <ul className="mt-4 grid gap-2 text-sm leading-5 text-slate-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200/70" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.name === "Enterprise" ? "/data#request-access" : "/data"}
                  className="mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-md border border-white/12 px-3 text-sm text-slate-100 hover:bg-white/8"
                >
                  {tier.name === "Enterprise" ? "Request access" : "View data"}
                  <ArrowRight size={15} />
                </Link>
              </article>
            );
          })}
        </section>

        <section className="mt-8 overflow-hidden rounded-md border border-white/10 bg-white/[0.035]">
          <div className="border-b border-white/10 px-4 py-3">
            <h2 className="text-base font-semibold text-white">Plan comparison</h2>
            <p className="mt-1 text-sm text-slate-500">Pricing structure by access surface and support level.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse text-left text-sm">
              <thead className="bg-white/[0.055] text-[11px] uppercase tracking-[0.14em] text-slate-500">
                <tr>
                  <th className="border-b border-white/10 px-4 py-3 font-semibold">Capability</th>
                  <th className="border-b border-white/10 px-4 py-3 font-semibold">Research</th>
                  <th className="border-b border-white/10 px-4 py-3 font-semibold">Professional</th>
                  <th className="border-b border-white/10 px-4 py-3 font-semibold">Data API</th>
                  <th className="border-b border-white/10 px-4 py-3 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {MATRIX.map((row) => (
                  <tr key={row[0]} className="border-b border-white/8 last:border-b-0">
                    {row.map((cell, index) => (
                      <td key={`${row[0]}-${index}`} className={index === 0 ? "px-4 py-3 font-medium text-white" : "px-4 py-3 text-slate-300"}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="enterprise" className="mt-8 rounded-md border border-emerald-300/18 bg-emerald-300/[0.055] p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Enterprise data package</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-emerald-50/80">
                Enterprise scope can include custom city/station coverage, historical backfills, API limits,
                CSV/Parquet delivery, procurement review, and weather-linked research workflows.
              </p>
            </div>
            <Link href="/data#request-access" className="inline-flex h-10 shrink-0 items-center gap-2 rounded-md border border-emerald-200/30 px-3 text-sm text-emerald-50 hover:bg-emerald-300/10">
              Request data access
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function MiniMetric({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/20 p-3">
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-slate-500">
        {icon}
        {label}
      </div>
      <div className="mt-2 text-sm text-slate-200">{value}</div>
    </div>
  );
}
