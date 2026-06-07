import { DataPageContent } from "@/app/(app)/data/page";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "天氣數據 API · RiWeather",
  description: "為專業天氣風險數據買家提供預報點、市場事件、時間序列、綜合訊號、新鮮度及來源。"
};

export default async function ZhHkDataPage() {
  return <DataPageContent locale="zh-HK" />;
}
