"use client";

import { useEffect, useState } from "react";
import { getCurrentShowcase } from "@/lib/projects/getCurrentShowcase";
import { Section, Reveal } from "@/components/shared/section";
import { TagList } from "@/components/shared/tag-list";

export function MonthlyShowcase() {
  const [project, setProject] = useState<any | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await getCurrentShowcase();
        setProject(data);
      } catch (e) {
        console.error(e);
      }
    }
    load();
  }, []);

  if (!project) {
    return (
      <Section label="Monthly project showcase">
        <p className="data-label">Loading project showcase…</p>
      </Section>
    );
  }

  return (
    <Section label="Monthly project showcase">
      <Reveal>
        <h2 className="display-md max-w-4xl">{project.title}</h2>

        <div className="panel mt-10 aspect-video w-full overflow-hidden">
          <iframe
            key={project.youtubeId}
            src={project.embed_url}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>

        {/* The record beneath the work: prose on the left, everything the
            organization measures on the right. */}
        <div className="mt-10 grid gap-10 border-t border-white/10 pt-8 md:grid-cols-[1.6fr_1fr] md:gap-16">
          <p className="prose-body line-clamp-4">{project.description}</p>

          <dl className="space-y-6">
            <div>
              <dt className="data-label">
                {project.devs.length === 1 ? "Developer" : "Developers"}
              </dt>
              <dd className="mt-2 font-mono text-sm leading-relaxed text-foreground/80">
                {project.devs.join(", ")}
              </dd>
            </div>
            {project.tags?.length ? (
              <div>
                <dt className="data-label">Stack</dt>
                <dd className="mt-3">
                  <TagList tags={project.tags} />
                </dd>
              </div>
            ) : null}
          </dl>
        </div>
      </Reveal>
    </Section>
  );
}
