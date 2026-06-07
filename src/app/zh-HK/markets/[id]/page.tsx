import { MarketPageContent } from "@/app/(app)/markets/[id]/page";

export const dynamic = "force-dynamic";

export default async function ZhHkMarketPage({ params }: { params: Promise<{ id: string }> }) {
  return <MarketPageContent params={params} locale="zh-HK" />;
}
