/**
 * The file an application API would receive.
 * File bytes are not part of it. Only names the person chose to note.
 * Replace `submitLoanApplication` when a backend exists. Do not store this
 * in the browser beyond the visit.
 */

export const applicationSteps = [
  { id: "personal", label: "Personal information" },
  { id: "work", label: "Employment and business" },
  { id: "loan", label: "Loan requirements" },
  { id: "documents", label: "Documents" },
  { id: "review", label: "Review and submit" },
] as const;

export type ApplicationStepId = (typeof applicationSteps)[number]["id"];

export type Earner = "" | "salary" | "business" | "both" | "other";

export type LoanApplication = {
  personal: {
    fullName: string;
    phone: string;
    email: string;
    address: string;
    city: string;
  };
  work: {
    earner: Earner;
    employer: string;
    role: string;
    businessName: string;
    trade: string;
    otherEarn: string;
    income: string;
  };
  loan: {
    product: string;
    amount: string;
    purpose: string;
    term: string;
  };
  documents: {
    note: string;
    fileNames: string[];
  };
  consent: boolean;
};

export type ApplicationReceipt =
  | { status: "not-connected"; reference: null }
  | { status: "accepted"; reference: string };

export function emptyApplication(product = ""): LoanApplication {
  return {
    personal: { fullName: "", phone: "", email: "", address: "", city: "" },
    work: {
      earner: "",
      employer: "",
      role: "",
      businessName: "",
      trade: "",
      otherEarn: "",
      income: "",
    },
    loan: { product, amount: "", purpose: "", term: "" },
    documents: { note: "", fileNames: [] },
    consent: false,
  };
}
