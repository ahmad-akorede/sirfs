import { siteImages } from "@/data/site";
import { site } from "@/content/site";
import { Photo } from "@/components/home/photo";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="bg-olive text-paper" data-tone="olive">
      <div className="grid lg:grid-cols-2">
        <div className="flex items-center px-5 py-14 sm:px-6 md:py-[4.5rem] lg:py-32 lg:pr-16 lg:pl-[max(2rem,calc((100%-80rem)/2+2rem))]">
          <div>
            <h2 className="max-w-[12ch] font-sans text-headline font-bold text-balance">Ready to take the next step?</h2>
            <p className="mt-5 max-w-[36ch] font-sans text-body text-paper-muted">
              Tell us what you need and we&apos;ll help you find the right financial solution.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={site.applyHref} variant="inverse" size="lg">
                Apply Now
              </Button>
              <Button href="/contact" variant="ghost" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
        <figure className="relative min-h-[20rem] lg:min-h-[32rem]">
          <Photo image={siteImages.customerStory} sizes="(min-width: 1024px) 50vw, 100vw" />
        </figure>
      </div>
    </section>
  );
}
