import type { Metadata, Viewport } from "next";
import { Providers } from "@/app/providers";
import "../globals.css";

export const metadata: Metadata = {
  title: "RiWeather · 預報市場地圖",
  description: "面向主要城市及預測市場的全球預報智能地圖。"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

export default function ZhHkRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-HK">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
