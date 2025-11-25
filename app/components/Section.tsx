import React from "react";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
};

export function Section({ id, children, className = "", innerClassName = "" }: SectionProps) {
  return (
    <section id={id} className={`w-full ${className}`}>
      <div
        className={`mx-auto max-w-5xl px-6 md:px-12 lg:px-16 py-16 md:py-20 ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
