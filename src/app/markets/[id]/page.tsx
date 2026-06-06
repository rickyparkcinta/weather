import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getMarketById, getMarketHistory } from "@/lib/data/queries";
import { formatCompactNumber, formatPercent } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function MarketPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [market, history] = await Promise.all([getMarketById(id), getMarketHistory(id)]);

  if (!market) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#06080b] px-4 py-6 text-slate-100 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm text-slate-200 hover:bg-white/8">
            <ArrowLeft size={16} />
            Map
          </Link>
        </div>

        <section className="rounded-md border border-white/12 bg-white/[0.04] p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="text-xs uppercase tracking-wide text-slate-500">{market.provider}</div>
              <h1 className="mt-2 max-w-3xl text-2xl font-semibold leading-tight text-white">{market.title}</h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">{market.description ?? "No provider description was included in the normalized record."}</p>
            </div>
            {market.url ? (
              <a href={market.url} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-md border border-cyan-200/25 px-3 py-2 text-sm text-cyan-100 hover:bg-cyan-300/10">
                Provider
                <ExternalLink size={15} />
              </a>
            ) : null}
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-5">
            <Metric label="Probability" value={formatPercent(market.probability)} />
            <Metric label="Bid" value={formatPercent(market.bid)} />
            <Metric label="Ask" value={formatPercent(market.ask)} />
            <Metric label="Volume" value={formatCompactNumber(market.volume)} />
            <Metric label="Liquidity" value={formatCompactNumber(market.liquidity)} />
          </div>
        </section>

        <section className="mt-6 rounded-md border border-white/12 bg-white/[0.04] p-5">
          <h2 className="text-base font-semibold text-white">Probability History</h2>
          <div className="mt-4 flex h-52 items-end gap-1 rounded-md border border-white/10 bg-black/20 p-3">
            {history.length ? (
              history.map((point) => (
                <div
                  key={`${point.marketEventId}-${point.timestamp}`}
                  title={`${new Date(point.timestamp).toLocaleString()}: ${formatPercent(point.probability)}`}
                  className="min-w-2 flex-1 rounded-t bg-cyan-300/70"
                  style={{ height: `${Math.max(4, (point.probability ?? 0) * 100)}%` }}
                />
              ))
            ) : (
              <div className="self-center text-sm text-slate-400">No history records available.</div>
            )}
          </div>
        </section>

        <section className="mt-6 rounded-md border border-white/12 bg-white/[0.04] p-5">
          <h2 className="text-base font-semibold text-white">Resolution And Metadata</h2>
          <dl className="mt-4 grid gap-3 text-sm md:grid-cols-2">
            <Detail label="Provider event ID" value={market.providerEventId} />
            <Detail label="Status" value={market.status ?? "n/a"} />
            <Detail label="Close time" value={market.closeTime ? new Date(market.closeTime).toLocaleString() : "n/a"} />
            <Detail label="Resolution source" value={market.resolutionSource ?? "n/a"} />
          </dl>
          <div className="mt-4 flex flex-wrap gap-2">
            {market.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-white/8 px-2 py-1 text-xs text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/20 p-3">
      <div className="text-[11px] uppercase text-slate-500">{label}</div>
      <div className="mt-1 font-mono text-lg text-white">{value}</div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/20 p-3">
      <dt className="text-[11px] uppercase text-slate-500">{label}</dt>
      <dd className="mt-1 break-words text-slate-200">{value}</dd>
    </div>
  );
}
