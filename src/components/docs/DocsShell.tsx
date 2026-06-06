import katex from "katex";
import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  CloudSun,
  Database,
  ExternalLink,
  GitBranch,
  Layers3,
  LineChart,
  Map,
  Network,
  Sigma
} from "lucide-react";
import {
  docsDataSourcesHref,
  docsHref,
  docsLocales,
  getAdjacentDocs,
  getDocGroups,
  getDocsCopy,
  getSourceLinks,
  type DiagramVariant,
  type DocBlock,
  type DocPage,
  type DocsLocale,
  type SourceId
} from "@/lib/docs/content";
import { DocsSidebar } from "@/components/docs/DocsSidebar";

function MathFormula({ expression }: { expression: string }) {
  const latex = expression.trim();

  let html: string;
  try {
    html = katex.renderToString(latex, {
      displayMode: true,
      throwOnError: false,
      strict: false,
      output: "html"
    });
  } catch (error) {
    // KaTeX is configured with throwOnError: false, so it normally renders an
    // error node instead of throwing. This guard only catches unexpected
    // failures, and surfaces the raw LaTeX as a safe, readable fallback.
    if (process.env.NODE_ENV !== "production") {
      console.error(`Failed to render formula: ${latex}`, error);
    }
    return (
      <div className="doc-math" role="math" aria-label={latex}>
        <code className="font-mono text-sm text-emerald-50/80">{latex}</code>
      </div>
    );
  }

  return (
    <div className="doc-math" role="math" aria-label={latex}>
      <span dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

function ForecastPipelineDiagram({ locale }: { locale: DocsLocale }) {
  const icons = [CloudSun, Activity, GitBranch, Network, Sigma, LineChart];
  const steps = getDocsCopy(locale).diagrams.forecastPipeline.steps.map((step, index) => ({
    ...step,
    icon: icons[index] ?? CloudSun
  }));

  return (
    <div className="min-w-0 w-full overflow-hidden rounded-md border border-cyan-200/15 bg-[linear-gradient(135deg,rgba(8,47,73,0.52),rgba(6,8,11,0.72))] p-4">
      <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.label} className="relative min-h-[150px] rounded-md border border-white/12 bg-black/22 p-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-cyan-200/25 bg-cyan-300/10 text-cyan-100">
                <Icon size={18} />
              </span>
              <span className="mt-4 block text-sm font-semibold text-white">{step.label}</span>
              <span className="mt-2 block text-xs leading-5 text-slate-400">{step.detail}</span>
              <span className="absolute right-3 top-3 font-mono text-xs text-cyan-100/45">{String(index + 1).padStart(2, "0")}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function EnsembleProbabilityDiagram({ locale }: { locale: DocsLocale }) {
  const copy = getDocsCopy(locale).diagrams.ensembleProbability;
  const members = Array.from({ length: 40 }, (_, index) => index < 29);

  return (
    <div className="min-w-0 w-full overflow-hidden rounded-md border border-emerald-200/15 bg-[linear-gradient(135deg,rgba(6,78,59,0.45),rgba(6,8,11,0.72))] p-4">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_260px]">
        <div>
          <div className="grid grid-cols-10 gap-2">
            {members.map((isEvent, index) => (
              <span
                key={index}
                className={[
                  "h-7 rounded-sm border",
                  isEvent ? "border-emerald-200/35 bg-emerald-300/55" : "border-white/15 bg-white/8"
                ].join(" ")}
                title={isEvent ? copy.memberForecastsEvent : copy.memberDoesNotForecastEvent}
              />
            ))}
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-300">{copy.caption}</p>
        </div>
        <div className="rounded-md border border-white/12 bg-black/22 p-4">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-100/70">{copy.eventProbability}</span>
          <div className="mt-4 flex items-end gap-2">
            <span className="text-5xl font-semibold text-white">72.5%</span>
            <span className="pb-2 font-mono text-xs text-slate-500">{copy.countLabel}</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-400">{copy.description}</p>
        </div>
      </div>
    </div>
  );
}

function ForecastEdgeDiagram({ locale }: { locale: DocsLocale }) {
  const copy = getDocsCopy(locale).diagrams.forecastEdge;
  const rows = copy.rows;

  return (
    <div className="min-w-0 w-full overflow-hidden rounded-md border border-amber-200/15 bg-[linear-gradient(135deg,rgba(120,53,15,0.38),rgba(6,8,11,0.78))] p-4">
      <div className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="grid min-w-0 gap-4">
          {rows.map((row) => (
            <div key={row.label}>
              <div className="flex items-center justify-between gap-3 text-sm">
                <span className="font-semibold text-white">{row.label}</span>
                <span className="font-mono text-slate-300">{row.value}%</span>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-white/10">
                <div className={`h-3 rounded-full ${row.color}`} style={{ width: `${row.value}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-md border border-white/12 bg-black/24 p-4">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-100/70">{copy.adjustedEdge}</span>
          <div className="mt-4 font-mono text-sm text-slate-300">
            <div>0.74 - 0.59 = 0.15</div>
            <div>0.15 x 0.68 = 0.102</div>
          </div>
          <div className="mt-4 text-4xl font-semibold text-white">+10.2 pts</div>
        </div>
      </div>
    </div>
  );
}

function AssimilationCycleDiagram({ locale }: { locale: DocsLocale }) {
  const copy = getDocsCopy(locale).diagrams.assimilationCycle;
  const nodes = copy.nodes;

  return (
    <div className="min-w-0 w-full overflow-hidden rounded-md border border-indigo-200/15 bg-[linear-gradient(135deg,rgba(49,46,129,0.48),rgba(6,8,11,0.78))] p-4">
      <div className="grid gap-3 md:grid-cols-3">
        {nodes.map((node, index) => (
          <div key={node} className="rounded-md border border-white/12 bg-black/24 p-4">
            <span className="font-mono text-xs text-indigo-100/60">{String(index + 1).padStart(2, "0")}</span>
            <span className="mt-2 block text-sm font-semibold text-white">{node}</span>
            <span className="mt-2 block text-xs leading-5 text-slate-400">
              {index === nodes.length - 1 ? copy.finalDetail : copy.defaultDetail}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ModelMarketSignalDiagram({ locale }: { locale: DocsLocale }) {
  const stages = getDocsCopy(locale).diagrams.modelMarketSignal.stages;

  return (
    <div className="min-w-0 w-full overflow-hidden rounded-md border border-fuchsia-200/15 bg-[linear-gradient(135deg,rgba(112,26,117,0.34),rgba(6,8,11,0.78))] p-4">
      <div className="grid gap-3 lg:grid-cols-5">
        {stages.map(([title, detail], index) => (
          <div key={title} className="rounded-md border border-white/12 bg-black/24 p-4">
            <span className="font-mono text-xs text-fuchsia-100/60">{index + 1}</span>
            <span className="mt-2 block text-sm font-semibold text-white">{title}</span>
            <span className="mt-2 block text-xs leading-5 text-slate-400">{detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DiagramBlock({ locale, variant }: { locale: DocsLocale; variant: DiagramVariant }) {
  switch (variant) {
    case "forecast-pipeline":
      return <ForecastPipelineDiagram locale={locale} />;
    case "ensemble-probability":
      return <EnsembleProbabilityDiagram locale={locale} />;
    case "forecast-edge":
      return <ForecastEdgeDiagram locale={locale} />;
    case "data-assimilation-cycle":
      return <AssimilationCycleDiagram locale={locale} />;
    case "model-market-signal-flow":
      return <ModelMarketSignalDiagram locale={locale} />;
  }
}

function BlockView({ block, locale }: { block: DocBlock; locale: DocsLocale }) {
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
        <div className="min-w-0 max-w-full overflow-hidden rounded-md border border-white/12 bg-white/[0.035] p-4">
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
        <div className="min-w-0 max-w-full overflow-hidden">
          {block.title ? <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">{block.title}</h3> : null}
          <div className="mt-3 min-w-0 max-w-full overflow-x-auto rounded-md border border-white/12">
            <table className="w-full min-w-[620px] border-collapse text-left text-sm">
              <thead className="bg-white/[0.06] text-slate-200">
                <tr>
                  {block.columns.map((column) => (
                    <th key={column} scope="col" className="border-b border-white/12 px-4 py-3 font-semibold">
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
        <div className="min-w-0 max-w-full overflow-hidden rounded-md border border-emerald-200/15 bg-emerald-300/8 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {block.title ? <h3 className="text-sm font-semibold text-emerald-100">{block.title}</h3> : <span />}
            <span className="inline-flex items-center gap-1 rounded-md border border-emerald-200/15 px-2 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-emerald-100/70">
              <Sigma size={12} />
              LaTeX
            </span>
          </div>
          <MathFormula expression={block.expression} />
          {block.description ? <p className="mt-3 text-sm leading-6 text-emerald-50/75">{block.description}</p> : null}
        </div>
      );
    case "callout":
      return (
        <aside className="min-w-0 max-w-full overflow-hidden rounded-md border border-amber-200/20 bg-amber-300/8 p-4">
          <h3 className="text-sm font-semibold text-amber-100">{block.title}</h3>
          <p className="mt-2 text-sm leading-6 text-amber-50/80">{block.text}</p>
        </aside>
      );
    case "code":
      return (
        <div className="min-w-0 max-w-full overflow-hidden rounded-md border border-white/12 bg-black/30 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {block.title ? <h3 className="text-sm font-semibold text-slate-200">{block.title}</h3> : <span />}
            {block.language ? <span className="rounded-md bg-white/8 px-2 py-1 font-mono text-xs text-slate-400">{block.language}</span> : null}
          </div>
          <pre className="mt-3 min-w-0 max-w-full overflow-x-auto whitespace-pre font-mono text-sm leading-6 text-slate-300">
            <code>{block.code}</code>
          </pre>
        </div>
      );
    case "diagram":
      return (
        <div className="min-w-0 max-w-full overflow-hidden">
          {block.title || block.description ? (
            <div className="mb-3">
              {block.title ? <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">{block.title}</h3> : null}
              {block.description ? <p className="mt-2 text-sm leading-6 text-slate-400">{block.description}</p> : null}
            </div>
          ) : null}
          <DiagramBlock locale={locale} variant={block.variant} />
        </div>
      );
  }
}

export function DocPageContent({ locale, page }: { locale: DocsLocale; page: DocPage }) {
  const adjacent = getAdjacentDocs(page.slug, locale);
  const copy = getDocsCopy(locale);

  return (
    <>
      <div className="grid min-w-0 gap-10">
        {page.sections.map((section) => (
          <section key={section.title} className="min-w-0 overflow-hidden border-t border-white/10 pt-8">
            <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
            {section.description ? <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">{section.description}</p> : null}
            <div className="mt-5 grid min-w-0 gap-5">
              {section.blocks.map((block, index) => (
                <BlockView key={`${section.title}-${index}`} block={block} locale={locale} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {page.references?.length ? <ReferencesPanel locale={locale} references={page.references} /> : null}

      <nav className="mt-10 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
        {adjacent.previous ? (
          <Link href={docsHref(locale, adjacent.previous.slug)} className="rounded-md border border-white/12 p-4 text-sm text-slate-300 hover:bg-white/[0.04]">
            <span className="flex items-center gap-2 text-slate-500">
              <ArrowLeft size={16} />
              {copy.shell.previous}
            </span>
            <span className="mt-2 block font-semibold text-white">{adjacent.previous.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {adjacent.next ? (
          <Link href={docsHref(locale, adjacent.next.slug)} className="rounded-md border border-white/12 p-4 text-right text-sm text-slate-300 hover:bg-white/[0.04]">
            <span className="flex items-center justify-end gap-2 text-slate-500">
              {copy.shell.next}
              <ArrowRight size={16} />
            </span>
            <span className="mt-2 block font-semibold text-white">{adjacent.next.title}</span>
          </Link>
        ) : null}
      </nav>
    </>
  );
}

export function ReferencesPanel({ locale, references }: { locale: DocsLocale; references: SourceId[] }) {
  const copy = getDocsCopy(locale);
  const sourceLinks = getSourceLinks(locale);

  return (
    <section className="mt-10 border-t border-white/10 pt-8">
      <h2 className="text-lg font-semibold text-white">{copy.shell.referencesHeading}</h2>
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
  locale,
  title,
  description,
  children
}: {
  activeSlug?: string;
  locale: DocsLocale;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  const copy = getDocsCopy(locale);
  const groups = getDocGroups(locale);

  return (
    <main className="min-h-screen bg-[#06080b] text-slate-100">
      <div className="border-b border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 md:px-8">
          <Link href="/" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm text-slate-200 hover:bg-white/8">
            <Map size={16} />
            {copy.shell.map}
          </Link>
          <div className="flex flex-wrap items-center justify-end gap-2">
            <Link
              href={docsDataSourcesHref(locale)}
              className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-400 hover:bg-white/8 hover:text-slate-100"
            >
              {copy.shell.dataSources}
              <ExternalLink size={15} />
            </Link>
            <nav
              aria-label={copy.shell.localeSwitcherLabel}
              className="inline-flex rounded-md border border-white/12 bg-white/[0.035] p-1"
            >
              {docsLocales.map((targetLocale) => {
                const active = targetLocale === locale;
                return (
                  <Link
                    key={targetLocale}
                    href={docsHref(targetLocale, activeSlug)}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "rounded px-2.5 py-1.5 text-xs font-semibold transition",
                      active ? "bg-cyan-300/15 text-cyan-100" : "text-slate-400 hover:bg-white/8 hover:text-slate-100"
                    ].join(" ")}
                  >
                    {copy.shell.localeOptions[targetLocale]}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 md:px-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        <DocsSidebar
          activeSlug={activeSlug}
          groups={groups}
          labels={{
            documentationMenu: copy.shell.documentationMenu,
            docsHome: copy.shell.docsHome
          }}
          locale={locale}
        />

        <article className="order-2 min-w-0 overflow-hidden lg:order-none">
          <header className="pb-8">
            <div className="inline-flex items-center gap-2 rounded-md border border-cyan-200/15 bg-cyan-300/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
              <BookOpen size={14} />
              {copy.shell.docsBadge}
            </div>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-normal text-white md:text-5xl">{title}</h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">{description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-md border border-white/12 px-3 py-1.5 text-xs text-slate-400">
                <Layers3 size={14} />
                {copy.shell.technicalReference}
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-white/12 px-3 py-1.5 text-xs text-slate-400">
                <Database size={14} />
                {copy.shell.forecastIntelligence}
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-white/12 px-3 py-1.5 text-xs text-slate-400">
                <BarChart3 size={14} />
                {copy.shell.marketSignals}
              </span>
            </div>
          </header>
          {children}
        </article>
      </div>
    </main>
  );
}
