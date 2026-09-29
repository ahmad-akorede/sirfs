import { businessBenefits } from "@/data/products";
import { siteImages } from "@/data/site";
import { Photo } from "@/components/home/photo";
import { SectionHeader } from "@/components/home/section-header";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export function FeaturedProduct() {
  return (
    <Section tone="stone" spacing="lg">
      <Container width="wide">
        <SectionHeader title="Solutions for every stage of your journey." />
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <figure className="relative min-h-[28rem] lg:col-span-7 lg:min-h-[40rem]">
            <Photo image={siteImages.payroll} sizes="(min-width: 1024px) 48rem, 100vw" />
          </figure>
          <div className="lg:col-span-5">
            <p className="font-sans text-[0.9375rem] font-semibold text-olive">Featured</p>
            <h3 className="mt-3 font-sans text-[2.5rem] leading-none font-bold tracking-[-0.03em] sm:text-[3rem]">
              Business Finance
            </h3>
            <p className="mt-5 max-w-[36ch] font-sans text-body text-ink-soft">
              Keep your business moving with financing designed around working capital, expansion and
              day-to-day business needs.
            </p>
            <ul className="mt-8 border-t border-line">
              {businessBenefits.map((benefit) => (
                <li key={benefit} className="border-b border-line py-4 font-sans text-body font-semibold">
                  {benefit}
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
  );
}
