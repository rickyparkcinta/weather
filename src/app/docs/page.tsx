import Link from "next/link";
import { ArrowRight, CloudSun, Cpu, LineChart, Network } from "lucide-react";
import { DocsShell, ReferencesPanel } from "@/components/docs/DocsShell";
import { docGroups, docsIntro, sourceLinks, technicalSummary, type SourceId } from "@/lib/docs/content";

const referenceIds = Object.keys(sourceLinks) as SourceId[];

const diagrams = [
  {
    title: "Forecast pipeline",
    icon: Network,
    steps: [
      "Satellites / Radar / Stations / Balloons",
      "Observation quality control",
      "Data assimilation",
      "Analysis state",
      "Numerical model",
      "Supercomputer",
      "Forecast output",
      "AI post-processing",
      "Market signal"
    ]
  },
  {
    title: "Ensemble probability",
    icon: CloudSun,
    steps: ["50 ensemble members", "38 predict rain", "12 predict no rain", "Rain probability = 76%"]
  },
  {
    title: "Forecast edge",
    icon: LineChart,
    steps: ["Model probability: 72%", "Market probability: 58%", "Raw edge: +14 points", "Confidence: 0.65", "Adjusted edge: +9.1 points"]
  }
];

export const metadata = {
  title: "Weather AI Docs | Forecast Market Map",
  description: "Documentation for weather-model, forecast-pipeline, uncertainty, AI, and prediction-market signal concepts."
};

export default function DocsPage() {
  return (
    <DocsShell title="Weather AI Documentation" description={docsIntro}>
      <section className="border-t border-white/10 pt-8">
        <div className="rounded-md border border-white/12 bg-white/[0.035] p-5">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-emerald-200/20 bg-emerald-300/10 text-emerald-100">
              <Cpu size={20} />
            </span>
            <p className="text-sm leading-7 text-slate-300 md:text-base">{technicalSummary}</p>
          </div>
        </div>
      </section>

      <section className="mt-10 border-t border-white/10 pt-8">
        <h2 className="text-2xl font-semibold text-white">Documentation Routes</h2>
        <div className="mt-5 grid gap-8 lg:grid-cols-2">
          {docGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">{group.title}</h3>
              <div className="mt-3 grid gap-2">
                {group.pages.map((page) => (
                  <Link
                    key={page.slug}
                    href={`/docs/${page.slug}`}
                    className="group rounded-md border border-white/12 p-4 hover:bg-white/[0.04]"
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="font-semibold text-white">{page.title}</span>
                      <ArrowRight size={16} className="shrink-0 text-slate-500 group-hover:text-cyan-100" />
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-slate-400">{page.description}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 border-t border-white/10 pt-8">
        <h2 className="text-2xl font-semibold text-white">Reference Diagrams</h2>
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {diagrams.map((diagram) => {
            const Icon = diagram.icon;
            return (
              <div key={diagram.title} className="rounded-md border border-white/12 bg-white/[0.035] p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md border border-cyan-200/20 bg-cyan-300/10 text-cyan-100">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-semibold text-white">{diagram.title}</h3>
                </div>
                <ol className="mt-4 grid gap-2">
                  {diagram.steps.map((step, index) => (
                    <li key={`${diagram.title}-${step}`} className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-2 text-sm text-slate-300">
                      <span className="font-mono text-xs text-slate-500">{index + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            );
          })}
        </div>
      </section>

      <ReferencesPanel references={referenceIds} />
    </DocsShell>
  );
}
