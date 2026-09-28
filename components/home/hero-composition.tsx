import { ImageFrame } from "@/components/ui/image-frame";

export function HeroComposition() {
  return (
    <figure className="hero-photo relative z-10">
      <div className="relative">
        <ImageFrame
          src="/images/business/provisions-store.jpg"
          alt="A man checking sacks beside stacked cartons in a provisions store"
          width={1280}
          height={720}
          webpSrcSet="/images/business/provisions-store-800.webp 800w, /images/business/provisions-store.webp 1280w"
          sizes="(min-width: 1024px) 34rem, 100vw"
          ratio="landscape"
          overlap="none"
          priority
        />
        <div aria-hidden="true" className="absolute inset-y-0 left-0 z-20 w-1 bg-copper" />
        <figcaption className="absolute inset-x-0 bottom-0 z-20 bg-ink px-4 py-3 font-sans text-small text-paper">
          A provisions store. Not a customer portrait.
        </figcaption>
      </div>
    </figure>
  );
}
