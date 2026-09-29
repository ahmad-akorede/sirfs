import { Link } from "@/components/ui/link";
import { loans } from "@/content/loans";
import { resourceTopics } from "@/content/resources";
import { credibilityFigures } from "@/content/credibility";
import { site } from "@/content/site";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";
import { LoanEstimator } from "@/components/home/loan-estimator";
import { ProductShowcase } from "@/components/home/product-showcase";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Eyebrow, Heading, Text } from "@/components/ui/type";

export const metadata = pageMetadata({
  title: "Sirfa Empowerment Initiative",
  description:
    "Sirfa Empowerment Initiative lends to salary earners, traders, and small firms. Name the loan, the amount, and the reason.",
  path: "/",
  absolute: true,
});

const personal = [
  { href: "/loans/personal-loan", label: "Personal loan", note: "A salary, and a personal cost." },
  { href: "/loans/payroll-finance", label: "Payroll finance", note: "Staff of an employer on the scheme." },
  { href: "/savings", label: "Savings", note: "Money kept with the institution. Returns when confirmed." },
];

const business = [
  { href: "/loans/business-loan", label: "Business loan", note: "A firm already trading." },
  { href: "/business#working-capital", label: "Working capital", note: "Stock and the trading cycle." },
  { href: "/loans/lpo-finance", label: "LPO finance", note: "A local purchase order already held." },
  { href: "/loans/invoice-discounting", label: "Invoice discounting", note: "Cash while an invoice is unpaid." },
  { href: "/business#asset-financing", label: "Asset financing", note: "Arranged with the office. Terms to be published." },
];

const journey = [
  {
    title: "Choose a facility",
    text: "Salary, payroll, trade, an order, or an invoice. Each facility is a separate page.",
  },
  {
    title: "Submit your details",
    text: "The form keeps what you enter in this browser. Submitting it does not send the file.",
  },
  {
    title: "Assessment",
    text: "A person reviews the file. This website does not approve a loan or set a rate.",
  },
  {
    title: "A written decision",
    text: "Amount, charge, and term are stated when they have been confirmed.",
  },
  {
    title: "Funds",
    text: "Paid to the account named in the file, after that decision.",
  },
];

const reasons = [
  {
    title: "Terms in writing",
    text: "Interest, limits, and fees stay on the page as unpublished until the institution confirms them.",
  },
  {
    title: "A person decides",
    text: "The site records an enquiry. It does not approve credit.",
  },
  {
    title: "Separate paths",
    text: "Salary earners and firms use different facilities. The need decides which one.",
  },
  {
    title: "A place to ask",
    text: "Questions and complaints go through the contact page, the office telephone, or the office email.",
  },
];

const topicCopy: Record<string, { title: string; href: string }> = {
  money: { title: "Personal money", href: "/resources#money" },
  business: { title: "Business advice", href: "/resources#business" },
  loans: { title: "Loan education", href: "/resources#loans" },
  savings: { title: "Savings guidance", href: "/resources#savings" },
};

const guides = resourceTopics
  .filter((topic) => topic.id in topicCopy)
  .map((topic) => ({ ...topicCopy[topic.id], text: topic.text }));

