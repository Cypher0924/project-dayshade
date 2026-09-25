"use client";

import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Briefcase,
  Code,
  Gamepad2,
  Info,
  Palette,
  Smartphone,
  Users,
} from "lucide-react";
import SocialLinksSection from "./social-links";
import { Section, Reveal } from "@/components/shared/section";

const teams = [
  { icon: Code, name: "Competitive Programming Team" },
  { icon: Palette, name: "Multimedia Team" },
  { icon: Smartphone, name: "Web and App Development Team" },
  { icon: Gamepad2, name: "Game Development Team" },
];

const reasons = [
  {
    icon: Briefcase,
    title: "Get industry experience",
    body: "Learn how professionals in the industry work and prepare yourself as Programmers Den operates under industry standards.",
  },
  {
    icon: Users,
    title: "Collaborate with senior programmers",
    body: "Get trained by your mentors and learn to manage projects with other skilled members.",
  },
  {
    icon: Brain,
    title: "Use AI technology",
    body: "We see AI as a tool to improve and innovate. Learn how to use modern technologies like AI to become a better programmer.",
  },
];

export default function ConnectWithUsSection() {
  return (
    <>
      <SocialLinksSection />

      <Section label="Divisions">
        <Reveal>
          <div className="flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
            <h2 className="display-lg">Work with us!</h2>
            <p className="data-label pb-1">All Red Hawks are welcome</p>
          </div>

          {/* The four divisions. A 1px grid gap on a light background gives the
              cells shared hairlines, so they read as one table rather than four
              floating cards. */}
          <ul className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {teams.map(({ icon: Icon, name }) => (
              <li
                key={name}
                className="flex min-h-[11rem] flex-col justify-between bg-pd-black p-6 transition-colors hover:bg-pd-dark-grey/40"
              >
                <Icon className="h-5 w-5 text-pd-green" aria-hidden />
                <h3 className="display-sm text-lg leading-tight md:text-xl">
                  {name}
                </h3>
              </li>
            ))}
          </ul>

          <ul className="mt-px grid gap-px bg-white/10 md:grid-cols-3">
            {reasons.map(({ icon: Icon, title, body }) => (
              <li key={title} className="bg-pd-black p-8">
                <Icon className="h-5 w-5 text-pd-purple" aria-hidden />
                <h3 className="display-sm mt-6 text-lg md:text-xl">{title}</h3>
                <p className="prose-body mt-4 text-[0.9375rem]">{body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/join"
              className="group inline-flex items-center justify-center gap-3 bg-pd-green px-8 py-4 font-mono text-xs uppercase tracking-[0.16em] text-pd-void transition-colors hover:bg-white"
            >
              Sign up
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-3 border border-white/25 px-8 py-4 font-mono text-xs uppercase tracking-[0.16em] transition-colors hover:border-pd-green hover:text-pd-green"
            >
              <Info className="h-4 w-4" />
              About us
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
