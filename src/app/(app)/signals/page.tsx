import Link from "next/link";
import {
  AlertTriangle,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Clock3,
  Database,
  FileText,
  Gauge,
  Lock,
  Scale,
  ShieldCheck,
  TrendingUp
} from "lucide-react";
import { ProductHeader } from "@/components/shell/ProductHeader";
import { ErrorState } from "@/components/ui/ErrorState";
import { NonAdvisoryNotice } from "@/components/ui/NonAdvisoryNotice";
import { appCopy, localizedPath, type AppLocale } from "@/lib/i18n";
import { confidenceLabel, formatSignedPercent, freshnessLabel } from "@/lib/signals/classify";
import { getRankedSignals, type RankedSignal } from "@/lib/signals/ranking";
import { cn, formatCompactNumber, formatDateTime, formatPercent } from "@/lib/utils";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Odds Analysis - RiWeather",
  description:
    "Ranked prediction-market odds analysis with market price, estimated fair value, edge classification, risks, and paper-trade posture."
};

export default async function SignalsPage() {
  return <SignalsPageContent locale="en" />;
}

export async function SignalsPageContent({ locale }: { locale: AppLocale }) {
  const result = await loadSignals();
  const checkedAt = new Date().toISOString();

  return (
    <main className="min-h-[100dvh] bg-[#06080b] text-slate-100">
      <ProductHeader locale={locale} />
      <div className="mx-auto max-w-7xl px-4 py-6 pb-16 md:px-8">
        <NonAdvisoryNotice className="mb-4" locale={locale} />
        {result.error ? (
          <LiveDataError message={result.error} />
        ) : (
          <OddsAnalysisView signals={result.signals} checkedAt={checkedAt} locale={locale} />
        )}
      </div>
    </main>
  );
}

async function loadSignals() {
  try {
    return { signals: await getRankedSignals(), error: null };
  } catch (error) {
    return {
      signals: [],
      error: error instanceof Error ? error.message : "Unable to load odds analysis records."
    };
  }
}

function OddsAnalysisView({
  signals,
  checkedAt,
  locale
}: {
  signals: RankedSignal[];
  checkedAt: string;
  locale: AppLocale;
}) {
  const metrics = buildOddsMetrics(signals);
  const rankedEdges = signals.filter((row) => edgeClassification(row).rank > 0).slice(0, 8);
  const paperCandidates = rankedEdges.filter((row) => paperTradePosture(row).action !== "none").slice(0, 4);

  return (
    <div className="grid gap-5">
      <OddsHeader metrics={metrics} checkedAt={checkedAt} locale={locale} />

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-start">
        <section className="min-w-0 space-y-4">
          <SectionHeading
            eyebrow="Ranked opportunities"
            title="Top Edges"
            body="Markets are ranked by estimated edge size, confidence, freshness, liquidity, and evidence quality."
          />

          {rankedEdges.length === 0 ? (
            <NoEdgeState signals={signals.length} />
          ) : (
            <div className="grid gap-3">
              {rankedEdges.map((row, index) => (
                <OddsRecord key={rowKey(row, index)} row={row} rank={index + 1} locale={locale} />
              ))}
            </div>
          )}
        </section>

        <aside className="grid gap-4 xl:sticky xl:top-20">
          <PaperTradingPanel candidates={paperCandidates} />
          <MethodPanel metrics={metrics} />
          <SourcePanel metrics={metrics} locale={locale} />
        </aside>
      </div>
    </div>
  );
}

