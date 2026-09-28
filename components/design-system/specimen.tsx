import type { ReactNode } from "react";
import { site } from "@/content/site";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaBand } from "@/components/patterns/cta-band";
import { ProductFeature, ProductIndex, type ProductSummary } from "@/components/patterns/product";
import { Statistics } from "@/components/patterns/statistics";
import { StepList } from "@/components/patterns/step-list";
import { Testimonial } from "@/components/patterns/testimonial";
import { TrustIndicators } from "@/components/patterns/trust-indicators";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, Rule } from "@/components/ui/card";
import { Checkbox, Field, SelectField, TextArea } from "@/components/ui/field";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconCheck,
  IconChevronDown,
  IconClose,
  IconMail,
  IconMenu,
  IconPhone,
} from "@/components/ui/icon";
import { ImageFrame } from "@/components/ui/image-frame";
import { Display, Eyebrow, Heading, Lede, Text } from "@/components/ui/type";

const swatches = [
  { name: "Ink", hex: "#161411", className: "bg-ink text-paper" },
  { name: "Olive", hex: "#24312A", className: "bg-olive text-paper" },
  { name: "Copper", hex: "#8C4A32", className: "bg-copper text-paper" },
  { name: "Stone", hex: "#E7E1D6", className: "bg-stone text-ink" },
  { name: "Paper", hex: "#F3F0E8", className: "border border-line bg-paper text-ink" },
];

const products: ProductSummary[] = [
  {
    name: "Personal loan",
    audience: "Salary earners",
    summary:
      "For rent, school fees, or a medical bill, repaid from salary over a short term.",
    amount: "₦5,000,000",
    tenor: "Up to 9 months",
    href: "/#products",
    facts: [
      { label: "Who qualifies", value: "Employed, with a salary account" },
      { label: "Security", value: "Stated when terms are confirmed" },
      { label: "Decision", value: "After the file is complete" },
    ],
  },
  {
    name: "Business loan",
    audience: "Registered businesses",
    summary: "Working capital for a business that is already trading.",
    amount: "₦100,000",
    tenor: "1–6 months",
    href: "/#products",
  },
  {
    name: "LPO finance",
    audience: "Purchase orders",
    summary: "Funding to execute a local purchase order.",
    amount: "₦200,000",
    tenor: "1–3 months",
    href: "/#products",
  },
  {
    name: "Invoice discounting",
    audience: "Unpaid invoices",
    summary: "Working capital while a raised invoice is still outstanding.",
    amount: "₦200,000",
    tenor: "1–3 months",
    href: "/#products",
  },
  {
    name: "Payroll finance",
    audience: "Employer schemes",
    summary: "A staff facility arranged through the employer.",
    amount: "₦50,000",
    tenor: "1–9 months",
    href: "/#products",
  },
];

function SpecimenLabel({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note: string;
}) {
  return (
    <div className="mb-12 grid gap-4 md:mb-16 md:grid-cols-12 md:items-end">
      <p className="font-sans text-eyebrow text-copper uppercase md:col-span-2">{index}</p>
      <h2 className="font-serif text-title font-medium md:col-span-4">{title}</h2>
      <p className="font-sans text-small text-[var(--muted)] md:col-span-5 md:col-start-8">{note}</p>
    </div>
  );
}

function TypeRow({ name, children }: { name: string; children: ReactNode }) {
  return (
    <div className="grid items-baseline gap-3 border-t border-[var(--rule)] py-6 md:grid-cols-12">
      <p className="font-sans text-eyebrow text-[var(--eyebrow)] uppercase md:col-span-3">{name}</p>
      <div className="md:col-span-9">{children}</div>
    </div>
  );
}

