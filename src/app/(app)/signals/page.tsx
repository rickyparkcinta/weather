import { ProductHeader } from "@/components/shell/ProductHeader";
import { SignalRankingView } from "@/components/signals/SignalRankingView";
import { ErrorState } from "@/components/ui/ErrorState";
import { NonAdvisoryNotice } from "@/components/ui/NonAdvisoryNotice";
import { usingDemoData } from "@/lib/data/queries";
import { getRankedSignals } from "@/lib/signals/ranking";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Weather Signal Intelligence · Weather AI",
  description: "Live model-vs-market probability signals with source provenance, freshness checks, and documented formulas."
};

export default async function SignalsPage() {
  const demoMode = usingDemoData();
  const result = await loadSignals();

  return (
    <main className="min-h-[100dvh] bg-[#06080b] text-slate-100">
      <ProductHeader active="signals" demoMode={demoMode} />
      <div className="mx-auto max-w-7xl px-4 py-8 pb-16 md:px-8">
        <NonAdvisoryNotice className="mb-4" />
        {result.error ? (
          <LiveDataError message={result.error} demoMode={demoMode} />
        ) : (
          <SignalRankingView signals={result.signals} demoMode={demoMode} />
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
      error: error instanceof Error ? error.message : "Unable to load combined signal records."
    };
  }
}

function LiveDataError({ message, demoMode }: { message: string; demoMode: boolean }) {
  return (
    <section className="grid gap-4 rounded-md border border-white/10 bg-white/[0.03] p-4">
      <div>
        <h1 className="text-3xl font-semibold text-white md:text-4xl">Weather Signal Intelligence</h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
          Live signal records could not be loaded from Supabase. Demo records are only shown when NEXT_PUBLIC_ENABLE_DEMO_DATA=true.
        </p>
      </div>
      <ErrorState
        title={
          demoMode
            ? `Demo signal data could not be loaded: ${message}`
            : `Live Supabase data is unavailable: ${message}`
        }
      />
      {!demoMode ? (
        <div className="rounded-md border border-amber-300/20 bg-amber-300/8 p-4 text-sm leading-6 text-amber-50">
          No demo fallback was used. Configure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY, or explicitly enable demo mode for non-live records.
        </div>
      ) : null}
    </section>
  );
}
