import Link from "next/link";
import { CircleSlash } from "lucide-react";

export default function ZhHkNotFound() {
  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-[#06080b] px-4 text-slate-100">
      <div className="w-full max-w-lg rounded-md border border-white/12 bg-white/[0.04] p-6">
        <div className="flex items-center gap-3">
          <CircleSlash size={20} className="text-slate-400" />
          <h1 className="text-lg font-semibold text-white">找不到頁面</h1>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-400">你要找的頁面、城市或市場不存在，或已不再追蹤。</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link
            href="/zh-HK"
            className="inline-flex h-10 items-center rounded-md border border-white/15 bg-white/[0.06] px-4 text-sm text-white hover:bg-white/10"
          >
            主頁
          </Link>
          <Link
            href="/zh-HK/docs"
            className="inline-flex h-10 items-center rounded-md border border-white/12 px-4 text-sm text-slate-200 hover:bg-white/8"
          >
            文件
          </Link>
        </div>
      </div>
    </main>
  );
}