const keyPoint = "Interest, limits, and fees are published when they are confirmed.";

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={websiteJsonLd()} />

      <section className="bg-olive text-paper" data-tone="olive">
        <div className="grid lg:min-h-[34rem] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-14 sm:px-8 lg:px-14 xl:px-20">
            <p className="font-sans text-eyebrow tracking-[0.08em] text-paper-muted uppercase">
              Personal and business finance
            </p>
            <h1 className="mt-5 max-w-[16ch] font-sans text-display font-semibold text-balance">
              Credit and savings for people and firms already at work.
            </h1>
            <p className="mt-5 max-w-[40ch] font-sans text-body text-paper-muted">
              Salary earners, traders, and small firms. The amount, the charge, and the term are
              stated when they are confirmed.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={site.applyHref} variant="inverse" size="lg">
                Apply Now
              </Button>
              <Button href="#services" variant="ghost" size="lg">
                Explore Our Solutions
              </Button>
            </div>
          </div>
          <figure className="relative min-h-72 lg:min-h-full">
            <picture className="absolute inset-0">
              <source
                type="image/webp"
                srcSet="/images/business/provisions-store-800.webp 800w, /images/business/provisions-store.webp 1280w"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <img
                src="/images/business/provisions-store.jpg"
                alt="A man checking sacks beside stacked cartons in a provisions store"
                width={1280}
                height={720}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover object-[center_30%]"
              />
            </picture>
            <figcaption className="absolute inset-x-0 bottom-0 bg-ink/90 px-4 py-3 font-sans text-small text-paper">
              A provisions store. Not a customer portrait.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-b border-line bg-paper" aria-label="Credibility">
        <Container width="wide" className="py-8">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            {credibilityFigures.map((figure) => (
              <div key={figure.label} className="flex flex-col">
                <dt className="order-2 mt-1 font-sans text-small text-ink-soft">{figure.label}</dt>
                <dd className="order-1 font-sans text-title font-semibold text-ink tabular-nums">{figure.value}</dd>
                <dd className="order-3 mt-1 font-sans text-caption text-ink-faint">To be published</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 border-t border-line pt-5 font-sans text-small text-ink-soft">
            Licence and regulator: to be confirmed.{" "}
            <Link
              href="/about/corporate-information"
              className="text-ink underline decoration-ink/30 underline-offset-[0.3em]"
            >
              Corporate information
            </Link>
          </p>
        </Container>
      </section>

      <Section id="services" tone="paper" spacing="md">
        <Container width="wide">
          <Eyebrow>Customers</Eyebrow>
          <Heading className="mt-4 max-w-[22ch]">Two ways to start.</Heading>
          <Text className="mt-4 max-w-[46ch]">
            Personal facilities are for a salary or for money you keep. Business facilities are for
            a firm already trading.
          </Text>
          <div className="mt-12 grid border border-line lg:grid-cols-2">
            <div className="border-b border-line p-8 lg:border-r lg:border-b-0 lg:p-12">
              <p className="font-sans text-eyebrow tracking-[0.08em] text-olive uppercase">Personal finance</p>
              <h3 className="mt-4 font-sans text-title font-semibold">For a salary, and for money you keep.</h3>
              <ul className="mt-8">
                {personal.map((item) => (
                  <li key={item.href} className="border-t border-line">
                    <Link href={item.href} className="block py-4">
                      <span className="block font-sans text-body font-semibold text-ink">{item.label}</span>
                      <span className="mt-1 block font-sans text-small text-ink-soft">{item.note}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-stone p-8 lg:p-12">
              <p className="font-sans text-eyebrow tracking-[0.08em] text-olive uppercase">Business finance</p>
              <h3 className="mt-4 font-sans text-title font-semibold">For a firm already in trade.</h3>
              <ul className="mt-8">
                {business.map((item) => (
                  <li key={item.href} className="border-t border-line">
                    <Link href={item.href} className="block py-4">
                      <span className="block font-sans text-body font-semibold text-ink">{item.label}</span>
                      <span className="mt-1 block font-sans text-small text-ink-soft">{item.note}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="facilities" tone="stone" spacing="md">
        <Container width="wide">
          <Eyebrow>Facilities</Eyebrow>
          <Heading className="mt-4 max-w-[20ch]">The credit we can name.</Heading>
          <Text className="mt-4 max-w-[46ch]">
            Select a facility to read who it is for. The full terms sit on its own page.
          </Text>
          <div className="mt-12">
            <ProductShowcase
              products={loans.map((loan) => ({
                name: loan.name,
                href: loan.href,
                audience: loan.audience,
                purpose: loan.purpose,
                benefit: keyPoint,
              }))}
            />
          </div>
        </Container>
      </Section>

      <Section id="process" tone="paper" spacing="md">
        <Container width="wide">
          <Eyebrow>How an application moves</Eyebrow>
          <Heading className="mt-4 max-w-[18ch]">From the facility to a decision.</Heading>
          <ol className="mt-12 border-t border-line">
            {journey.map((step, index) => (
              <li
                key={step.title}
                className="grid gap-2 border-b border-line py-6 md:grid-cols-12 md:items-baseline md:gap-6 md:py-8"
              >
                <span className="font-sans text-small font-semibold text-olive tabular-nums md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-sans text-subhead font-semibold md:col-span-4">{step.title}</h3>
                <p className="font-sans text-small text-ink-soft md:col-span-6 md:col-start-7">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section id="estimate" tone="stone" spacing="md">
        <Container width="wide">
          <LoanEstimator />
        </Container>
      </Section>

      <Section id="business" tone="paper" spacing="md">
        <Container width="wide">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <figure className="lg:col-span-6">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone">
                <picture className="absolute inset-0">
                  <source type="image/webp" srcSet="/images/business/fabric-shop.webp" />
                  <img
                    src="/images/business/fabric-shop.jpg"
                    alt="A woman arranging folded fabric on a shop counter"
                    width={864}
                    height={1152}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </picture>
              </div>
              <figcaption className="mt-3 font-sans text-small text-ink-soft">
                A fabric shop. Not a customer portrait.
              </figcaption>
            </figure>
            <div className="lg:col-span-6">
              <Eyebrow>Business finance</Eyebrow>
              <Heading className="mt-4">Credit for the way a firm actually trades.</Heading>
              <Text className="mt-4">
                Stock, a confirmed order, an unpaid invoice, payroll, or an asset. Each one is named
                separately. None of them is a personal loan.
              </Text>
              <ul className="mt-8 border-t border-line">
                {[
                  ["Working capital", "/business#working-capital"],
                  ["Business loan", "/loans/business-loan"],
                  ["LPO finance", "/loans/lpo-finance"],
                  ["Invoice discounting", "/loans/invoice-discounting"],
                  ["Payroll finance", "/loans/payroll-finance"],
                  ["Asset financing", "/business#asset-financing"],
                ].map(([label, href]) => (
                  <li key={href} className="border-b border-line">
                    <Link href={href} className="flex min-h-12 items-center font-sans text-body font-semibold">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/business" size="lg">
                  Explore Business Finance
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="reasons" tone="ink" spacing="md">
        <Container width="wide">
          <Eyebrow>How the institution works</Eyebrow>
          <Heading className="mt-4 max-w-[18ch]">What you can rely on today.</Heading>
          <dl className="mt-12 border-t border-[var(--rule)]">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="grid gap-3 border-b border-[var(--rule)] py-7 md:grid-cols-12 md:gap-6"
              >
                <dt className="font-sans text-subhead font-semibold md:col-span-4">{reason.title}</dt>
                <dd className="font-sans text-body text-[var(--muted)] md:col-span-7 md:col-start-6">
                  {reason.text}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section id="accounts" tone="paper" spacing="md">
        <Container width="wide">
          <Eyebrow>Customer accounts</Eyebrow>
          <Heading className="mt-4 max-w-[18ch]">Published with the customer’s agreement.</Heading>
          <div className="mt-12 grid border border-line lg:grid-cols-12">
            <figure className="relative min-h-72 lg:col-span-7">
              <picture className="absolute inset-0">
                <source
                  type="image/webp"
                  srcSet="/images/business/provisions-store-800.webp 800w, /images/business/provisions-store.webp 1280w"
                  sizes="(min-width: 1024px) 40rem, 100vw"
                />
                <img
                  src="/images/business/provisions-store.jpg"
                  alt="A man checking sacks beside stacked cartons in a provisions store"
                  width={1280}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-[center_40%]"
                />
              </picture>
              <figcaption className="absolute inset-x-0 bottom-0 bg-ink/90 px-4 py-3 font-sans text-small text-paper">
                A provisions store. Not a customer portrait.
              </figcaption>
            </figure>
            <div className="flex flex-col justify-center border-t border-line p-8 lg:col-span-5 lg:border-t-0 lg:border-l lg:p-12">
              <p className="font-sans text-eyebrow tracking-[0.08em] text-ink-faint uppercase">Featured account</p>
              <blockquote className="mt-5 font-sans text-title font-semibold text-balance">
                A customer account will be published here, with that customer’s agreement.
              </blockquote>
              <p className="mt-8 font-sans text-small text-ink-soft">Name: to be confirmed</p>
              <p className="mt-1 font-sans text-small text-ink-soft">Business: to be confirmed</p>
            </div>
          </div>
          <ul className="border-x border-b border-line">
            {["Supporting account", "Supporting account"].map((label, index) => (
              <li
                key={`${label}-${index}`}
                className="grid gap-2 border-t border-line px-6 py-5 sm:grid-cols-12 sm:items-baseline"
              >
                <span className="font-sans text-small font-semibold sm:col-span-4">{label}</span>
                <span className="font-sans text-small text-ink-soft sm:col-span-8">
                  Quote, name, and business: to be published.
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="resources" tone="stone" spacing="md">
        <Container width="wide">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Resources</Eyebrow>
              <Heading className="mt-4">Read before you apply.</Heading>
            </div>
            <Link
              href="/resources"
              className="inline-flex min-h-11 items-center font-sans text-small font-semibold text-olive underline decoration-olive/30 underline-offset-[0.3em]"
            >
              All resources
            </Link>
          </div>
          <ul className="mt-12 border-t border-line">
            {guides.map((guide) => (
              <li key={guide.href} className="border-b border-line">
                <Link href={guide.href} className="grid gap-2 py-6 md:grid-cols-12 md:items-baseline md:gap-6">
                  <span className="font-sans text-subhead font-semibold text-ink md:col-span-4">{guide.title}</span>
                  <span className="font-sans text-small text-ink-soft md:col-span-7">{guide.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <section className="bg-olive text-paper" data-tone="olive">
        <Container width="wide" className="grid items-end gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-7">
            <p className="font-sans text-eyebrow tracking-[0.08em] text-paper-muted uppercase">Next step</p>
            <h2 className="mt-4 max-w-[16ch] font-sans text-headline font-semibold text-balance">
              Name the facility, the amount, and the reason.
            </h2>
            <p className="mt-5 max-w-[42ch] font-sans text-body text-paper-muted">
              The form records an enquiry in this browser. It does not approve a loan or set a rate.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
            <Button href={site.applyHref} variant="inverse" size="lg">
              Apply Now
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
