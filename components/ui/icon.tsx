import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

function Icon({ size = 20, children, ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 10h14" />
      <path d="M12 5l5 5-5 5" />
    </Icon>
  );
}

export function IconArrowUpRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 15L15 5" />
      <path d="M8 5h7v7" />
    </Icon>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 4.5h2.2l1.1 2.6-1.4 1a9.2 9.2 0 0 0 4 4l1-1.4 2.6 1.1V15a1.5 1.5 0 0 1-1.6 1.5A12.5 12.5 0 0 1 3.5 6.1 1.5 1.5 0 0 1 5 4.5Z" />
    </Icon>
  );
}

export function IconMail(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3.5 5.5h13v9h-13z" />
      <path d="M3.5 6.5 10 11l6.5-4.5" />
    </Icon>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 7h14" />
      <path d="M3 13h14" />
    </Icon>
  );
}

export function IconClose(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 5l10 10" />
      <path d="M15 5L5 15" />
    </Icon>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 10.5 8 14.5 16 6" />
    </Icon>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 7l6 6 6-6" />
    </Icon>
  );
}
