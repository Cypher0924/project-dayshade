"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getCurrentShowcase } from "@/lib/projects/getCurrentShowcase";
import { Section, Reveal } from "@/components/shared/section";
import { TagList } from "@/components/shared/tag-list";

export default function MonthlyProjectShowcase() {
  const [project, setProject] = useState<any | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const showcase = await getCurrentShowcase();
        setProject(showcase);
      } catch (e) {
        console.error(e);
      }
    }
    load();
  }, []);

  if (!project) {
    return (
      <Section label="Project of the month">
        <p className="data-label">Loading project showcase…</p>
      </Section>
    );
  }

  return (
    <Section label="Project of the month">
      <Reveal>
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <h2 className="display-lg">Monthly spotlight</h2>
          <p className="data-value pb-1 text-sm text-foreground/60" suppressHydrationWarning>
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="panel mt-10 aspect-video w-full overflow-hidden">
          {project.embed_url ? (
            <iframe
              key={project.youtubeId}
              src={project.embed_url}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <p className="data-label">Invalid or missing YouTube link</p>
            </div>
          )}
        </div>

        <div className="mt-10 grid gap-10 border-t border-white/10 pt-8 md:grid-cols-[1.6fr_1fr] md:gap-16">
          <div>
            <h3 className="display-md">{project.title}</h3>
            <p className="prose-body mt-6 line-clamp-4 text-lg">
              {project.description}
            </p>
            <Link
              href={project.embed_link}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 border border-white/25 px-5 py-3 font-mono text-[0.6875rem] uppercase tracking-[0.16em] transition-colors hover:border-pd-green hover:text-pd-green"
            >
              View project details
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {project.tags?.length ? (
            <div>
              <p className="data-label">Stack</p>
              <TagList tags={project.tags} className="mt-3" />
            </div>
          ) : null}
        </div>
      </Reveal>
    </Section>
  );
}
