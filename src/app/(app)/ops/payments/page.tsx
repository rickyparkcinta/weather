import { CreditCard, Database, KeyRound } from "lucide-react";
import { ProductHeader } from "@/components/shell/ProductHeader";
import { getEnv } from "@/lib/env";
import { subscriptionPlans } from "@/lib/intel/payments";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Payments Ops · RiWeather",
  description: "Payment event, plan, subscription, and entitlement skeleton for operators."
};

export default async function OpsPaymentsPage() {
  const paymentsEnabled = getEnv("ENABLE_PAYMENTS") === "true";

  return (
    <main className="min-h-[100dvh] bg-[#06080b] text-slate-100">
      <ProductHeader />
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 md:px-8">
        <div>
          <h1 className="text-2xl font-semibold text-white md:text-3xl">Payments Ops</h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
            Subscription, payment event, and entitlement skeleton. Pricing values are admin-configurable and not hardcoded here.
          </p>
        </div>

        <section className="mt-6 grid gap-3 md:grid-cols-3">
          <Metric icon={<CreditCard size={16} />} label="Payments enabled" value={paymentsEnabled ? "true" : "false"} />
          <Metric icon={<Database size={16} />} label="Plan rows" value={String(subscriptionPlans.length)} />
          <Metric icon={<KeyRound size={16} />} label="Entitlement checks" value="server-side skeleton" />
        </section>

        <section className="mt-8 rounded-md border border-white/12 bg-white/[0.04]">
          <div className="border-b border-white/10 px-5 py-4">
            <h2 className="text-base font-semibold text-white">Plans</h2>
            <p className="mt-1 text-sm text-slate-500">These map to `subscription_plans`, `user_subscriptions`, `payment_events`, `payment_status`, and entitlement checks.</p>
          </div>
          <div className="grid gap-3 p-4 md:grid-cols-3">
            {subscriptionPlans.map((plan) => (
              <article key={plan.id} className="rounded-md border border-white/10 bg-black/20 p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-white">{plan.name}</h3>
                  <span className={plan.active ? "text-xs text-emerald-300" : "text-xs text-slate-500"}>{plan.active ? "active" : "inactive"}</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">{plan.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {plan.entitlements.map((entitlement) => (
                    <span key={entitlement} className="rounded-full bg-white/8 px-2 py-1 font-mono text-[11px] text-slate-300">
                      {entitlement}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/12 bg-white/[0.04] p-4">
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-wide text-slate-500">
        {icon}
        {label}
      </div>
      <div className="mt-2 font-mono text-lg text-white">{value}</div>
    </div>
  );
}