function OddsHeader({
  metrics,
  checkedAt,
  locale
}: {
  metrics: OddsMetrics;
  checkedAt: string;
  locale: AppLocale;
}) {
  const copy = appCopy[locale];

  return (
    <section className="rounded-md border border-white/10 bg-[linear-gradient(135deg,rgba(8,18,28,0.94),rgba(3,7,18,0.9))] p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-md border border-emerald-200/15 bg-emerald-300/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-100">
              <Scale size={14} />
              Odds analysis
            </span>
            <span className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
              <Lock size={13} />
              Research only · Execution disabled
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">Odds Analysis</h1>
          <p className="mt-3 text-sm leading-6 text-slate-300 md:text-base md:leading-7">
            Compare current market pricing with estimated fair value, flag meaningful discrepancies, and keep recommended actions limited to simulated paper trades.
          </p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:min-w-[500px]">
          <MetricTile label="Mode" value={copy.status.liveRecords} tone="positive" />
          <MetricTile label="Time checked" value={formatDateTime(checkedAt)} />
          <MetricTile label="Strong / Moderate" value={`${metrics.strong} / ${metrics.moderate}`} />
          <MetricTile label="Signals / Cities" value={`${metrics.total} / ${metrics.cityCount}`} />
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-100/80">{eyebrow}</div>
      <h2 className="mt-2 text-2xl font-semibold text-white">{title}</h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">{body}</p>
    </div>
  );
}

function OddsRecord({
  row,
  rank,
  locale
}: {
  row: RankedSignal;
  rank: number;
  locale: AppLocale;
}) {
  const classification = edgeClassification(row);
  const paper = paperTradePosture(row);
  const title = row.market?.title ?? row.signal.forecastVariable ?? "Unmapped odds signal";
  const provider = row.market?.provider ?? rawString(row.signal.raw, ["marketProvider"]);
  const forecastProvider = row.forecast ? `${row.forecast.provider} / ${row.forecast.model}` : rawString(row.signal.raw, ["forecastProvider", "provider", "source"]);
  const linkedMarketId = row.market?.id ?? row.signal.marketEventId;

  return (
    <article className="rounded-md border border-white/12 bg-white/[0.04] p-4 transition hover:border-white/20 hover:bg-white/[0.055]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="hidden h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-black/22 font-mono text-xs text-slate-400 sm:inline-flex">
              {rank}
            </span>
            <Badge tone={classification.tone}>{classification.label}</Badge>
            <Badge tone={freshnessLabel(row.signal.freshnessStatus).tone}>{freshnessLabel(row.signal.freshnessStatus).label}</Badge>
            <Badge tone={confidenceLabel(row.signal.confidence).tone}>{confidenceLabel(row.signal.confidence).label} confidence</Badge>
            {row.eventType ? <Badge tone="muted">{row.eventType}</Badge> : null}
          </div>
          <h3 className="mt-3 text-lg font-semibold leading-7 text-white">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-400">
            {row.city?.name ?? "Unavailable city"}{provider ? ` / ${provider}` : ""}
          </p>
        </div>
        <div className="shrink-0 rounded-md border border-white/10 bg-black/24 px-4 py-3 text-left lg:text-right">
          <div className={cn("font-mono text-3xl font-semibold", edgeColor(row.gap))}>{formatPoints(row.gap)}</div>
          <div className="text-[10px] uppercase tracking-[0.14em] text-slate-500">Estimated edge</div>
        </div>
      </div>

      <div className="mt-4 grid gap-2 md:grid-cols-2 xl:grid-cols-4">
        <MetricCell label="Current price">{formatProbability(row.signal.marketProbability)}</MetricCell>
        <MetricCell label="Estimated fair value">{formatProbability(row.signal.modelProbability)}</MetricCell>
        <MetricCell label="Raw edge">{formatPoints(row.signal.rawEdge ?? row.signal.disagreement)}</MetricCell>
        <MetricCell label="Adjusted edge">{formatPoints(row.signal.adjustedEdge)}</MetricCell>
        <MetricCell label="Confidence">{formatConfidence(row.signal.confidence)}</MetricCell>
        <MetricCell label="Liquidity / volume">{formatLiquidity(row)}</MetricCell>
        <MetricCell label="Forecast source">{forecastProvider ?? "Unavailable"}</MetricCell>
        <MetricCell label="Computed">{formatDateTime(row.signal.computedAt)}</MetricCell>
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="rounded-md border border-white/10 bg-black/18 p-3">
          <div className="text-[10px] uppercase tracking-[0.14em] text-slate-500">Key reasoning</div>
          <p className="mt-2 text-sm leading-6 text-slate-300">{row.signal.explanation ?? classification.reason}</p>
        </div>
        <div className="rounded-md border border-emerald-200/14 bg-emerald-300/[0.055] p-3">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-emerald-100/80">
            <FileText size={13} />
            Paper-trade posture
          </div>
          <p className="mt-2 text-sm font-semibold text-emerald-50">{paper.label}</p>
          <p className="mt-1 text-xs leading-5 text-emerald-50/75">{paper.reason}</p>
        </div>
      </div>

      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <DetailPanel title="Risks and invalidation factors" icon={<AlertTriangle size={15} />} items={riskItems(row)} />
        <div className="rounded-md border border-white/10 bg-black/18 p-3">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-slate-500">
            <ArrowUpRight size={14} />
            Market detail
          </div>
          <div className="mt-2 text-sm leading-6 text-slate-300">
            {linkedMarketId ? (
              <Link href={localizedPath(locale, `/markets/${linkedMarketId}`)} className="inline-flex items-center gap-1 text-cyan-100 hover:text-white">
                Open linked market record
                <ArrowUpRight size={13} />
              </Link>
            ) : (
              "No linked market record is available for this signal."
            )}
          </div>
          {linkedMarketId ? (
            <button
              type="button"
              disabled
              aria-disabled="true"
              title="Order routing is not enabled in this build."
              className="mt-3 inline-flex h-9 cursor-not-allowed items-center gap-2 rounded-md border border-white/12 bg-white/[0.04] px-3 text-xs text-slate-500"
            >
              <Lock size={13} />
              Trade — coming soon
            </button>
          ) : null}
          <p className="mt-2 text-xs leading-5 text-slate-500">This link opens analysis context only. Order routing is not enabled in this build.</p>
        </div>
      </div>
    </article>
  );
}

