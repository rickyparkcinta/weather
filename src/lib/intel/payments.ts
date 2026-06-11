import { getEnv } from "@/lib/env";
import type { EntitlementCheck, SubscriptionPlan, UserSubscription } from "@/types/domain";

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "free-research",
    name: "Research",
    description: "Core weather terminal, docs, and delayed model-market diagnostics.",
    entitlements: ["terminal.read", "docs.read", "api.summary"],
    active: true
  },
  {
    id: "pro-terminal",
    name: "Pro Terminal",
    description: "Expanded alerts, bot-compatible APIs, ops visibility, and realtime-ready diagnostics.",
    entitlements: ["terminal.read", "docs.read", "api.summary", "alerts.manage", "ops.read", "realtime.read"],
    active: true
  },
  {
    id: "enterprise-ops",
    name: "Enterprise Ops",
    description: "Admin-configurable plan placeholder for teams and private provider adapters.",
    entitlements: ["terminal.read", "docs.read", "api.summary", "alerts.manage", "ops.read", "realtime.read", "providers.private"],
    active: Boolean(getEnv("ENABLE_PAYMENTS") === "true")
  }
];

/** Default plan assignment until real auth/billing identifies the user. */
export function getDefaultSubscription(userId = "local-user"): UserSubscription {
  return {
    id: "sub-default",
    userId,
    planId: "free-research",
    status: "active",
    currentPeriodEnd: null
  };
}

export function checkEntitlement(subscription: UserSubscription | null, entitlement: string): EntitlementCheck {
  const plan = subscriptionPlans.find((item) => item.id === subscription?.planId) ?? subscriptionPlans[0];
  const allowed = Boolean(plan?.active && plan.entitlements.includes(entitlement));
  return {
    allowed,
    planId: plan?.id ?? null,
    entitlement,
    reason: allowed ? "Entitlement is included in the active plan." : "Entitlement is not included in the current plan skeleton."
  };
}
