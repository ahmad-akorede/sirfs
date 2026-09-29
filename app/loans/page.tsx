import { loanFaqs } from "@/content/faqs";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { crumbs, faqPageJsonLd } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";
import { loans } from "@/content/loans";
import { site } from "@/content/site";
import { LoanCatalogue } from "@/components/loans/loan-catalogue";
import { LoanHeroPanel } from "@/components/loans/loan-hero-panel";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaBand } from "@/components/patterns/cta-band";
import { FaqList } from "@/components/patterns/faq-list";
import { StepList } from "@/components/patterns/step-list";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@/components/ui/icon";
import { Display, Eyebrow, Heading, Lede, Text } from "@/components/ui/type";

export const metadata = pageMetadata({
  title: "Loans",
  description:
    "Loans for salary earners, traders, and businesses. See who each facility is for, then apply. Rates and limits are published only when confirmed.",
  path: "/loans",
});

const firstAnswers = [
  { href: "#catalogue", label: "Available", value: "Five facilities" },
  { href: "#eligibility", label: "Who qualifies", value: "Named on each loan" },
  { href: "#how-to-apply", label: "The process", value: "Four steps" },
  { href: "#documents", label: "To apply", value: "Papers, per loan" },
];

const individuals = loans.filter((loan) => loan.category === "individuals");
const businesses = loans.filter((loan) => loan.category === "businesses");

export default function LoansPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(loanFaqs)} />
      <Section tone="paper" spacing="md">
        <Container width="wide">
          <Breadcrumb items={crumbs({ name: "Loans", path: "/loans" })} />
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <Eyebrow>Loans</Eyebrow>
              <Display className="mt-5">The loan for the need.</Display>
              <Lede className="mt-6 max-w-[36ch]">
                A person borrows against a salary, or through an employer. A business borrows for
                trade, an order, or an unpaid invoice.
              </Lede>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={site.applyHref} size="lg">
                  {site.applyLabel}
                  <IconArrowRight />
                </Button>
                <Button href="#catalogue" variant="secondary" size="lg">
                  See the loans
                </Button>
              </div>
            </div>
            <div className="lg:col-span-6">
              <LoanHeroPanel individuals={individuals} businesses={businesses} />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="ink" spacing="sm">
        <Container width="wide">
          <dl className="grid border-t border-[var(--rule)] lg:grid-cols-4">
            {firstAnswers.map((item, index) => (
              <div
                key={item.label}
                className={
                  index > 0
                    ? "border-b border-[var(--rule)] py-6 lg:border-b-0 lg:border-l lg:px-8"
                    : "border-b border-[var(--rule)] py-6 lg:border-b-0 lg:pr-8"
                }
              >
                <dt className="font-sans text-eyebrow uppercase text-[var(--eyebrow)]">{item.label}</dt>
                <dd className="mt-3">
                  <a href={item.href} className="inline-flex min-h-11 items-center font-serif text-title font-medium hover:underline">
                    <span className="sr-only">{item.label}: </span>
                    {item.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section id="catalogue" tone="stone" spacing="lg">
        <Container width="wide">
          <Eyebrow>The facilities</Eyebrow>
          <Heading level={2} className="mt-4 max-w-[16ch]">
            Individuals, and businesses.
          </Heading>
          <Text size="small" className="mt-5 max-w-[46ch]">
            Open a loan to see who it is for. Amounts and charges are published when confirmed.
          </Text>
          <LoanCatalogue
            groups={[
              {
                id: "individuals",
                title: "For individuals",
                note: "A salary earner, or staff on an employer scheme. Payroll finance is a loan to a person.",
                loans: individuals,
              },
              {
                id: "businesses",
                title: "For businesses",
                note: "A firm already trading, an order already held, or an invoice already raised.",
                loans: businesses,
              },
            ]}
          />
        </Container>
      </Section>

      <Section id="how-to-apply" tone="paper" spacing="lg">
        <Container width="wide">
          <Eyebrow>How to apply</Eyebrow>
          <Heading level={2} className="mt-4 max-w-[14ch]">
            Then a person decides.
          </Heading>
          <div className="mt-14">
            <StepList
              steps={[
                { title: "Choose", text: "The loan that fits." },
                { title: "Apply", text: "Your name, the loan, the amount, and the reason." },
                { title: "Papers", text: "What that loan lists, once the list is published." },
                { title: "Decision", text: "A person replies. This page does not approve the loan." },
              ]}
            />
          </div>
          <div className="mt-10">
            <Button href={site.applyHref} size="lg">
              {site.applyLabel}
              <IconArrowRight />
            </Button>
          </div>
        </Container>
      </Section>

      <Section id="eligibility" tone="ink" spacing="lg">
        <Container width="wide">
          <div className="grid gap-8 md:grid-cols-12">
            <Heading level={2} className="md:col-span-6">
              Eligibility is published per loan.
            </Heading>
            <Text className="md:col-span-5 md:col-start-8">
              Age, income, and history will be on each loan when confirmed. Who a loan is for is a
              guide, not an approval.
            </Text>
          </div>
          <dl className="mt-14 border-b border-[var(--rule)]">
            {loans.map((loan) => (
              <div
                key={loan.slug}
                className="grid gap-2 border-t border-[var(--rule)] py-5 md:grid-cols-12 md:items-baseline md:gap-6"
              >
                <dt className="font-serif text-title font-medium md:col-span-4">{loan.name}</dt>
                <dd className="font-sans text-small text-[var(--muted)] md:col-span-4">{loan.audience}</dd>
                <dd className="font-sans text-small md:col-span-4">{loan.eligibility[0]}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section id="documents" tone="stone" spacing="lg">
        <Container width="wide">
          <Eyebrow>Documents</Eyebrow>
          <Heading level={2} className="mt-4 max-w-[16ch]">
            Papers depend on the loan.
          </Heading>
          <Text className="mt-5 max-w-[48ch]">
            A salary file and an order file ask for different papers. Each list is published on its
            loan. Nothing here is a requirement yet.
          </Text>
          <div className="mt-12 border-b border-[var(--rule)]">
            {loans.map((loan) => (
              <details key={loan.slug} className="group border-t border-[var(--rule)]">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <span className="font-serif text-title font-medium">{loan.name}</span>
                  <span className="font-sans text-small text-[var(--muted)] group-open:hidden">Show</span>
                  <span className="hidden font-sans text-small text-[var(--muted)] group-open:inline">Hide</span>
                </summary>
                <ul className="max-w-[52ch] space-y-2 pb-6">
                  {loan.requirements.map((item) => (
                    <li key={item} className="font-sans text-small text-[var(--muted)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="questions" tone="paper" spacing="lg">
        <Container width="wide">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>Questions</Eyebrow>
              <Heading level={2} className="mt-4">
                Before you apply.
              </Heading>
            </div>
            <div className="md:col-span-8">
              <FaqList items={loanFaqs} />
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        id="begin"
        eyebrow="Begin"
        title="Name the loan, the amount, and the reason."
        actionLabel={site.applyLabel}
        actionHref={site.applyHref}
        secondaryLabel="Or ask the office"
        secondaryHref={site.contactHref}
        note="The form records an enquiry. It does not set a rate or approve the loan."
      />
    </>
  );
}
