"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, TriangleAlert } from "lucide-react";

export default function AppError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-[#06080b] px-4 text-slate-100">
      <div className="w-full max-w-lg rounded-md border border-red-300/20 bg-red-500/[0.06] p-6">
        <div className="flex items-center gap-3 text-red-100">
          <TriangleAlert size={20} className="shrink-0" />
          <h1 className="text-lg font-semibold">Something went wrong loading this page</h1>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          The page hit an unexpected error. This is usually a temporary data or configuration issue — the rest of
          the product keeps working. You can retry, or check the data health page for provider and database status.
        </p>
        {error.digest ? <p className="mt-2 font-mono text-xs text-slate-500">Error reference: {error.digest}</p> : null}
        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={reset}
            className="inline-flex h-10 items-center gap-2 rounded-md border border-white/15 bg-white/[0.06] px-4 text-sm text-white hover:bg-white/10"
          >
            <RefreshCw size={15} />
            Try again
          </button>
          <Link
            href="/admin/health"
            className="inline-flex h-10 items-center rounded-md border border-white/12 px-4 text-sm text-slate-200 hover:bg-white/8"
          >
            Data health
          </Link>
          <Link
            href="/"
            className="inline-flex h-10 items-center rounded-md border border-white/12 px-4 text-sm text-slate-200 hover:bg-white/8"
          >
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}
