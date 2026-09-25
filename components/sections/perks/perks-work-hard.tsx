"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Section, Reveal } from "@/components/shared/section";
import { CarouselNav } from "@/components/shared/carousel-nav";

const images = [
  { src: "/assets/perks-pics/perks-6.png", alt: "Virtual Dive" },
  { src: "/assets/perks-pics/perks-7.png", alt: "Super Smash Bros." },
  { src: "/assets/perks-pics/perks-8.png", alt: "Tekken" },
  { src: "/assets/perks-pics/perks-5.png", alt: "PD Session" },
];

function PerksWorkHard() {
  const [api, setApi] = React.useState<CarouselApi>();
  // Lazy state keeps one stable instance that is safe to read during render;
  // useRef(Autoplay(...)) both re-created the plugin every render and required
  // reading .current mid-render.
  const [plugin] = React.useState(() =>
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <Section label="Team building">
      <Reveal>
        <div className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="display-lg">
              Work hard.
              <br />
              <span className="text-pd-green">Play hard.</span>
            </h2>
            <p className="prose-lead mt-6">
              Celebrate gaming as a platform. Engage in exciting organization
              Team Building activities that sprout teamwork and healthy
              competition.
            </p>
          </div>
          <CarouselNav api={api} count={images.length} />
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          plugins={[plugin]}
          className="mt-10"
        >
          <CarouselContent className="-ml-px">
            {images.map((image, index) => (
              <CarouselItem
                key={image.src}
                className="basis-full pl-px sm:basis-1/2 lg:basis-1/3"
              >
                <figure className="bg-pd-black">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                  <figcaption className="data-label p-4">
                    {image.alt}
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Reveal>
    </Section>
  );
}

export default PerksWorkHard;
