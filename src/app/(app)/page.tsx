import { Radar } from "lucide-react";
import { MarketFeed } from "@/components/markets/MarketFeed";
import { ProductHeader } from "@/components/shell/ProductHeader";
import { NonAdvisoryNotice } from "@/components/ui/NonAdvisoryNotice";
import { enrichEvents } from "@/lib/markets/calculations";
import { listLiveCityMarketEvents } from "@/lib/markets/live";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Weather AI · City Weather Markets",
  description:
    "Weather AI compares official forecast-model probabilities against market-implied odds to surface city-level weather edges."
};

export default async function HomePage() {
  const events = enrichEvents(await listLiveCityMarketEvents());

  return (
    <main className="min-h-[100dvh] bg-[#06080b] text-slate-100">
      <ProductHeader />
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-5 md:px-8">
        <header>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-md border border-cyan-200/20 bg-cyan-300/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100">
              <Radar size={14} aria-hidden />
              Weather AI
            </span>
          </div>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-4xl">City Weather Markets</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 md:text-base md:leading-7">
            Weather AI compares official forecast-model probabilities against market-implied odds to surface
            city-level weather edges.
          </p>
          <details className="mt-3 max-w-2xl rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-400 open:pb-3">
            <summary className="cursor-pointer select-none py-1 text-slate-300">How to read this feed</summary>
            <ul className="mt-2 grid gap-1.5 text-xs leading-5">
              <li>
                AI Odds represent our calibrated probability estimate based on forecast models, uncertainty, and
                recent verification.
              </li>
              <li>Edge is the difference between Weather AI probability and market-implied probability.</li>
              <li>Confidence reflects model agreement, forecast stability, and recent skill.</li>
              <li>Low-confidence events are marked Avoid even when raw edge looks attractive.</li>
            </ul>
          </details>
        </header>

        <NonAdvisoryNotice className="mt-4" />

        <div className="mt-4">
          <MarketFeed events={events} />
        </div>
      </div>
    </main>
  );
}
