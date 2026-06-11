import { Database } from "lucide-react";
import { appCopy, type AppLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function DataSourceBadge({
  locale = "en",
  className
}: {
  locale?: AppLocale;
  className?: string;
}) {
  const copy = appCopy[locale];

  return (
    <span
      className={cn(
        "inline-flex h-7 items-center gap-2 rounded-full border border-white/15 bg-emerald-400/12 px-3 text-xs font-medium text-emerald-100",
        className
      )}
    >
      <Database size={14} />
      {copy.status.liveData}
    </span>
  );
}
