"use client";

import { useState } from "react";

const naira = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});

export function LoanEstimator() {
  const [amount, setAmount] = useState(500000);
  const [months, setMonths] = useState(6);
  const [editing, setEditing] = useState(false);

  return (
    <div className="grid items-end gap-12 md:grid-cols-12">
      <div className="md:col-span-5">
        <p className="font-sans text-eyebrow uppercase text-[var(--eyebrow)]">Estimate</p>
        <h2 id="estimate-heading" className="mt-4 font-serif text-headline font-medium text-balance">
          Try an amount. This is not a quotation.
        </h2>
        <p className="mt-5 max-w-[36ch] font-sans text-small text-[var(--muted)]">
          The controls repeat what you enter. They do not calculate a repayment, because the rate
          and the charges have not been set. The scale is not a lending limit.
        </p>
      </div>
      <form
        aria-labelledby="estimate-heading"
        className="border border-[var(--rule)] p-6 md:col-span-6 md:col-start-7 md:p-8"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="block" htmlFor="estimate-amount">
          <span className="font-sans text-eyebrow uppercase text-[var(--eyebrow)]">Amount entered</span>
          <input
            id="estimate-amount"
            className="mt-3 min-h-12 w-full border-0 border-b border-control-line bg-transparent py-3 font-sans text-body text-inherit outline-none focus:border-copper"
            inputMode="numeric"
            name="amount"
            type="text"
            value={editing ? String(amount || "") : amount > 0 ? naira.format(amount) : ""}
            onFocus={() => setEditing(true)}
            onBlur={() => setEditing(false)}
            onChange={(event) => setAmount(Number(event.target.value.replace(/[^\d]/g, "")) || 0)}
          />
        </label>
        <label className="mt-8 block" htmlFor="estimate-term">
          <span className="font-sans text-eyebrow uppercase text-[var(--eyebrow)]">
            Term entered, in months
          </span>
          <select
            id="estimate-term"
            className="mt-3 min-h-12 w-full appearance-none border-0 border-b border-control-line bg-transparent py-3 font-sans text-body text-inherit outline-none focus:border-copper"
            name="months"
            value={months}
            onChange={(event) => setMonths(Number(event.target.value))}
          >
            {[3, 6, 9, 12].map((term) => (
              <option key={term} value={term}>
                {term} months
              </option>
            ))}
          </select>
        </label>
        <div className="mt-10 border-t border-[var(--rule)] pt-6">
          <p className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-none font-medium tracking-[-0.03em]">
            Not calculated
          </p>
          <p className="mt-3 font-sans text-small text-[var(--muted)]" aria-live="polite">
            {amount > 0 ? naira.format(amount) : "—"} over {months} months. Not a quotation.
          </p>
          <p className="mt-2 max-w-[36ch] font-sans text-small text-[var(--muted)]">
            A monthly repayment, the fees, and the total payable are shown on the loan when they are confirmed. This box does not calculate them.
          </p>
        </div>
      </form>
    </div>
  );
}
