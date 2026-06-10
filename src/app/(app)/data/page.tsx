import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Database,
  Download,
  FileJson,
  KeyRound,
  LineChart,
  Server,
  ShieldCheck,
  Table2
} from "lucide-react";
import { ProductHeader } from "@/components/shell/ProductHeader";
import { NonAdvisoryNotice } from "@/components/ui/NonAdvisoryNotice";
import { Badge } from "@/components/ui/SignalBadge";
import {
  listCities,
  listCombinedSignals,
  listForecastPoints,
  listMarkets,
  usingDemoData
} from "@/lib/data/queries";
import { appCopy, localizedPath, type AppLocale } from "@/lib/i18n";
import { formatDateTime } from "@/lib/utils";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Weather Data API · RiWeather",
  description:
    "Forecast points, market events, market time series, combined signals, freshness, and provenance for professional weather-risk data buyers."
};

const DATA_PRODUCTS = [
  {
    title: "Forecast API",
    icon: LineChart,
    body: "Normalized city forecast points with provider, model, run time, forecast time, variable, value, unit, confidence, and raw source context."
  },
  {
    title: "Market Signal API",
    icon: Database,
    body: "Weather-market metadata, market-implied probabilities, bid/ask snapshots, liquidity, and city-market link context."
  },
  {
    title: "Weather Risk Dashboard",
    icon: Server,
    body: "Map, city, market, and signal views for analysts who need freshness, provenance, and explainable model-market gaps."
  },
  {
    title: "Weather Bond Research",
    icon: ShieldCheck,
    body: "Research packages for weather-linked securities, parametric risk products, catastrophe/weather bonds, and exposure monitoring."
  }
];

const DATASETS = [
  {
    name: "forecast_points",
    endpoint: "/api/forecast",
    cadence: "Hourly model runs",
    fields: ["city_id", "provider", "model", "run_time", "forecast_time", "variable", "value", "unit", "confidence", "raw"]
  },
  {
    name: "market_events",
    endpoint: "/api/markets",
    cadence: "Provider sync snapshots",
    fields: ["provider", "provider_event_id", "title", "probability", "bid", "ask", "volume", "liquidity", "resolution_source"]
  },
  {
    name: "market_timeseries",
    endpoint: "/api/markets/[id]/history",
    cadence: "Snapshot history",
    fields: ["market_event_id", "timestamp", "probability", "bid", "ask", "volume", "liquidity", "raw"]
  },
  {
    name: "combined_signals",
    endpoint: "/api/combined-signals",
    cadence: "After forecast and market writes",
    fields: ["model_probability", "market_probability", "raw_edge", "adjusted_edge", "confidence", "freshness_status", "computed_at"]
  },
  {
    name: "provider_run_logs",
    endpoint: "/admin/health",
    cadence: "Every ingestion run",
    fields: ["provider_id", "provider_type", "adapter_version", "idempotency_key", "status", "record_counts", "error"]
  }
];

const SAMPLE_SIGNAL = {
  city: "Seoul",
  event: "Weekend measurable rain",
  model_probability: 0.73,
  market_probability: 0.55,
  raw_edge: 0.18,
  adjusted_edge: 0.124,
  confidence: 0.69,
  freshness_status: "fresh",
  computed_at: "2026-06-07T03:00:00.000Z",
  research_label: "Model above market"
};

const SAMPLE_FORECAST_POINT = {
  city_slug: "hong-kong",
  provider: "open-meteo",
  model: "gfs",
  run_time: "2026-06-07T00:00:00.000Z",
  forecast_time: "2026-06-07T12:00:00.000Z",
  variable: "wind_speed_10m",
  value: 42.6,
  unit: "km/h",
  confidence: 0.64
};

type DataMetrics = {
  counts: {
    cities: number | null;
    forecast: number | null;
    markets: number | null;
    signals: number | null;
  };
  latestSignalAt: string | null;
  error: string | null;
};

export default async function DataPage() {
  return <DataPageContent locale="en" />;
}

