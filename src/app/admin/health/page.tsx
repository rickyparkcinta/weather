import Link from "next/link";
import { ArrowLeft, CheckCircle2, CircleAlert } from "lucide-react";
import { getEnv, isDemoModeEnabled } from "@/lib/env";
import { listCities, listMarkets } from "@/lib/data/queries";

export const dynamic = "force-dynamic";

export default async function AdminHealthPage() {
  const [cities, markets] = await Promise.all([listCities(), listMarkets()]);
  const checks = [
    { label: "Supabase URL", ok: Boolean(getEnv("NEXT_PUBLIC_SUPABASE_URL")) },
    { label: "Supabase anon key", ok: Boolean(getEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY")) },
    { label: "Service role key", ok: Boolean(getEnv("SUPABASE_SERVICE_ROLE_KEY")) },
    { label: "Ingestion secret", ok: Boolean(getEnv("INGESTION_SECRET")) },
    { label: "Demo mode", ok: isDemoModeEnabled() }
  ];

  return (
    <main className="min-h-screen bg-[#06080b] px-4 py-6 text-slate-100 md:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm text-slate-200 hover:bg-white/8">
          <ArrowLeft size={16} />
          Map
        </Link>
        <h1 className="mt-8 text-3xl font-semibold text-white">Health</h1>
        <p className="mt-3 text-sm text-slate-400">Status only. Secret values are never shown.</p>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {checks.map((check) => (
            <div key={check.label} className="flex items-center justify-between rounded-md border border-white/12 bg-white/[0.04] p-4">
              <span className="text-sm text-slate-200">{check.label}</span>
              {check.ok ? <CheckCircle2 size={18} className="text-emerald-300" /> : <CircleAlert size={18} className="text-amber-300" />}
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <Metric label="Cities readable" value={String(cities.length)} />
          <Metric label="Markets readable" value={String(markets.length)} />
        </div>
      </div>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/12 bg-white/[0.04] p-4">
      <div className="text-[11px] uppercase text-slate-500">{label}</div>
      <div className="mt-1 font-mono text-2xl text-white">{value}</div>
    </div>
  );
}
