import Link from "next/link";
import { CheckCircle2, CreditCard, KeyRound, ShieldCheck } from "lucide-react";
import { ProductHeader } from "@/components/shell/ProductHeader";
import { usingDemoData } from "@/lib/data/queries";
import { checkEntitlement, getDemoSubscription, subscriptionPlans } from "@/lib/intel/payments";
import { localizedPath } from "@/lib/i18n";

export const metadata = {
  title: "Account · RiWeather",
  description: "Subscription status and entitlement skeleton for RiWeather."
};

export default function AccountPage() {
  const subscription = getDemoSubscription();
  const plan = subscriptionPlans.find((item) => item.id === subscription.planId) ?? subscriptionPlans[0];
  const checks = ["terminal.read", "api.summary", "alerts.manage", "ops.read", "providers.private"].map((entitlement) =>
    checkEntitlement(subscription, entitlement)
  );

  return (
    <main className="min-h-[100dvh] bg-[#06080b] text-slate-100">
      <ProductHeader active="pricing" demoMode={usingDemoData()} />
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-6 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white md:text-3xl">Account</h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
              Safe subscription skeleton for entitlement checks. Payment provider wiring is intentionally environment-gated.
            </p>
          </div>
          <Link href={localizedPath("en", "/pricing")} className="inline-flex h-10 items-center gap-2 rounded-md border border-white/12 px-3 text-sm text-slate-100 hover:bg-white/8">
            <CreditCard size={15} />
            Pricing
          </Link>
        </div>

        <section className="mt-6 rounded-md border border-white/12 bg-white/[0.04] p-5">
          <h2 className="flex items-center gap-2 text-base font-semibold text-white">
            <ShieldCheck size={16} />
            Current Plan
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <Detail label="Plan" value={plan.name} />
            <Detail label="Status" value={subscription.status} />
            <Detail label="Period end" value={subscription.currentPeriodEnd ?? "not set"} />
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-400">{plan.description}</p>
        </section>

        <section className="mt-6 rounded-md border border-white/12 bg-white/[0.04] p-5">
          <h2 className="flex items-center gap-2 text-base font-semibold text-white">
            <KeyRound size={16} />
            Entitlements
          </h2>
          <div className="mt-4 grid gap-2">
            {checks.map((check) => (
              <div key={check.entitlement} className="flex items-center justify-between gap-4 rounded-md border border-white/10 bg-black/20 p-3">
                <div>
                  <div className="font-mono text-sm text-white">{check.entitlement}</div>
                  <div className="mt-1 text-xs text-slate-500">{check.reason}</div>
                </div>
                <span className={check.allowed ? "inline-flex items-center gap-1 text-xs text-emerald-300" : "text-xs text-slate-500"}>
                  {check.allowed ? <CheckCircle2 size={15} /> : null}
                  {check.allowed ? "allowed" : "not included"}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/20 p-3">
      <div className="text-[11px] uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-1 text-sm text-white">{value}</div>
    </div>
  );
}
