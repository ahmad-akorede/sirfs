/**
 * Savings and deposit copy. Replace any "To be published" or "To be written"
 * line when the institution confirms it. Do not add a rate, a return, a
 * minimum, or a withdrawal rule that has not been supplied.
 * Add a product by copying a block into `keptMoney`. A placeholder is not a
 * live product, and the number of blocks is not a claim.
 */

export type KeptMoneyKind = "savings" | "deposit";

export type KeptMoneyProduct = {
  id: string;
  kind: KeptMoneyKind;
  /** Shown above the name when the product is not yet real. */
  placeholder: boolean;
  name: string;
  summary: string;
  who: string;
  returnValue: string;
  term: string;
  minimum: string;
  access: string;
};

export const savingsHero = {
  eyebrow: "Savings",
  title: "Keep it, or set it aside.",
  lede: "Savings is money you hold with the institution. A deposit is money you leave for a stated time. Neither is a loan. A return is printed here only when confirmed.",
};

export const savingsTrust = [
  { label: "A return", value: "To be published" },
  { label: "A minimum", value: "To be published" },
  { label: "Taking money out", value: "To be published" },
  { label: "How you start", value: "The office" },
];

export const savingsComparison = {
  intro:
    "Two kinds of money. This is not shares, and it is not a fund, unless a product below says so. None does yet. The table is not a savings contract.",
  columns: [
    { key: "savings" as const, title: "Savings" },
    { key: "deposit" as const, title: "Deposit" },
  ],
  rows: [
    {
      label: "In plain words",
      savings: "Money you keep with the institution.",
      deposit: "Money you leave for a stated time.",
    },
    {
      label: "A return",
      savings: "To be published",
      deposit: "To be published",
    },
    {
      label: "How long",
      savings: "To be published",
      deposit: "To be published",
    },
    {
      label: "Smallest amount",
      savings: "To be published",
      deposit: "To be published",
    },
    {
      label: "Taking it out",
      savings: "To be published",
      deposit: "To be published",
    },
    {
      label: "If you need it early",
      savings: "To be published",
      deposit: "To be published",
    },
    {
      label: "How to begin",
      savings: "Write to the office.",
      deposit: "Write to the office.",
    },
  ],
};

const unpublished = {
  returnValue: "To be published",
  term: "To be published",
  minimum: "To be published",
  access: "To be published",
};

export const keptMoney: KeptMoneyProduct[] = [
  {
    id: "savings-placeholder",
    kind: "savings",
    placeholder: true,
    name: "To be named",
    summary: "To be written.",
    who: "To be written.",
    ...unpublished,
  },
  {
    id: "deposit-placeholder",
    kind: "deposit",
    placeholder: true,
    name: "To be named",
    summary: "To be written.",
    who: "To be written.",
    ...unpublished,
  },
];

export const savingsBenefits = [
  "It is not a loan, and it does not use the loan form.",
  "A return is shown only when the institution confirms the figure.",
  "A missing term is marked “To be published”.",
  "The office opens the account. This page does not.",
];

export const savingsSteps = [
  { title: "Choose", text: "Savings you keep, or a deposit you set aside." },
  { title: "Write", text: "The office, not the loan application." },
  { title: "The real terms", text: "Amount, time, and return, once they are confirmed." },
  { title: "The record", text: "What you agree is written down with the office. This page is not that record." },
];

export const savingsFaqs = [
  {
    question: "Is this a loan?",
    answer:
      "No. Savings and deposits are money kept with the institution. The loan form is a different path.",
  },
  {
    question: "Where is the interest, or the return?",
    answer:
      "It is not on this page. The line stays “To be published” until the institution confirms the figure.",
  },
  {
    question: "What is the difference between savings and a deposit?",
    answer:
      "Savings is money you keep. A deposit is money you leave for a stated time. How long, and what happens if you need it early, are to be published for each product.",
  },
  {
    question: "Can I take money out?",
    answer:
      "The rule for taking money out has not been published. It will be written on the product when it is confirmed.",
  },
  {
    question: "Is there a smallest amount?",
    answer: "Not published yet.",
  },
  {
    question: "How do I begin?",
    answer:
      "Write to the office. Do not use Apply for a Loan. The message does not open an account by itself.",
  },
];
