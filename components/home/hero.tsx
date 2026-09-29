import { siteImages } from "@/data/site";
import { site } from "@/content/site";
import { Photo } from "@/components/home/photo";
import { Button } from "@/components/ui/button";

const marks = ["Simple application", "Flexible financing", "Dedicated support"];

export function Hero() {
  return (
    <section className="bg-white">
      <div className="grid lg:min-h-[46rem] lg:grid-cols-12">
        <div className="flex flex-col justify-center px-5 py-16 sm:px-6 lg:col-span-5 lg:py-24 lg:pr-12 lg:pl-[max(1.5rem,calc((100%-80rem)/2+2rem))]">
          <p className="font-sans text-[0.8125rem] font-semibold tracking-[0.08em] text-olive uppercase">
            Financial solutions for life and business
          </p>
          <h1 className="mt-6 max-w-[10em] font-sans text-display font-bold text-balance">
            Finance that helps you move forward.
          </h1>
          <p className="mt-6 max-w-[36ch] font-sans text-body text-ink-soft">
            From personal financial needs to working capital for growing businesses, Sirfa provides
            simple, accessible financial solutions designed around real people and real businesses.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={site.applyHref} size="lg">
              Apply for Financing
            </Button>
            <Button href="#solutions" variant="secondary" size="lg">
              Explore Our Solutions
            </Button>
          </div>
          <p className="mt-12 font-sans text-small text-ink-faint">{marks.join("  ·  ")}</p>
        </div>
        <figure className="relative min-h-[28rem] lg:col-span-7 lg:min-h-full">
          <Photo image={siteImages.hero} priority sizes="(min-width: 1024px) 58vw, 100vw" />
        </figure>
      </div>
    </section>
  );
}
