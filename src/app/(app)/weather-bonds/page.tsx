import type { ReactNode } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Building2,
  CloudLightning,
  FileText,
  Gauge,
  Landmark,
  LineChart,
  MapPinned,
  Waves
} from "lucide-react";
import { ProductHeader } from "@/components/shell/ProductHeader";
import { NonAdvisoryNotice } from "@/components/ui/NonAdvisoryNotice";
import { Badge } from "@/components/ui/SignalBadge";
import { usingDemoData } from "@/lib/data/queries";

export const metadata = {
  title: "Weather-Linked Securities Research · Weather AI",
  description:
    "Analytics for weather-linked securities, parametric weather-risk products, catastrophe/weather bonds, and research teams."
};

const EXPOSURE_MODULES = [
  {
    title: "Heat exposure",
    icon: Gauge,
    body: "Temperature-threshold probabilities, forecast volatility, and event-window tracking for exposed cities and regions."
  },
  {
    title: "Rainfall exposure",
    icon: Waves,
    body: "Precipitation probability, accumulation context, and definition matching for rain-linked settlement windows."
  },
  {
    title: "Storm and hurricane exposure",
    icon: CloudLightning,
    body: "Wind, storm, typhoon, and hurricane risk signals with source freshness and market-linked context."
  },
  {
    title: "Model verification",
    icon: BarChart3,
    body: "Research workflow support for MAE, RMSE, bias, Brier Score, reliability, ROC-AUC, and CRPS style verification."
  }
];

const RISK_FACTORS = [
  ["Station basis risk", "Settlement may use a weather station that differs from the city or exposure footprint."],
  ["Event definition risk", "Market or security terms can hinge on exact thresholds, dates, units, and data-source definitions."],
  ["Forecast volatility", "New model runs, ensemble shifts, and late observations can change event probability quickly."],
  ["Revision risk", "Observed values and official station records can be revised after the first publication."],
  ["Liquidity and spread risk", "Prediction-market prices may include microstructure noise when bid/ask or liquidity is thin."],
  ["Settlement source risk", "Resolution-source metadata should be checked before reading any model-market gap strongly."]
];

const WORKFLOW_STEPS = [
  "Map city, station, and exposure footprint.",
  "Normalize official forecast and observation sources.",
  "Calculate event probabilities and confidence.",
  "Compare against market-implied or contract-implied probabilities.",
  "Document freshness, definition risk, station risk, and model skill.",
  "Deliver research briefs, data extracts, and monitoring views."
];

export default function WeatherBondsPage() {
  const demoMode = usingDemoData();

  return (
    <main className="min-h-[100dvh] bg-[#06080b] text-slate-100">
      <ProductHeader active="weather-bonds" demoMode={demoMode} />
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 md:px-8">
        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_360px] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-emerald-200/15 bg-emerald-300/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-100">
              <Landmark size={14} />
              Weather-linked research
            </div>
            <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">
              Analytics for weather-linked securities and parametric risk research
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
              Weather AI supports research workflows for weather-linked instruments, parametric risk products,
              catastrophe/weather bonds, and prediction-market weather events. The platform focuses on source quality,
              probability, definition matching, station risk, and verification.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Badge tone="positive">Research analytics</Badge>
              <Badge tone="neutral">Basis risk</Badge>
              <Badge tone="warning">Definition risk</Badge>
              <Badge tone="muted">No issuance or advice</Badge>
            </div>
          </div>

          <aside className="rounded-md border border-amber-300/25 bg-amber-300/[0.07] p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle size={18} className="mt-0.5 shrink-0 text-amber-100" />
              <div>
                <h2 className="text-sm font-semibold text-amber-50">Research-only positioning</h2>
                <p className="mt-2 text-sm leading-6 text-amber-50/80">
                  Weather AI does not issue securities, structure bonds, recommend trades, or promise investment outcomes.
                  Outputs are analytical context for professional review.
                </p>
              </div>
            </div>
          </aside>
        </section>

        <NonAdvisoryNotice className="mt-8" />

        <section className="mt-8">
          <SectionHeader
            eyebrow="Coverage modules"
            title="Weather exposure analytics"
            body="Professional risk teams need more than a forecast. They need mapped event definitions, probability paths, model skill, and fresh source records."
          />
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {EXPOSURE_MODULES.map((module) => {
              const Icon = module.icon;
              return <FeaturePanel key={module.title} icon={<Icon size={18} />} title={module.title} body={module.body} />;
            })}
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div>
            <SectionHeader
              eyebrow="Risk taxonomy"
              title="Settlement and model-risk factors"
              body="Weather-linked instruments can be sensitive to small changes in stations, timing windows, thresholds, and resolution data."
            />
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {RISK_FACTORS.map(([title, body]) => (
                <article key={title} className="rounded-md border border-white/10 bg-white/[0.035] p-4">
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{body}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-md border border-cyan-200/15 bg-cyan-300/[0.055] p-5">
            <h2 className="flex items-center gap-2 text-base font-semibold text-white">
              <MapPinned size={17} className="text-cyan-100" />
              City and station mapping
            </h2>
            <p className="mt-3 text-sm leading-6 text-cyan-50/80">
              The next paid-data upgrade should map cities to station identifiers, distances, priority, provider, and
              settlement-source metadata so basis risk can be measured instead of described loosely.
            </p>
            <div className="mt-4 rounded-md border border-white/10 bg-black/25 p-3 font-mono text-xs leading-5 text-slate-200">
              station_mappings: city_id, station_id, provider, lat, lon, distance_km, priority, metadata
            </div>
          </aside>
        </section>

        <section className="mt-8">
          <SectionHeader
            eyebrow="Workflow"
            title="From official weather data to research brief"
            body="Each step preserves source metadata, freshness, and assumptions so analysts can audit the output."
          />
          <ol className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {WORKFLOW_STEPS.map((step, index) => (
              <li key={step} className="rounded-md border border-white/10 bg-white/[0.035] p-4">
                <div className="font-mono text-xs text-emerald-100/70">{String(index + 1).padStart(2, "0")}</div>
                <div className="mt-3 text-sm leading-6 text-slate-200">{step}</div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-3">
          <FeaturePanel
            icon={<FileText size={18} />}
            title="Weather bond briefs"
            body="Research notes covering event definitions, exposed geographies, station risk, forecast probability paths, and historical analogs."
          />
          <FeaturePanel
            icon={<LineChart size={18} />}
            title="Probability monitoring"
            body="Freshness-aware model-market gaps with confidence scores and explicit stale-data warnings."
          />
          <FeaturePanel
            icon={<Building2 size={18} />}
            title="Enterprise data package"
            body="API, CSV, or Parquet delivery for insurers, reinsurers, ILS teams, energy, agriculture, logistics, and data teams."
          />
        </section>

        <section className="mt-8 rounded-md border border-emerald-300/18 bg-emerald-300/[0.055] p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Build a weather-risk research package</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-emerald-50/80">
                Pair live signals with historical archive, station mappings, forecast verification, and market-definition notes.
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

function SectionHeader({
  eyebrow,
  title,
  body
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{eyebrow}</div>
      <h2 className="mt-2 text-2xl font-semibold text-white">{title}</h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">{body}</p>
    </div>
  );
}

function FeaturePanel({ icon, title, body }: { icon: ReactNode; title: string; body: string }) {
  return (
    <article className="rounded-md border border-white/10 bg-white/[0.035] p-4">
      <span className="flex h-9 w-9 items-center justify-center rounded-md border border-emerald-200/20 bg-emerald-300/10 text-emerald-100">
        {icon}
      </span>
      <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{body}</p>
    </article>
  );
}
