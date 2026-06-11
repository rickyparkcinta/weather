"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, TriangleAlert } from "lucide-react";

export default function ZhHkError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-[#06080b] px-4 text-slate-100">
      <div className="w-full max-w-lg rounded-md border border-red-300/20 bg-red-500/[0.06] p-6">
        <div className="flex items-center gap-3 text-red-100">
          <TriangleAlert size={20} className="shrink-0" />
          <h1 className="text-lg font-semibold">頁面載入時發生錯誤</h1>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          頁面遇到非預期錯誤，通常是暫時性的資料或設定問題。你可以重試，或前往資料健康頁查看資料庫與供應商狀態。
        </p>
        {error.digest ? <p className="mt-2 font-mono text-xs text-slate-500">錯誤參考：{error.digest}</p> : null}
        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={reset}
            className="inline-flex h-10 items-center gap-2 rounded-md border border-white/15 bg-white/[0.06] px-4 text-sm text-white hover:bg-white/10"
          >
            <RefreshCw size={15} />
            重試
          </button>
          <Link
            href="/zh-HK/admin/health"
            className="inline-flex h-10 items-center rounded-md border border-white/12 px-4 text-sm text-slate-200 hover:bg-white/8"
          >
            資料健康
          </Link>
          <Link
            href="/zh-HK"
            className="inline-flex h-10 items-center rounded-md border border-white/12 px-4 text-sm text-slate-200 hover:bg-white/8"
          >
            主頁
          </Link>
        </div>
      </div>
    </main>
  );
}
