"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getProjectImageUrl } from "@/lib/project-utils";
import { gsap, useGSAP } from "@/lib/gsap";

export type FeaturedProject = {
  id: string | number;
  title: string;
  description: string;
  devs: string[];
  tags: string[];
  embed_link?: string;
  image_url?: string;
  site_link?: string;
};

export function FeaturedProjects({ projects }: { projects: FeaturedProject[] }) {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!track.current) return; // no projects rendered
      const mm = gsap.matchMedia();
      // The one scroll moment: on wide screens the section pins and the cards slide sideways.
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const el = track.current!;
        const distance = () => Math.max(0, el.scrollWidth - window.innerWidth);
        gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    { scope: root, dependencies: [projects.length] }
  );

  if (projects.length === 0) return null;

  return (
    <section
      ref={root}
      id="projects"
      className="overflow-hidden border-t border-white/10 py-24 md:flex md:h-[100svh] md:flex-col md:justify-center md:py-0"
    >
      <div className="mb-10 flex items-end justify-between gap-6 px-5 md:px-12">
        <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.035em] text-pd-bone">
          Built by members
        </h2>
        <Link
          href="/projects"
          className="shrink-0 text-lg font-semibold text-pd-green underline-offset-4 hover:underline"
        >
          All projects
        </Link>
      </div>

      <div
        ref={track}
        className="flex flex-col gap-12 px-5 md:w-max md:flex-row md:gap-8 md:px-12"
      >
        {projects.map((project) => {
          const href = project.site_link || project.embed_link;
          return (
            <article key={project.id} className="md:w-[min(58vw,760px)]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-pd-banner-mid md:aspect-auto md:h-[46svh]">
                <Image
                  src={getProjectImageUrl(project.embed_link, project.image_url)}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <h3 className="text-2xl font-bold leading-tight text-pd-bone md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 max-w-[60ch] text-base leading-snug text-pd-bone/65 md:text-lg">
                    {project.description}
                  </p>
                  <p className="mt-3 text-sm text-[#d49cf0]">{project.devs.join(", ")}</p>
                </div>
                {href && (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="grid size-12 shrink-0 place-items-center rounded-full border border-white/25 text-pd-bone transition-colors duration-200 hover:border-pd-green hover:bg-pd-green hover:text-pd-black"
                  >
                    <ArrowUpRight className="size-5" />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
