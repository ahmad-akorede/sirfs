/**
 * Resources copy. Sample notes are layout only. They are not published pieces.
 * Replace a sample, or add a real note, when the institution has writing to keep.
 * Do not add a rate, a repayment rule, or a fee that has not been supplied.
 */

export const resourceTopics = [
  {
    id: "money",
    label: "Money",
    text: "A salary, personal cash, and the line between money you keep and money you borrow.",
  },
  {
    id: "business",
    label: "Business",
    text: "Stock, an order, an invoice, and the cash a firm is short of.",
  },
  {
    id: "loans",
    label: "Loans",
    text: "Which facility matches a need, and where a term will be published.",
  },
  {
    id: "savings",
    label: "Savings",
    text: "Money you keep, and money you set aside. Not a loan.",
  },
  {
    id: "education",
    label: "Reading the terms",
    text: "How to read a loan page before you apply.",
  },
] as const;

export type ResourceTopicId = (typeof resourceTopics)[number]["id"];

/**
 * A note that has been written and can be published.
 * Leave this empty until that piece exists. Sample cards are not articles.
 * Static export rejects app/resources/blog/[slug] while this list is empty,
 * because generateStaticParams must return at least one path. Add that route
 * with the first note, and describe it with articleJsonLd. Do not mark a sample as an article.
 */
export type PublishedNote = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  paragraphs: readonly string[];
};

export const publishedNotes: readonly PublishedNote[] = [];

export type SampleNote = {
  id: string;
  topic: ResourceTopicId;
  title: string;
  summary: string;
  href: string;
};

/** Sample cards. Not articles. Titles describe the slot, not a published piece. */
export const sampleNotes: SampleNote[] = [
  {
    id: "sample-money",
    topic: "money",
    title: "Sample: a salary and a personal cost",
    summary: "A note about personal cash would sit here. It has not been written.",
    href: "/resources/faq#loans",
  },
  {
    id: "sample-business",
    topic: "business",
    title: "Sample: stock, an order, or an invoice",
    summary: "A note about stock, an order, or an invoice would sit here. It has not been written.",
    href: "/resources/faq#business",
  },
  {
    id: "sample-loans",
    topic: "loans",
    title: "Sample: choosing a loan",
    summary: "A note about matching a need to a loan would sit here. It has not been written.",
    href: "/resources/faq#loans",
  },
  {
    id: "sample-savings",
    topic: "savings",
    title: "Sample: keep it, or set it aside",
    summary: "A note about savings and deposits would sit here. It has not been written.",
    href: "/resources/faq#savings",
  },
  {
    id: "sample-education",
    topic: "education",
    title: "Sample: reading a page before you sign",
    summary: "A note about reading terms would sit here. It has not been written.",
    href: "/resources/faq#general",
  },
];

export const faqGroups = [
  {
    id: "loans",
    title: "Loans",
    items: [
      {
        question: "How do I choose between the loans?",
        answer:
          "Start from the need. A personal cost from salary is a personal loan. Staff of a registered employer look at payroll finance. A trading business looks at a business loan, a held order at LPO finance, and an unpaid invoice at invoice discounting.",
      },
      {
        question: "Which loan is for a salary earner?",
        answer:
          "The personal loan. If your employer is on the payroll scheme, start with payroll finance.",
      },
      {
        question: "Where are the rates, limits, and fees?",
        answer:
          "They are not on this site until Sirfa confirms the figures.",
      },
    ],
  },
  {
    id: "applications",
    title: "Applications",
    items: [
      {
        question: "How do I apply?",
        answer:
          "Open Apply for a Loan. Five steps ask who you are, how you earn, which loan, the amount, and the reason. You can note a file name. The file is not uploaded.",
      },
      {
        question: "Does finishing the form send it?",
        answer:
          "No. The answers stay in the browser. Nothing is stored, and no reference is issued. Leaving the page clears them.",
      },
      {
        question: "Does the form approve the loan?",
        answer: "No. A person decides. The page does not.",
      },
    ],
  },
  {
    id: "repayments",
    title: "Repayments",
    items: [
      {
        question: "How is a loan repaid?",
        answer:
          "The schedule and the method are to be published with the loan. They are not stated here.",
      },
      {
        question: "What happens if a payment is late?",
        answer: "Any charge for a late payment is to be published. It is not on this page.",
      },
      {
        question: "Can I pay before the end?",
        answer:
          "Whether an early payment is allowed, and whether it changes the cost, is to be published.",
      },
    ],
  },
  {
    id: "savings",
    title: "Savings",
    items: [
      {
        question: "Is savings a loan?",
        answer:
          "No. Savings is money you keep. A deposit is money you leave for a stated time. Neither uses the loan form.",
      },
      {
        question: "Where is the return?",
        answer:
          "It is marked to be published on the savings page. This site does not print a figure until it is the real one.",
      },
      {
        question: "How do I start a savings account?",
        answer:
          "Write to the office. A message does not open an account, and it does not set a return.",
      },
    ],
  },
  {
    id: "business",
    title: "Business",
    items: [
      {
        question: "Which facility is for stock?",
        answer:
          "Working capital, through the business loan, for a registered business that is already trading. The description is not an approval.",
      },
      {
        question: "What is the difference between an order and an invoice?",
        answer:
          "LPO finance is for a local purchase order you already hold. Invoice discounting is for cash while an invoice you have raised is still unpaid.",
      },
      {
        question: "Can an employer arrange credit for staff?",
        answer:
          "That conversation starts on the Business page. Staff then use payroll finance. The papers are confirmed with the employer. They are not published here.",
      },
    ],
  },
  {
    id: "general",
    title: "General",
    items: [
      {
        question: "What makes someone eligible?",
        answer:
          "The qualifying rule is published per product, and it has not been supplied yet. A description of who a product is for is a guide, not an approval.",
      },
      {
        question: "What documents should I prepare?",
        answer:
          "Only the list on that product, once it exists. An order or an invoice belongs with its own facility. Do not assemble a file from a general checklist.",
      },
      {
        question: "How do I reach a person?",
        answer:
          "The Contact page holds the office, the hours, and a message. Telephone and email will appear there when they are confirmed.",
      },
    ],
  },
] as const;
