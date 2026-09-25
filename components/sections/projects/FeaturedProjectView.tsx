"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getProjects } from "@/lib/projects/getProjects";
import { getProjectImageUrl } from "@/lib/projects/utils";
import { Section, Reveal } from "@/components/shared/section";
import { TagList } from "@/components/shared/tag-list";

export default function FeaturedProjectsView() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadProjects();
  }, []);

  //removes the duplicate projects by youtube id and keep the newest by published_date
  const uniqueProjects: typeof projects = Object.values(
    projects.reduce((acc: Record<string, (typeof projects)[number]>, p) => {
      const key = p.id || `${p.title}-${p.published_date}`;
      if (!acc[key]) acc[key] = p;
      else {
        // prefer the most recent published_date when duplicates exist
        const existing = new Date(acc[key].published_date as any);
        const incoming = new Date(p.published_date as any);
        if (incoming > existing) acc[key] = p;
      }
      return acc;
    }, {})
  );

  //top 3, original order, only takes the 3 and then the rest of the showcase is organized by date
  //the top 3 ignores the date featured because if it's true, it's going to be featured
  const featuredSorted: typeof projects = uniqueProjects
    .filter((p) => Boolean(p.is_featured))
    .slice(0, 3);

  const featuredIds = new Set(featuredSorted.map((p) => p.id));

  const remainingSorted: typeof projects = uniqueProjects
    .filter((p) => !featuredIds.has(p.id))
    .sort(
      (a, b) =>
        new Date(b.published_date as any).getTime() -
        new Date(a.published_date as any).getTime()
    );

  const displayProjects: typeof projects = [
    ...featuredSorted,
    ...remainingSorted,
  ];

  return (
    <Section label="Featured work">
      <Reveal>
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <h2 className="display-lg">Latest projects</h2>
          {displayProjects.length ? (
            <p className="data-value pb-1 text-sm text-foreground/60">
              {String(displayProjects.length).padStart(2, "0")} total
            </p>
          ) : null}
        </div>

        <div className="mt-10 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {displayProjects.map((project, index) => (
            <article
              key={project.id ?? index}
              className="group flex flex-col bg-pd-black"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={getProjectImageUrl(project.embed_link, project.image_url)}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {project.is_featured && (
                  <p className="absolute left-0 top-0 bg-pd-green px-3 py-1.5 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-pd-void">
                    Featured
                  </p>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                {project.tags?.length ? <TagList tags={project.tags} /> : null}

                <h3 className="display-sm">{project.title}</h3>

                <p
                  className="prose-body line-clamp-3 text-[0.9375rem]"
                  title={project.description}
                >
                  {project.description}
                </p>

                <div className="mt-auto flex items-end justify-between gap-4 border-t border-white/10 pt-4">
                  <div className="min-w-0">
                    <p className="data-label">
                      {project.devs.length === 1 ? "Developer" : "Developers"}
                    </p>
                    <p className="mt-1 line-clamp-2 font-mono text-xs text-foreground/70">
                      {project.devs.join(", ")}
                    </p>
                  </div>

                  <Link
                    href={project.site_link || project.embed_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title}`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 text-foreground/70 transition-colors hover:border-pd-green hover:text-pd-green"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
