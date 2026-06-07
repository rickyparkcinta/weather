import { GraphPageContent } from "@/app/(app)/graph/page";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "關係圖譜 · RiWeather",
  description:
    "連結城市、預報模型、預報變量、資料供應商、天氣市場、綜合研究訊號、供應商運行、觀測站及天氣風險產品的專業關係圖譜，附帶新鮮度與來源。"
};

export default async function ZhHkGraphPage() {
  return <GraphPageContent locale="zh-HK" />;
}
