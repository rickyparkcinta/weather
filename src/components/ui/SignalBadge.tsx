import { cn } from "@/lib/utils";
import {
  classifySignal,
  confidenceLabel,
  freshnessLabel,
  toneClasses,
  type SignalTone
} from "@/lib/signals/classify";
import type { CombinedSignal } from "@/types/domain";

export function Badge({
  tone = "muted",
  children,
  className,
  title
}: {
  tone?: SignalTone;
  children: React.ReactNode;
  className?: string;
  title?: string;
}) {
  const tc = toneClasses(tone);
  return (
    <span
      title={title}
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium leading-none",
        tc.text,
        tc.bg,
        tc.border,
        className
      )}
    >
      {children}
    </span>
  );
}

export function SignalStateBadge({
  signal,
  variant = "full",
  className
}: {
  signal: CombinedSignal;
  variant?: "full" | "short";
  className?: string;
}) {
  const meta = classifySignal(signal);
  return (
    <Badge tone={meta.tone} className={className} title={`${meta.description} ${meta.helpText}`}>
      <span aria-hidden>{dot(meta.tone)}</span>
      {variant === "short" ? meta.short : meta.label}
    </Badge>
  );
}

export function FreshnessBadge({
  status,
  className
}: {
  status: CombinedSignal["freshnessStatus"] | null | undefined;
  className?: string;
}) {
  const fresh = freshnessLabel(status);
  return (
    <Badge tone={fresh.tone} className={className} title={`Data freshness: ${fresh.label}.`}>
      {fresh.label}
    </Badge>
  );
}

export function ConfidenceBadge({
  confidence,
  className
}: {
  confidence: number | null | undefined;
  className?: string;
}) {
  const meta = confidenceLabel(confidence);
  return (
    <Badge tone={meta.tone} className={className} title={`Signal confidence: ${meta.label}.`}>
      {meta.label} confidence
    </Badge>
  );
}

function dot(tone: SignalTone) {
  const color =
    tone === "positive"
      ? "bg-emerald-300"
      : tone === "warning"
        ? "bg-amber-300"
      : tone === "negative"
        ? "bg-rose-300"
        : tone === "neutral"
          ? "bg-sky-300"
          : "bg-slate-400";
  return <span className={cn("h-1.5 w-1.5 rounded-full", color)} />;
}
