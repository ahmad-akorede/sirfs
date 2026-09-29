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

export type NavChild = {
  label: string;
  href: string;
  note: string;
};

export type PrimaryNavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const mainNav: PrimaryNavItem[] = [
  {
    label: "Personal",
    href: "/loans/personal-loan",
    children: [
      { label: "Personal loan", href: "/loans/personal-loan", note: "A salary, and a personal cost." },
      { label: "Payroll finance", href: "/loans/payroll-finance", note: "Staff of an employer on the scheme." },
      { label: "Savings", href: "/savings", note: "Money kept with the institution. Returns when confirmed." },
    ],
  },
  {
    label: "Business",
    href: "/business",
    children: [
      { label: "Working capital", href: "/business#working-capital", note: "Stock and the trading cycle." },
      { label: "Business loan", href: "/loans/business-loan", note: "A firm already trading." },
      { label: "LPO finance", href: "/loans/lpo-finance", note: "A local purchase order already held." },
      { label: "Invoice discounting", href: "/loans/invoice-discounting", note: "Cash while an invoice is unpaid." },
      { label: "Asset financing", href: "/business#asset-financing", note: "Arranged with the office. Terms to be published." },
    ],
  },
  { label: "Loans", href: "/loans" },
  { label: "Savings & Investment", href: "/savings" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "The institution", href: "/about", note: "Who the credit is for." },
      { label: "People", href: "/about/team", note: "Directors and managers, when confirmed." },
      { label: "Corporate information", href: "/about/corporate-information", note: "Licence, ownership, and complaints." },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Answers", href: "/resources/faq", note: "Loans, repayments, savings, and business." },
      { label: "Notes", href: "/resources/blog", note: "Published when a piece is written." },
    ],
  },
];

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
