import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

export const nonAdvisoryNoticeText =
  "Signals explain forecast-model disagreement, market-implied probability, data freshness, and uncertainty. They are for research only and are not trading advice.";

export function NonAdvisoryNotice({
  className,
  compact = false
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <aside
      className={cn(
        "rounded-md border border-cyan-200/18 bg-cyan-300/[0.055] text-cyan-50/90",
        compact ? "p-3 text-xs leading-5" : "p-4 text-sm leading-6",
        className
      )}
    >
      <div className="flex items-start gap-2">
        <Info size={compact ? 14 : 16} className="mt-0.5 shrink-0 text-cyan-100" />
        <p>{nonAdvisoryNoticeText}</p>
      </div>
    </aside>
  );
}
