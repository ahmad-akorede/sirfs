import type { Metadata } from "next";
import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/seo/site-url";

export function pageMetadata({
  title,
  description,
  path,
  index = true,
  follow = true,
  absolute = false,
  canonical = true,
  openGraphType = "website",
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  follow?: boolean;
  /** Use the title as written, without the site-name suffix. */
  absolute?: boolean;
  canonical?: boolean;
  openGraphType?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = absolute ? title : `${title} · ${site.name}`;
  const robots = { index, follow };

  return {
    title: absolute ? { absolute: title } : title,
    description,
    ...(canonical ? { alternates: { canonical: url } } : {}),
    robots: { ...robots, googleBot: robots },
    openGraph: {
      type: openGraphType,
      url,
      siteName: site.name,
      title: socialTitle,
      description,
      locale: "en",
    },
    twitter: {
      card: "summary",
      title: socialTitle,
      description,
    },
  };
}
