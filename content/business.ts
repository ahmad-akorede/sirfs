/**
 * Business page copy. Replace a "to be published" line when the institution
 * confirms it. Do not add a rate, a limit, a fee, or a service that has not
 * been supplied. Scenarios are situations, not customer stories.
 */

export const businessHero = {
  eyebrow: "Business",
  title: "Buy the stock. Meet the order.",
  lede: "Credit for entrepreneurs, traders, and small firms. Stock, an order, an invoice, or savings kept apart from a loan.",
};

export const businessAudiences = [
  "Entrepreneurs",
  "Traders",
  "Shop owners",
  "Small firms",
  "Employers",
];

export const businessScenarios = [
  {
    title: "The shelves are thin before the busy week",
    text: "Stock has to be bought before it is sold. That gap is working capital, through the business loan.",
    action: "Working capital",
    href: "#working-capital",
  },
  {
    title: "The order is signed. The goods are not in yet",
    text: "A local purchase order is already held. LPO finance is for carrying it out. The order belongs in the file.",
    action: "LPO finance",
    href: "/loans/lpo",
  },
  {
    title: "The work is billed. The client has not paid",
    text: "An invoice is already raised. Invoice discounting is cash while that invoice is still outstanding.",
    action: "Invoice discounting",
    href: "/loans/invoice",
  },
  {
    title: "A machine or a vehicle",
    text: "Asset financing can be raised with the office.",
    action: "Asset financing",
    href: "#asset-financing",
  },
  {
    title: "Money that should not stay in the till",
    text: "Business savings is a place to keep money. It is not a loan, and the terms are not published yet.",
    action: "Business savings",
    href: "#business-savings",
  },
];

export const businessFacilities = [
  {
    id: "working-capital",
    name: "Working capital",
    summary: "Stock, overheads, or the gap between buying and selling.",
    detail:
      "For a firm that is already trading. This use sits on the business loan.",
    href: "/loans/business",
    action: "The business loan",
  },
  {
    id: "business-loans",
    name: "Business loans",
    summary: "A facility for a registered business that is already trading.",
    detail:
      "The loan names working capital as its purpose. The amount, the term, and the cost are written into the facility letter.",
    href: "/loans/business",
    action: "Read the loan",
  },
  {
    id: "asset-financing",
    name: "Asset financing",
    summary: "A machine, a vehicle, or another asset the work depends on.",
    detail:
      "The facility is named so a firm can ask the office. There is no separate loan page for it.",
    href: "/contact",
    action: "Ask the office",
  },
  {
    id: "invoice-lpo",
    name: "Invoice and LPO financing",
    summary: "Cash against an order you hold, or an invoice you have already raised.",
    detail:
      "LPO finance follows a local purchase order. Invoice discounting follows an unpaid invoice. That paper belongs in the file.",
    href: "/loans/lpo",
    action: "LPO finance",
    secondaryHref: "/loans/invoice",
    secondaryAction: "Invoice discounting",
  },
  {
    id: "business-savings",
    name: "Business savings",
    summary: "A place to keep money, kept apart from a loan.",
    detail:
      "It does not use the loan form. The office opens the account.",
    href: "/savings",
    action: "Savings",
  },
  {
    id: "other-services",
    name: "Other business services",
    summary: "A payroll scheme for staff, arranged with the employer.",
    detail:
      "A payroll scheme for staff, arranged with the employer.",
    href: "/loans/payroll",
    action: "Payroll finance",
  },
];

export const businessChallenges = [
  {
    title: "Cash leaves before it returns",
    text: "Goods are paid for on one day. Customers pay across the days that follow.",
  },
  {
    title: "An order arrives before the money to meet it",
    text: "The purchase order is real. The stock it requires is not yet bought.",
  },
  {
    title: "The client pays after the work",
    text: "The invoice is raised. The balance stays outstanding.",
  },
  {
    title: "The machine is hired, or missing",
    text: "A machine or a vehicle the work depends on. Ask the office.",
  },
  {
    title: "Money to keep, and money to borrow",
    text: "Those are different decisions. Savings is not a loan.",
  },
];

export const businessSolutions = [
  {
    challenge: "Stock and the gap in the cycle",
    response: "Working capital, on the business loan.",
    href: "/loans/business",
  },
  {
    challenge: "A local purchase order already held",
    response: "LPO finance. The order is the reason.",
    href: "/loans/lpo",
  },
  {
    challenge: "An invoice already raised",
    response: "Invoice discounting, while it is unpaid.",
    href: "/loans/invoice",
  },
  {
    challenge: "An asset the work needs",
    response: "Ask the office.",
    href: "/contact",
  },
  {
    challenge: "Money that should be kept",
    response: "Business savings. Not the loan form.",
    href: "/savings",
  },
];

export const businessBenefits = [
  "The facility follows the need: stock, an order, an invoice, or an asset.",
  "An order or an invoice is named on its own loan.",
  "Savings is separate from credit.",
  "A person decides. This page does not approve an application.",
];

export const businessSteps = [
  {
    title: "Name the need",
    text: "Stock, an order, an invoice, an asset, or money to keep.",
  },
  {
    title: "Start in the right place",
    text: "A loan uses the application. Savings, and any facility still unpublished, starts with the office.",
  },
  {
    title: "Papers",
    text: "An order or an invoice stays with its own file.",
  },
  {
    title: "A person replies",
    text: "Yes, no, or a question. The page does not set a rate.",
  },
];

export const businessFaqs = [
  {
    question: "Which facility is for stock?",
    answer:
      "Working capital, through the business loan, for a registered business that is already trading. The description is not an approval.",
  },
  {
    question: "What is the difference between an LPO and an invoice?",
    answer:
      "LPO finance is for a local purchase order you already hold. Invoice discounting is for cash while an invoice you have raised is still unpaid.",
  },
  {
    question: "Do you finance equipment or vehicles?",
    answer:
      "Asset financing is arranged with the office. There is no separate loan page for it. The amount, the term, and the cost are written with the office.",
  },
  {
    question: "Can the business save without taking a loan?",
    answer:
      "Yes. Savings is kept apart from credit and does not use the loan form. Write to the office.",
  },
  {
    question: "What else can an employer ask for?",
    answer:
      "A payroll scheme for staff, arranged in the employer’s name. Further services are not published on this page.",
  },
  {
    question: "Where are the rates, limits, and fees?",
    answer:
      "They are written into the facility letter. They are not set on this page.",
  },
];
