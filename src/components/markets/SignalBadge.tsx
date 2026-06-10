import { AlertTriangle, Minus, TrendingDown, TrendingUp } from "lucide-react";
import type { SignalLabel } from "@/lib/markets/types";
import { cn } from "@/lib/utils";

const SIGNAL_META: Record<
  SignalLabel,
  { classes: string; icon: typeof TrendingUp; description: string }
> = {
  "Strong Long": {
    classes: "border-emerald-300/35 bg-emerald-400/14 text-emerald-100",
    icon: TrendingUp,
    description: "Weather AI probability materially exceeds market-implied probability."
  },
  "Weak Long": {
    classes: "border-teal-300/30 bg-teal-400/10 text-teal-100",
    icon: TrendingUp,
    description: "Weather AI probability is higher, but edge or confidence is moderate."
  },
  Neutral: {
    classes: "border-white/15 bg-white/8 text-slate-300",
    icon: Minus,
    description: "No meaningful edge between Weather AI and the market."
  },
  "Weak Short": {
    classes: "border-orange-300/30 bg-orange-400/10 text-orange-100",
    icon: TrendingDown,
    description: "Market probability is slightly higher than Weather AI probability."
  },
  "Strong Short": {
    classes: "border-rose-300/35 bg-rose-400/14 text-rose-100",
    icon: TrendingDown,
    description: "Market materially overprices the event versus Weather AI probability."
  },
  Avoid: {
    classes: "border-amber-300/35 bg-amber-400/14 text-amber-100",
    icon: AlertTriangle,
    description: "Confidence is low or forecast uncertainty is too high to trust the edge."
  }
};

export function signalDescription(signal: SignalLabel) {
  return SIGNAL_META[signal].description;
}

export function MarketSignalBadge({
  signal,
  className
}: {
  signal: SignalLabel;
  className?: string;
}) {
  const meta = SIGNAL_META[signal];
  const Icon = meta.icon;

  return (
    <span
      title={meta.description}
      className={cn(
        "inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-1 text-[11px] font-semibold leading-none",
        meta.classes,
        className
      )}
    >
      <Icon size={12} aria-hidden />
      {signal}
    </span>
  );
}
