import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { site } from "@/content/site";
import { siteOrigin } from "@/lib/seo/site-url";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ContentMotion } from "@/components/motion/content-motion";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
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
      className={`${manrope.variable} h-full antialiased`}
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
        <ContentMotion />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;var s="h1,h2,h3,p,li,figure,blockquote,form,address,dt,dd,details,.motion-control";function collect(r){return Array.prototype.filter.call(r.querySelectorAll(s),function(el){if(el.closest(".sr-only"))return false;if(el.closest("details")&&el.tagName!=="DETAILS")return false;if(el.parentElement&&el.parentElement.closest(s))return false;return true})}function mark(r){var seen=0,view=window.innerHeight*0.92;collect(r).forEach(function(el){if(el.getAttribute("data-risen")==="1"||el.classList.contains("rise-pending"))return;if(el.getBoundingClientRect().top<view){el.style.animationDelay=Math.min(seen,12)*50+"ms";el.classList.add("rise");el.setAttribute("data-risen","1");seen++}else{var kids=el.parentElement?Array.prototype.filter.call(el.parentElement.children,function(c){return c.matches&&c.matches(s)}):[];var i=Math.max(0,Array.prototype.indexOf.call(kids,el));el.style.animationDelay=Math.min(i,8)*55+"ms";el.classList.add("rise-pending")}})}var main=document.getElementById("content");if(main)mark(main);var footer=document.querySelector("footer");if(footer)mark(footer)})();`,
          }}
        />
      </body>
    </html>
  );
}
