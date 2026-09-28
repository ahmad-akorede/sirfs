import type { Metadata } from "next";
import { Newsreader, Outfit } from "next/font/google";
import { site } from "@/content/site";
import { siteOrigin } from "@/lib/seo/site-url";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  adjustFontFallback: true,
  fallback: ["Georgia", "Times New Roman", "serif"],
  preload: true,
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-outfit",
  adjustFontFallback: true,
  fallback: ["Segoe UI", "Roboto", "Helvetica Neue", "sans-serif"],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin()),
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en",
  },
  twitter: { card: "summary" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="content" tabIndex={-1} className="flex-1 pb-14 lg:pb-0">
          {children}
        </main>
        <SiteFooter />
        <MobileActionBar />
      </body>
    </html>
  );
}
