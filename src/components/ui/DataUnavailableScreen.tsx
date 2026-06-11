import Link from "next/link";
import { Database, TriangleAlert } from "lucide-react";
import type { AppLocale } from "@/lib/i18n";
import type { DashboardDataResult } from "@/lib/data/queries";

type UnavailableReason = Extract<DashboardDataResult, { ok: false }>["reason"];

const COPY: Record<AppLocale, Record<UnavailableReason, { title: string; body: string }> & { health: string; home: string }> = {
  en: {
    unconfigured: {
      title: "Live data is not configured",
      body: "This deployment has no database connection settings. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY, then redeploy."
    },
    empty: {
      title: "No data yet",
      body: "The database is connected but has not been populated. Trigger the real API sync (or wait for the scheduled sync) to load cities, forecasts, and markets."
    },
    read_failed: {
      title: "Live data is temporarily unavailable",
      body: "The database could not be read. This is usually temporary — retry shortly or check the data health page."
    },
    health: "Data health",
    home: "Home"
  },
  "zh-HK": {
    unconfigured: {
      title: "尚未設定即時資料",
      body: "此部署沒有資料庫連線設定。請設定 NEXT_PUBLIC_SUPABASE_URL 及 NEXT_PUBLIC_SUPABASE_ANON_KEY 後重新部署。"
    },
    empty: {
      title: "暫時沒有資料",
      body: "資料庫已連線但尚未載入資料。請執行 real API sync（或等待排程同步）載入城市、預報及市場資料。"
    },
    read_failed: {
      title: "即時資料暫時無法使用",
      body: "暫時無法讀取資料庫，通常屬暫時性問題。請稍後重試，或查看資料健康頁。"
    },
    health: "資料健康",
    home: "主頁"
  }
};

export function DataUnavailableScreen({ reason, locale = "en" }: { reason: UnavailableReason; locale?: AppLocale }) {
  const copy = COPY[locale];
  const item = copy[reason];
  const prefix = locale === "zh-HK" ? "/zh-HK" : "";
  const Icon = reason === "read_failed" ? TriangleAlert : Database;

  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-[#06080b] px-4 text-slate-100">
      <div className="w-full max-w-lg rounded-md border border-white/12 bg-white/[0.04] p-6">
        <div className="flex items-center gap-3">
          <Icon size={20} className={reason === "read_failed" ? "text-amber-300" : "text-slate-400"} />
          <h1 className="text-lg font-semibold text-white">{item.title}</h1>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-400">{item.body}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link
            href={`${prefix}/admin/health`}
            className="inline-flex h-10 items-center rounded-md border border-white/15 bg-white/[0.06] px-4 text-sm text-white hover:bg-white/10"
          >
            {copy.health}
          </Link>
          <Link
            href={prefix || "/"}
            className="inline-flex h-10 items-center rounded-md border border-white/12 px-4 text-sm text-slate-200 hover:bg-white/8"
          >
            {copy.home}
          </Link>
        </div>
      </div>
    </main>
  );
}
