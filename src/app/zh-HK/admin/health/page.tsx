import { AdminHealthPageContent } from "@/app/(app)/admin/health/page";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "數據狀態 · RiWeather",
  description: "即時數據狀態、接入新鮮度、環境設定及操作指引。"
};

export default async function ZhHkAdminHealthPage() {
  return <AdminHealthPageContent locale="zh-HK" />;
}
