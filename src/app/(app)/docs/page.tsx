import type { Metadata } from "next";
import { DocsHomePage } from "@/components/docs/DocsHomePage";
import { getDocsAlternates, getDocsCopy } from "@/lib/docs/content";

const locale = "en";
const copy = getDocsCopy(locale);

export const metadata: Metadata = {
  title: copy.metadata.homeTitle,
  description: copy.metadata.homeDescription,
  keywords: ["RiWeather docs", "forecast market intelligence", "numerical weather prediction", "ensemble forecasting", "weather data pipeline"],
  alternates: {
    canonical: "/docs",
    languages: getDocsAlternates()
  },
  openGraph: {
    title: copy.metadata.homeTitle,
    description: copy.metadata.homeOpenGraphDescription,
    type: "website",
    url: "/docs"
  }
};

export default function DocsPage() {
  return <DocsHomePage locale={locale} />;
}