function PaperTradingPanel({ candidates }: { candidates: RankedSignal[] }) {
  return (
    <section className="rounded-md border border-white/10 bg-white/[0.035] p-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-base font-semibold text-white">Recommended Paper Trades</h2>
        <BookOpen size={17} className="text-emerald-100" />
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-400">
        Simulated entries only. Sizes stay small unless edge, confidence, and liquidity are all strong.
      </p>
      <div className="mt-4 grid gap-3">
        {candidates.length === 0 ? (
          <div className="rounded-md border border-dashed border-white/12 bg-black/18 p-3 text-sm leading-6 text-slate-400">
            No paper trade is recommended from the current signal set.
          </div>
        ) : (
          candidates.map((row, index) => {
            const paper = paperTradePosture(row);
            return (
              <div key={rowKey(row, index)} className="rounded-md border border-white/10 bg-black/20 p-3">
                <div className="text-sm font-semibold text-white">{paper.label}</div>
                <div className="mt-1 text-xs leading-5 text-slate-400">{row.market?.title ?? row.signal.forecastVariable ?? "Unmapped signal"}</div>
                <div className="mt-2 grid grid-cols-2 gap-2 font-mono text-xs text-slate-200">
                  <span>Entry: {formatProbability(row.signal.marketProbability)}</span>
                  <span>Fair: {formatProbability(row.signal.modelProbability)}</span>
                  <span>Edge: {formatPoints(row.gap)}</span>
                  <span>Size: {paper.size}</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}

function MethodPanel({ metrics }: { metrics: OddsMetrics }) {
  return (
    <section className="rounded-md border border-white/10 bg-white/[0.035] p-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-base font-semibold text-white">Ranking Method</h2>
        <BarChart3 size={17} className="text-cyan-100" />
      </div>
      <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
        <MethodStep icon={<TrendingUp size={15} />} title="Edge size" body="Estimated fair value minus market-implied probability is the first ranking input." />
        <MethodStep icon={<Gauge size={15} />} title="Confidence" body="Low confidence or high uncertainty reduces edge strength and paper-trade sizing." />
        <MethodStep icon={<Clock3 size={15} />} title="Freshness" body="Stale forecast or market snapshots are treated as no-entry until refreshed." />
        <MethodStep icon={<Database size={15} />} title="Practicality" body="Missing liquidity, volume, or linked-market data lowers practical confidence." />
      </div>
      <div className="mt-4 rounded-md border border-white/10 bg-black/20 p-3 text-xs leading-5 text-slate-400">
        Current classification count: {metrics.strong} strong, {metrics.moderate} moderate, {metrics.weak} weak, {metrics.noEdge} no edge.
      </div>
    </section>
  );
}

function SourcePanel({
  metrics,
  locale
}: {
  metrics: OddsMetrics;
  locale: AppLocale;
}) {
  const copy = appCopy[locale];

  return (
    <section className="rounded-md border border-white/10 bg-white/[0.035] p-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-base font-semibold text-white">Source Status</h2>
        <ShieldCheck size={17} className="text-cyan-100" />
      </div>
      <div className="mt-4 grid gap-2">
        <SourceRow label="Data mode" value={copy.status.liveMode} />
        <SourceRow label="Latest computed" value={formatDateTime(metrics.latestComputedAt)} />
        <SourceRow label="Fresh / Aging / Stale" value={`${metrics.fresh} / ${metrics.aging} / ${metrics.stale}`} />
        <SourceRow label="Market providers" value={compactList(metrics.marketProviders)} />
        <SourceRow label="Forecast providers" value={compactList(metrics.forecastProviders)} />
      </div>
    </section>
  );
}

function NoEdgeState({ signals }: { signals: number }) {
  return (
    <section className="rounded-md border border-dashed border-white/15 bg-black/20 p-5">
      <div className="flex items-start gap-3">
        <CheckCircle2 size={19} className="mt-0.5 text-emerald-100" />
        <div>
          <h3 className="text-base font-semibold text-white">No meaningful edge found</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            {signals} signals were reviewed, but none cleared the current edge, confidence, and freshness thresholds. No paper trade is recommended.
          </p>
        </div>
      </div>
    </section>
  );
}

function LiveDataError({ message }: { message: string }) {
  return (
    <section className="grid gap-4 rounded-md border border-white/10 bg-white/[0.03] p-4">
      <div>
        <h1 className="text-3xl font-semibold text-white md:text-4xl">Odds Analysis</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
          Live odds analysis records could not be loaded.
        </p>
      </div>
      <ErrorState title={`Live data is unavailable: ${message}`} />
      <div className="rounded-md border border-amber-300/20 bg-amber-300/8 p-4 text-sm leading-6 text-amber-50">
        Configure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY, then run the real API sync.
      </div>
    </section>
  );
}

function MetricTile({
  label,
  value,
  tone = "muted"
}: {
  label: string;
  value: string;
  tone?: "positive" | "warning" | "muted";
}) {
  const color =
    tone === "positive"
      ? "border-emerald-300/25 bg-emerald-300/8 text-emerald-50"
      : tone === "warning"
        ? "border-amber-300/25 bg-amber-300/8 text-amber-50"
        : "border-white/12 bg-black/22 text-slate-100";

  return (
    <div className={cn("rounded-md border px-3 py-2", color)}>
      <div className="text-[10px] uppercase tracking-[0.14em] text-slate-500">{label}</div>
      <div className="mt-1 font-mono text-sm">{value}</div>
    </div>
  );
}

function MetricCell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="min-w-0 rounded-md border border-white/10 bg-black/18 p-3">
      <div className="text-[10px] uppercase tracking-[0.14em] text-slate-500">{label}</div>
      <div className="mt-2 min-h-[1.25rem] break-words text-sm leading-5 text-slate-100">{children}</div>
    </div>
  );
}

function DetailPanel({ title, icon, items }: { title: string; icon: React.ReactNode; items: string[] }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/18 p-3">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-slate-500">
        {icon}
        {title}
      </div>
      <ul className="mt-2 grid gap-1.5 text-sm leading-6 text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MethodStep({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/18 p-3">
      <div className="flex items-center gap-2 text-sm font-semibold text-white">
        {icon}
        {title}
      </div>
      <p className="mt-2 text-xs leading-5 text-slate-400">{body}</p>
    </div>
  );
}

function SourceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/18 p-3">
      <div className="text-[10px] uppercase tracking-[0.14em] text-slate-500">{label}</div>
      <div className="mt-1 break-words font-mono text-xs leading-5 text-slate-200">{value}</div>
    </div>
  );
}

function Badge({ tone, children }: { tone: "positive" | "warning" | "negative" | "neutral" | "muted"; children: React.ReactNode }) {
  const color =
    tone === "positive"
      ? "border-emerald-300/30 bg-emerald-400/12 text-emerald-100"
      : tone === "warning"
        ? "border-amber-300/30 bg-amber-400/12 text-amber-100"
        : tone === "negative"
          ? "border-rose-300/30 bg-rose-400/12 text-rose-100"
          : tone === "neutral"
            ? "border-sky-300/30 bg-sky-400/12 text-sky-100"
            : "border-white/15 bg-white/8 text-slate-300";

  return <span className={cn("inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium leading-none", color)}>{children}</span>;
}

type EdgeClass = {
  label: "Strong edge" | "Moderate edge" | "Weak edge" | "No edge";
  tone: "positive" | "warning" | "negative" | "neutral" | "muted";
  rank: number;
  reason: string;
};

type OddsMetrics = {
  total: number;
  cityCount: number;
  latestComputedAt: string | null;
  strong: number;
  moderate: number;
  weak: number;
  noEdge: number;
  fresh: number;
  aging: number;
  stale: number;
  marketProviders: string[];
  forecastProviders: string[];
};

function edgeClassification(row: RankedSignal): EdgeClass {
  const gap = Math.abs(row.gap ?? 0);
  const confidence = row.confidence ?? 0;
  const stale = row.state === "stale" || row.signal.freshnessStatus === "stale";
  const unavailable = row.state === "unavailable" || row.gap === null;

  if (stale) {
    return { label: "No edge", tone: "warning", rank: 0, reason: "Data is stale, so the edge is not actionable even for paper trading." };
  }

  if (unavailable) {
    return { label: "No edge", tone: "muted", rank: 0, reason: "Required market, model, or mapping data is missing." };
  }

  if (gap >= 0.08 && confidence >= 0.5) {
    return { label: "Strong edge", tone: "positive", rank: 3, reason: "Meaningful price discrepancy with usable confidence and current data." };
  }

  if (gap >= 0.04 && confidence >= 0.35) {
    return { label: "Moderate edge", tone: "neutral", rank: 2, reason: "Plausible price discrepancy, but uncertainty or practicality still matters." };
  }

  if (gap >= 0.025) {
    return { label: "Weak edge", tone: "warning", rank: 1, reason: "Interesting gap, but confidence, freshness, or liquidity is not strong enough." };
  }

  return { label: "No edge", tone: "muted", rank: 0, reason: "Market price appears close to estimated fair value." };
}

function paperTradePosture(row: RankedSignal) {
  const edge = edgeClassification(row);
  const gap = row.gap ?? 0;
  const confidence = row.confidence ?? 0;
  const missingLiquidity = !row.market || (row.market.liquidity === null && row.market.volume === null);

  if (edge.rank < 2 || confidence < 0.35) {
    return {
      action: "none" as const,
      label: "No paper trade",
      size: "0 units",
      reason: "The edge does not clear the minimum paper-trade threshold."
    };
  }

  const direction = gap > 0 ? "simulated pro-YES stance" : "simulated NO or fade stance";
  const size = edge.rank === 3 && !missingLiquidity ? "small to medium" : "small";

  return {
    action: "paper" as const,
    label: `${direction} (${size})`,
    size,
    reason: "Paper-trade only. This records the thesis for later review without placing or automating real trades."
  };
}

function buildOddsMetrics(signals: RankedSignal[]): OddsMetrics {
  const classifications = signals.map(edgeClassification);
  const latestComputedAt = signals
    .map((row) => row.signal.computedAt)
    .filter((value): value is string => Boolean(value))
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())[0] ?? null;

  return {
    total: signals.length,
    cityCount: new Set(signals.map((row) => row.city?.id).filter(Boolean)).size,
    latestComputedAt,
    strong: classifications.filter((item) => item.label === "Strong edge").length,
    moderate: classifications.filter((item) => item.label === "Moderate edge").length,
    weak: classifications.filter((item) => item.label === "Weak edge").length,
    noEdge: classifications.filter((item) => item.label === "No edge").length,
    fresh: signals.filter((row) => row.signal.freshnessStatus === "fresh").length,
    aging: signals.filter((row) => row.signal.freshnessStatus === "aging").length,
    stale: signals.filter((row) => row.signal.freshnessStatus === "stale").length,
    marketProviders: unique(signals.map((row) => row.market?.provider ?? rawString(row.signal.raw, ["marketProvider"]))),
    forecastProviders: unique(signals.map((row) => row.forecast?.provider ?? rawString(row.signal.raw, ["forecastProvider", "provider", "source"])))
  };
}

