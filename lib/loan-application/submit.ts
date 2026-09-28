import type { ApplicationReceipt, LoanApplication } from "@/lib/loan-application/schema";

function trim(value: string) {
  return value.trim();
}

/** JSON the future API can accept. File bytes are intentionally absent. */
export function toApplicationPayload(application: LoanApplication) {
  return {
    personal: {
      fullName: trim(application.personal.fullName),
      phone: trim(application.personal.phone),
      email: trim(application.personal.email),
      address: trim(application.personal.address),
      city: trim(application.personal.city),
    },
    work: {
      earner: application.work.earner,
      employer: trim(application.work.employer),
      role: trim(application.work.role),
      businessName: trim(application.work.businessName),
      trade: trim(application.work.trade),
      otherEarn: trim(application.work.otherEarn),
      income: trim(application.work.income),
    },
    loan: {
      product: application.loan.product,
      amount: application.loan.amount.replace(/\D/g, ""),
      purpose: trim(application.loan.purpose),
      term: trim(application.loan.term),
    },
    documents: {
      note: trim(application.documents.note),
      fileNames: application.documents.fileNames,
    },
    consent: application.consent,
  };
}

/**
 * The only place a backend should be attached.
 * Today it accepts nothing and issues no reference.
 */
export async function submitLoanApplication(
  application: LoanApplication,
): Promise<ApplicationReceipt> {
  void toApplicationPayload(application);
  return { status: "not-connected", reference: null };
}
