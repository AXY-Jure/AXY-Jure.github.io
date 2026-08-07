import type { Metadata } from "next";
import AnalyticsConsent from "@/src/components/AnalyticsConsent.jsx";
import AnalyticsRuntime from "@/src/components/AnalyticsRuntime.jsx";
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
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};window['ga-disable-G-WTT8L3MJTV']=true;window.gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});window.gtag('set','ads_data_redaction',true);`,
          }}
        />
      </head>
      <body>
        {children}
        <AnalyticsRuntime />
        <AnalyticsConsent />
      </body>
    </html>
  );
}
