import Link from "next/link";
import { Activity, BookOpen, Database, DollarSign, Gauge, Map as MapIcon, Network, Radar, ShieldCheck } from "lucide-react";
import { DataSourceBadge } from "@/components/ui/DataSourceBadge";
import { appCopy, localizedPath, type AppCopy, type AppLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type NavKey = "map" | "graph" | "signals" | "data" | "weather-bonds" | "pricing" | "docs" | "health";

const NAV: { key: NavKey; label: string; href: string; icon: typeof MapIcon }[] = [
  { key: "map", label: "Map", href: "/", icon: MapIcon },
  { key: "graph", label: "Graph", href: "/graph", icon: Network },
  { key: "signals", label: "Odds", href: "/signals", icon: Activity },
  { key: "data", label: "Data", href: "/data", icon: Database },
  { key: "weather-bonds", label: "Weather bonds", href: "/weather-bonds", icon: ShieldCheck },
  { key: "pricing", label: "Pricing", href: "/pricing", icon: DollarSign },
  { key: "docs", label: "Docs", href: "/docs", icon: BookOpen },
  { key: "health", label: "Health", href: "/admin/health", icon: Gauge }
];

export function ProductBrand({
  className,
  locale = "en"
}: {
  className?: string;
  locale?: AppLocale;
}) {
  return <ProductBrandView className={className} locale={locale} copy={appCopy[locale]} />;
}

function ProductBrandView({
  className,
  locale,
  copy
}: {
  className?: string;
  locale: AppLocale;
  copy: AppCopy;
}) {
  return (
    <Link href={localizedPath(locale, "/")} className={cn("group inline-flex items-center gap-2", className)} aria-label={copy.brand.aria}>
      <span className="flex h-8 w-8 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 shadow-[0_0_20px_rgba(55,194,255,0.25)]">
        <Radar size={17} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-sm font-semibold tracking-tight text-white">{copy.brand.name}</span>
        <span className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-slate-500">
          {copy.brand.tagline}
        </span>
      </span>
    </Link>
  );
}

export function ProductHeader({
  active,
  demoMode,
  locale = "en"
}: {
  active: NavKey;
  demoMode: boolean;
  locale?: AppLocale;
}) {
  const copy = appCopy[locale];
  const labels: Record<NavKey, string> = {
    map: copy.nav.map,
    graph: copy.nav.graph,
    signals: copy.nav.signals,
    data: copy.nav.data,
    "weather-bonds": copy.nav.weatherBonds,
    pricing: copy.nav.pricing,
    docs: copy.nav.docs,
    health: copy.nav.health
  };

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#06080b]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <ProductBrandView locale={locale} copy={copy} />
        <nav className="flex min-w-0 items-center gap-1 overflow-x-auto" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.key}
              href={localizedPath(locale, item.href)}
              aria-current={item.key === active ? "page" : undefined}
              className={cn(
                "inline-flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm transition",
                item.key === active
                  ? "bg-white/10 text-white"
                  : "text-slate-300 hover:bg-white/8 hover:text-white"
              )}
            >
              <item.icon size={15} />
              <span className="hidden lg:inline">{labels[item.key] ?? item.label}</span>
            </Link>
          ))}
          <DataSourceBadge demoMode={demoMode} locale={locale} className="ml-1 hidden xl:inline-flex" />
        </nav>
      </div>
    </header>
  );
}
