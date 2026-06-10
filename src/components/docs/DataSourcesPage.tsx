import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getDocsCopy, type DocsLocale } from "@/lib/docs/content";

export function DataSourcesPage({ locale }: { locale: DocsLocale }) {
  const copy = getDocsCopy(locale);

  return (
    <main className="min-h-screen bg-[#06080b] px-4 py-6 text-slate-100 md:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href={locale === "en" ? "/map" : "/zh-HK"} className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm text-slate-200 hover:bg-white/8">
          <ArrowLeft size={16} />
          {copy.shell.map}
        </Link>
        <h1 className="mt-8 text-3xl font-semibold text-white">{copy.dataSources.title}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">{copy.dataSources.intro}</p>

        <div className="mt-8 grid gap-4">
          {copy.dataSources.sources.map((source) => (
            <section key={source.name} className="rounded-md border border-white/12 bg-white/[0.04] p-5">
              <h2 className="text-base font-semibold text-white">{source.name}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">{source.body}</p>
            </section>
          ))}
        </div>

        <section className="mt-8 rounded-md border border-amber-200/20 bg-amber-300/8 p-5">
          <h2 className="text-base font-semibold text-amber-100">{copy.dataSources.transparencyHeading}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-amber-50/80">
            {copy.dataSources.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
