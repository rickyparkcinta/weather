import { ProductHeader } from "@/components/shell/ProductHeader";
import { SignalRankingView } from "@/components/signals/SignalRankingView";
import { NonAdvisoryNotice } from "@/components/ui/NonAdvisoryNotice";
import { usingDemoData } from "@/lib/data/queries";
import { getRankedSignals } from "@/lib/signals/ranking";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Signal Ranking · Weather AI",
  description: "Weather-market signals ranked by confidence-adjusted probability gap, confidence, and freshness."
};

export default async function SignalsPage() {
  const signals = await getRankedSignals();
  return (
    <main className="min-h-[100dvh] bg-[#06080b] text-slate-100">
      <ProductHeader active="signals" demoMode={usingDemoData()} />
      <div className="mx-auto max-w-6xl px-4 pb-16 md:px-8">
        <div className="py-8">
          <h1 className="text-2xl font-semibold text-white md:text-3xl">Signal Ranking</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            Weather-market signals ranked by confidence-adjusted probability gap, confidence,
            freshness, and liquidity.
          </p>
        </div>
        <NonAdvisoryNotice className="mb-4" />
        <SignalRankingView signals={signals} />
      </div>
    </main>
  );
}
