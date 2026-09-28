import type { MetadataRoute } from "next";
import { loans } from "@/content/loans";
import { publishedNotes } from "@/content/resources";
import { absoluteUrl } from "@/lib/seo/site-url";

const routes = [
  "/",
  "/loans",
  ...loans.map((loan) => loan.href),
  "/savings",
  "/business",
  "/about",
  "/about/team",
  "/about/corporate-information",
  "/resources",
  "/resources/faq",
  "/contact",
  "/apply",
  "/privacy",
  "/terms",
  "/cookies",
];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-28");
  const paths = [
    ...routes,
    ...(publishedNotes.length > 0 ? ["/resources/blog"] : []),
    ...publishedNotes.map((note) => `/resources/blog/${note.slug}`),
  ];

  return paths.map((path) => ({
    url: absoluteUrl(path),
    lastModified,
  }));
}