export function Specimen() {
  const featured = products[0];

  return (
    <>
      <Section id="foundation" tone="paper" spacing="lg">
        <Container width="wide">
          <div className="grid gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-8">
              <Eyebrow>Design system</Eyebrow>
              <Display className="mt-6">Credit, stated plainly.</Display>
            </div>
            <div className="md:col-span-4 md:pt-16">
              <Lede>
                Type, space, and four section tones. This page is the system, not the public
                homepage.
              </Lede>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper" spacing="md">
        <Container width="wide">
          <SpecimenLabel
            index="01"
            title="Colour"
            note="Five colours. Copper is reserved for the action and for small index marks. It is not a background for long passages."
          />
          <div className="grid grid-cols-2 md:grid-cols-5">
            {swatches.map((swatch) => (
              <div
                key={swatch.name}
                className={`flex h-44 flex-col justify-end p-4 ${swatch.className}`}
              >
                <p className="font-serif text-subhead font-medium">{swatch.name}</p>
                <p className="mt-1 font-sans text-eyebrow uppercase opacity-70">{swatch.hex}</p>
              </div>
            ))}
          </div>
          <dl className="mt-10 grid gap-6 md:grid-cols-4">
            <div>
              <dt className="font-sans text-eyebrow uppercase text-[var(--eyebrow)]">Institution</dt>
              <dd className="mt-2 font-sans text-small text-[var(--muted)]">Ink ground. Paper type.</dd>
            </div>
            <div>
              <dt className="font-sans text-eyebrow uppercase text-[var(--eyebrow)]">Product</dt>
              <dd className="mt-2 font-sans text-small text-[var(--muted)]">Paper ground. Large figures.</dd>
            </div>
            <div>
              <dt className="font-sans text-eyebrow uppercase text-[var(--eyebrow)]">Customer</dt>
              <dd className="mt-2 font-sans text-small text-[var(--muted)]">Stone ground. Photographs.</dd>
            </div>
            <div>
              <dt className="font-sans text-eyebrow uppercase text-[var(--eyebrow)]">Conversion</dt>
              <dd className="mt-2 font-sans text-small text-[var(--muted)]">Olive ground. One copper action.</dd>
            </div>
          </dl>
        </Container>
      </Section>

      <Section tone="paper" spacing="md">
        <Container width="wide">
          <SpecimenLabel
            index="02"
            title="Type"
            note="Newsreader for headlines, figures, and the lede. Outfit for interface, body, and labels."
          />
          <div className="border-b border-[var(--rule)]">
            <TypeRow name="Display">
              <p className="font-serif text-display font-medium">A clear next step.</p>
            </TypeRow>
            <TypeRow name="Headline">
              <p className="font-serif text-headline font-medium">Five ways to borrow.</p>
            </TypeRow>
            <TypeRow name="Title">
              <p className="font-serif text-title font-medium">Personal loan</p>
            </TypeRow>
            <TypeRow name="Lede">
              <p className="font-serif text-lede italic">
                For people who already earn, trade, or run a small business.
              </p>
            </TypeRow>
            <TypeRow name="Body">
              <p className="max-w-[52ch] font-sans text-body">
                Body copy stays in Outfit, at a length that can be read on a phone without feeling
                like a brochure.
              </p>
            </TypeRow>
            <TypeRow name="Small">
              <p className="font-sans text-small text-[var(--muted)]">Monday to Friday, 8:00–17:00</p>
            </TypeRow>
            <TypeRow name="Eyebrow">
              <p className="font-sans text-eyebrow uppercase text-[var(--eyebrow)]">Salary earners</p>
            </TypeRow>
          </div>
        </Container>
      </Section>

      <Section tone="paper" spacing="md">
        <Container width="wide">
          <SpecimenLabel
            index="03"
            title="Controls"
            note="Buttons are sentence case. Fields are underlines. Badges are square labels, not pills."
          />
          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg">
              Apply
              <IconArrowRight />
            </Button>
            <Button variant="secondary" size="lg">
              Read the terms
            </Button>
            <Button variant="quiet" size="lg">
              Speak to us
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Badge>Salary earner</Badge>
            <Badge tone="copper">Sample</Badge>
            <Badge tone="olive">Employer scheme</Badge>
          </div>

          <div className="mt-8 flex items-center gap-5 text-ink">
            <IconArrowRight />
            <IconArrowUpRight />
            <IconPhone />
            <IconMail />
            <IconMenu />
            <IconClose />
            <IconCheck />
            <IconChevronDown />
          </div>

          <div className="mt-16 grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <Heading level={3}>An enquiry starts with a few lines.</Heading>
              <Text size="small" className="mt-4">
                Labels sit above the line. Errors use the danger red, never copper.
              </Text>
            </div>
            <form className="grid gap-8 md:col-span-7 md:col-start-6" action="#" method="post">
              <div className="grid gap-8 sm:grid-cols-2">
                <Field label="Full name" name="name" autoComplete="name" placeholder="Ada Okonkwo" />
                <Field
                  label="Telephone"
                  name="phone"
                  type="tel"
                  error="Enter a number we can call."
                  defaultValue="080"
                />
              </div>
              <SelectField
                label="What you need"
                name="product"
                options={[
                  { label: "Personal loan", value: "personal" },
                  { label: "Business loan", value: "business" },
                  { label: "LPO finance", value: "lpo" },
                  { label: "Invoice discounting", value: "invoice" },
                  { label: "Payroll finance", value: "payroll" },
                ]}
              />
              <TextArea label="What the money is for" name="purpose" rows={3} />
              <Checkbox
                label="I agree to be contacted about this enquiry."
                name="consent"
              />
              <div>
                <Button type="submit">Submit enquiry</Button>
              </div>
            </form>
          </div>
        </Container>
      </Section>

      <Section tone="ink" spacing="sm">
        <Container width="wide">
          <div className="flex flex-wrap items-center gap-4">
            <Badge tone="paper">On a dark ground</Badge>
            <Button variant="inverse">Apply</Button>
            <Button variant="quiet">Call the office</Button>
          </div>
        </Container>
      </Section>

      <Section tone="paper" spacing="md">
        <Container width="wide">
          <SpecimenLabel
            index="04"
            title="Surfaces"
            note="Cards are the exception. A rule, an outline, or an ink panel. No shadow, no radius. Photographs may overlap and may carry the only shadow in the system."
          />
          <div className="grid gap-12 md:grid-cols-3">
            <Card variant="rule">
              <Eyebrow>Rule</Eyebrow>
              <p className="mt-4 font-serif text-subhead font-medium text-balance">
                A fact, set on a line.
              </p>
              <Text size="small" className="mt-3">
                Use this when a list needs a pause, not a box.
              </Text>
            </Card>
            <Card variant="outline">
              <Eyebrow>Outline</Eyebrow>
              <p className="mt-4 font-serif text-subhead font-medium text-balance">
                One contained note.
              </p>
              <Text size="small" className="mt-3">
                Hairline only. Never a grid of these.
              </Text>
            </Card>
            <Card variant="inverse">
              <Eyebrow>Inverse</Eyebrow>
              <p className="mt-4 font-serif text-subhead font-medium text-balance">
                A short institutional line.
              </p>
              <Text size="small" className="mt-3">
                Ink panel, paper type, still square.
              </Text>
            </Card>
          </div>

          <div className="mt-20 grid gap-8 border-t border-[var(--rule)] pt-10 md:grid-cols-3">
            <div>
              <p className="font-sans text-eyebrow uppercase text-[var(--eyebrow)]">Radius</p>
              <p className="mt-3 font-serif text-title font-medium">0 and 2px</p>
              <p className="mt-3 font-sans text-small text-[var(--muted)]">
                Surfaces, images, and badges are square. Buttons use a 2px corner.
              </p>
            </div>
            <div>
              <p className="font-sans text-eyebrow uppercase text-[var(--eyebrow)]">Shadow</p>
              <p className="mt-3 font-serif text-title font-medium">Photographs only</p>
              <p className="mt-3 font-sans text-small text-[var(--muted)]">
                Navigation, buttons, and cards sit flat on the page.
              </p>
            </div>
            <div>
              <p className="font-sans text-eyebrow uppercase text-[var(--eyebrow)]">Measure</p>
              <p className="mt-3 font-serif text-title font-medium">40 / 72 / 84</p>
              <p className="mt-3 font-sans text-small text-[var(--muted)]">
                Prose, page, and wide. Section padding is 3.5, 4, or 5rem, larger from tablet up.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="institution" tone="ink" spacing="lg">
        <Container width="wide">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-6">
              <Eyebrow>Institution</Eyebrow>
              <Heading level={2} className="mt-4">
                The parts that have to be true.
              </Heading>
            </div>
            <Text className="md:col-span-5 md:col-start-8 md:pt-10">
              Licence, address, and promises stay unpublished until they are confirmed. The pattern
              is ready for them.
            </Text>
          </div>
          <div className="mt-14">
            <TrustIndicators
              items={[
                { label: "Licence", value: "To be confirmed" },
                { label: "Office", value: "Address to follow", detail: site.hours },
                { label: "Decision", value: "After a complete file" },
                { label: "Security", value: "Stated per product" },
              ]}
            />
          </div>
          <div className="mt-16">
            <Statistics
              items={[
                { value: "04", label: "Steps from enquiry to a decision" },
                { value: "05", label: "Credit products in the first release" },
                { value: "01", label: "Application open at a time" },
              ]}
            />
            <Text size="small" className="mt-6">
              A whole number counts once when it scrolls into view. A placeholder stays as written.
            </Text>
          </div>
        </Container>
      </Section>

      <Section id="products" tone="paper" spacing="lg">
        <Container width="wide">
          <SpecimenLabel
            index="05"
            title="Products"
            note="One product is set large. The others are a list. Figures on this page are samples for layout, not published terms."
          />
          <ProductFeature product={featured} />
          <div className="mt-20">
            <ProductIndex products={products.slice(1)} />
          </div>
        </Container>
      </Section>

      <Section id="process" tone="paper" spacing="md">
        <Container width="wide">
          <div className="mb-12 md:mb-16">
            <Eyebrow>How it works</Eyebrow>
            <Heading level={2} className="mt-4 max-w-[16ch]">
              Four steps, named in order.
            </Heading>
          </div>
          <StepList
            steps={[
              { title: "Enquire", text: "Amount, term, and what the money is for." },
              { title: "Documents", text: "Identity, income, and the papers that product asks for." },
              { title: "Decision", text: "A yes, a no, or a question. Stated, not implied." },
              { title: "Disbursement", text: "Funds to the account named in the file." },
            ]}
          />
        </Container>
      </Section>

      <Section tone="stone" spacing="lg">
        <Container width="wide">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <Eyebrow>Customer</Eyebrow>
              <Heading level={2} className="mt-4">
                A person, then the sentence they would actually say.
              </Heading>
            </div>
          </div>
          <div className="relative mt-16 grid gap-16 md:grid-cols-12 md:gap-0">
            <div className="md:col-span-5">
              <ImageFrame
                ratio="portrait"
                overlap="copper"
                caption="Market, workshop, counter. Cropped hard. No cut-out portraits."
              />
            </div>
            <div className="md:col-span-7 lg:-ml-16 lg:pt-28">
              <ImageFrame ratio="landscape" overlap="none" shadow />
            </div>
          </div>
          <div className="mt-20">
            <Rule />
            <div className="pt-12">
              <Testimonial
                item={{
                  quote:
                    "I needed school fees before payday. The terms were on one page, and I knew what I was signing.",
                  name: "Illustration",
                  role: "Layout only. Not a published review.",
                }}
              />
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand
        eyebrow="Conversion"
        title="Tell us the amount, and what it is for."
        actionLabel="Start an enquiry"
        actionHref={site.applyHref}
        secondaryLabel="Or send a message"
        secondaryHref={site.contactHref}
        note="The form will post to an endpoint later. Nothing is stored on this static site yet."
      />
    </>
  );
}
