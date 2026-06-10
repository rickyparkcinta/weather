import { CircleDashed, ExternalLink, Lock, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const FUTURE_REQUIREMENTS = [
  "Wallet connection (non-custodial)",
  "Eligibility and geoblock checks",
  "Order preview with slippage and fee warning",
  "Polymarket CLOB order signing",
  "Builder-code attribution and builder-fee disclosure"
];

export function ExecutionReadinessPanel({
  providerUrl,
  provider,
  className
}: {
  providerUrl?: string | null;
  provider?: string | null;
  className?: string;
}) {
  const isPolymarket = provider?.toLowerCase() === "polymarket";
  return (
    <section className={cn("rounded-md border border-white/10 bg-white/[0.035] p-4", className)}>
      <div className="flex items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-base font-semibold text-white">
          <ShieldCheck size={16} className="text-cyan-100" />
          Execution Readiness
        </h2>
        <span className="rounded-full border border-emerald-300/30 bg-emerald-400/12 px-2 py-0.5 text-[11px] font-medium text-emerald-100">
          Research only
        </span>
      </div>

      <dl className="mt-4 grid gap-2">
        <ReadinessRow label="Status" value="Research and analytics" />
        <ReadinessRow label="Trading" value="Not enabled in this build" />
        <ReadinessRow label="Planned" value="Polymarket builder-code order routing, where permitted" />
      </dl>

      <div className="mt-4 rounded-md border border-white/10 bg-black/18 p-3">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-slate-500">
          <CircleDashed size={13} />
          Requirements before live trading
        </div>
        <ul className="mt-2 grid gap-1.5 text-sm leading-6 text-slate-300">
          {FUTURE_REQUIREMENTS.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          disabled
          aria-disabled="true"
          title="Order routing is not enabled in this build."
          className="inline-flex h-10 cursor-not-allowed items-center gap-2 rounded-md border border-white/12 bg-white/[0.04] px-3 text-sm text-slate-500"
        >
          <Lock size={14} />
          {isPolymarket ? "Trade on Polymarket — coming soon" : "Trading integration — coming soon"}
        </button>
        {providerUrl ? (
          <a
            href={providerUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-md border border-cyan-200/25 px-3 text-sm text-cyan-100 hover:bg-cyan-300/10"
          >
            View on provider
            <ExternalLink size={14} />
          </a>
        ) : null}
      </div>

      <p className="mt-3 text-xs leading-5 text-slate-500">
        Order routing is not enabled in this build. Current views are research and analytics only.
      </p>
    </section>
  );
}

function ReadinessRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/18 p-3">
      <dt className="text-[10px] uppercase tracking-[0.14em] text-slate-500">{label}</dt>
      <dd className="mt-1 text-sm leading-5 text-slate-100">{value}</dd>
    </div>
  );
}
