import React, { ReactNode } from "react";
import { cn } from "~/lib/utils";

export function TypographyH1({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1 className={cn("pl-6 mt-6 italic border-l-2", className)}>{children}</h1>
  );
}

export function TypographyH2({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "pb-2 text-3xl font-semibold tracking-tight border-b scroll-m-20 first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH4({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={cn(
        "text-2xl font-semibold text-gray-900 pb-4 text-center pt-8  tracking-tight scroll-m-20",
        className
      )}
    >
      {children}
    </h4>
  );
}

export function TypographyP({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
}

export function TypographyBlockquote({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <blockquote className={cn("pl-6 mt-6 italic border-l-2", className)}>
      {children}
    </blockquote>
  );
}
