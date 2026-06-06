import type { Metadata, Viewport } from "next";
import { Providers } from "@/app/providers";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "Weather AI · Forecast Market Map",
    template: "%s"
  },
  description:
    "Weather AI — a global forecast and prediction-market intelligence map. Compare official forecast signals against market-implied probability to surface probability gaps, confidence, and disagreement."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
