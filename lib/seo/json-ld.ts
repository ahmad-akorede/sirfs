import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/seo/site-url";

export type Crumb = {
  name: string;
  path: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ArticleInput = {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
};

type JsonLdNode = Record<string, unknown>;

export function crumbs(...items: Crumb[]): Crumb[] {
  return [{ name: "Home", path: "/" }, ...items];
}

/** Name and URL only. Address, telephone, and email are added when the office confirms them. */
export function organizationJsonLd(): JsonLdNode {
  const data: JsonLdNode = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: absoluteUrl("/"),
    description: site.description,
  };

  if (site.email) data.email = site.email;
  if (site.phoneDisplay && site.phoneHref) data.telephone = site.phoneDisplay;

  const lines = site.address.filter((line) => !/to be confirmed/i.test(line));
  if (lines.length > 0) {
    data.address = {
      "@type": "PostalAddress",
      streetAddress: lines.join(", "),
    };
  }

  return data;
}

export function websiteJsonLd(): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: absoluteUrl("/"),
    description: site.description,
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: absoluteUrl("/"),
    },
  };
}

export function breadcrumbJsonLd(items: readonly Crumb[]): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPageJsonLd(items: readonly FaqItem[]): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** For a note that has actually been published. Sample cards are not articles. */
export function articleJsonLd(article: ArticleInput): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    mainEntityOfPage: absoluteUrl(article.path),
    author: {
      "@type": "Organization",
      name: site.name,
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: absoluteUrl("/"),
    },
  };
}
