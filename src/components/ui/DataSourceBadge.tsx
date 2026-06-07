import { Database, FlaskConical } from "lucide-react";
import { appCopy, type AppLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function DataSourceBadge({
  demoMode,
  locale = "en",
  className
}: {
  demoMode: boolean;
  locale?: AppLocale;
  className?: string;
}) {
  const Icon = demoMode ? FlaskConical : Database;
  const copy = appCopy[locale];

  return (
    <span
      className={cn(
        "inline-flex h-7 items-center gap-2 rounded-full border border-white/15 px-3 text-xs font-medium text-slate-100",
        demoMode ? "bg-amber-400/12 text-amber-100" : "bg-emerald-400/12 text-emerald-100",
        className
      )}
    >
      <Icon size={14} />
      {demoMode ? copy.status.demoData : copy.status.liveData}
    </span>
  );
}
