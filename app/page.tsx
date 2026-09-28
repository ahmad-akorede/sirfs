import { Link } from "@/components/ui/link";
import { loans } from "@/content/loans";
import { site } from "@/content/site";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";
import { HeroComposition } from "@/components/home/hero-composition";
import { LoanEstimator } from "@/components/home/loan-estimator";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaBand } from "@/components/patterns/cta-band";
import { StepList } from "@/components/patterns/step-list";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@/components/ui/icon";
import { Display, Eyebrow, Heading, Lede, Text } from "@/components/ui/type";
import { cn } from "@/lib/cn";

export const metadata = pageMetadata({
  title: "Sirfa",
  description:
    "Sirfa lends to salary earners, traders, and small firms. Name the loan, the amount, and the reason.",
  path: "/",
  absolute: true,
});

const individuals = [
  { href: "/loans/personal-loan", label: "Personal loan", note: "A salary, and a personal cost." },
  { href: "/loans/payroll-finance", label: "Payroll finance", note: "Staff of an employer on the scheme." },
  { href: "/savings", label: "Savings", note: "Kept apart from a loan. Terms unpublished." },
];

const businesses = [
  { href: "/loans/business-loan", label: "Business loan", note: "Working capital for a firm already trading." },
  { href: "/loans/lpo-finance", label: "LPO finance", note: "A local purchase order you already hold." },
  { href: "/loans/invoice-discounting", label: "Invoice discounting", note: "Cash while an invoice is unpaid." },
  { href: "/business", label: "For the organisation", note: "Including a scheme arranged in the company’s name." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <Section tone="paper" spacing="md" className="hero-stage">
        <Container width="wide">
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7 lg:pb-4">
              <Display>Loans for salary, trade, and small business.</Display>
              <Lede className="mt-6 max-w-[38ch]">
                Sirfa lends to salary earners, traders, and small firms. Name the loan, the amount,
                and the reason.
              </Lede>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={site.applyHref} size="lg">
                  {site.applyLabel}
                  <IconArrowRight />
                </Button>
                <Button href="#loans" variant="secondary" size="lg">
                  See the loans
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <HeroComposition />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="ink" spacing="sm">
        <Container width="wide">
          <div className="flex flex-col gap-6 py-2 md:flex-row md:items-end md:justify-between">
            <p className="max-w-[34ch] font-serif text-title font-medium">
              Rates, limits, and the licence are printed when the record confirms them.
            </p>
            <Link
              href="/about/corporate-information"
              className="inline-flex min-h-11 items-center font-sans text-small text-paper underline decoration-current/30 underline-offset-[0.4em]"
            >
              The corporate record
            </Link>
          </div>
        </Container>
      </Section>

      <Section id="solutions" tone="stone" spacing="lg">
        <Container width="wide">
          <Eyebrow>Who it is for</Eyebrow>
          <Heading level={2} className="mt-4 max-w-[16ch]">
            Start from the need.
          </Heading>
          <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-0">
            <NeedColumn title="For individuals" items={individuals} />
            <NeedColumn title="For businesses" items={businesses} rule className="md:mt-16" />
          </div>
        </Container>
      </Section>

      <Section id="loans" tone="paper" spacing="lg">
        <Container width="wide">
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Eyebrow>Loans</Eyebrow>
              <Heading level={2} className="mt-4">
                Five loans. Each one names who it is for.
              </Heading>
            </div>
            <Text size="small" className="md:col-span-4 md:col-start-9">
              Amounts, terms, and charges are published on each loan when confirmed.
            </Text>
          </div>
          <div className="mt-12 border-b border-[var(--rule)]">
            {loans.map((loan, index) => (
              <article
                key={loan.slug}
                className="grid gap-6 border-t border-[var(--rule)] py-8 md:grid-cols-12 md:items-center md:py-10"
              >
                <p className="font-serif text-small text-copper tabular-nums md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="md:col-span-4">
                  <h3 className="font-serif text-title font-medium">
                    <Link href={loan.href} className="hover:underline">
                      {loan.name}
                    </Link>
                  </h3>
                  <p className="mt-2 font-sans text-small text-[var(--muted)]">{loan.audience}</p>
                </div>
                <p className="font-sans text-body md:col-span-4">{loan.summary}</p>
                <div className="md:col-span-3 md:text-right">
                  <Button href={loan.href} variant="quiet">
                    See this loan<span className="sr-only">, {loan.name}</span>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="how-it-works" tone="stone" spacing="lg">
        <Container width="wide">
          <Eyebrow>How it works</Eyebrow>
          <Heading level={2} className="mt-4 max-w-[14ch]">
            How an application moves.
          </Heading>
          <div className="mt-14">
            <StepList
              steps={[
                { title: "Enquire", text: "The loan, the amount, and what the money is for." },
                { title: "Documents", text: "The papers named on that loan." },
                { title: "Decision", text: "A person replies: yes, no, or a question." },
                { title: "Disbursement", text: "Funds go to the account named in the file." },
              ]}
            />
          </div>
        </Container>
      </Section>

      <Section id="estimate" tone="paper" spacing="lg">
        <Container width="wide">
          <LoanEstimator />
        </Container>
      </Section>

      <Section tone="ink" spacing="md">
        <Container width="wide">
          <div className="grid gap-10 md:grid-cols-12">
            <Heading level={2} className="md:col-span-6">
              The record, when it can be stated.
            </Heading>
            <div className="md:col-span-5 md:col-start-8">
              <Text>
                Years, customers, and sums disbursed will be published from the record. A customer’s
                words appear only with their agreement. None is on this site yet.
              </Text>
              <Link
                href="/about"
                className="mt-6 inline-flex min-h-11 items-center font-sans text-small text-paper underline decoration-current/30 underline-offset-[0.4em]"
              >
                About Sirfa
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="stone" spacing="lg">
        <Container width="wide">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Eyebrow>Business</Eyebrow>
              <Heading level={2} className="mt-4">
                For the firm, and for its staff.
              </Heading>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <Text>
                Working capital, a purchase order, an unpaid invoice, or a staff scheme arranged
                with the employer.
              </Text>
              <div className="mt-6">
                <Button href="/business" variant="secondary">
                  Business lending
                  <IconArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper" spacing="md">
        <Container width="wide">
          <Eyebrow>Resources</Eyebrow>
          <Heading level={2} className="mt-4 max-w-[18ch]">
            Read this before you apply.
          </Heading>
          <div className="mt-12 grid border-t border-[var(--rule)] md:grid-cols-2">
            <Link href="/resources/faq" className="group border-b border-[var(--rule)] py-8 md:border-r md:border-b-0 md:py-10 md:pr-10">
              <p className="font-sans text-eyebrow uppercase text-copper">01</p>
              <p className="mt-4 font-serif text-title font-medium group-hover:underline">Answers</p>
              <p className="mt-3 max-w-[36ch] font-sans text-small text-[var(--muted)]">
                Which loan fits, and where a term will be published.
              </p>
            </Link>
            <Link href="/resources/blog" className="group py-8 md:py-10 md:pl-10">
              <p className="font-sans text-eyebrow uppercase text-copper">02</p>
              <p className="mt-4 font-serif text-title font-medium group-hover:underline">Notes</p>
              <p className="mt-3 max-w-[36ch] font-sans text-small text-[var(--muted)]">
                No note is published yet.
              </p>
            </Link>
          </div>
        </Container>
      </Section>

      <CtaBand
        id="apply"
        eyebrow="Begin"
        title="Name the loan, the amount, and the reason."
        actionLabel={site.applyLabel}
        actionHref={site.applyHref}
        secondaryLabel="Or send a message"
        secondaryHref={site.contactHref}
        note="The form records an enquiry. It does not approve a loan."
      />
    </>
  );
}

function NeedColumn({
  title,
  items,
  rule = false,
  className,
}: {
  title: string;
  items: Array<{ href: string; label: string; note: string }>;
  rule?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(rule && "md:border-l md:border-[var(--rule)] md:pl-10", className)}>
      <h3 className="font-serif text-title font-medium">{title}</h3>
      <ul className="mt-6 border-b border-[var(--rule)]">
        {items.map((item) => (
          <li key={item.href} className="border-t border-[var(--rule)]">
            <Link href={item.href} className="discover group grid gap-1 py-5">
              <span className="font-serif text-subhead font-medium group-hover:underline">{item.label}</span>
              <span className="font-sans text-small text-[var(--muted)]">{item.note}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