export async function DataPageContent({ locale }: { locale: AppLocale }) {
  const demoMode = usingDemoData();
  const metrics = await loadDataMetrics();
  const copy = appCopy[locale];

  return (
    <main className="min-h-[100dvh] bg-[#06080b] text-slate-100">
      <ProductHeader active="data" demoMode={demoMode} locale={locale} />
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 md:px-8">
        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_360px] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-cyan-200/15 bg-cyan-300/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100">
              <Database size={14} />
              Weather data products
            </div>
            <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">
              Weather-risk data API for professional desks
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
              RiWeather packages official forecast-model output and market-implied pricing into structured city-level data:
              probabilities, confidence scores, model-market gaps, freshness status, and source provenance.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Badge tone={demoMode ? "warning" : "positive"}>{demoMode ? copy.shell.demoDataset : copy.status.liveData}</Badge>
              <Badge tone="neutral">Official/public APIs</Badge>
              <Badge tone="positive">Run logs</Badge>
              <Badge tone="muted">Research only</Badge>
            </div>
          </div>

          <section className="rounded-md border border-white/10 bg-white/[0.035] p-4">
            <h2 className="text-sm font-semibold text-white">Dataset snapshot</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <Metric label="Cities tracked" value={metrics.counts.cities} />
              <Metric label="Forecast points" value={metrics.counts.forecast} />
              <Metric label="Market events" value={metrics.counts.markets} />
              <Metric label="Combined signals" value={metrics.counts.signals} />
            </div>
            <div className="mt-4 rounded-md border border-white/10 bg-black/20 p-3">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-slate-500">
                <Clock3 size={14} />
                Latest signal computation
              </div>
              <div className="mt-2 font-mono text-sm text-slate-200">{formatDateTime(metrics.latestSignalAt)}</div>
            </div>
            {metrics.error ? (
              <div className="mt-4 rounded-md border border-amber-300/25 bg-amber-300/8 p-3 text-xs leading-5 text-amber-50">
                Live metric read failed: {metrics.error}
              </div>
            ) : null}
          </section>
        </section>

        <section className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {DATA_PRODUCTS.map((product) => {
            const Icon = product.icon;
            return (
              <article key={product.title} className="rounded-md border border-white/10 bg-white/[0.035] p-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-cyan-200/20 bg-cyan-300/10 text-cyan-100">
                  <Icon size={18} />
                </span>
                <h2 className="mt-4 text-base font-semibold text-white">{product.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">{product.body}</p>
              </article>
            );
          })}
        </section>

        <NonAdvisoryNotice className="mt-8" locale={locale} />

        <section className="mt-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">API-style tables</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                The public UI reads anon-safe live records. Ingestion writes stay server-side through protected endpoints.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href={localizedPath(locale, "/docs/api")} className="inline-flex h-10 items-center gap-2 rounded-md border border-white/12 px-3 text-sm text-slate-200 hover:bg-white/8">
                <FileJson size={15} />
                API docs
              </Link>
              <Link href={localizedPath(locale, "/docs/data-sources")} className="inline-flex h-10 items-center gap-2 rounded-md border border-white/12 px-3 text-sm text-slate-200 hover:bg-white/8">
                <Database size={15} />
                Data sources
              </Link>
              <Link href={localizedPath(locale, "/admin/health")} className="inline-flex h-10 items-center gap-2 rounded-md border border-white/12 px-3 text-sm text-slate-200 hover:bg-white/8">
                <KeyRound size={15} />
                Health checks
              </Link>
            </div>
          </div>
          <div className="mt-4 grid gap-3">
            {DATASETS.map((dataset) => (
              <DatasetRow key={dataset.name} dataset={dataset} />
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-2">
          <SampleBlock title="Combined signal sample" icon={<FileJson size={16} />} value={SAMPLE_SIGNAL} />
          <SampleBlock title="Forecast point sample" icon={<Table2 size={16} />} value={SAMPLE_FORECAST_POINT} />
        </section>

        <section id="request-access" className="mt-8 rounded-md border border-emerald-300/18 bg-emerald-300/[0.055] p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Request data access</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-emerald-50/80">
                Commercial access can include historical archive delivery, CSV/Parquet export, API limits, data dictionaries,
                and enterprise licensing for weather-risk research workflows.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href={localizedPath(locale, "/pricing")} className="inline-flex h-10 items-center gap-2 rounded-md border border-emerald-200/30 px-3 text-sm text-emerald-50 hover:bg-emerald-300/10">
                View pricing
                <ArrowRight size={15} />
              </Link>
              <Link href={localizedPath(locale, "/weather-bonds")} className="inline-flex h-10 items-center gap-2 rounded-md border border-white/12 px-3 text-sm text-slate-100 hover:bg-white/8">
                Weather-linked research
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-3 md:grid-cols-3">
          <TrustItem icon={<ShieldCheck size={16} />} title="Service role isolated" body="SUPABASE_SERVICE_ROLE_KEY is required only for server-side ingestion and sync paths." />
          <TrustItem icon={<Download size={16} />} title="Export-ready records" body="Data products are structured around normalized tables with stable fields for downstream analytics." />
          <TrustItem icon={<Clock3 size={16} />} title="Freshness visible" body="Signals carry freshness_status and computed_at so stale records are marked instead of hidden." />
        </section>
      </div>
    </main>
  );
}

async function loadDataMetrics(): Promise<DataMetrics> {
  try {
    const [cities, forecast, markets, signals] = await Promise.all([
      listCities(),
      listForecastPoints({}),
      listMarkets(),
      listCombinedSignals()
    ]);

    const latestSignalAt =
      signals
        .map((signal) => signal.computedAt)
        .filter((value): value is string => Boolean(value))
        .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())[0] ?? null;

    return {
      counts: {
        cities: cities.length,
        forecast: forecast.length,
        markets: markets.length,
        signals: signals.length
      },
      latestSignalAt,
      error: null
    };
  } catch (error) {
    return {
      counts: { cities: null, forecast: null, markets: null, signals: null },
      latestSignalAt: null,
      error: error instanceof Error ? error.message : "Unable to read live metrics."
    };
  }
}

function Metric({ label, value }: { label: string; value: number | null }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/20 p-3">
      <div className="text-[11px] uppercase tracking-[0.14em] text-slate-500">{label}</div>
      <div className="mt-1 font-mono text-2xl text-white">{value === null ? "n/a" : value}</div>
    </div>
  );
}

function DatasetRow({ dataset }: { dataset: (typeof DATASETS)[number] }) {
  return (
    <article className="rounded-md border border-white/10 bg-white/[0.035] p-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h3 className="font-mono text-sm font-semibold text-cyan-50">{dataset.name}</h3>
          <p className="mt-1 text-sm text-slate-400">{dataset.cadence}</p>
        </div>
        <code className="rounded-md border border-white/10 bg-black/25 px-2 py-1.5 font-mono text-xs text-slate-200">
          {dataset.endpoint}
        </code>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {dataset.fields.map((field) => (
          <span key={field} className="rounded-md border border-white/10 bg-black/20 px-2 py-1 font-mono text-[11px] text-slate-300">
            {field}
          </span>
        ))}
      </div>
    </article>
  );
}

function SampleBlock({
  title,
  icon,
  value
}: {
  title: string;
  icon: ReactNode;
  value: Record<string, unknown>;
}) {
  return (
    <section className="min-w-0 rounded-md border border-white/10 bg-white/[0.035] p-4">
      <h2 className="flex items-center gap-2 text-base font-semibold text-white">
        {icon}
        {title}
      </h2>
      <pre className="mt-4 max-h-[360px] overflow-auto rounded-md border border-white/10 bg-black/35 p-4 font-mono text-xs leading-5 text-slate-200">
        {JSON.stringify(value, null, 2)}
      </pre>
    </section>
  );
}

function TrustItem({ icon, title, body }: { icon: ReactNode; title: string; body: string }) {
  return (
    <article className="rounded-md border border-white/10 bg-white/[0.035] p-4">
      <div className="flex items-center gap-2 text-cyan-100">
        {icon}
        <h3 className="text-sm font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-400">{body}</p>
    </article>
  );
}
