"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Section, Reveal } from "@/components/shared/section";
import { TagList } from "@/components/shared/tag-list";
import { CarouselNav } from "@/components/shared/carousel-nav";
import { getFeatured } from "@/lib/projects/getFeatured";
import { getProjectImageUrl } from "@/lib/projects/utils";

export function FeaturedProjects() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [featuredProjects, setFeaturedProjects] = React.useState<any[]>([]);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getFeatured();
        setFeaturedProjects(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadProjects();
  }, []);

  React.useEffect(() => {
    if (!api || featuredProjects.length <= 1) return;

    const play = () => {
      stop();
      timeoutRef.current = setTimeout(() => {
        api.scrollNext();
      }, 10000); // 10 seconds for longer auto-play
    };

    const stop = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    play();
    api.on("pointerDown", stop);
    api.on("pointerUp", play);
    api.on("select", play);

    return () => {
      stop();
      api.off("pointerDown", stop);
      api.off("pointerUp", play);
      api.off("select", play);
    };
  }, [api, featuredProjects.length]);

  return (
    <Section label="Selected work">
      <Reveal>
        <div className="flex items-end justify-between gap-6 border-b border-white/10 pb-6">
          <h2 className="display-md">Featured projects</h2>
          <CarouselNav api={api} count={featuredProjects.length} />
        </div>

        <Carousel
          opts={{ align: "start", loop: featuredProjects.length > 1 }}
          setApi={setApi}
          className="mt-10"
        >
          <CarouselContent className="ml-0">
            {featuredProjects.map((project) => (
              <CarouselItem key={project.id} className="pl-0">
                <article className="grid md:grid-cols-2">
                  <div className="relative aspect-[4/3] w-full border border-white/10 md:aspect-auto md:min-h-[26rem]">
                    <Image
                      src={getProjectImageUrl(
                        project.embed_link,
                        project.image_url
                      )}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  {/* The record sits flush against the image — one object,
                      split into picture and spec sheet. */}
                  <div className="panel flex flex-col justify-center gap-6 border-t-0 p-8 md:border-t md:border-l-0 md:p-12">
                    <h3 className="display-sm">{project.title}</h3>

                    <p className="prose-body line-clamp-4 text-base">
                      {project.description}
                    </p>

                    {project.tags?.length ? (
                      <TagList tags={project.tags} />
                    ) : null}

                    <div className="border-t border-white/10 pt-6">
                      <p className="data-label">
                        {project.devs.length === 1 ? "Developer" : "Developers"}
                      </p>
                      <p className="mt-2 font-mono text-sm text-foreground/80">
                        {project.devs.join(", ")}
                      </p>
                    </div>

                    <Link
                      href={project.site_link || project.embed_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex w-fit items-center gap-2 border border-white/25 px-5 py-3 font-mono text-[0.6875rem] uppercase tracking-[0.16em] transition-colors hover:border-pd-green hover:text-pd-green"
                    >
                      View project
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Reveal>
    </Section>
  );
}