function riskItems(row: RankedSignal) {
  const items = ["Market liquidity or displayed probability may be thin or delayed."];
  if (row.signal.freshnessStatus !== "fresh") items.push("Freshness is not ideal; refresh data before relying on the thesis.");
  if ((row.confidence ?? 0) < 0.5) items.push("Confidence is below medium, so size remains small or watch-only.");
  if (row.eventType === "temperature") items.push("Station-level weather can move by one degree and invalidate exact-temperature markets.");
  if (!row.market) items.push("Linked market details are missing, so practicality is reduced.");
  if (!row.forecast) items.push("Forecast provenance is incomplete for this row.");
  return items;
}

function rowKey(row: RankedSignal, index: number) {
  return row.signal.id ?? `${row.signal.cityId}-${row.signal.marketEventId ?? index}`;
}

function rawString(raw: Record<string, unknown> | undefined, keys: string[]) {
  if (!raw) return null;
  for (const key of keys) {
    const value = raw[key];
    if (typeof value === "string" && value.trim()) return value;
  }
  return null;
}

function unique(values: (string | null | undefined)[]) {
  return Array.from(new Set(values.filter((value): value is string => Boolean(value)))).sort();
}

function compactList(values: string[], max = 3) {
  if (values.length === 0) return "Unavailable";
  const head = values.slice(0, max).join(", ");
  const rest = values.length - max;
  return rest > 0 ? `${head}, +${rest} more` : head;
}

function formatProbability(value: number | null | undefined) {
  const formatted = formatPercent(value);
  return formatted === "n/a" ? "Unavailable" : formatted;
}

function formatPoints(value: number | null | undefined) {
  const formatted = formatSignedPercent(value);
  return formatted === "n/a" ? "Unavailable" : formatted.replace("%", " pp");
}

function formatConfidence(value: number | null | undefined) {
  if (typeof value !== "number" || Number.isNaN(value)) return "Unavailable";
  return `${formatPercent(value)} (${confidenceLabel(value).label})`;
}

function formatLiquidity(row: RankedSignal) {
  const parts = [];
  if (row.market?.liquidity !== null && row.market?.liquidity !== undefined) parts.push(`Liq ${formatCompactNumber(row.market.liquidity)}`);
  if (row.market?.volume !== null && row.market?.volume !== undefined) parts.push(`Vol ${formatCompactNumber(row.market.volume)}`);
  return parts.length > 0 ? parts.join(" / ") : "Unavailable";
}

function edgeColor(gap: number | null) {
  if (gap === null) return "text-slate-300";
  if (gap > 0.005) return "text-emerald-100";
  if (gap < -0.005) return "text-rose-100";
  return "text-slate-200";
}
