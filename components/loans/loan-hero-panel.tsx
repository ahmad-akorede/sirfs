import type { Loan } from "@/content/loans";

export function LoanHeroPanel({
  individuals,
  businesses,
}: {
  individuals: Loan[];
  businesses: Loan[];
}) {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute top-0 right-0 hidden h-28 w-20 bg-olive lg:block" />
      <div className="relative bg-stone lg:mr-10">
        <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-copper" />
        <div className="px-5 py-5 md:px-8 md:py-8">
          <LoanGroup label="For a person" loans={individuals} />
          <div className="mt-8">
            <LoanGroup label="For a business" loans={businesses} />
          </div>
          <p className="mt-6 border-t border-ink/15 pt-4 font-sans text-small text-ink-soft">
            Rates, limits, and fees: to be published.
          </p>
        </div>
      </div>
    </div>
  );
}

function LoanGroup({ label, loans }: { label: string; loans: Loan[] }) {
  return (
    <div>
      <p className="font-sans text-eyebrow uppercase text-ink-soft">{label}</p>
      <ul className="mt-3">
        {loans.map((loan) => (
          <li key={loan.slug} className="border-t border-ink/15">
            <a
              href={`#${loan.slug}`}
              className="flex min-h-12 items-center justify-between gap-4 py-2"
            >
              <span className="font-serif text-subhead font-medium text-ink">{loan.name}</span>
              <span className="hidden text-right font-sans text-small text-ink-soft lg:block">{loan.audience}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
