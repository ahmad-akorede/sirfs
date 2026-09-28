import NextLink from "next/link";
import type { ComponentProps } from "react";

/** Prefetch stays off so in-view links do not compete with the open page. */
export function Link({ prefetch = false, ...props }: ComponentProps<typeof NextLink>) {
  return <NextLink prefetch={prefetch} {...props} />;
}
