import { AppShell } from "@/components/shell/AppShell";
import { getDashboardData } from "@/lib/data/queries";

export const dynamic = "force-dynamic";

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getDashboardData(slug);
  return <AppShell initialData={data} requestedSlug={slug} />;
}
