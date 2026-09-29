import { Suspense } from "react";
import { Breadcrumb } from "@/components/seo/breadcrumb";
import { crumbs } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";
import { loans } from "@/content/loans";
import { ApplyWizard } from "@/components/apply/loan-application";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Display, Eyebrow, Lede } from "@/components/ui/type";

export const metadata = pageMetadata({
  title: "Apply for a Loan",
  description:
    "Start a Sirfa Empowerment Initiative loan application in five steps. The page does not send it, and it does not approve it.",
  path: "/apply",
});

const products = loans.map((loan) => ({ label: loan.name, value: loan.slug }));

export default function ApplyPage() {
  return (
    <Section tone="paper" spacing="md">
      <Container width="wide">
        <Breadcrumb items={crumbs({ name: "Apply", path: "/apply" })} />
        <Eyebrow>Application</Eyebrow>
        <Display className="mt-5 max-w-[14ch]">Apply for a loan.</Display>
        <Lede className="mt-6 max-w-[40ch]">
          Five steps. Who you are, how you earn, the loan, any papers you already have, then a
          reading. Nothing is sent, and nothing is approved.
        </Lede>
        <div className="mt-10 md:mt-14">
          <Suspense fallback={<p className="font-sans text-small text-[var(--muted)]">Opening the application.</p>}>
            <ApplyWizard products={products} />
          </Suspense>
        </div>
      </Container>
    </Section>
  );
}
