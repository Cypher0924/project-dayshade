"use client";

import Image from "next/image";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, OrthographicCamera } from "@react-three/drei";
import { PDLogo } from "@/components/logos/pd-logo";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

/**
 * The hero puts the tagline where the logo used to be. "Where great minds
 * compile" is the most characteristic thing this organization says about
 * itself, so it is set at the largest size on the site and the wordmark is
 * demoted to an identifying mark above it.
 */

// One orchestrated entrance for the whole hero rather than each element
// animating on its own timer.
const rise = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const sequence = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

function HomeHero() {
  return (
    <motion.section
      variants={sequence}
      initial="hidden"
      animate="show"
      className="rail-x relative pt-16 pb-20 md:pt-24 md:pb-28"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-8">
        <div className="order-2 lg:order-1">
          <motion.div
            variants={rise}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex items-center gap-3"
          >
            <span aria-hidden className="h-px w-6 shrink-0 bg-pd-green md:w-10" />
            <span className="data-label">
              Est. 2013 — Tarlac State University
            </span>
          </motion.div>

          <motion.div
            variants={rise}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-8"
          >
            <Image
              src="/assets/pd-banner.png"
              alt="Programmers' Den"
              width={1002}
              height={164}
              priority
              className="h-7 w-auto md:h-9"
            />
          </motion.div>

          <motion.h1
            variants={rise}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-6"
          >
            <span className="display-md block text-foreground/45">
              Where great minds
            </span>
            <span className="display-xl mt-1 block">
              Compile<span className="text-pd-green">.</span>
            </span>
          </motion.h1>
        </div>

        {/* The 3D mark the team built. Kept as the hero's second voice, sized
            so the headline still leads. */}
        <motion.div
          variants={rise}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="order-1 h-56 w-full sm:h-72 lg:order-2 lg:h-[26rem]"
        >
          <Canvas camera={{ position: [0, 0, 3], fov: 130 }}>
            <OrthographicCamera
              makeDefault
              position={[0, 5, 120]}
              zoom={40}
              near={0.1}
              far={1000}
            />
            <OrbitControls enableZoom={false} />
            <Environment preset="forest" />
            <PDLogo />
          </Canvas>
        </motion.div>
      </div>

      <motion.div
        variants={rise}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className="mt-14 flex flex-col gap-8 border-t border-white/10 pt-8 md:mt-20 md:flex-row md:items-start md:justify-between md:gap-16"
      >
        <p className="prose-lead">
          Programmer&apos;s Den - The computer technology-focused college
          organization preparing students for industry practices in Design and
          Development
        </p>

        <Link
          href="/join"
          className="group inline-flex shrink-0 items-center gap-3 bg-pd-green px-8 py-4 font-mono text-xs uppercase tracking-[0.16em] text-pd-void transition-colors hover:bg-white"
        >
          Join
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </motion.section>
  );
}

export default HomeHero;
