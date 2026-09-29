import { customerStory } from "@/data/products";
import { siteImages } from "@/data/site";
import { Photo } from "@/components/home/photo";

export function CustomerStory() {
  return (
    <section className="bg-paper">
      <div className="grid lg:min-h-[40rem] lg:grid-cols-12">
        <figure className="relative min-h-[24rem] lg:col-span-7 lg:min-h-full">
          <Photo image={siteImages.customerStory} sizes="(min-width: 1024px) 58vw, 100vw" />
        </figure>
        <div className="flex flex-col justify-center px-5 py-16 sm:px-6 lg:col-span-5 lg:py-24 lg:pr-[max(1.5rem,calc((100%-80rem)/2+2rem))] lg:pl-16">
          <h2 className="font-sans text-headline font-bold text-balance">{customerStory.title}</h2>
          {customerStory.quote ? (
            <blockquote className="mt-6 font-sans text-[1.5rem] leading-snug font-semibold">{customerStory.quote}</blockquote>
          ) : (
            <p className="mt-6 max-w-[32ch] font-sans text-body text-ink-soft">{customerStory.text}</p>
          )}
          {customerStory.name ? (
            <p className="mt-8 font-sans text-small font-semibold">
              {customerStory.name}
              {customerStory.business ? <span className="mt-1 block font-medium text-ink-soft">{customerStory.business}</span> : null}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
