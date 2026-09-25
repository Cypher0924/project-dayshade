"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { CarouselApi } from "@/components/ui/carousel";

/**
 * Carousel controls: position, then prev/next. The counter is real state
 * (which slide of how many), which is why it earns a place in the layout —
 * unlike a row of dots, it tells you the size of what you are browsing.
 *
 * Embla is an external store, so it is read with useSyncExternalStore rather
 * than mirrored into React state.
 */
export function CarouselNav({
  api,
  count,
}: {
  api: CarouselApi | undefined;
  count: number;
}) {
  const subscribe = React.useCallback(
    (onStoreChange: () => void) => {
      if (!api) return () => {};
      api.on("reInit", onStoreChange);
      api.on("select", onStoreChange);
      return () => {
        api.off("reInit", onStoreChange);
        api.off("select", onStoreChange);
      };
    },
    [api]
  );

  const selected = React.useSyncExternalStore(
    subscribe,
    () => (api?.selectedScrollSnap() ?? 0) + 1,
    () => 1
  );

  if (count <= 1) return null;

  return (
    <div className="flex shrink-0 items-center gap-5">
      <span className="data-value text-xs text-foreground/60">
        {String(selected).padStart(2, "0")}
        <span className="mx-1 text-white/25">/</span>
        {String(count).padStart(2, "0")}
      </span>

      <div className="flex">
        <button
          type="button"
          onClick={() => api?.scrollPrev()}
          aria-label="Previous slide"
          className="flex h-10 w-10 items-center justify-center border border-white/15 text-foreground/70 transition-colors hover:border-pd-green hover:text-pd-green"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => api?.scrollNext()}
          aria-label="Next slide"
          className="-ml-px flex h-10 w-10 items-center justify-center border border-white/15 text-foreground/70 transition-colors hover:border-pd-green hover:text-pd-green"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
