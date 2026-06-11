"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  BookOpen,
  Database,
  DollarSign,
  Gauge,
  Languages,
  LayoutGrid,
  Map as MapIcon,
  Menu,
  Network,
  Radar,
  ShieldCheck,
  UserRound,
  Wrench,
  X
} from "lucide-react";
import { appCopy, appLocales, localizedPath, switchLocalePath, type AppCopy, type AppLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type SidebarNavItem = {
  key: keyof AppCopy["nav"];
  href: string;
  icon: typeof MapIcon;
  enOnly?: boolean;
};

const NAV_ITEMS: SidebarNavItem[] = [
  { key: "markets", href: "/", icon: LayoutGrid, enOnly: true },
  { key: "map", href: "/map", icon: MapIcon },
  { key: "graph", href: "/graph", icon: Network },
  { key: "signals", href: "/signals", icon: Activity },
  { key: "data", href: "/data", icon: Database },
  { key: "weatherBonds", href: "/weather-bonds", icon: ShieldCheck },
  { key: "pricing", href: "/pricing", icon: DollarSign },
  { key: "docs", href: "/docs", icon: BookOpen },
  { key: "health", href: "/admin/health", icon: Gauge },
  { key: "ops", href: "/ops", icon: Wrench, enOnly: true },
  { key: "account", href: "/account", icon: UserRound, enOnly: true }
];

export function GlobalSidebar({ locale = "en", className }: { locale?: AppLocale; className?: string }) {
  const [open, setOpen] = useState(false);
  // Portal target is only available after mount; also keeps SSR markup stable.
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const copy = appCopy[locale];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close the drawer whenever navigation happens.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const navItems = NAV_ITEMS.filter((item) => locale === "en" || !item.enOnly).map((item) =>
    // The zh-HK locale home is the map view, so its map link points at the locale root.
    locale !== "en" && item.key === "map" ? { ...item, href: "/" } : item
  );

  // Rendered through a portal: ancestors with backdrop-filter/transform (the
  // sticky header, map overlay pills) create containing blocks that would
  // otherwise trap this fixed-position drawer.
  const drawer = (
    <>
      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-[60] bg-black/55 backdrop-blur-sm transition-opacity duration-200",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label={copy.sidebar.navigation}
        className={cn(
          "fixed inset-y-0 left-0 z-[70] flex w-[290px] max-w-[85vw] flex-col border-r border-white/12 bg-[#090c11] shadow-2xl transition-transform duration-200",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
          <Link href={localizedPath(locale, "/")} aria-label={copy.brand.aria} className="inline-flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
              <Radar size={17} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-sm font-semibold tracking-tight text-white">{copy.brand.name}</span>
              <span className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-slate-500">{copy.brand.tagline}</span>
            </span>
          </Link>
          <button
            type="button"
            aria-label={copy.sidebar.closeMenu}
            onClick={() => setOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-400 transition hover:bg-white/8 hover:text-white"
          >
            <X size={17} />
          </button>
        </div>

        <nav aria-label={copy.sidebar.navigation} className="min-h-0 flex-1 overflow-y-auto px-3 py-3">
          <span className="block px-2 pb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            {copy.sidebar.navigation}
          </span>
          <ul className="grid gap-0.5">
            {navItems.map((item) => {
              const href = localizedPath(locale, item.href);
              const active = pathname === href;
              return (
                <li key={item.key}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition",
                      active ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/8 hover:text-white"
                    )}
                  >
                    <item.icon size={16} className={active ? "text-cyan-200" : "text-slate-500"} />
                    {copy.nav[item.key]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-white/10 px-3 py-3">
          <span className="flex items-center gap-1.5 px-2 pb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            <Languages size={13} />
            {copy.sidebar.language}
          </span>
          <div className="grid gap-0.5">
            {appLocales.map((targetLocale) => {
              const active = targetLocale === locale;
              return (
                <Link
                  key={targetLocale}
                  href={switchLocalePath(pathname, targetLocale)}
                  aria-current={active ? "true" : undefined}
                  lang={targetLocale}
                  className={cn(
                    "flex items-center justify-between rounded-md px-2.5 py-2 text-sm transition",
                    active ? "bg-cyan-300/12 text-cyan-100" : "text-slate-300 hover:bg-white/8 hover:text-white"
                  )}
                >
                  {copy.sidebar.languageNames[targetLocale]}
                  {active ? <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" /> : null}
                </Link>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );

  return (
    <>
      <button
        type="button"
        aria-label={copy.sidebar.openMenu}
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/12 bg-white/[0.03] text-slate-200 transition hover:bg-white/8 hover:text-white",
          className
        )}
      >
        <Menu size={18} />
      </button>
      {mounted ? createPortal(drawer, document.body) : null}
    </>
  );
}
