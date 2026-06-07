import { WeatherBondsPageContent } from "@/app/(app)/weather-bonds/page";

export const metadata = {
  title: "天氣掛鈎證券研究 · RiWeather",
  description: "面向天氣掛鈎證券、參數化天氣風險產品、災害或天氣債券及研究團隊的分析。"
};

export default function ZhHkWeatherBondsPage() {
  return <WeatherBondsPageContent locale="zh-HK" />;
}
