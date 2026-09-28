import type { LoanApplication } from "@/lib/loan-application/schema";

export type FieldErrors = Record<string, string>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function digits(value: string) {
  return value.replace(/\D/g, "");
}

export function validateStep(
  step: number,
  application: LoanApplication,
  productIds: string[],
): FieldErrors {
  if (step === 0) return validatePersonal(application);
  if (step === 1) return validateWork(application);
  if (step === 2) return validateLoan(application, productIds);
  if (step === 4) return validateReview(application);
  return {};
}

function validatePersonal(application: LoanApplication): FieldErrors {
  const errors: FieldErrors = {};
  const { fullName, phone, email, address, city } = application.personal;

  if (fullName.trim().length < 2) errors.fullName = "Add the name the office should use.";
  if (digits(phone).length < 7) errors.phone = "Add a telephone number the office can call.";
  if (email.trim() && !emailPattern.test(email.trim())) {
    errors.email = "That email does not look complete. Leave it blank if you have none.";
  }
  if (address.trim().length < 3) errors.address = "Add the address where you live.";
  if (city.trim().length < 2) errors.city = "Add your town or city.";

  return errors;
}

function validateWork(application: LoanApplication): FieldErrors {
  const errors: FieldErrors = {};
  const { earner, employer, role, businessName, trade, otherEarn, income } = application.work;

  if (!earner) errors.earner = "Say whether you earn a salary, run a business, or both.";

  if (earner === "salary" || earner === "both") {
    if (employer.trim().length < 2) errors.employer = "Add the employer’s name.";
    if (role.trim().length < 2) errors.role = "Add the work you do there.";
  }

  if (earner === "business" || earner === "both") {
    if (businessName.trim().length < 2) errors.businessName = "Add the business name.";
    if (trade.trim().length < 2) errors.trade = "Say what the business does.";
  }

  if (earner === "other" && otherEarn.trim().length < 2) {
    errors.otherEarn = "Say how you earn, in a few words.";
  }

  if (income.trim() && digits(income).length === 0) {
    errors.income = "Use a figure, or leave this blank.";
  }

  return errors;
}

function validateLoan(application: LoanApplication, productIds: string[]): FieldErrors {
  const errors: FieldErrors = {};
  const { product, amount, purpose } = application.loan;

  if (!productIds.includes(product)) errors.product = "Choose the loan.";
  if (digits(amount).length === 0 || Number(digits(amount)) <= 0) {
    errors.amount = "Add the amount you have in mind. It is not an offer.";
  }
  if (purpose.trim().length < 8) errors.purpose = "Say what the money is for.";

  return errors;
}

function validateReview(application: LoanApplication): FieldErrors {
  if (!application.consent) {
    return { consent: "Confirm that the office may contact you." };
  }
  return {};
}

export function firstErrorId(errors: FieldErrors) {
  return Object.keys(errors)[0];
}
