"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * The label that names a section. A short mint rule reaches left toward the
 * spine, so every section reads as hanging off the same structure.
 */
export function SectionLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span aria-hidden className="h-px w-6 shrink-0 bg-pd-green md:w-10" />
      <span className="data-label">{children}</span>
    </div>
  );
}

/**
 * A page section: aligned to the spine, named by its label, with consistent
 * vertical rhythm. `tight` is for sections that butt against the one above.
 */
export function Section({
  label,
  id,
  children,
  className,
  tight = false,
}: {
  label?: string;
  id?: string;
  children: ReactNode;
  className?: string;
  tight?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("rail-x", tight ? "py-12 md:py-16" : "py-20 md:py-32", className)}
    >
      {label ? <SectionLabel className="mb-8 md:mb-12">{label}</SectionLabel> : null}
      {children}
    </section>
  );
}

/**
 * One reveal, used deliberately. Content rises a short distance and settles —
 * no scale, no blur, no stagger unless a caller asks for a delay. Sections get
 * one of these at most, not one per element.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * A key/value pair in the site's data voice. Used for anything the
 * organization measures: counts, dates, credits, ranks.
 */
export function DataPair({
  label,
  value,
  accent = "green",
}: {
  label: string;
  value: ReactNode;
  accent?: "green" | "purple" | "plain";
}) {
  return (
    <div className="border-t border-white/10 pt-4">
      <dt className="data-label">{label}</dt>
      <dd
        className={cn(
          "data-value mt-2 text-3xl md:text-4xl",
          accent === "green" && "text-pd-green",
          accent === "purple" && "text-pd-purple",
          accent === "plain" && "text-foreground"
        )}
      >
        {value}
      </dd>
    </div>
  );
}
