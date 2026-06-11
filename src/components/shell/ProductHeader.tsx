import Link from "next/link";
import { Radar } from "lucide-react";
import { GlobalSidebar } from "@/components/shell/GlobalSidebar";
import { DataSourceBadge } from "@/components/ui/DataSourceBadge";
import { appCopy, localizedPath, type AppCopy, type AppLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

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
        <span className="mt-0.5 whitespace-nowrap text-[10px] uppercase tracking-[0.14em] text-slate-500">
          {copy.brand.tagline}
        </span>
      </span>
    </Link>
  );
}

export function ProductHeader({ locale = "en" }: { locale?: AppLocale }) {
  const copy = appCopy[locale];

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#06080b]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <div className="flex items-center gap-3">
          <GlobalSidebar locale={locale} />
          <ProductBrandView locale={locale} copy={copy} />
        </div>
        <DataSourceBadge locale={locale} className="hidden sm:inline-flex" />
      </div>
    </header>
  );
}
