import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, ExternalLink, Home, Map } from "lucide-react";
import {
  docGroups,
  getAdjacentDocs,
  sourceLinks,
  type DocBlock,
  type DocPage,
  type SourceId
} from "@/lib/docs/content";

function linkClass(active: boolean) {
  return [
    "block rounded-md px-3 py-2 text-sm transition",
    active ? "bg-cyan-300/12 text-cyan-100" : "text-slate-400 hover:bg-white/8 hover:text-slate-100"
  ].join(" ");
}

function BlockView({ block }: { block: DocBlock }) {
  switch (block.kind) {
    case "lead":
      return <p className="text-base leading-8 text-slate-200 md:text-lg">{block.text}</p>;
    case "paragraph":
      return <p className="text-sm leading-7 text-slate-300 md:text-base">{block.text}</p>;
    case "list":
      return (
        <div className="min-w-0">
          {block.title ? <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">{block.title}</h3> : null}
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-300 md:text-base">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      );
    case "flow":
      return (
        <div className="max-w-full rounded-md border border-white/12 bg-white/[0.035] p-4">
          {block.title ? <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100/80">{block.title}</h3> : null}
          <ol className="mt-4 grid gap-2">
            {block.steps.map((step, index) => (
              <li key={`${step}-${index}`} className="grid grid-cols-[2rem_minmax(0,1fr)] items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-md border border-cyan-200/20 bg-cyan-300/10 font-mono text-xs text-cyan-100">
                  {index + 1}
                </span>
                <span className="rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-200">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      );
    case "table":
      return (
        <div className="min-w-0">
          {block.title ? <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">{block.title}</h3> : null}
          <div className="mt-3 max-w-full overflow-x-auto rounded-md border border-white/12">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead className="bg-white/[0.06] text-slate-200">
                <tr>
                  {block.columns.map((column) => (
                    <th key={column} className="border-b border-white/12 px-4 py-3 font-semibold">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr key={`${row.join("-")}-${rowIndex}`} className="border-b border-white/8 last:border-b-0">
                    {row.map((cell, cellIndex) => (
                      <td key={`${cell}-${cellIndex}`} className="px-4 py-3 align-top leading-6 text-slate-300">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    case "formula":
      return (
        <div className="max-w-full rounded-md border border-emerald-200/15 bg-emerald-300/8 p-4">
          {block.title ? <h3 className="text-sm font-semibold text-emerald-100">{block.title}</h3> : null}
          <pre className="mt-3 overflow-x-auto whitespace-pre-wrap font-mono text-sm leading-6 text-emerald-50">
            {block.expression}
          </pre>
          {block.description ? <p className="mt-3 text-sm leading-6 text-emerald-50/75">{block.description}</p> : null}
        </div>
      );
    case "callout":
      return (
        <aside className="max-w-full rounded-md border border-amber-200/20 bg-amber-300/8 p-4">
          <h3 className="text-sm font-semibold text-amber-100">{block.title}</h3>
          <p className="mt-2 text-sm leading-6 text-amber-50/80">{block.text}</p>
        </aside>
      );
    case "code":
      return (
        <div className="max-w-full rounded-md border border-white/12 bg-black/30 p-4">
          {block.title ? <h3 className="text-sm font-semibold text-slate-200">{block.title}</h3> : null}
          <pre className="mt-3 overflow-x-auto whitespace-pre-wrap font-mono text-sm leading-6 text-slate-300">{block.code}</pre>
        </div>
      );
  }
}

export function DocPageContent({ page }: { page: DocPage }) {
  const adjacent = getAdjacentDocs(page.slug);

  return (
    <>
      <div className="grid min-w-0 gap-10">
        {page.sections.map((section) => (
          <section key={section.title} className="min-w-0 border-t border-white/10 pt-8">
            <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
            <div className="mt-5 grid min-w-0 gap-5">
              {section.blocks.map((block, index) => (
                <BlockView key={`${section.title}-${index}`} block={block} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {page.references?.length ? <ReferencesPanel references={page.references} /> : null}

      <nav className="mt-10 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
        {adjacent.previous ? (
          <Link href={`/docs/${adjacent.previous.slug}`} className="rounded-md border border-white/12 p-4 text-sm text-slate-300 hover:bg-white/[0.04]">
            <span className="flex items-center gap-2 text-slate-500">
              <ArrowLeft size={16} />
              Previous
            </span>
            <span className="mt-2 block font-semibold text-white">{adjacent.previous.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {adjacent.next ? (
          <Link href={`/docs/${adjacent.next.slug}`} className="rounded-md border border-white/12 p-4 text-right text-sm text-slate-300 hover:bg-white/[0.04]">
            <span className="flex items-center justify-end gap-2 text-slate-500">
              Next
              <ArrowRight size={16} />
            </span>
            <span className="mt-2 block font-semibold text-white">{adjacent.next.title}</span>
          </Link>
        ) : null}
      </nav>
    </>
  );
}

export function ReferencesPanel({ references }: { references: SourceId[] }) {
  return (
    <section className="mt-10 border-t border-white/10 pt-8">
      <h2 className="text-lg font-semibold text-white">Reference Sources</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {references.map((id) => {
          const source = sourceLinks[id];
          return (
            <a
              key={id}
              href={source.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-white/12 p-4 text-sm text-slate-300 hover:bg-white/[0.04]"
            >
              <span className="block text-xs uppercase tracking-[0.16em] text-slate-500">{source.publisher}</span>
              <span className="mt-2 flex items-start justify-between gap-3 font-semibold text-white">
                {source.label}
                <ExternalLink size={16} className="mt-0.5 shrink-0 text-slate-500" />
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export function DocsShell({
  activeSlug,
  title,
  description,
  children
}: {
  activeSlug?: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#06080b] text-slate-100">
      <div className="border-b border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-8">
          <Link href="/" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm text-slate-200 hover:bg-white/8">
            <Map size={16} />
            Map
          </Link>
          <Link href="/docs/data-sources" className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-400 hover:bg-white/8 hover:text-slate-100">
            Data Sources
            <ExternalLink size={15} />
          </Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 md:px-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-6 lg:h-[calc(100dvh-3rem)] lg:overflow-y-auto">
          <nav className="rounded-md border border-white/12 bg-white/[0.035] p-3">
            <Link href="/docs" className={linkClass(!activeSlug)}>
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
                      <Link key={page.slug} href={`/docs/${page.slug}`} className={linkClass(activeSlug === page.slug)}>
                        {page.shortTitle}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </aside>

        <article className="min-w-0">
          <header className="pb-8">
            <div className="inline-flex items-center gap-2 rounded-md border border-cyan-200/15 bg-cyan-300/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
              <BookOpen size={14} />
              Weather AI Docs
            </div>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-normal text-white md:text-5xl">{title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">{description}</p>
          </header>
          {children}
        </article>
      </div>
    </main>
  );
}
