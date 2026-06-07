import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

export const nonAdvisoryNoticeText =
  "Odds analysis compares market-implied probability, estimated fair value, data freshness, and uncertainty for research and paper trading only. It is not financial, gambling, or investment advice, and the app does not place bets or submit orders.";

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
