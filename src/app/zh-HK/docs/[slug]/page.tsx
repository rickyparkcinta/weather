import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocPageContent, DocsShell } from "@/components/docs/DocsShell";
import { docsHref, getDocBySlug, getDocs, getDocsAlternates, getDocsCopy } from "@/lib/docs/content";

type Params = {
  slug: string;
};

const locale = "zh-HK";

export function generateStaticParams() {
  return getDocs(locale).map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getDocBySlug(locale, slug);
  const copy = getDocsCopy(locale);

  if (!page) {
    return {
      title: copy.metadata.notFoundTitle
    };
  }

  return {
    title: `${page.title} | ${copy.metadata.pageTitleSuffix}`,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: docsHref(locale, page.slug),
      languages: getDocsAlternates(page.slug)
    },
    openGraph: {
      title: `${page.title} | ${copy.metadata.pageOpenGraphSuffix}`,
      description: page.description,
      type: "article",
      url: docsHref(locale, page.slug)
    }
  };
}

export default async function ZhHkDocsSlugPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getDocBySlug(locale, slug);

  if (!page) {
    notFound();
  }

  return (
    <DocsShell activeSlug={page.slug} locale={locale} title={page.title} description={page.description}>
      <DocPageContent locale={locale} page={page} />
    </DocsShell>
  );
}
