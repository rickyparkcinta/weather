import Link from "next/link";
import { CircleSlash } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-[#06080b] px-4 text-slate-100">
      <div className="w-full max-w-lg rounded-md border border-white/12 bg-white/[0.04] p-6">
        <div className="flex items-center gap-3">
          <CircleSlash size={20} className="text-slate-400" />
          <h1 className="text-lg font-semibold text-white">Page not found</h1>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          The page, city, or market you are looking for does not exist or is no longer tracked.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link
            href="/"
            className="inline-flex h-10 items-center rounded-md border border-white/15 bg-white/[0.06] px-4 text-sm text-white hover:bg-white/10"
          >
            Home
          </Link>
          <Link
            href="/map"
            className="inline-flex h-10 items-center rounded-md border border-white/12 px-4 text-sm text-slate-200 hover:bg-white/8"
          >
            Map
          </Link>
          <Link
            href="/docs"
            className="inline-flex h-10 items-center rounded-md border border-white/12 px-4 text-sm text-slate-200 hover:bg-white/8"
          >
            Docs
          </Link>
        </div>
      </div>
    </main>
  );
}
