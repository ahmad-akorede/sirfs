import { discovery } from "@/data/products";
import { siteImages } from "@/data/site";
import { Photo } from "@/components/home/photo";
import { SectionHeader } from "@/components/home/section-header";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Link } from "@/components/ui/link";

export function ProductDiscovery() {
  const featured = discovery.find((item) => item.featured) ?? discovery[0];
  const rest = discovery.filter((item) => item !== featured);

  return (
    <Section id="solutions" tone="paper" spacing="lg">
      <Container width="wide">
        <SectionHeader
          title="Financial solutions designed around you."
          text="Whether you're managing personal expenses, growing a business or planning for the future, find a solution that fits your needs."
        />
        <div className="mt-16 grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <article className="lg:col-span-7">
            <figure className="relative min-h-[26rem] sm:min-h-[34rem]">
              <Photo image={siteImages.businessFinance} sizes="(min-width: 1024px) 46rem, 100vw" />
            </figure>
            <p className="mt-6 font-sans text-small font-semibold text-olive">{featured.index}</p>
            <h3 className="mt-2 font-sans text-[2.5rem] leading-none font-bold tracking-[-0.03em] sm:text-[3rem]">
              {featured.title}
            </h3>
            <p className="mt-4 max-w-[36ch] font-sans text-body text-ink-soft">{featured.text}</p>
            <Link
              href={featured.href}
              className="mt-5 inline-flex min-h-11 items-center font-sans text-small font-semibold text-olive"
            >
              {featured.cta}
            </Link>
          </article>
          <div className="lg:col-span-5 lg:pt-16">
            {rest.map((item) => (
              <article key={item.title} className="border-t border-line py-7">
                <p className="font-sans text-small font-semibold text-olive">{item.index}</p>
                <h3 className="mt-2 font-sans text-[1.75rem] leading-tight font-bold tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-2 max-w-[32ch] font-sans text-small text-ink-soft">{item.text}</p>
                <Link href={item.href} className="mt-3 inline-flex min-h-11 items-center font-sans text-small font-semibold">
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
