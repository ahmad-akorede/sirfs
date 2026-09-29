import { site } from "@/content/site";
import type { Loan } from "@/content/loans";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/type";

export function LoanCatalogue({
  groups,
}: {
  groups: Array<{ id: string; title: string; note: string; loans: Loan[] }>;
}) {
  return (
    <div className="mt-14 space-y-16">
      {groups.map((group) => (
        <section key={group.id} id={group.id} className="scroll-mt-28">
          <Heading level={3}>{group.title}</Heading>
          <p className="mt-3 max-w-[46ch] font-sans text-small text-[var(--muted)]">{group.note}</p>
          <div className="mt-8 border-b border-[var(--rule)]">
            {group.loans.map((loan, index) => (
              <details key={loan.slug} id={loan.slug} className="disclose group scroll-mt-28 border-t border-[var(--rule)]">
                <summary className="discover grid cursor-pointer list-none gap-3 py-7 md:grid-cols-12 md:items-baseline md:gap-6 [&::-webkit-details-marker]:hidden">
                  <span className="font-sans text-small font-semibold text-olive tabular-nums md:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="md:col-span-4">
                    <span className="block font-serif text-title font-medium">{loan.name}</span>
                    <span className="mt-1 block font-sans text-small text-[var(--muted)]">{loan.audience}</span>
                  </span>
                  <span className="font-sans text-body md:col-span-5">{loan.summary}</span>
                  <span className="font-sans text-small underline decoration-current/30 underline-offset-[0.35em] md:col-span-2 md:text-right">
                    <span className="group-open:hidden">Details</span>
                    <span className="hidden group-open:inline">Close</span>
                  </span>
                </summary>
                <div className="grid gap-8 pb-8 md:grid-cols-12">
                  <div className="md:col-span-5 md:col-start-2">
                    <p className="font-sans text-eyebrow uppercase text-[var(--eyebrow)]">Benefits</p>
                    <ul className="mt-4 space-y-3">
                      {loan.benefits.map((benefit) => (
                        <li key={benefit} className="border-t border-[var(--rule)] pt-3 font-sans text-small">
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-5">
                    <p className="font-sans text-eyebrow uppercase text-[var(--eyebrow)]">Eligibility</p>
                    <p className="mt-4 font-sans text-small text-[var(--muted)]">
                      {loan.eligibility.join(" ")}
                    </p>
                    <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                      <Button href={`${site.applyHref}?product=${loan.slug}`}>
                        Apply for this loan<span className="sr-only">, {loan.name}</span>
                      </Button>
                      <Button href={loan.href} variant="quiet">
                        Read the loan<span className="sr-only">, {loan.name}</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
