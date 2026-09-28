/**
 * Shape of a product page. The layout reads this and nothing product-specific.
 * Add a facility by appending one object to the product list that uses it.
 * Replace any "To be published" value when the client confirms the real one.
 */

import { loanDisclosure } from "@/content/trust";

export type ProductFact = {
  label: string;
  value: string;
};

export type ProductStep = {
  title: string;
  text: string;
};

export type ProductFaq = {
  question: string;
  answer: string;
};

export type ProductLabels = {
  summary: string;
  who: string;
  benefits: string;
  eligibility: string;
  requirements: string;
  range: string;
  repayment: string;
  process: string;
  faq: string;
};

export const loanLabels: ProductLabels = {
  summary: "Summary",
  who: "Who it's for",
  benefits: "Benefits",
  eligibility: "Eligibility",
  requirements: "Requirements",
  range: "Loan range",
  repayment: "Repayment",
  process: "Application process",
  faq: "Questions",
};

export type ProductPageData = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  audience: string;
  purpose: string;
  who: string;
  benefits: string[];
  eligibility: string[];
  requirements: string[];
  range: ProductFact[];
  repayment: string;
  process: ProductStep[];
  faqs: ProductFaq[];
  facts: ProductFact[];
  labels: ProductLabels;
  applyLabel: string;
  applyHref: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaNote?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
};

export const unpublishedTerms = (): ProductFact[] =>
  loanDisclosure.map(({ label, value }) => ({ label, value }));

export const applicationProcess: ProductStep[] = [
  { title: "Choose", text: "Confirm this is the loan for the need." },
  { title: "Apply", text: "Your name, the amount, and the reason." },
  { title: "Papers", text: "What this loan lists, once that list is published." },
  { title: "Decision", text: "A person replies. This page does not approve the application." },
];

export const defaultProductFaqs: ProductFaq[] = [
  {
    question: "Where are the amount, the term, and the cost?",
    answer:
      "They are marked “To be published” on this page, until the figures are confirmed.",
  },
  {
    question: "Does the description mean I qualify?",
    answer:
      "No. Who it is for is a guide. Eligibility is published only when the rules are confirmed.",
  },
  {
    question: "What should I prepare?",
    answer:
      "Only the requirements listed for this loan. A line that says “To be published” has not been named yet.",
  },
  {
    question: "How do I begin?",
    answer:
      "Use the apply button on this page. The form records an enquiry. It does not approve the application.",
  },
];
