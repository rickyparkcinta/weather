import { AppShell } from "@/components/shell/AppShell";
import { getDashboardData } from "@/lib/data/queries";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const data = await getDashboardData();
  return <AppShell initialData={data} />;
}
