"use client";

import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

const baseClasses =
  "inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold transition whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-black text-white dark:bg-white dark:text-black hover:opacity-90 focus-visible:outline-black dark:focus-visible:outline-white",
  secondary:
    "border border-black/20 dark:border-white/20 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 focus-visible:outline-black dark:focus-visible:outline-white",
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  return (
    <Link href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </Link>
  );
}
