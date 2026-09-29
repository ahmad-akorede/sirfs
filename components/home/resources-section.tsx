import { homeGuides } from "@/data/resources";
import { siteImages } from "@/data/site";
import { Photo } from "@/components/home/photo";
import { SectionHeader } from "@/components/home/section-header";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Link } from "@/components/ui/link";

export function ResourcesSection() {
  return (
    <Section id="knowledge" tone="paper" spacing="lg">
      <Container width="wide">
        <SectionHeader title="Financial knowledge for better decisions." />
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Link href={homeGuides[0].href} className="group block lg:col-span-7">
            <figure className="relative aspect-[4/5] bg-stone sm:aspect-[5/4]">
              <Photo image={siteImages.resources[2]} sizes="(min-width: 1024px) 48rem, 100vw" />
            </figure>
            <p className="mt-6 font-sans text-small font-semibold text-olive">{homeGuides[0].category}</p>
            <h3 className="mt-2 max-w-[16ch] font-sans text-[2rem] leading-tight font-bold tracking-[-0.03em] group-hover:text-olive sm:text-[2.5rem]">
              {homeGuides[0].title}
            </h3>
          </Link>
          <ul className="border-t border-line lg:col-span-5">
            {homeGuides.slice(1).map((guide) => (
              <li key={guide.title} className="border-b border-line">
                <Link href={guide.href} className="group block py-8">
                  <p className="font-sans text-small font-semibold text-olive">{guide.category}</p>
                  <h3 className="mt-2 font-sans text-[1.75rem] leading-tight font-bold tracking-[-0.03em] group-hover:text-olive">
                    {guide.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
