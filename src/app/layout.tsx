import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  axes: ["wdth"],
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://veltro.co.uk"),
  title: {
    default: "Veltro — Business Utilities & Digital Marketing | UK Energy Broker",
    template: "%s | Veltro",
  },
  description:
    "We sort out the bills you hate opening — and the marketing you never get round to. Business energy, water and waste comparison across the UK.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://veltro.co.uk",
    siteName: "Veltro",
    title: "Veltro — Business Utilities & Digital Marketing",
    description:
      "Whole-of-market business electricity, gas, water & waste comparison. In-house web design, SEO, and paid ads.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veltro — Business Utilities & Digital Marketing",
    description:
      "Whole-of-market business electricity, gas, water & waste comparison. In-house web design, SEO, and paid ads.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-paper text-ink font-sans antialiased flex flex-col justify-between overflow-x-hidden">
        {/* Skip to content link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-signal focus:text-ink focus:font-bold focus:rounded-[4px] focus:shadow-lg focus:outline-2 focus:outline-ink"
        >
          Skip to main content
        </a>

        <div>
          <TopBar />
          <SiteNav />
        </div>

        <main id="main-content" className="flex-1 focus:outline-none overflow-x-hidden">
          {children}
        </main>

        <SiteFooter />
        <CookieBanner />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
