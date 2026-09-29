import { Link } from "@/components/ui/link";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { crumbs, faqPageJsonLd } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";
import {
  businessAudiences,
  businessBenefits,
  businessFacilities,
  businessFaqs,
  businessHero,
  businessScenarios,
  businessSteps,
} from "@/content/business";
import { site } from "@/content/site";
import { siteImages } from "@/data/site";
import { Photo } from "@/components/home/photo";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FaqList } from "@/components/patterns/faq-list";
import { Button } from "@/components/ui/button";

export const metadata = pageMetadata({
  title: "Business",
  description:
    "Finance for entrepreneurs, traders, and small firms. Working capital, orders, invoices, and payroll.",
  path: "/business",
});

export default function BusinessPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(businessFaqs)} />
      <section className="bg-white">
        <div className="grid lg:min-h-[42rem] lg:grid-cols-12">
          <div className="flex flex-col justify-center px-5 py-14 sm:px-6 lg:col-span-5 lg:py-20 lg:pr-12 lg:pl-[max(1.5rem,calc((100%-80rem)/2+2rem))]">
            <Breadcrumb items={crumbs({ name: "Business", path: "/business" })} />
            <p className="mt-8 font-sans text-[0.9375rem] font-semibold text-olive">{businessHero.eyebrow}</p>
            <h1 className="mt-4 max-w-[10em] font-sans text-display font-bold text-balance">{businessHero.title}</h1>
            <p className="mt-6 max-w-[36ch] font-sans text-body text-ink-soft">{businessHero.lede}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={site.applyHref} size="lg">
                Apply Now
              </Button>
              <Button href="#facilities" variant="secondary" size="lg">
                Explore Business Finance
              </Button>
            </div>
          </div>
          <figure className="relative min-h-[28rem] lg:col-span-7 lg:min-h-full">
            <Photo image={siteImages.businessFinance} priority sizes="(min-width: 1024px) 58vw, 100vw" />
          </figure>
        </div>
      </section>

      <Section id="proposition" tone="paper" spacing="md">
        <Container width="wide" className="grid items-end gap-8 lg:grid-cols-12">
          <h2 className="font-sans text-headline font-bold text-balance lg:col-span-7">
            Credit for the way a firm actually trades.
          </h2>
          <p className="font-sans text-body text-ink-soft lg:col-span-4 lg:col-start-9">
            Stock, a confirmed order, an unpaid invoice, payroll, or an asset. Each one is named separately.
          </p>
        </Container>
      </Section>

      <section id="who" className="bg-olive text-paper" data-tone="olive">
        <Container width="wide" className="py-14 md:py-[4.5rem] lg:py-28">
          <h2 className="max-w-[14ch] font-sans text-headline font-bold text-balance">Who it is for</h2>
          <ul className="mt-12 flex flex-col gap-4 border-t border-[var(--rule)] pt-8 sm:flex-row sm:flex-wrap sm:gap-x-10 sm:gap-y-4">
            {businessAudiences.map((audience) => (
              <li key={audience} className="font-sans text-[1.35rem] font-semibold">
                {audience}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section id="work" tone="paper" spacing="lg">
        <Container width="wide" className="grid items-center gap-12 lg:grid-cols-12">
          <figure className="relative min-h-[22rem] lg:col-span-5 lg:min-h-[32rem]">
            <Photo image={siteImages.hero} sizes="(min-width: 1024px) 28rem, 100vw" />
          </figure>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="font-sans text-headline font-bold">When the cash is short</h2>
            <ol className="mt-8 border-t border-line">
              {businessScenarios.map((scenario) => (
                <li key={scenario.title} className="border-b border-line py-5">
                  <h3 className="font-sans text-body font-semibold">{scenario.title}</h3>
                  <p className="mt-2 font-sans text-small text-ink-soft">{scenario.text}</p>
                  <Link href={scenario.href} className="mt-3 inline-flex min-h-11 items-center font-sans text-small font-semibold text-olive">
                    {scenario.action}
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section id="how" tone="stone" spacing="lg">
        <Container width="wide">
          <h2 className="font-sans text-headline font-bold">How it works</h2>
          <ol className="mt-14 border-t border-line">
            {businessSteps.map((step, index) => (
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

      <Section id="benefits" tone="paper" spacing="md">
        <Container width="wide" className="grid gap-8 lg:grid-cols-12">
          <h2 className="font-sans text-headline font-bold lg:col-span-5">What you can expect</h2>
          <ul className="border-t border-line lg:col-span-6 lg:col-start-7">
            {businessBenefits.map((benefit) => (
              <li key={benefit} className="border-b border-line py-5 font-sans text-body">
                {benefit}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="facilities" tone="stone" spacing="lg">
        <Container width="wide">
          <h2 className="font-sans text-headline font-bold">What to prepare</h2>
          <p className="mt-5 max-w-[46ch] font-sans text-body text-ink-soft">
            An order stays with LPO finance. An invoice stays with invoice discounting. Asset finance starts with the office.
          </p>
          <div className="mt-12">
            {businessFacilities.map((facility) => (
              <article key={facility.id} id={facility.id} className="scroll-mt-28 grid gap-4 border-t border-line py-8 lg:grid-cols-12">
                <h3 className="font-sans text-[1.5rem] font-bold lg:col-span-4">{facility.name}</h3>
                <div className="lg:col-span-5">
                  <p className="font-sans text-body">{facility.summary}</p>
                  <p className="mt-3 font-sans text-small text-ink-soft">{facility.detail}</p>
                </div>
                <div className="flex flex-col items-start gap-2 lg:col-span-3 lg:items-end">
                  <Link href={facility.href} className="font-sans text-small font-semibold text-olive">
                    {facility.action}
                    <span className="sr-only">, {facility.name}</span>
                  </Link>
                  {facility.secondaryHref && facility.secondaryAction ? (
                    <Link href={facility.secondaryHref} className="font-sans text-small font-semibold text-olive">
                      {facility.secondaryAction}
                      <span className="sr-only">, {facility.name}</span>
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <section id="process" className="border-y border-line bg-white">
        <Container width="wide" className="py-14 lg:py-24">
          <h2 className="font-sans text-headline font-bold">The decision</h2>
          <p className="mt-5 max-w-[46ch] font-sans text-body text-ink-soft">
            Name the need, the amount, and the reason. A person reviews the file. Savings starts with the office, not the loan form.
          </p>
        </Container>
      </section>

      <Section id="questions" tone="paper" spacing="lg">
        <Container width="wide" className="grid gap-10 lg:grid-cols-12">
          <h2 className="font-sans text-headline font-bold lg:col-span-4">Before you apply</h2>
          <div className="lg:col-span-8">
            <FaqList items={businessFaqs} />
          </div>
        </Container>
      </Section>

      <section className="bg-olive text-paper" data-tone="olive">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center px-5 py-14 sm:px-6 lg:py-28 lg:pr-16 lg:pl-[max(2rem,calc((100%-80rem)/2+2rem))]">
            <div>
              <h2 className="max-w-[14ch] font-sans text-headline font-bold text-balance">Name the need and the amount.</h2>
              <p className="mt-5 max-w-[36ch] font-sans text-body text-paper-muted">
                The form records an enquiry. It does not approve the request.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={site.applyHref} variant="inverse" size="lg">
                  Apply Now
                </Button>
                <Button href={site.contactHref} variant="ghost" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
          <figure className="relative min-h-[18rem] lg:min-h-[24rem]">
            <Photo image={siteImages.hero} sizes="(min-width: 1024px) 50vw, 100vw" />
          </figure>
        </div>
      </section>
    </>
  );
}
