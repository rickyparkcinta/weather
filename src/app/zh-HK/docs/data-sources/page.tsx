import type { Metadata } from "next";
import { DataSourcesPage } from "@/components/docs/DataSourcesPage";
import { docsDataSourcesHref, getDocsCopy } from "@/lib/docs/content";

const locale = "zh-HK";
const copy = getDocsCopy(locale);

export const metadata: Metadata = {
  title: copy.metadata.dataSourcesTitle,
  description: copy.metadata.dataSourcesDescription,
  alternates: {
    canonical: docsDataSourcesHref(locale)
  }
};

export default function ZhHkDataSourcesPage() {
  return <DataSourcesPage locale={locale} />;
}
