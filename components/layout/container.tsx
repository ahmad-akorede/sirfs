import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Width = "prose" | "default" | "wide";

const widths: Record<Width, string> = {
  prose: "max-w-[var(--container-prose)]",
  default: "max-w-[var(--container-page)]",
  wide: "max-w-[var(--container-wide)]",
};

export function Container({
  children,
  width = "default",
  className,
}: {
  children: ReactNode;
  width?: Width;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", widths[width], className)}>
      {children}
    </div>
  );
}
