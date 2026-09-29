import { businessProducts } from "@/data/products";
import { siteImages } from "@/data/site";
import { Photo } from "@/components/home/photo";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";

export function BusinessFinanceSection() {
  return (
    <Section id="business" tone="paper" spacing="lg">
      <Container width="wide" className="grid items-center gap-12 lg:grid-cols-12">
        <figure className="relative min-h-[28rem] lg:col-span-7 lg:min-h-[40rem]">
          <Photo image={{ ...siteImages.hero, position: "center 70%" }} sizes="(min-width: 1024px) 48rem, 100vw" />
        </figure>
        <div className="lg:col-span-4 lg:col-start-9">
          <h2 className="font-sans text-headline font-bold text-balance">Helping businesses keep moving.</h2>
          <p className="mt-5 font-sans text-body text-ink-soft">
            Access financing designed to support working capital, purchase orders, invoices and business
            growth.
          </p>
          <ul className="mt-8 border-t border-line">
            {businessProducts.map((product) => (
              <li key={product.href} className="border-b border-line">
                <Link href={product.href} className="flex min-h-14 items-center font-sans text-body font-semibold">
                  {product.title}
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
      </Container>
    </Section>
  );
}
