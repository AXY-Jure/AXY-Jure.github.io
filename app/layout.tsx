import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://axy.net"),
  title: { default: "AXY — Retail Collaboration Infrastructure", template: "%s | AXY" },
  description: "AXY connects retailers, brands, sales teams, products and customers through shared retail context.",
  applicationName: "AXY",
  category: "technology",
  icons: { icon: "/images/axy-logo.png", apple: "/images/axy-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
