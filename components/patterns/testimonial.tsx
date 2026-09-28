import type { ReactNode } from "react";

export type TestimonialModel = {
  quote: string;
  name: string;
  role: string;
};

export function Testimonial({
  item,
  media,
}: {
  item: TestimonialModel;
  media?: ReactNode;
}) {
  return (
    <figure className="grid gap-10 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-4">
        {media}
        <figcaption className={media ? "mt-6" : undefined}>
          <span className="block font-sans text-body">{item.name}</span>
          <span className="mt-1 block font-sans text-small text-[var(--muted)]">{item.role}</span>
        </figcaption>
      </div>
      <blockquote className="border-t border-[var(--rule)] pt-6 font-serif text-[clamp(1.45rem,5.2vw,2.75rem)] leading-[1.25] font-medium tracking-[-0.025em] text-balance md:col-span-7 md:col-start-6 md:border-t-0 md:pt-0 md:text-[clamp(1.75rem,3vw,2.75rem)]">
        {item.quote}
      </blockquote>
    </figure>
  );
}
