import { GraphShell } from "@/components/graph/GraphShell";
import { buildRelationshipGraph } from "@/lib/graph/build";
import type { RelationshipGraphResponse } from "@/lib/graph/types";
import type { AppLocale } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Relationship Graph · RiWeather",
  description:
    "Professional relationship graph linking cities, forecast models, forecast variables, providers, weather markets, combined research signals, provider runs, stations, and weather-risk products — with freshness and provenance."
};

export async function GraphPageContent({ locale }: { locale: AppLocale }) {
  let initialData: RelationshipGraphResponse | null = null;
  let initialError: string | null = null;

  try {
    initialData = await buildRelationshipGraph();
  } catch (error) {
    initialError = error instanceof Error ? error.message : "Failed to build relationship graph.";
  }

  return <GraphShell initialData={initialData} initialError={initialError} locale={locale} />;
}

export default async function GraphPage() {
  return <GraphPageContent locale="en" />;
}
