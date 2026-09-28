import { site } from "@/content/site";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { crumbs, faqPageJsonLd } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";
import {
  keptMoney,
  savingsBenefits,
  savingsComparison,
  savingsFaqs,
  savingsHero,
  savingsSteps,
  savingsTrust,
  type KeptMoneyProduct,
} from "@/content/savings";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaBand } from "@/components/patterns/cta-band";
import { FaqList } from "@/components/patterns/faq-list";
import { StepList } from "@/components/patterns/step-list";
import { TrustIndicators } from "@/components/patterns/trust-indicators";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@/components/ui/icon";
import { Display, Eyebrow, Heading, Lede, Text } from "@/components/ui/type";

export const metadata = pageMetadata({
  title: "Savings and deposits",
  description:
    "Savings you keep, and deposits you set aside. Not a loan. Returns are published only when confirmed.",
  path: "/savings",
});

const savingsProducts = keptMoney.filter((product) => product.kind === "savings");
const depositProducts = keptMoney.filter((product) => product.kind === "deposit");

export default function SavingsPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(savingsFaqs)} />
      <Section tone="paper" spacing="md">
        <Container width="wide">
          <Breadcrumb items={crumbs({ name: "Savings", path: "/savings" })} />
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow>{savingsHero.eyebrow}</Eyebrow>
              <Display className="mt-5">{savingsHero.title}</Display>
              <Lede className="mt-6 max-w-[38ch]">{savingsHero.lede}</Lede>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={site.contactHref} size="lg">
                  Write to the office
                  <IconArrowRight />
                </Button>
                <Button href="#compare" variant="secondary" size="lg">
                  See the difference
                </Button>
              </div>
            </div>
            <p className="max-w-[28ch] font-sans text-small text-[var(--muted)] lg:col-span-4 lg:col-start-9">
              This page does not open an account, and it does not promise a return.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="ink" spacing="sm">
        <Container width="wide">
          <TrustIndicators items={savingsTrust} />
        </Container>
      </Section>

      <Section id="compare" tone="paper" spacing="lg">
        <Container width="wide">
          <Eyebrow>Overview</Eyebrow>
          <Heading level={2} className="mt-4 max-w-[16ch]">
            Savings, and a deposit.
          </Heading>
          <Text className="mt-6 max-w-[48ch]">{savingsComparison.intro}</Text>
          <div className="mt-14">
            <div className="hidden border-b border-[var(--rule)] pb-4 md:grid md:grid-cols-12">
              <span className="md:col-span-4" />
              {savingsComparison.columns.map((column) => (
                <span key={column.key} className="font-serif text-title font-medium md:col-span-4">
                  {column.title}
                </span>
              ))}
            </div>
            {savingsComparison.rows.map((row) => (
              <div
                key={row.label}
                className="grid gap-3 border-t border-[var(--rule)] py-5 md:grid-cols-12 md:items-baseline md:gap-6"
              >
                <p className="font-sans text-small text-[var(--muted)] md:col-span-4">{row.label}</p>
                <p className="font-sans text-body md:col-span-4">
                  <span className="mb-1 block font-sans text-eyebrow uppercase text-[var(--eyebrow)] md:hidden">
                    Savings
                  </span>
                  {row.savings}
                </p>
                <p className="font-sans text-body md:col-span-4">
                  <span className="mb-1 block font-sans text-eyebrow uppercase text-[var(--eyebrow)] md:hidden">
                    Deposit
                  </span>
                  {row.deposit}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="savings" tone="stone" spacing="lg">
        <Container width="wide">
          <ProductGroup
            eyebrow="Savings"
            title="Money you keep."
            note="Each product is named when the institution offers it. A return stays unpublished until it is confirmed."
            products={savingsProducts}
          />
        </Container>
      </Section>

      <Section id="deposits" tone="paper" spacing="lg">
        <Container width="wide">
          <ProductGroup
            eyebrow="Deposits"
            title="Money set aside for a stated time."
            note="These are deposits with the institution, not shares and not a fund. Each product is named when it is real."
            products={depositProducts}
          />
        </Container>
      </Section>

      <Section id="benefits" tone="stone" spacing="md">
        <Container width="wide">
          <Eyebrow>Benefits</Eyebrow>
          <Heading level={2} className="mt-4 max-w-[18ch]">
            What this page will say.
          </Heading>
          <ul className="mt-12 border-b border-[var(--rule)]">
            {savingsBenefits.map((benefit) => (
              <li key={benefit} className="border-t border-[var(--rule)] py-5 font-sans text-body">
                {benefit}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="how" tone="paper" spacing="lg">
        <Container width="wide">
          <Eyebrow>How it works</Eyebrow>
          <Heading level={2} className="mt-4 max-w-[16ch]">
            The office first.
          </Heading>
          <div className="mt-14">
            <StepList steps={savingsSteps} />
          </div>
          <div className="mt-10">
            <Button href={site.contactHref} size="lg">
              Write to the office
              <IconArrowRight />
            </Button>
          </div>
        </Container>
      </Section>

      <Section id="who" tone="ink" spacing="lg">
        <Container width="wide">
          <Eyebrow>Who it is for</Eyebrow>
          <Heading level={2} className="mt-4 max-w-[16ch]">
            Each product names who it is for.
          </Heading>
          <Text className="mt-6 max-w-[46ch]">
            A description here is a guide. It is not an approval, and it is not a rule for opening
            an account.
          </Text>
          <div className="mt-14 border-b border-[var(--rule)]">
            {keptMoney.map((product) => (
              <div
                key={product.id}
                className="grid gap-3 border-t border-[var(--rule)] py-6 md:grid-cols-12 md:items-baseline md:gap-6"
              >
                <div className="md:col-span-4">
                  {product.placeholder ? (
                    <p className="font-sans text-eyebrow uppercase text-[var(--eyebrow)]">Placeholder</p>
                  ) : null}
                  <p className="mt-2 font-serif text-title font-medium">{product.name}</p>
                  <p className="mt-1 font-sans text-small text-[var(--muted)]">
                    {product.kind === "savings" ? "Savings" : "Deposit"}
                  </p>
                </div>
                <p className="font-sans text-body md:col-span-8">{product.who}</p>
              </div>
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
                Before you move any money.
              </Heading>
            </div>
            <div className="md:col-span-8">
              <FaqList items={savingsFaqs} />
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        id="begin"
        eyebrow="Begin"
        title="Write to the office. Do not use the loan form."
        actionLabel="Write to the office"
        actionHref={site.contactHref}
        secondaryLabel="Loans, if you need credit"
        secondaryHref="/loans"
        note="A message does not open an account, and it does not set a return."
      />
    </>
  );
}

function ProductGroup({
  eyebrow,
  title,
  note,
  products,
}: {
  eyebrow: string;
  title: string;
  note: string;
  products: KeptMoneyProduct[];
}) {
  return (
    <>
      <Eyebrow>{eyebrow}</Eyebrow>
      <Heading level={2} className="mt-4 max-w-[16ch]">
        {title}
      </Heading>
      <Text size="small" className="mt-5 max-w-[48ch]">
        {note}
      </Text>
      <div className="mt-14 border-b border-[var(--rule)]">
        {products.map((product) => (
          <article key={product.id} id={product.id} className="scroll-mt-28 border-t border-[var(--rule)] py-10">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-5">
                {product.placeholder ? (
                  <p className="font-sans text-eyebrow uppercase text-copper">Placeholder</p>
                ) : null}
                <h3 className="mt-3 font-serif text-headline font-medium">{product.name}</h3>
                <p className="mt-4 max-w-[36ch] font-sans text-body text-[var(--muted)]">{product.summary}</p>
              </div>
              <dl className="md:col-span-6 md:col-start-7">
                <Fact label="Return" value={product.returnValue} />
                <Fact label="How long" value={product.term} />
                <Fact label="Smallest amount" value={product.minimum} />
                <Fact label="Taking it out" value={product.access} />
              </dl>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,11rem)] items-baseline gap-4 border-t border-[var(--rule)] py-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6">
      <dt className="min-w-0 font-sans text-small text-[var(--muted)]">{label}</dt>
      <dd className="min-w-0 text-right font-sans text-body break-words">{value}</dd>
    </div>
  );
}
