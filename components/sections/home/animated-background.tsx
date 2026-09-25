"use client";

import Image from "next/image";
import { motion, useReducedMotion, type TargetAndTransition } from "motion/react";

/**
 * Ambient layer.
 *
 * The previous version drifted forty shapes across the page. This keeps the
 * same brand assets but reduces them to three, scaled up and pushed far back,
 * so they read as depth behind the type rather than as confetti in front of
 * it.
 */
const shapes: {
  src: string;
  className: string;
  drift: TargetAndTransition;
  duration: number;
}[] = [
  {
    src: "/assets/circle-green.png",
    className: "-left-40 top-[8%] h-[34rem] w-[34rem]",
    drift: { y: [0, -28, 0] },
    duration: 26,
  },
  {
    src: "/assets/circle-purple.png",
    className: "-right-48 top-[38%] h-[40rem] w-[40rem]",
    drift: { y: [0, 34, 0] },
    duration: 34,
  },
  {
    src: "/assets/Star-1-full.png",
    className: "left-[45%] bottom-[4%] h-[30rem] w-[30rem]",
    drift: { rotate: [0, 360] },
    duration: 120,
  },
];

export default function AnimatedBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.src + shape.className}
          className={`absolute opacity-[0.13] blur-2xl ${shape.className}`}
          animate={reduceMotion ? undefined : shape.drift}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            src={shape.src}
            alt=""
            fill
            sizes="40rem"
            className="object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
}
