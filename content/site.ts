/**
 * Public routes. Unpublished institutional facts stay empty.
 * Set NEXT_PUBLIC_SITE_URL to the real origin before a public deploy.
 */

export const site = {
  name: "Sirfa Empowerment Initiative",
  description: "Microfinance for salary earners, traders, and small businesses.",
  hours: "Monday to Friday, 8:00–17:00",
  phoneDisplay: "0708 264 0524",
  phoneHref: "tel:+2347082640524",
  email: "sirfaempowermentinitiative@gmail.com",
  whatsappDisplay: null as string | null,
  whatsappHref: null as string | null,
  /** Leave null. A map embed would load a third-party service. The address is published in text. */
  mapQuery: null as string | null,
  address: ["Opposite NNPC, Princess and Honey Paint Building", "Geri-Alimi"] as const,
  applyHref: "/apply",
  applyLabel: "Apply Now",
  contactHref: "/contact",
};

import type { PrimaryNavItem } from "@/data/navigation";

export type { NavChild, PrimaryNavItem } from "@/data/navigation";
export { mainNav } from "@/data/navigation";

export const legalNav = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
  { label: "Corporate information", href: "/about/corporate-information" },
] as const;

export function normalizePath(path: string) {
  const bare = path.split("?")[0]?.split("#")[0] ?? "/";
  if (bare.length > 1 && bare.endsWith("/")) return bare.slice(0, -1);
  return bare || "/";
}

export function isNavActive(pathname: string, item: PrimaryNavItem) {
  const path = normalizePath(pathname);
  const hrefs = [item.href, ...(item.children?.map((child) => child.href) ?? [])];
  return hrefs.some((href) => path === href || path.startsWith(`${href}/`));
}
