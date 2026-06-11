import { AppShell } from "@/components/shell/AppShell";
import { DataUnavailableScreen } from "@/components/ui/DataUnavailableScreen";
import { loadDashboardData } from "@/lib/data/queries";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Map - RiWeather",
  description:
    "Global forecast and prediction-market intelligence map. Compare official forecast signals against market-implied probability city by city."
};

export default async function MapPage() {
  const result = await loadDashboardData();
  if (!result.ok) {
    return <DataUnavailableScreen reason={result.reason} />;
  }
  return <AppShell initialData={result.data} />;
}
