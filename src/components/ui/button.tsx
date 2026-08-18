import Link from "next/link";
import type { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
};

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
};

const variants: Record<NonNullable<BaseProps["variant"]>, string> = {
  primary: "bg-primary text-navy hover:bg-primary-dark",
  outline: "border border-border text-foreground hover:bg-surface-alt",
  ghost: "text-foreground hover:bg-surface-alt",
};

const sizes: Record<NonNullable<BaseProps["size"]>, string> = {
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-13 px-7 text-base gap-2.5",
};

const base =
  "inline-flex items-center justify-center rounded-full font-medium transition-colors whitespace-nowrap [&_svg]:shrink-0";

export function Button({
  children,
  href,
  external,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonAsLink) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
