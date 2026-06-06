"use client";

import Link from "next/link";
import { useState } from "react";
import { Home, Menu, X } from "lucide-react";
import { docGroups } from "@/lib/docs/content";

function linkClass(active: boolean) {
  return [
    "block rounded-md px-3 py-2 text-sm transition",
    active
      ? "bg-cyan-300/12 text-cyan-100 shadow-[inset_3px_0_0_rgba(103,232,249,0.7)]"
      : "text-slate-400 hover:bg-white/8 hover:text-slate-100"
  ].join(" ");
}

export function DocsSidebar({ activeSlug }: { activeSlug?: string }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <aside className="order-1 lg:sticky lg:top-6 lg:order-none lg:h-[calc(100dvh-3rem)] lg:overflow-y-auto">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="docs-nav"
        className="flex w-full items-center justify-between gap-2 rounded-md border border-white/12 bg-white/[0.035] px-3 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/8 lg:hidden"
      >
        <span className="inline-flex items-center gap-2">
          {open ? <X size={16} /> : <Menu size={16} />}
          Documentation menu
        </span>
      </button>

      <nav
        id="docs-nav"
        className={[open ? "block" : "hidden", "mt-3 rounded-md border border-white/12 bg-white/[0.035] p-3 lg:mt-0 lg:block"].join(" ")}
      >
        <Link href="/docs" onClick={close} className={linkClass(!activeSlug)}>
          <span className="inline-flex items-center gap-2">
            <Home size={16} />
            Docs Home
          </span>
        </Link>
        <div className="mt-5 grid gap-5">
          {docGroups.map((group) => (
            <div key={group.title}>
              <h2 className="px-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{group.title}</h2>
              <div className="mt-2 grid gap-1">
                {group.pages.map((page) => (
                  <Link
                    key={page.slug}
                    href={`/docs/${page.slug}`}
                    onClick={close}
                    className={linkClass(activeSlug === page.slug)}
                  >
                    {page.shortTitle}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
}
