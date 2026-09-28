import { cn } from "@/lib/cn";

type Ratio = "portrait" | "landscape" | "square";
type Overlap = "none" | "stone" | "copper";

const ratios: Record<Ratio, string> = {
  portrait: "aspect-[5/4] lg:aspect-[3/4]",
  landscape: "aspect-[16/10]",
  square: "aspect-square",
};

const overlaps: Record<Exclude<Overlap, "none">, string> = {
  stone: "bg-stone-deep",
  copper: "bg-copper",
};

function webpSrc(src: string) {
  return src.replace(/\.(jpe?g|png)$/i, ".webp");
}

export function ImageFrame({
  src,
  alt = "",
  ratio = "portrait",
  overlap = "none",
  shadow = false,
  caption,
  priority = false,
  width,
  height,
  webpSrcSet,
  sizes = "(min-width: 1024px) 40rem, 100vw",
  className,
}: {
  src?: string;
  alt?: string;
  ratio?: Ratio;
  overlap?: Overlap;
  shadow?: boolean;
  caption?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  webpSrcSet?: string;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure className={cn("image-frame", className)}>
      <div className={cn("relative", overlap !== "none" && "pb-7")}>
        {overlap !== "none" ? (
          <div
            aria-hidden="true"
            className={cn("absolute bottom-0 left-0 h-[88%] w-[88%] lg:-left-5", overlaps[overlap])}
          />
        ) : null}
        <div
          className={cn(
            "relative z-10 overflow-hidden bg-stone",
            ratios[ratio],
            shadow && "shadow-overlap",
          )}
        >
          {src ? (
            <picture className="absolute inset-0">
              <source type="image/webp" srcSet={webpSrcSet ?? webpSrc(src)} sizes={sizes} />
              <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                sizes={sizes}
                loading={priority ? "eager" : "lazy"}
                decoding={priority ? "auto" : "async"}
                fetchPriority={priority ? "high" : "low"}
                className={cn(
                  "h-full w-full object-cover object-[center_22%] saturate-[0.78] contrast-[1.04]",
                  !priority && "image-reveal",
                )}
              />
            </picture>
          ) : (
            <div className="absolute inset-0 bg-stone">
              <div className="absolute inset-y-0 left-0 w-1 bg-copper" aria-hidden="true" />
              <div className="flex h-full flex-col justify-between p-6">
                <span className="font-sans text-eyebrow uppercase text-ink-soft">Photograph</span>
                <span className="max-w-[12ch] font-serif text-title font-medium text-ink">
                  To be commissioned
                </span>
              </div>
            </div>
          )}
          {src ? (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-copper/10 mix-blend-multiply"
            />
          ) : null}
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-4 max-w-[36ch] font-sans text-small text-[var(--muted)]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
