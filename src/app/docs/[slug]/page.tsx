import { notFound } from "next/navigation";
import { DocPageContent, DocsShell } from "@/components/docs/DocsShell";
import { docs, docsBySlug } from "@/lib/docs/content";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return docs.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = docsBySlug.get(slug);

  if (!page) {
    return {
      title: "Docs | Forecast Market Map"
    };
  }

  return {
    title: `${page.title} | Forecast Market Map`,
    description: page.description
  };
}

export default async function DocsSlugPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = docsBySlug.get(slug);

  if (!page) {
    notFound();
  }

  return (
    <DocsShell activeSlug={page.slug} title={page.title} description={page.description}>
      <DocPageContent page={page} />
    </DocsShell>
  );
}
