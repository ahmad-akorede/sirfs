import { Link } from "@/components/ui/link";
import type { Loan } from "@/content/loans";

export function LoanHeroPanel({
  individuals,
  businesses,
}: {
  individuals: Loan[];
  businesses: Loan[];
}) {
  return (
    <div className="border border-line bg-stone">
      <div className="px-5 py-5 md:px-8 md:py-8">
        <LoanGroup label="For a person" loans={individuals} />
        <div className="mt-8">
          <LoanGroup label="For a business" loans={businesses} />
        </div>
        <p className="mt-6 border-t border-line pt-4 font-sans text-small text-ink-soft">
          Rates, limits, and fees: to be published.
        </p>
      </div>
    </div>
  );
}

function LoanGroup({ label, loans }: { label: string; loans: Loan[] }) {
  return (
    <div>
      <p className="font-sans text-eyebrow tracking-[0.08em] text-olive uppercase">{label}</p>
      <ul className="mt-3">
        {loans.map((loan) => (
          <li key={loan.slug} className="border-t border-line">
            <Link href={`#${loan.slug}`} className="flex min-h-12 items-center justify-between gap-4 py-2">
              <span className="font-sans text-subhead font-semibold text-ink">{loan.name}</span>
              <span className="hidden text-right font-sans text-small text-ink-soft lg:block">{loan.audience}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
