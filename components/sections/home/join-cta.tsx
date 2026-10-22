"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";

const SOCIALS = [
  { name: "Facebook", handle: "ccsprogrammersden", url: "https://facebook.com/ccsprogrammersden" },
  { name: "YouTube", handle: "@progdenofficial", url: "https://www.youtube.com/@progdenofficial" },
  { name: "Discord", handle: "Official CCS server", url: "https://discord.gg/bTXvdggz4g" },
  { name: "Email", handle: "progdenofficial@gmail.com", url: "mailto:progdenofficial@gmail.com" },
];

export default function JoinCta() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".cta-title", {
          yPercent: 35,
          scale: 0.92,
          transformOrigin: "left bottom",
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top bottom", end: "top 35%", scrub: true },
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="overflow-hidden border-t border-white/10 px-5 pb-24 pt-24 md:px-12 md:pt-40">
      <h2 className="cta-title text-[clamp(4rem,15vw,15rem)] font-black leading-[0.82] tracking-[-0.05em] text-pd-bone">
        Join the Den.
      </h2>

      <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="max-w-md text-xl leading-snug text-pd-bone/70">
            All Red Hawks are welcome. Sign up, pick a team, and start building with us.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/join"
              className="inline-flex h-14 items-center rounded-full bg-pd-green px-8 text-lg font-bold text-pd-black transition-colors duration-200 hover:bg-pd-bone focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pd-green"
            >
              Sign up
            </Link>
            <Link
              href="/about"
              className="inline-flex h-14 items-center rounded-full border border-white/25 px-8 text-lg font-semibold text-pd-bone transition-colors duration-200 hover:border-pd-bone focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pd-green"
            >
              About the Den
            </Link>
          </div>
        </div>

        <ul className="md:col-span-6 md:col-start-7">
          {SOCIALS.map((s) => (
            <li key={s.name} className="border-b border-white/10 first:border-t">
              <a
                href={s.url}
                target={s.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 py-5 focus-visible:outline-2 focus-visible:outline-pd-green"
              >
                <span className="text-2xl font-bold text-pd-bone transition-colors duration-200 group-hover:text-pd-green md:text-3xl">
                  {s.name}
                </span>
                <span className="flex min-w-0 items-center gap-3 text-pd-bone/60">
                  <span className="truncate text-sm md:text-base">{s.handle}</span>
                  <ArrowUpRight className="size-5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
