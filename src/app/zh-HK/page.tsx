import { AppShell } from "@/components/shell/AppShell";
import { DataUnavailableScreen } from "@/components/ui/DataUnavailableScreen";
import { loadDashboardData } from "@/lib/data/queries";

export const dynamic = "force-dynamic";

export default async function ZhHkHomePage() {
  const result = await loadDashboardData();
  if (!result.ok) {
    return <DataUnavailableScreen reason={result.reason} locale="zh-HK" />;
  }
  return <AppShell initialData={result.data} locale="zh-HK" />;
}
