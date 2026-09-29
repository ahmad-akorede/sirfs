import { site } from "@/content/site";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { crumbs, faqPageJsonLd } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";
import { savingsBenefits, savingsComparison, savingsFaqs, savingsHero, savingsSteps } from "@/content/savings";
import { siteImages } from "@/data/site";
import { Photo } from "@/components/home/photo";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FaqList } from "@/components/patterns/faq-list";
import { Button } from "@/components/ui/button";

export const metadata = pageMetadata({
  title: "Savings and deposits",
  description: "Savings you keep, and deposits you set aside. Neither is a loan.",
  path: "/savings",
});

const knownRows = savingsComparison.rows.filter(
  (row) => !/to be published/i.test(row.savings) && !/to be published/i.test(row.deposit),
);

export default function SavingsPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(savingsFaqs)} />
      <section className="bg-white">
        <div className="grid lg:min-h-[42rem] lg:grid-cols-12">
          <div className="flex flex-col justify-center px-5 py-14 sm:px-6 lg:col-span-5 lg:py-20 lg:pr-12 lg:pl-[max(1.5rem,calc((100%-80rem)/2+2rem))]">
            <Breadcrumb items={crumbs({ name: "Savings", path: "/savings" })} />
            <p className="mt-8 font-sans text-[0.9375rem] font-semibold text-olive">{savingsHero.eyebrow}</p>
            <h1 className="mt-4 max-w-[10em] font-sans text-display font-bold text-balance">{savingsHero.title}</h1>
            <p className="mt-6 max-w-[36ch] font-sans text-body text-ink-soft">{savingsHero.lede}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={site.contactHref} size="lg">
                Write to the office
              </Button>
              <Button href="#compare" variant="secondary" size="lg">
                Savings or a deposit
              </Button>
            </div>
          </div>
          <figure className="relative min-h-[28rem] lg:col-span-7 lg:min-h-full">
            <Photo image={siteImages.savings} priority sizes="(min-width: 1024px) 58vw, 100vw" />
          </figure>
        </div>
      </section>

      <Section id="compare" tone="paper" spacing="lg">
        <Container width="wide">
          <h2 className="max-w-[16ch] font-sans text-headline font-bold text-balance">Two ways to keep money.</h2>
          <p className="mt-5 max-w-[46ch] font-sans text-body text-ink-soft">{savingsComparison.intro}</p>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <article id="savings" className="scroll-mt-28 bg-stone p-8 lg:p-12">
              <p className="font-sans text-small font-semibold text-olive">Savings</p>
              <h3 className="mt-3 font-sans text-[2rem] font-bold tracking-[-0.03em]">Money you keep.</h3>
              <p className="mt-4 font-sans text-body text-ink-soft">Held with the institution. Not a loan.</p>
            </article>
            <article id="deposits" className="scroll-mt-28 bg-olive p-8 text-paper lg:p-10" data-tone="olive">
              <p className="font-sans text-small font-semibold text-paper-muted">Deposit</p>
              <h3 className="mt-3 font-sans text-[2rem] font-bold tracking-[-0.03em]">Money you set aside.</h3>
              <p className="mt-4 font-sans text-body text-paper-muted">Left for a stated time. Not a loan.</p>
            </article>
          </div>
          <dl className="mt-10 border-t border-line">
            {knownRows.map((row) => (
              <div key={row.label} className="grid gap-3 border-b border-line py-5 md:grid-cols-12">
                <dt className="font-sans text-small font-semibold md:col-span-4">{row.label}</dt>
                <dd className="font-sans text-body text-ink-soft md:col-span-4">{row.savings}</dd>
                <dd className="font-sans text-body text-ink-soft md:col-span-4">{row.deposit}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <section id="who" className="bg-stone">
        <Container width="wide" className="grid items-center gap-8 py-14 md:py-[4.5rem] lg:grid-cols-12 lg:py-28">
          <h2 className="font-sans text-headline font-bold lg:col-span-5">Who it is for</h2>
          <p className="font-sans text-body text-ink-soft lg:col-span-6 lg:col-start-7">
            People and firms who want to keep money with Sirfa, or set money aside for a stated time. This is not a loan.
          </p>
        </Container>
      </section>

      <Section id="how" tone="paper" spacing="lg">
        <Container width="wide">
          <h2 className="font-sans text-headline font-bold">How it works</h2>
          <ol className="mt-14 border-t border-line">
            {savingsSteps.map((step, index) => (
              <li key={step.title} className="grid items-baseline gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8">
                <span className="font-sans text-small font-semibold text-olive tabular-nums md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-sans text-[1.5rem] font-bold md:col-span-5">{step.title}</h3>
                <p className="font-sans text-body text-ink-soft md:col-span-6">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section id="benefits" tone="stone" spacing="md">
        <Container width="wide" className="grid gap-8 lg:grid-cols-12">
          <h2 className="font-sans text-headline font-bold lg:col-span-5">What you can expect</h2>
          <ul className="border-t border-line lg:col-span-6 lg:col-start-7">
            {savingsBenefits.map((benefit) => (
              <li key={benefit} className="border-b border-line py-5 font-sans text-body">
                {benefit}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="requirements" tone="paper" spacing="md">
        <Container width="wide" className="grid gap-8 lg:grid-cols-12">
          <h2 className="font-sans text-headline font-bold lg:col-span-5">What to prepare</h2>
          <p className="font-sans text-body text-ink-soft lg:col-span-6 lg:col-start-7">
            Write to the office. Do not use the loan application. The message does not open an account by itself.
          </p>
        </Container>
      </Section>

      <section id="process" className="border-y border-line bg-white">
        <Container width="wide" className="py-14 lg:py-24">
          <h2 className="font-sans text-headline font-bold">The agreement</h2>
          <p className="mt-5 max-w-[46ch] font-sans text-body text-ink-soft">
            The office writes the amount, the time, and the return. This page is not that record.
          </p>
        </Container>
      </section>

      <Section id="questions" tone="paper" spacing="lg">
        <Container width="wide" className="grid gap-10 lg:grid-cols-12">
          <h2 className="font-sans text-headline font-bold lg:col-span-4">Before you begin</h2>
          <div className="lg:col-span-8">
            <FaqList items={savingsFaqs} />
          </div>
        </Container>
      </Section>

      <section className="bg-olive text-paper" data-tone="olive">
        <Container width="wide" className="grid items-center gap-8 py-16 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <h2 className="max-w-[14ch] font-sans text-headline font-bold text-balance">Keep the money with the office.</h2>
            <p className="mt-5 max-w-[36ch] font-sans text-body text-paper-muted">
              Savings and deposits start with a message. They do not start on the loan form.
            </p>
          </div>
          <div className="lg:col-span-5 lg:justify-self-end">
            <Button href={site.contactHref} variant="inverse" size="lg">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
