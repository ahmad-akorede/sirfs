"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Link } from "@/components/ui/link";
import { useSearchParams } from "next/navigation";
import { site } from "@/content/site";
import {
  applicationSteps,
  emptyApplication,
  type ApplicationReceipt,
  type LoanApplication,
} from "@/lib/loan-application/schema";
import { submitLoanApplication } from "@/lib/loan-application/submit";
import { firstErrorId, validateStep, type FieldErrors } from "@/lib/loan-application/validate";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@/components/ui/icon";
import { Checkbox, Field, SelectField, TextArea } from "@/components/ui/field";
import { Eyebrow, Heading, Text } from "@/components/ui/type";

const earners = [
  { label: "Choose one", value: "" },
  { label: "I earn a salary", value: "salary" },
  { label: "I run a business", value: "business" },
  { label: "Both", value: "both" },
  { label: "Something else", value: "other" },
];

const stepCopy = [
  {
    title: "Who is applying",
    text: "Your name and a way to reach you. This step does not check whether you qualify.",
  },
  {
    title: "How you earn",
    text: "A salary, a business, or both. A monthly figure is for the application. It is not a decision.",
  },
  {
    title: "What you need",
    text: "The loan, the amount, and the reason. The term is confirmed later. This is not an offer.",
  },
  {
    title: "Papers, if you have them",
    text: "The list for each loan is not published yet. A document you note here is not uploaded.",
  },
  {
    title: "Read it back",
    text: "Finishing keeps the answers in this browser. It does not send them, and it does not approve the loan.",
  },
];

export function ApplyWizard({
  products,
}: {
  products: Array<{ label: string; value: string }>;
}) {
  const params = useSearchParams();
  const requested = params.get("product") ?? "";
  const known = products.some((product) => product.value === requested);

  return <LoanApplication products={products} initialProduct={known ? requested : ""} />;
}

