import { AppShell } from "@/components/shell/AppShell";
import { getDashboardData } from "@/lib/data/queries";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Map - RiWeather",
  description:
    "Global forecast and prediction-market intelligence map. Compare official forecast signals against market-implied probability city by city."
};

export default async function MapPage() {
  const data = await getDashboardData();
  return <AppShell initialData={data} />;
}
