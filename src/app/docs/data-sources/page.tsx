import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const sources = [
  {
    name: "Supabase Postgres",
    body: "Primary application database. The Vercel app reads normalized city, forecast, market, history, and combined-signal records from Supabase."
  },
  {
    name: "Hourly agent bot",
    body: "External process owned by the operator. It fetches official/public APIs, normalizes records, and calls the secured ingestion routes with INGESTION_SECRET."
  },
  {
    name: "Forecast providers",
    body: "Supported adapter targets are Windy API, NOAA/NCEP NOMADS GFS, ECMWF Open Data, and Open-Meteo. Production ingestion should respect each provider's attribution and usage terms."
  },
  {
    name: "Prediction-market providers",
    body: "Supported adapter targets are Kalshi official API and Polymarket official APIs. Market availability and trading permissions may vary by jurisdiction."
  }
];

export default function DataSourcesPage() {
  return (
    <main className="min-h-screen bg-[#06080b] px-4 py-6 text-slate-100 md:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm text-slate-200 hover:bg-white/8">
          <ArrowLeft size={16} />
          Map
        </Link>
        <h1 className="mt-8 text-3xl font-semibold text-white">Data Sources</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
          This app is a data display and intelligence interface. It does not provide trading advice, and prediction-market probabilities are not forecast guarantees.
        </p>

        <div className="mt-8 grid gap-4">
          {sources.map((source) => (
            <section key={source.name} className="rounded-md border border-white/12 bg-white/[0.04] p-5">
              <h2 className="text-base font-semibold text-white">{source.name}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">{source.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-8 rounded-md border border-amber-200/20 bg-amber-300/8 p-5">
          <h2 className="text-base font-semibold text-amber-100">Transparency Notes</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-amber-50/80">
            <li>Data can be delayed by provider update cadence, bot failures, Supabase replication, or Vercel cache behavior.</li>
            <li>Forecast model output is probabilistic and can disagree across models or runs.</li>
            <li>Market data reflects traded prices and order books, not verified truth.</li>
            <li>Market access, display, and trading may be restricted by local laws or provider rules.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
