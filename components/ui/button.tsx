import { Link } from "@/components/ui/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "inverse" | "quiet";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-copper text-paper hover:bg-copper-deep",
  secondary: "border border-ink bg-transparent text-ink hover:bg-ink hover:text-paper",
  inverse: "bg-paper text-ink hover:bg-stone",
  quiet:
    "bg-transparent px-0 text-current underline decoration-current/35 underline-offset-[0.45em] hover:decoration-current",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-small",
  lg: "h-14 px-7 text-body",
};

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = Common &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & { href?: undefined };

type ButtonAsLink = Common &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> & { href: string };

function classes(variant: Variant, size: Size, className?: string) {
  return cn(
    "motion-control inline-flex items-center justify-center gap-2.5 rounded-control font-sans font-medium transition-[color,background-color,border-color] duration-150 ease-out",
    "disabled:pointer-events-none disabled:opacity-40",
    variants[variant],
    variant === "quiet" ? "h-auto min-h-11" : cn(sizes[size], "max-sm:w-full"),
    className,
  );
}

function isLink(props: ButtonAsButton | ButtonAsLink): props is ButtonAsLink {
  return typeof props.href === "string";
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const classNames = classes(variant, size, props.className);

  if (isLink(props)) {
    const external = /^(https?:|tel:|mailto:)/.test(props.href);

    if (external) {
      return (
        <a href={props.href} className={classNames} target={props.target} rel={props.rel} onClick={props.onClick}>
          {props.children}
        </a>
      );
    }

    return (
      <Link href={props.href} className={classNames} target={props.target} rel={props.rel} onClick={props.onClick}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      className={classNames}
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
      name={props.name}
      value={props.value}
    >
      {props.children}
    </button>
  );
}
