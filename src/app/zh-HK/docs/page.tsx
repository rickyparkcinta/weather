import type { Metadata } from "next";
import { DocsHomePage } from "@/components/docs/DocsHomePage";
import { docsHref, getDocsAlternates, getDocsCopy } from "@/lib/docs/content";

const locale = "zh-HK";
const copy = getDocsCopy(locale);

export const metadata: Metadata = {
  title: copy.metadata.homeTitle,
  description: copy.metadata.homeDescription,
  keywords: ["Weather AI 文件", "預報市場智能", "數值天氣預報", "集合預報", "天氣資料管線"],
  alternates: {
    canonical: docsHref(locale),
    languages: getDocsAlternates()
  },
  openGraph: {
    title: copy.metadata.homeTitle,
    description: copy.metadata.homeOpenGraphDescription,
    type: "website",
    url: docsHref(locale)
  }
};

export default function ZhHkDocsPage() {
  return <DocsHomePage locale={locale} />;
}
