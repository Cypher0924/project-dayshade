"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * The spine.
 *
 * A hairline running the full height of the viewport in the left gutter, with
 * a mint segment that tracks how far down the document you are. It is the one
 * element carried across every page: content aligns to it, section labels
 * reach toward it, and it is the only thing on the site that reports state
 * rather than decorating.
 *
 * Driven entirely by a motion value, so scrolling never triggers a React
 * render.
 */
export function Spine() {
  const { scrollYProgress } = useScroll();

  // Springing the raw progress keeps the fill from twitching on trackpads
  // without introducing a lag you can notice.
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-y-0 z-30 w-px bg-white/10"
      style={{ left: "calc(var(--rail) - var(--spine-gap))" }}
    >
      <motion.div
        className="h-full w-full origin-top bg-pd-green"
        style={{ scaleY: progress }}
      />
    </div>
  );
}
