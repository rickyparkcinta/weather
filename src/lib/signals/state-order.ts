import type { SignalState, SignalTone } from "@/lib/signals/classify";

/** Canonical display order for neutral signal states. */
export const STATE_ORDER: { state: SignalState; label: string; tone: SignalTone }[] = [
  { state: "aligned", label: "Aligned", tone: "positive" },
  { state: "watch", label: "Watch", tone: "neutral" },
  { state: "divergent", label: "Divergent", tone: "negative" },
  { state: "stale", label: "Stale", tone: "warning" },
  { state: "unavailable", label: "Unavailable", tone: "muted" },
  { state: "high_uncertainty", label: "High uncertainty", tone: "warning" }
];
