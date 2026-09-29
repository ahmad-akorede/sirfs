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
    href: "/loans/personal",
    children: [
      { label: "Personal loan", href: "/loans/personal", note: "A salary, and a personal cost." },
      { label: "Payroll finance", href: "/loans/payroll", note: "Credit for staff of an employer on the scheme." },
    ],
  },
  {
    label: "Business",
    href: "/business",
    children: [
      { label: "Business loan", href: "/loans/business", note: "Working capital for a firm already trading." },
      { label: "Working capital", href: "/business#working-capital", note: "Stock, overheads, and the trading cycle." },
      { label: "LPO finance", href: "/loans/lpo", note: "A local purchase order already held." },
      { label: "Invoice discounting", href: "/loans/invoice", note: "Cash while an invoice is unpaid." },
    ],
  },
  {
    label: "Loans",
    href: "/loans",
    children: [
      { label: "Personal loan", href: "/loans/personal", note: "Salary earners." },
      { label: "Business loan", href: "/loans/business", note: "Registered businesses." },
      { label: "LPO finance", href: "/loans/lpo", note: "Confirmed purchase orders." },
      { label: "Invoice discounting", href: "/loans/invoice", note: "Unpaid invoices." },
      { label: "Payroll finance", href: "/loans/payroll", note: "Employer schemes." },
    ],
  },
  {
    label: "Savings",
    href: "/savings",
    children: [
      { label: "Savings", href: "/savings#savings", note: "Money you keep with the institution." },
      { label: "Deposits", href: "/savings#deposits", note: "Money you set aside." },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Resources", href: "/resources" },
];
