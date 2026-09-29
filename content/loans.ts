import type { ProductSummary } from "@/components/patterns/product";
import { site } from "@/content/site";
import {
  applicationProcess,
  defaultProductFaqs,
  loanLabels,
  unpublishedTerms,
  type ProductFact,
  type ProductPageData,
} from "@/content/product";

export type LoanCategory = "individuals" | "businesses";

export type Loan = ProductSummary &
  ProductPageData & {
    category: LoanCategory;
  };

type LoanDraft = Pick<
  Loan,
  | "slug"
  | "name"
  | "audience"
  | "summary"
  | "purpose"
  | "category"
  | "who"
  | "benefits"
  | "requirements"
  | "repayment"
> &
  Partial<Omit<Loan, "slug">>;

function defineLoan(product: LoanDraft): Loan {
  const requirements = product.requirements;
  const facts: ProductFact[] = product.facts ?? [
    { label: "Who it is for", value: product.audience },
    { label: "Amount", value: "To be published" },
    { label: "Term", value: "To be published" },
    { label: "Requirements", value: requirements[0] ?? "To be published" },
  ];

  return {
    eyebrow: "Loans",
    labels: loanLabels,
    eligibility: [],
    range: unpublishedTerms(),
    process: applicationProcess,
    faqs: defaultProductFaqs,
    amount: "To be published",
    tenor: "To be published",
    applyLabel: "Apply for this loan",
    applyHref: `${site.applyHref}?product=${product.slug}`,
    ctaEyebrow: "Begin",
    ctaTitle: "Name the amount and the reason.",
    ctaNote: "The form records an enquiry. It does not set a rate or approve the application.",
    ctaSecondaryLabel: "All loans",
    ctaSecondaryHref: "/loans",
    ...product,
    href: `/loans/${product.slug}`,
    facts: product.facts ?? facts,
  };
}

export const loans: Loan[] = [
  defineLoan({
    slug: "personal",
    name: "Personal loan",
    audience: "Salary earners",
    summary: "For rent, school fees, a medical bill, or another personal cost, repaid from salary.",
    purpose: "A personal cash need, when the income is a salary.",
    category: "individuals",
    who: "A person who earns a salary and needs money for a personal cost. It is not for stock, an order, or an invoice.",
    benefits: [
      "For a personal cost, not for stock or an order.",
      "Repaid from salary.",
      "Interest, limits, and fees: to be published.",
    ],
    requirements: ["To be published."],
    repayment: "Repaid from salary. The schedule and the cost are to be published.",
  }),
  defineLoan({
    slug: "business",
    name: "Business loan",
    audience: "Registered businesses",
    summary: "Working capital for a business that is already trading.",
    purpose: "Stock, overheads, or a gap in the trading cycle.",
    category: "businesses",
    who: "A registered business that is already trading and needs working capital.",
    benefits: [
      "For a business that is already trading.",
      "Meant as working capital.",
      "Interest, limits, and fees: to be published.",
    ],
    requirements: ["To be published."],
    repayment: "How the facility is repaid is to be published.",
  }),
  defineLoan({
    slug: "lpo",
    name: "LPO finance",
    audience: "Purchase orders",
    summary: "Funding to execute a local purchase order you already hold.",
    purpose: "Buying what a confirmed order requires.",
    category: "businesses",
    who: "A business that already holds a local purchase order and needs funds to carry it out.",
    benefits: [
      "For an order you already hold.",
      "The order is the reason for the facility.",
      "Interest, limits, and fees: to be published.",
    ],
    requirements: [
      "The order belongs in the file.",
      "The rest of the list is to be published.",
    ],
    repayment: "Tied to the order. The schedule and the cost are to be published.",
  }),
  defineLoan({
    slug: "invoice",
    name: "Invoice discounting",
    audience: "Unpaid invoices",
    summary: "Working capital while a raised invoice is still outstanding.",
    purpose: "Cash against work already billed.",
    category: "businesses",
    who: "A business waiting on an invoice it has already raised.",
    benefits: [
      "For cash while an invoice is unpaid.",
      "The invoice is the reason for the facility.",
      "Interest, limits, and fees: to be published.",
    ],
    requirements: [
      "The invoice belongs in the file.",
      "The rest of the list is to be published.",
    ],
    repayment: "Tied to the invoice. The schedule and the cost are to be published.",
  }),
  defineLoan({
    slug: "payroll",
    name: "Payroll finance",
    audience: "Employer schemes",
    summary: "A staff facility arranged with the employer.",
    purpose: "Personal credit for staff of a registered employer.",
    category: "individuals",
    who: "A person whose employer has arranged the scheme. The employer sets up the relationship.",
    benefits: [
      "For a person on a registered employer’s scheme.",
      "The employer arranges the relationship.",
      "Interest, limits, and fees: to be published.",
    ],
    requirements: [
      "The list is confirmed with the employer.",
      "It is not published here yet.",
    ],
    repayment: "Arranged through the employer. The schedule and the cost are to be published.",
  }),
];

export function getLoan(slug: string) {
  return loans.find((loan) => loan.slug === slug);
}
