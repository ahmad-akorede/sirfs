/**
 * Public routes. Unpublished institutional facts stay empty.
 * Set NEXT_PUBLIC_SITE_URL to the real origin before a public deploy.
 */

export const site = {
  name: "Sirfa",
  description: "Microfinance for salary earners, traders, and small businesses.",
  hours: "Monday to Friday, 8:00–17:00",
  phoneDisplay: null as string | null,
  phoneHref: null as string | null,
  email: null as string | null,
  whatsappDisplay: null as string | null,
  whatsappHref: null as string | null,
  /** A place name or address for the map. Leave null until the office is confirmed. */
  mapQuery: null as string | null,
  address: ["Office address to be confirmed"] as const,
  applyHref: "/apply",
  applyLabel: "Apply for a Loan",
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
    label: "Products",
    href: "/loans",
    children: [
      {
        label: "Loans",
        href: "/loans",
        note: "Salary, trade, purchase orders, invoices, and payroll.",
      },
      {
        label: "Savings",
        href: "/savings",
        note: "Money you keep, or set aside. Returns published when confirmed.",
      },
    ],
  },
  {
    label: "Business",
    href: "/business",
  },
  {
    label: "About",
    href: "/about",
    children: [
      {
        label: "People",
        href: "/about/team",
        note: "Who directs and manages the firm.",
      },
      {
        label: "Corporate information",
        href: "/about/corporate-information",
        note: "Licence, ownership, and governance.",
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      {
        label: "Answers",
        href: "/resources/faq",
        note: "How an application moves, and where terms live.",
      },
      {
        label: "Notes",
        href: "/resources/blog",
        note: "Sample layouts until a note is published.",
      },
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
