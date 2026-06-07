import { SignalsPageContent } from "@/app/(app)/signals/page";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "賠率分析 · RiWeather",
  description: "按市場價格、估算公允值、差距分類、風險及模擬交易姿態排序的預測市場賠率分析。"
};

export default async function ZhHkSignalsPage() {
  return <SignalsPageContent locale="zh-HK" />;
}
