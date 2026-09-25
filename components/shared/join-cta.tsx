"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/section";

/**
 * The site's one recruitment block, shared by /about and /perks.
 *
 * Violet is reserved on this site for anything about people and membership, so
 * this is the only place it is allowed to fill a whole surface.
 */
export function JoinCta({
  heading,
  secondary,
}: {
  heading: string;
  secondary: { label: string; href: string };
}) {
  return (
    <section className="rail-x pb-20 md:pb-28">
      <Reveal>
        <div className="relative overflow-hidden bg-pd-purple">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-15"
            style={{
              backgroundImage: "url(/assets/pattern.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="relative px-6 py-16 md:px-14 md:py-24">
            <h2 className="display-lg max-w-[18ch] text-white">{heading}</h2>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/join"
                className="group inline-flex items-center justify-center gap-3 bg-white px-8 py-4 font-mono text-xs uppercase tracking-[0.16em] text-pd-void transition-colors hover:bg-pd-void hover:text-white"
              >
                Sign up
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={secondary.href}
                className="inline-flex items-center justify-center border-2 border-white/70 px-8 py-4 font-mono text-xs uppercase tracking-[0.16em] text-white transition-colors hover:border-white hover:bg-white hover:text-pd-purple"
              >
                {secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
