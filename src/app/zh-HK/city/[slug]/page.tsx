import { AppShell } from "@/components/shell/AppShell";
import { DataUnavailableScreen } from "@/components/ui/DataUnavailableScreen";
import { loadDashboardData } from "@/lib/data/queries";

export const dynamic = "force-dynamic";

export default async function ZhHkCityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = await loadDashboardData(slug);
  if (!result.ok) {
    return <DataUnavailableScreen reason={result.reason} locale="zh-HK" />;
  }
  return <AppShell initialData={result.data} locale="zh-HK" requestedSlug={slug} />;
}
