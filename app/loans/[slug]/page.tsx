import { notFound } from "next/navigation";
import { getLoan, loans } from "@/content/loans";
import { ProductPage } from "@/components/products/product-page";
import { crumbs } from "@/lib/seo/json-ld";
import { pageMetadata } from "@/lib/seo/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return loans.map((loan) => ({ slug: loan.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const loan = getLoan(slug);
  if (!loan) return pageMetadata({ title: "Loan", description: "This loan is not on the site.", path: "/loans", index: false });
  return pageMetadata({ title: loan.name, description: loan.summary, path: loan.href });
}

export default async function LoanPage({ params }: Props) {
  const { slug } = await params;
  const loan = getLoan(slug);
  if (!loan) notFound();

  const related = loans.filter((item) => item.slug !== loan.slug);

  return (
    <ProductPage
      product={loan}
      related={related}
      relatedTitle="Other loans"
      trail={crumbs({ name: "Loans", path: "/loans" }, { name: loan.name, path: loan.href })}
    />
  );
}
