import { personalProducts } from "@/data/products";
import { siteImages } from "@/data/site";
import { Photo } from "@/components/home/photo";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";

export function PersonalFinanceSection() {
  return (
    <section id="personal" className="bg-olive text-paper" data-tone="olive">
      <div className="grid lg:grid-cols-2">
        <div className="px-5 py-16 sm:px-6 md:py-[4.5rem] lg:py-32 lg:pr-16 lg:pl-[max(1.5rem,calc((100%-80rem)/2+2rem))]">
          <h2 className="max-w-[12em] font-sans text-headline font-bold text-balance">
            Life comes with plans. We&apos;re here to help you meet them.
          </h2>
          <ul className="mt-10 border-t border-[var(--rule)]">
            {personalProducts.map((product) => (
              <li key={product.title} className="border-b border-[var(--rule)]">
                <Link href={product.href} className="block py-5">
                  <span className="block font-sans text-[1.35rem] font-semibold">{product.title}</span>
                  <span className="mt-1 block font-sans text-small text-paper-muted">{product.text}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/loans/personal" variant="inverse" size="lg">
              Explore Personal Finance
            </Button>
          </div>
        </div>
        <figure className="relative min-h-[28rem] lg:min-h-full">
          <Photo image={siteImages.savings} sizes="(min-width: 1024px) 50vw, 100vw" />
        </figure>
      </div>
    </section>
  );
}
