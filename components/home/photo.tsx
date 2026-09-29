import { cn } from "@/lib/cn";
import type { SiteImage } from "@/data/site";

export function Photo({
  image,
  priority = false,
  className,
  sizes = "(min-width: 1024px) 40rem, 100vw",
}: {
  image: SiteImage;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <picture className="absolute inset-0">
      <source type="image/webp" srcSet={image.webp} sizes={sizes} />
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "low"}
        className={cn("h-full w-full object-cover", className)}
        style={{ objectPosition: image.position }}
      />
    </picture>
  );
}