export function LoanApplication({
  products,
  initialProduct,
}: {
  products: Array<{ label: string; value: string }>;
  initialProduct: string;
}) {
  const [step, setStep] = useState(0);
  const [application, setApplication] = useState(() => emptyApplication(initialProduct));
  const [errors, setErrors] = useState<FieldErrors>({});
  const [receipt, setReceipt] = useState<ApplicationReceipt | null>(null);
  const [pending, setPending] = useState(false);

  const productIds = products.map((product) => product.value);
  const productName =
    products.find((product) => product.value === application.loan.product)?.label ?? "Not chosen";

  function patch<K extends keyof LoanApplication>(key: K, value: LoanApplication[K]) {
    setApplication((current) => ({ ...current, [key]: value }));
  }

  function clearError(name: string) {
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  function goTo(nextStep: number) {
    setErrors({});
    setStep(nextStep);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validateStep(step, application, productIds);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      const id = firstErrorId(found);
      if (id) document.getElementById(id)?.focus();
      return;
    }

    if (step < applicationSteps.length - 1) {
      goTo(step + 1);
      return;
    }

    setPending(true);
    const result = await submitLoanApplication(application);
    setPending(false);
    setReceipt(result);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (receipt) {
    return (
      <div className="grid items-start gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Eyebrow>Application</Eyebrow>
          <Heading level={2} className="mt-4">
            {receipt.status === "accepted" ? "The office has the application." : "Nothing was sent."}
          </Heading>
          <Text className="mt-6 max-w-[46ch]">
            {receipt.status === "accepted"
              ? `The reference is ${receipt.reference}.`
              : "The answers stayed in this browser. They were not stored, and no reference was issued. Leaving the page clears them."}
          </Text>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button href={site.contactHref} variant="secondary">
              Write to the office
            </Button>
            <Button href="/loans" variant="quiet">
              Back to the loans
            </Button>
          </div>
        </div>
        <SupportPanel />
      </div>
    );
  }

  const copy = stepCopy[step];

  return (
    <form onSubmit={onSubmit} noValidate className="grid items-start gap-12 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <Progress step={step} onBack={goTo} />
        <div className="mt-10">
          <p className="font-sans text-eyebrow uppercase text-[var(--eyebrow)]">
            Step {step + 1} of {applicationSteps.length}
          </p>
          <Heading level={2} className="mt-3">
            {copy.title}
          </Heading>
          <Text className="mt-4 max-w-[46ch]">{copy.text}</Text>
        </div>

        {Object.keys(errors).length > 0 ? (
          <p role="alert" className="mt-6 font-sans text-small text-danger">
            Check the marked lines.
          </p>
        ) : null}

        <div className="mt-10 grid gap-8">
          {step === 0 ? (
            <PersonalStep
              application={application}
              errors={errors}
              onChange={(personal) => patch("personal", personal)}
              onClear={clearError}
            />
          ) : null}
          {step === 1 ? (
            <WorkStep
              application={application}
              errors={errors}
              onChange={(work) => patch("work", work)}
              onClear={clearError}
            />
          ) : null}
          {step === 2 ? (
            <LoanStep
              application={application}
              products={products}
              errors={errors}
              onChange={(loan) => patch("loan", loan)}
              onClear={clearError}
            />
          ) : null}
          {step === 3 ? (
            <DocumentsStep
              application={application}
              onChange={(documents) => patch("documents", documents)}
            />
          ) : null}
          {step === 4 ? (
            <ReviewStep
              application={application}
              productName={productName}
              errors={errors}
              onEdit={goTo}
              onConsent={(consent) => {
                patch("consent", consent);
                clearError("consent");
              }}
            />
          ) : null}
        </div>

        <div className="mt-10 flex flex-col-reverse gap-3 scroll-mb-24 sm:flex-row sm:items-center sm:justify-between">
          {step > 0 ? (
            <Button type="button" variant="secondary" className="w-full sm:w-auto" onClick={() => goTo(step - 1)}>
              Back
            </Button>
          ) : (
            <span className="hidden sm:block" />
          )}
          <Button type="submit" className="w-full sm:w-auto" disabled={pending}>
            {step === applicationSteps.length - 1 ? "Finish" : "Continue"}
            <IconArrowRight />
          </Button>
        </div>
      </div>
      <SupportPanel />
    </form>
  );
}

function Progress({ step, onBack }: { step: number; onBack: (step: number) => void }) {
  return (
    <nav aria-label="Application progress">
      <ol className="grid grid-cols-5 gap-2">
        {applicationSteps.map((item, index) => {
          const state = index < step ? "done" : index === step ? "current" : "ahead";
          const bar =
            state === "done" ? "bg-copper" : state === "current" ? "bg-ink" : "bg-[var(--rule)]";
          return (
            <li key={item.id}>
              <div className={`h-0.5 ${bar}`} />
              {state === "done" ? (
                <button
                  type="button"
                  onClick={() => onBack(index)}
                  className="mt-2 flex min-h-11 w-full items-center text-left font-sans text-small text-ink underline decoration-current/30 underline-offset-[0.3em]"
                >
                  <span className="tabular-nums text-copper">{String(index + 1).padStart(2, "0")}</span>
                  <span className="sr-only lg:hidden">{item.label}</span>
                  <span className="mt-1 hidden lg:block">{item.label}</span>
                </button>
              ) : (
                <p
                  className={`mt-3 font-sans text-small ${state === "current" ? "text-ink" : "text-[var(--muted)]"}`}
                  aria-current={state === "current" ? "step" : undefined}
                >
                  <span className="tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                  <span className="sr-only lg:hidden">{item.label}</span>
                  <span className="mt-1 hidden lg:block">{item.label}</span>
                </p>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function PersonalStep({
  application,
  errors,
  onChange,
  onClear,
}: StepProps<"personal">) {
  const personal = application.personal;
  function set(name: keyof typeof personal, value: string) {
    onChange({ ...personal, [name]: value });
    onClear(name);
  }

  return (
    <>
      <Field
        label="Full name"
        name="fullName"
        autoComplete="name"
        value={personal.fullName}
        error={errors.fullName}
        onChange={(event) => set("fullName", event.target.value)}
      />
      <div className="grid gap-8 sm:grid-cols-2">
        <Field
          label="Telephone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          hint="A number the office can call."
          value={personal.phone}
          error={errors.phone}
          onChange={(event) => set("phone", event.target.value)}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          hint="Optional."
          value={personal.email}
          error={errors.email}
          onChange={(event) => set("email", event.target.value)}
        />
      </div>
      <Field
        label="Where you live"
        name="address"
        autoComplete="street-address"
        hint="A street or a description the office can find."
        value={personal.address}
        error={errors.address}
        onChange={(event) => set("address", event.target.value)}
      />
      <Field
        label="Town or city"
        name="city"
        autoComplete="address-level2"
        value={personal.city}
        error={errors.city}
        onChange={(event) => set("city", event.target.value)}
      />
    </>
  );
}

function WorkStep({ application, errors, onChange, onClear }: StepProps<"work">) {
  const work = application.work;
  function set(name: keyof typeof work, value: string) {
    onChange({ ...work, [name]: value });
    onClear(name);
  }

  const salary = work.earner === "salary" || work.earner === "both";
  const business = work.earner === "business" || work.earner === "both";

  return (
    <>
      <SelectField
        label="How you earn"
        name="earner"
        options={earners}
        value={work.earner}
        error={errors.earner}
        onChange={(event) => set("earner", event.target.value)}
      />
      {salary ? (
        <div className="grid gap-8 sm:grid-cols-2">
          <Field
            label="Employer"
            name="employer"
            autoComplete="organization"
            value={work.employer}
            error={errors.employer}
            onChange={(event) => set("employer", event.target.value)}
          />
          <Field
            label="Your role"
            name="role"
            hint="The work you do there."
            value={work.role}
            error={errors.role}
            onChange={(event) => set("role", event.target.value)}
          />
        </div>
      ) : null}
      {business ? (
        <div className="grid gap-8 sm:grid-cols-2">
          <Field
            label="Business name"
            name="businessName"
            autoComplete="organization"
            value={work.businessName}
            error={errors.businessName}
            onChange={(event) => set("businessName", event.target.value)}
          />
          <Field
            label="What the business does"
            name="trade"
            value={work.trade}
            error={errors.trade}
            onChange={(event) => set("trade", event.target.value)}
          />
        </div>
      ) : null}
      {work.earner === "other" ? (
        <Field
          label="Describe how you earn"
          name="otherEarn"
          value={work.otherEarn}
          error={errors.otherEarn}
          onChange={(event) => set("otherEarn", event.target.value)}
        />
      ) : null}
      {work.earner ? (
        <Field
          label="About how much comes in each month"
          name="income"
          inputMode="decimal"
          hint="Optional. A figure is enough. It is not a decision."
          value={work.income}
          error={errors.income}
          onChange={(event) => set("income", event.target.value)}
        />
      ) : null}
    </>
  );
}

function LoanStep({
  application,
  products,
  errors,
  onChange,
  onClear,
}: StepProps<"loan"> & { products: Array<{ label: string; value: string }> }) {
  const loan = application.loan;
  function set(name: keyof typeof loan, value: string) {
    onChange({ ...loan, [name]: value });
    onClear(name);
  }

  return (
    <>
      <SelectField
        label="Which loan"
        name="product"
        hint="The one that matches the need. Terms are on the loan page when they are real."
        options={[{ label: "Choose a loan", value: "" }, ...products]}
        value={loan.product}
        error={errors.product}
        onChange={(event) => set("product", event.target.value)}
      />
      <Field
        label="Amount"
        name="amount"
        inputMode="numeric"
        hint="The figure you have in mind, in naira. It is not an offer, and it is not a limit."
        value={loan.amount}
        error={errors.amount}
        onChange={(event) => set("amount", event.target.value)}
        onBlur={() => set("amount", formatAmount(loan.amount))}
      />
      <TextArea
        label="What the money is for"
        name="purpose"
        rows={4}
        hint="Rent, stock, an order, school fees, or another reason, in your own words."
        value={loan.purpose}
        error={errors.purpose}
        onChange={(event) => set("purpose", event.target.value)}
      />
      <Field
        label="How long you have in mind"
        name="term"
        hint="Optional. The term is confirmed later."
        value={loan.term}
        onChange={(event) => set("term", event.target.value)}
      />
    </>
  );
}

function DocumentsStep({
  application,
  onChange,
}: {
  application: LoanApplication;
  onChange: (documents: LoanApplication["documents"]) => void;
}) {
  const documents = application.documents;

  return (
    <>
      <TextArea
        label="A note about the papers"
        name="note"
        rows={4}
        hint="Optional. Say what you already have. Do not list a document the loan page has not named."
        value={documents.note}
        onChange={(event) => onChange({ ...documents, note: event.target.value })}
      />
      <div>
        <p className="font-sans text-eyebrow uppercase text-[var(--eyebrow)]">File names</p>
        <p className="mt-2 font-sans text-small text-[var(--muted)]">
          Choosing a file only keeps its name for the review. The file itself stays on this device.
        </p>
        <label className="mt-4 inline-flex min-h-12 cursor-pointer items-center border-b border-control-line py-3 font-sans text-body focus-within:outline focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-ink">
          Note a file
          <input
            type="file"
            multiple
            className="sr-only"
            onChange={(event) => {
              const names = Array.from(event.target.files ?? []).map((file) => file.name);
              const next = [...documents.fileNames];
              for (const name of names) {
                if (!next.includes(name)) next.push(name);
              }
              onChange({ ...documents, fileNames: next });
              event.target.value = "";
            }}
          />
        </label>
        {documents.fileNames.length > 0 ? (
          <ul className="mt-4 border-b border-[var(--rule)]">
            {documents.fileNames.map((name) => (
              <li key={name} className="flex items-center justify-between gap-4 border-t border-[var(--rule)] py-3">
                <span className="font-sans text-small">{name}</span>
                <button
                  type="button"
                  className="font-sans text-small underline decoration-current/30 underline-offset-[0.3em]"
                  onClick={() =>
                    onChange({
                      ...documents,
                      fileNames: documents.fileNames.filter((item) => item !== name),
                    })
                  }
                >
                  Remove<span className="sr-only"> {name}</span>
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
}

function ReviewStep({
  application,
  productName,
  errors,
  onEdit,
  onConsent,
}: {
  application: LoanApplication;
  productName: string;
  errors: FieldErrors;
  onEdit: (step: number) => void;
  onConsent: (consent: boolean) => void;
}) {
  const { personal, work, loan, documents } = application;
  const earn =
    work.earner === "salary"
      ? "A salary"
      : work.earner === "business"
        ? "A business"
        : work.earner === "both"
          ? "A salary and a business"
          : work.earner === "other"
            ? work.otherEarn || "Something else"
            : "Not given";

  return (
    <div className="grid gap-10">
      <ReviewBlock title="Personal information" onEdit={() => onEdit(0)}>
        <Line label="Name" value={personal.fullName} />
        <Line label="Telephone" value={personal.phone} />
        <Line label="Email" value={personal.email || "Not given"} />
        <Line label="Address" value={personal.address} />
        <Line label="Town or city" value={personal.city} />
      </ReviewBlock>
      <ReviewBlock title="Employment and business" onEdit={() => onEdit(1)}>
        <Line label="How you earn" value={earn} />
        {work.employer ? <Line label="Employer" value={work.employer} /> : null}
        {work.role ? <Line label="Role" value={work.role} /> : null}
        {work.businessName ? <Line label="Business" value={work.businessName} /> : null}
        {work.trade ? <Line label="The work" value={work.trade} /> : null}
        <Line label="Monthly figure" value={work.income || "Not given"} />
      </ReviewBlock>
      <ReviewBlock title="Loan requirements" onEdit={() => onEdit(2)}>
        <Line label="Loan" value={productName} />
        <Line label="Amount" value={loan.amount || "Not given"} />
        <Line label="Reason" value={loan.purpose} />
        <Line label="Time in mind" value={loan.term || "Not given"} />
      </ReviewBlock>
      <ReviewBlock title="Documents" onEdit={() => onEdit(3)}>
        <Line label="Note" value={documents.note || "Not given"} />
        <Line
          label="File names"
          value={documents.fileNames.length > 0 ? documents.fileNames.join(", ") : "None noted"}
        />
      </ReviewBlock>
      <div>
        <Checkbox
          label="The office may contact me about this application."
          name="consent"
          checked={application.consent}
          error={errors.consent}
          onChange={(event) => onConsent(event.target.checked)}
        />
        <p className="mt-4 max-w-[52ch] font-sans text-small text-[var(--muted)]">
          The{" "}
          <Link href="/privacy" className="underline decoration-current/30 underline-offset-[0.3em]">
            privacy notice
          </Link>{" "}
          says what this page asks for, and which rules are still unpublished. Finishing does not
          send these answers, and this page does not store them.
        </p>
      </div>
    </div>
  );
}

function ReviewBlock({
  title,
  onEdit,
  children,
}: {
  title: string;
  onEdit: () => void;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-[var(--rule)] pt-6">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-title font-medium">{title}</h3>
        <button
          type="button"
          onClick={onEdit}
          className="font-sans text-small underline decoration-current/30 underline-offset-[0.3em]"
        >
          Change<span className="sr-only"> {title}</span>
        </button>
      </div>
      <dl className="mt-4">{children}</dl>
    </section>
  );
}

function Line({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-t border-[var(--rule)] py-3 sm:grid-cols-[10rem_1fr] sm:gap-6">
      <dt className="font-sans text-small text-[var(--muted)]">{label}</dt>
      <dd className="font-sans text-body">{value}</dd>
    </div>
  );
}

function SupportPanel() {
  return (
    <aside className="border-t border-[var(--rule)] pt-8 lg:col-span-4 lg:col-start-9 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 lg:sticky lg:top-24">
      <Eyebrow>Support</Eyebrow>
      <p className="mt-4 font-serif text-title font-medium">If you would rather talk.</p>
      <address className="mt-5 font-sans text-body not-italic">
        {site.address.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>
      <Text size="small" className="mt-3">
        {site.hours}
      </Text>
      <Text size="small" className="mt-2">
        {site.phoneDisplay ?? "Telephone: to be confirmed."}
      </Text>
      <Text size="small" className="mt-2">
        {site.email ?? "Email: to be confirmed."}
      </Text>
      <Link
        href={site.contactHref}
        className="mt-4 inline-flex min-h-11 items-center font-sans text-small underline decoration-current/30 underline-offset-[0.4em]"
      >
        Contact the office
      </Link>
      <Text size="small" className="mt-4">
        A complaint uses the same office until an officer is named. The licence is on the{" "}
        <Link
          href="/about/corporate-information"
          className="underline decoration-current/30 underline-offset-[0.3em]"
        >
          corporate record
        </Link>
        .
      </Text>
    </aside>
  );
}

type StepProps<K extends keyof LoanApplication> = {
  application: LoanApplication;
  errors: FieldErrors;
  onChange: (value: LoanApplication[K]) => void;
  onClear: (name: string) => void;
};

function formatAmount(value: string) {
  const number = value.replace(/\D/g, "");
  if (!number) return "";
  return Number(number).toLocaleString("en-NG");
}
