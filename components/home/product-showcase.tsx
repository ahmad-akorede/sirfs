"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export type ShowcaseProduct = {
  name: string;
  href: string;
  audience: string;
  purpose: string;
  benefit: string;
};

export function ProductShowcase({ products }: { products: ShowcaseProduct[] }) {
  const [active, setActive] = useState(0);
  const product = products[active] ?? products[0];
  if (!product) return null;

  return (
    <div className="grid border border-line lg:grid-cols-12">
      <div className="flex flex-col justify-between bg-olive p-8 text-paper lg:col-span-5 lg:p-12" data-tone="olive">
        <div>
          <p className="font-sans text-eyebrow tracking-[0.08em] text-paper-muted uppercase">Facility</p>
          <h3 className="mt-4 font-sans text-headline font-semibold">{product.name}</h3>
          <dl className="mt-8 space-y-6">
            <div>
              <dt className="font-sans text-caption text-paper-muted">Who it is for</dt>
              <dd className="mt-1 font-sans text-body">{product.audience}</dd>
            </div>
            <div>
              <dt className="font-sans text-caption text-paper-muted">Purpose</dt>
              <dd className="mt-1 font-sans text-body">{product.purpose}</dd>
            </div>
            <div>
              <dt className="font-sans text-caption text-paper-muted">Key point</dt>
              <dd className="mt-1 font-sans text-body">{product.benefit}</dd>
            </div>
          </dl>
        </div>
        <Button href={product.href} variant="inverse" size="lg" className="mt-10 sm:w-auto">
          View this facility
        </Button>
      </div>
      <ul className="lg:col-span-7" aria-label="Facilities">
        {products.map((item, index) => {
          const selected = index === active;
          return (
            <li key={item.href} className="border-b border-line last:border-b-0">
              <button
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(index)}
                className={cn(
                  "flex w-full items-start gap-4 px-6 py-5 text-left transition-colors duration-150 hover:bg-stone",
                  selected && "bg-stone",
                )}
              >
                <span className="w-8 shrink-0 pt-0.5 font-sans text-caption font-semibold text-olive tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-sans text-body font-semibold text-ink">{item.name}</span>
                  <span className="mt-1 block font-sans text-small text-ink-soft">{item.audience}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
