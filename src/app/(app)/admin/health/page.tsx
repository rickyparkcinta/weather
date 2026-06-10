import Link from "next/link";
import { BookOpen, CheckCircle2, CircleAlert, CircleX, CreditCard, Database, MinusCircle, ServerCog } from "lucide-react";
import { ProductHeader } from "@/components/shell/ProductHeader";
import { getHealthReport, type Warning } from "@/lib/data/health";
import { appCopy, type AppLocale } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Data Health · RiWeather",
  description: "Live data status, ingestion freshness, env configuration, and operator guidance."
};

export default async function AdminHealthPage() {
  return <AdminHealthPageContent locale="en" />;
}

export async function AdminHealthPageContent({ locale }: { locale: AppLocale }) {
  const report = await getHealthReport();
  const copy = appCopy[locale];

  return (
    <main className="min-h-[100dvh] bg-[#06080b] text-slate-100">
      <ProductHeader active="health" demoMode={report.demoMode} locale={locale} />
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-6 md:px-8">
        <div className="flex flex-col gap-4 py-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white md:text-3xl">Data Health</h1>
            <p className="mt-2 text-sm text-slate-400">
              Operational status for the RiWeather pipeline. Secret values are never shown - only whether
              each variable is configured.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/ops" className="inline-flex h-10 items-center gap-2 rounded-md border border-white/12 px-3 text-sm text-slate-200 hover:bg-white/8">
              <ServerCog size={15} />
              Ops console
            </Link>
            <Link href="/ops/payments" className="inline-flex h-10 items-center gap-2 rounded-md border border-white/12 px-3 text-sm text-slate-200 hover:bg-white/8">
              <CreditCard size={15} />
              Payments ops
            </Link>
            <Link href="/docs/ops" className="inline-flex h-10 items-center gap-2 rounded-md border border-white/12 px-3 text-sm text-slate-200 hover:bg-white/8">
              <BookOpen size={15} />
              Ops docs
            </Link>
          </div>
        </div>

        {/* Mode banner */}
        <div
          className={`flex items-center gap-3 rounded-md border p-4 ${
            report.demoMode
              ? "border-amber-300/25 bg-amber-400/[0.06] text-amber-100"
              : "border-emerald-300/25 bg-emerald-400/[0.06] text-emerald-100"
          }`}
        >
            <Database size={18} />
          <div>
            <div className="text-sm font-semibold">
              {report.demoMode ? copy.status.demoMode : copy.status.liveMode}
            </div>
            <div className="text-xs opacity-80">
              {report.demoMode
                ? "Serving built-in demo fixtures. Live data is not currently active."
                : "Serving live data."}
            </div>
          </div>
        </div>

        {/* Warnings */}
        {report.warnings.length > 0 ? (
          <section className="mt-6 space-y-2">
            {report.warnings.map((warning) => (
              <WarningRow key={warning.message} warning={warning} />
            ))}
          </section>
        ) : (
          <section className="mt-6 flex items-center gap-2 rounded-md border border-emerald-300/20 bg-emerald-400/[0.05] p-4 text-sm text-emerald-100">
            <CheckCircle2 size={16} />
            No stale-data or configuration warnings.
          </section>
        )}

        {/* Counts */}
        <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Metric label="Cities" value={report.counts.cities} />
          <Metric label="Forecast points" value={report.counts.forecast} />
          <Metric label="Markets" value={report.counts.markets} />
          <Metric label="Combined signals" value={report.counts.signals} />
        </section>

        {/* Runs */}
        <section className="mt-8">
          <h2 className="text-base font-semibold text-white">Pipeline runs</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            {report.runs.map((run) => (
              <div key={run.label} className="rounded-md border border-white/12 bg-white/[0.04] p-4">
                <div className="text-[11px] uppercase tracking-wide text-slate-500">{run.label}</div>
                <div className="mt-1 text-sm font-medium text-white">
                  {run.at ? new Date(run.at).toLocaleString() : "—"}
                </div>
                <div className="mt-1 text-xs text-slate-400">
                  <span className="rounded-full bg-white/8 px-2 py-0.5">{run.status ?? "n/a"}</span>
                </div>
                {run.detail ? <div className="mt-2 text-xs text-slate-500">{run.detail}</div> : null}
              </div>
            ))}
          </div>
        </section>

        {/* Env config */}
        <section className="mt-8">
          <h2 className="text-base font-semibold text-white">Environment configuration</h2>
          <div className="mt-3 grid gap-2 md:grid-cols-2">
            {report.env.map((env) => (
              <div
                key={env.key}
                className="flex items-center justify-between rounded-md border border-white/12 bg-white/[0.04] p-3"
              >
                <div className="min-w-0">
                  <div className="text-sm text-slate-200">{env.label}</div>
                  <div className="truncate font-mono text-[11px] text-slate-500">{env.key}</div>
                </div>
                {env.configured ? (
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-300">
                    <CheckCircle2 size={15} /> set
                  </span>
                ) : env.required ? (
                  <span className="inline-flex items-center gap-1 text-xs text-rose-300">
                    <CircleX size={15} /> missing
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                    <MinusCircle size={15} /> optional
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Operator instructions */}
        <section className="mt-8 rounded-md border border-white/12 bg-white/[0.04] p-5">
          <h2 className="text-base font-semibold text-white">Operator guide</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-300">
            <li>
              Set <Code>NEXT_PUBLIC_SUPABASE_URL</Code> and <Code>NEXT_PUBLIC_SUPABASE_ANON_KEY</Code> to
              connect the public read client.
            </li>
            <li>
              Set <Code>SUPABASE_SERVICE_ROLE_KEY</Code> and <Code>INGESTION_SECRET</Code> (server-only) so
              ingestion and sync routes can write. Never expose the service role key to client code.
            </li>
            <li>
              Apply the SQL migrations in <Code>supabase/migrations</Code> and seed cities via{" "}
              <Code>supabase/seed.sql</Code>.
            </li>
            <li>
              Populate live data with <Code>pnpm sync:real-api</Code> or by POSTing to{" "}
              <Code>/api/sync/real-api</Code> with the ingestion secret.
            </li>
            <li>
              Set <Code>NEXT_PUBLIC_ENABLE_DEMO_DATA=false</Code> to force live data once the database is
              populated.
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}

function WarningRow({ warning }: { warning: Warning }) {
  const error = warning.level === "error";
  return (
    <div
      className={`flex items-start gap-3 rounded-md border p-3 text-sm ${
        error ? "border-rose-300/25 bg-rose-500/10 text-rose-100" : "border-amber-300/25 bg-amber-400/[0.06] text-amber-100"
      }`}
    >
      <CircleAlert size={16} className="mt-0.5 shrink-0" />
      {warning.message}
    </div>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-md border border-white/12 bg-white/[0.04] p-4">
      <div className="text-[11px] uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-1 font-mono text-2xl text-white">{value}</div>
    </div>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-black/40 px-1.5 py-0.5 font-mono text-[12px] text-cyan-200">{children}</code>
  );
}
