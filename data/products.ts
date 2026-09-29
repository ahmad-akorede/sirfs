export const discovery = [
  {
    index: "01",
    title: "Personal Finance",
    text: "Access financing for important personal needs.",
    href: "#personal",
    cta: "Explore Personal Finance",
    featured: true,
  },
  {
    index: "02",
    title: "Business Finance",
    text: "Working capital and structured financing to help your business grow.",
    href: "#business",
    cta: "Explore Business Finance",
    featured: false,
  },
  {
    index: "03",
    title: "Savings",
    text: "Simple ways to plan, save and build towards your goals.",
    href: "/savings",
    cta: "Explore Savings",
    featured: false,
  },
  {
    index: "04",
    title: "Payroll & Structured Finance",
    text: "Financial solutions designed around employees and businesses.",
    href: "/loans/payroll",
    cta: "Learn More",
    featured: false,
  },
] as const;

export const businessBenefits = ["Working capital", "Business growth", "Flexible repayment"] as const;

export const personalProducts = [
  { title: "Personal Loans", text: "A salary, and a personal cost.", href: "/loans/personal" },
  { title: "Payroll Finance", text: "Credit for staff of an employer on the scheme.", href: "/loans/payroll" },
  { title: "Emergency Financing", text: "A personal loan when the cost cannot wait.", href: "/loans/personal" },
] as const;

export const businessProducts = [
  { title: "Business Loan", href: "/loans/business" },
  { title: "LPO Finance", href: "/loans/lpo" },
  { title: "Invoice Discounting", href: "/loans/invoice" },
  { title: "Payroll Finance", href: "/loans/payroll" },
] as const;

export const steps = [
  { title: "Choose a solution", text: "Personal, payroll, savings, or a business facility." },
  { title: "Submit your application", text: "Name the facility, the amount, and the reason." },
  { title: "Complete verification", text: "The papers named for that facility." },
  { title: "Receive a decision", text: "A person reviews the file and writes the outcome." },
] as const;

export const pillars = [
  { title: "Simple", text: "Clear processes without unnecessary complexity." },
  { title: "Accessible", text: "Financial solutions designed around real customer needs." },
  { title: "Responsive", text: "Support when customers need it." },
  { title: "Responsible", text: "Clear terms and transparent communication." },
] as const;

export const trustPoints = [
  { title: "Personal Finance", text: "Salary and personal costs." },
  { title: "Business Finance", text: "Trade, orders, and invoices." },
  { title: "Flexible Solutions", text: "A facility matched to the need." },
  { title: "Dedicated Support", text: "The office in Geri-Alimi." },
] as const;

/**
 * Customer story. Leave quote, name, and business empty until a customer has agreed.
 * The section then shows the institutional line, not an invented account.
 */
export const customerStory = {
  quote: null as string | null,
  name: null as string | null,
  business: null as string | null,
  title: "Built around real financial needs.",
  text: "A salary earner, a trader, and a firm already in business. The facility follows the need.",
};
