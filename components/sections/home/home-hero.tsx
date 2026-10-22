"use client";

import { useRef } from "react";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, OrthographicCamera } from "@react-three/drei";
import { PDLogo } from "@/components/shared/pd-logo";
import { gsap, useGSAP } from "@/lib/gsap";

const LINES = ["where great", "minds compile."];

export default function HomeHero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // The one load moment: the tagline "compiles" out of noise.
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".hero-logo", { autoAlpha: 0, scale: 0.9, duration: 1.4 }, 0);
        gsap.utils.toArray<HTMLElement>(".hero-line").forEach((line, i) => {
          tl.to(
            line,
            {
              duration: 1.1,
              scrambleText: {
                text: line.dataset.text ?? "",
                chars: "01{}[]<>/=;_",
                speed: 0.5,
                revealDelay: 0.25,
              },
            },
            0.15 + i * 0.25
          );
        });
        tl.from(".hero-fade", { autoAlpha: 0, y: 16, duration: 0.8, stagger: 0.08 }, 0.9);

        // Leaving the hero: copy drifts up, logo sinks slower.
        gsap.to(".hero-copy", {
          yPercent: -18,
          autoAlpha: 0.2,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to(".hero-logo", {
          yPercent: 25,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-5 pb-12 pt-32 md:px-12 md:pb-16"
    >
      <div className="hero-logo pointer-events-none absolute -right-[20%] top-[6%] aspect-square w-[95vw] opacity-90 md:pointer-events-auto md:-right-[4%] md:top-[4%] md:w-[52vw] lg:w-[46vw]">
        <Canvas className="h-full w-full">
          <OrthographicCamera makeDefault position={[0, 5, 120]} zoom={56} near={0.1} far={1000} />
          <OrbitControls enableZoom={false} enablePan={false} />
          <Environment preset="forest" />
          <PDLogo />
        </Canvas>
      </div>

      <div className="hero-copy relative">
        <p className="hero-fade mb-6 text-lg text-pd-bone/70 md:text-xl">
          CCS Programmers&apos; Den, Tarlac State University
        </p>

        <h1 className="text-[clamp(3.25rem,11.5vw,12rem)] font-black lowercase leading-[0.84] tracking-[-0.045em] text-pd-bone">
          <span className="sr-only">{LINES.join(" ")}</span>
          {LINES.map((line, i) => (
            <span key={line} aria-hidden="true" className="block">
              <span className="hero-line" data-text={line}>
                {line}
              </span>
              {i === LINES.length - 1 && (
                <span className="ml-[0.06em] inline-block h-[0.62em] w-[0.3em] translate-y-[0.02em] animate-pulse bg-pd-green motion-reduce:animate-none" />
              )}
            </span>
          ))}
        </h1>

        <div className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
          <p className="hero-fade max-w-md text-lg leading-snug text-pd-bone/70 md:text-xl">
            The computer technology-focused college organization preparing students for industry
            practices in design and development.
          </p>
          <div className="hero-fade flex flex-wrap gap-3">
            <Link
              href="/join"
              className="inline-flex h-14 items-center rounded-full bg-pd-green px-8 text-lg font-bold text-pd-black transition-colors duration-200 hover:bg-pd-bone focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pd-green"
            >
              Join the Den
            </Link>
            <a
              href="#projects"
              className="inline-flex h-14 items-center rounded-full border border-white/25 px-8 text-lg font-semibold text-pd-bone transition-colors duration-200 hover:border-pd-bone focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pd-green"
            >
              See member projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
