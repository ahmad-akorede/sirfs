import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/seo/site-url";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/design-system/"],
    },
    sitemap: `${siteOrigin()}/sitemap.xml`,
  };
}
