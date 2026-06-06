import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, MapPin, ShieldAlert } from "lucide-react";
import { ProductHeader } from "@/components/shell/ProductHeader";
import { NonAdvisoryNotice } from "@/components/ui/NonAdvisoryNotice";
import { ProbabilityChart } from "@/components/ui/ProbabilityChart";
import { ConfidenceBadge, FreshnessBadge, SignalStateBadge } from "@/components/ui/SignalBadge";
import { getMarketIntel } from "@/lib/data/market-intel";
import { usingDemoData } from "@/lib/data/queries";
import { formatSignedPercent } from "@/lib/signals/classify";
import { addHoursIso, formatCompactNumber, formatDateTime, formatPercent } from "@/lib/utils";
import type { CombinedSignal, MarketEvent } from "@/types/domain";

export const dynamic = "force-dynamic";

export default async function MarketPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const intel = await getMarketIntel(id);

  if (!intel) {
    notFound();
  }

  const { market, history, cities, signal } = intel;
  const risks = settlementRisks(market, signal);
  const snapshotAt = marketTimestamp(market);
  const staleAfter = addHoursIso(signal?.computedAt ?? snapshotAt, 24);

  return (
    <main className="min-h-[100dvh] bg-[#06080b] text-slate-100">
      <ProductHeader active="signals" demoMode={usingDemoData()} />
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-6 md:px-8">
        <Link href="/signals" className="text-xs text-slate-400 hover:text-slate-200">
          ← Back to signals
        </Link>

        <section className="mt-4 rounded-md border border-white/12 bg-white/[0.04] p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-slate-500">
                <span className="rounded-full bg-white/8 px-2 py-0.5 text-slate-300">{market.provider}</span>
                <span>{market.status ?? "status n/a"}</span>
                {market.closeTime ? <span>closes {new Date(market.closeTime).toLocaleString()}</span> : null}
              </div>
              <h1 className="mt-2 max-w-3xl text-2xl font-semibold leading-tight text-white">{market.title}</h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                {market.description ?? "No provider description was included in the normalized record."}
              </p>
              {signal ? (
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <SignalStateBadge signal={signal} />
                  <FreshnessBadge status={signal.freshnessStatus} />
                  <ConfidenceBadge confidence={signal.confidence} />
                </div>
              ) : null}
            </div>
            {market.url ? (
              <a
                href={market.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-md border border-cyan-200/25 px-3 py-2 text-sm text-cyan-100 hover:bg-cyan-300/10"
              >
                Provider
                <ExternalLink size={15} />
              </a>
            ) : null}
          </div>
        </section>

        <NonAdvisoryNotice className="mt-4" />

        {/* Probability-gap diagnostics */}
        <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Metric label="Market-implied" value={formatPercent(market.probability)} accent="cyan" />
          <Metric label="Forecast-model" value={formatPercent(signal?.modelProbability ?? null)} accent="violet" />
          <Metric label="Probability gap" value={formatSignedPercent(signal?.rawEdge ?? null)} accent="gap" gap={signal?.rawEdge ?? null} />
          <Metric
            label="Confidence-adjusted gap"
            value={formatSignedPercent(signal?.adjustedEdge ?? null)}
            accent="gap"
            gap={signal?.adjustedEdge ?? null}
          />
        </section>

        <section className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Metric label="Bid" value={formatPercent(market.bid)} />
          <Metric label="Ask" value={formatPercent(market.ask)} />
          <Metric label="Volume" value={formatCompactNumber(market.volume)} />
          <Metric label="Liquidity" value={formatCompactNumber(market.liquidity)} />
        </section>

        <section className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Metric label="Market snapshot" value={formatDateTime(snapshotAt)} />
          <Metric label="Signal computed" value={formatDateTime(signal?.computedAt)} />
          <Metric label="Stale after" value={formatDateTime(staleAfter)} />
          <Metric label="Spread" value={marketSpread(market)} />
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <section className="rounded-md border border-white/12 bg-white/[0.04] p-5 lg:col-span-2">
            <h2 className="text-base font-semibold text-white">Probability History</h2>
            <p className="mt-1 text-xs text-slate-500">Market-implied probability over time.</p>
            <div className="mt-4">
              <ProbabilityChart history={history} />
            </div>
          </section>

          <section className="rounded-md border border-white/12 bg-white/[0.04] p-5">
            <h2 className="flex items-center gap-2 text-base font-semibold text-white">
              <MapPin size={16} className="text-cyan-200" />
              Linked Cities
            </h2>
            <div className="mt-3 space-y-2">
              {cities.length ? (
                cities.map((city) => (
                  <Link
                    key={city.id}
                    href={`/city/${city.slug}`}
                    className="flex items-center justify-between rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-200 hover:border-cyan-200/35 hover:bg-white/5"
                  >
                    <span>{city.name}</span>
                    <span className="text-xs text-slate-500">{city.countryCode}</span>
                  </Link>
                ))
              ) : (
                <p className="text-sm text-slate-400">No cities linked to this market yet.</p>
              )}
            </div>
          </section>
        </div>

        <section className="mt-6 rounded-md border border-amber-300/20 bg-amber-400/[0.05] p-5">
          <h2 className="flex items-center gap-2 text-base font-semibold text-amber-100">
            <ShieldAlert size={16} />
            Resolution &amp; Settlement Risks
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {risks.map((risk) => (
              <li key={risk} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300/70" />
                {risk}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            These notes explain data quality, event definition, settlement metadata, and market
            microstructure. They are research context only.
          </p>
        </section>

        <section className="mt-6 rounded-md border border-white/12 bg-white/[0.04] p-5">
          <h2 className="text-base font-semibold text-white">Metadata</h2>
          <dl className="mt-4 grid gap-3 text-sm md:grid-cols-2">
            <Detail label="Provider event ID" value={market.providerEventId} />
            <Detail label="Resolution source" value={market.resolutionSource ?? "n/a"} />
            <Detail label="Open interest" value={formatCompactNumber(market.openInterest)} />
            <Detail label="Forecast variable" value={signal?.forecastVariable ?? "n/a"} />
          </dl>
          {market.tags.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {market.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/8 px-2 py-1 text-xs text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </section>
      </div>
    </main>
  );
}

function settlementRisks(market: MarketEvent, signal: CombinedSignal | null): string[] {
  const risks: string[] = [];

  if (signal?.freshnessStatus === "stale") {
    risks.push("Forecast inputs are stale — the model probability may no longer reflect current conditions.");
  } else if (signal?.freshnessStatus === "aging") {
    risks.push("Forecast inputs are aging, so the probability gap should be read with reduced strength.");
  }

  if (typeof signal?.confidence === "number" && signal.confidence < 0.5) {
    risks.push("Model confidence is low, so the probability gap carries elevated uncertainty.");
  }

  if (market.closeTime) {
    const hours = (new Date(market.closeTime).getTime() - Date.now()) / 3_600_000;
    if (hours < 0) risks.push("Market close time has passed; resolution may be pending or settled.");
    else if (hours < 24) risks.push("Market closes within 24 hours, so late probability moves may be noisy.");
  } else {
    risks.push("No close time recorded, so settlement timing is uncertain.");
  }

  if ((market.liquidity ?? 0) < 10_000) {
    risks.push("Thin liquidity can widen the spread and complicate settlement reads.");
  }

  if (!market.resolutionSource) {
    risks.push("No resolution source is recorded — confirm settlement terms with the provider.");
  }

  if (risks.length === 0) {
    risks.push("No elevated settlement risks detected from the available metadata.");
  }

  return risks;
}

function Metric({
  label,
  value,
  accent,
  gap
}: {
  label: string;
  value: string;
  accent?: "cyan" | "violet" | "gap";
  gap?: number | null;
}) {
  let valueColor = "text-white";
  if (accent === "cyan") valueColor = "text-cyan-200";
  else if (accent === "violet") valueColor = "text-violet-200";
  else if (accent === "gap") {
    valueColor =
      gap === null || gap === undefined
        ? "text-slate-400"
        : gap > 0.005
          ? "text-emerald-200"
          : gap < -0.005
            ? "text-rose-200"
            : "text-slate-300";
  }

  return (
    <div className="rounded-md border border-white/10 bg-black/20 p-3">
      <div className="text-[11px] uppercase tracking-wide text-slate-500">{label}</div>
      <div className={`mt-1 font-mono text-xl ${valueColor}`}>{value}</div>
    </div>
  );
}

function marketTimestamp(market: MarketEvent) {
  const fetchedAt = typeof market.raw.fetchedAt === "string" ? market.raw.fetchedAt : null;
  return fetchedAt ?? market.updatedAt ?? market.createdAt ?? null;
}

function marketSpread(market: MarketEvent) {
  if (typeof market.bid !== "number" || typeof market.ask !== "number") return "n/a";
  return formatPercent(Math.abs(market.ask - market.bid));
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/20 p-3">
      <dt className="text-[11px] uppercase text-slate-500">{label}</dt>
      <dd className="mt-1 break-words text-slate-200">{value}</dd>
    </div>
  );
}
