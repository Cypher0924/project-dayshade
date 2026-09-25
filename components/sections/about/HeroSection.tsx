"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { technologies } from "@/data/technologies";
import { SectionLabel } from "@/components/shared/section";

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const sequence = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export default function HeroSection() {
  return (
    <motion.section
      variants={sequence}
      initial="hidden"
      animate="show"
      className="rail-x pt-16 pb-20 md:pt-24 md:pb-28"
    >
      <motion.div
        variants={rise}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <SectionLabel>About the organization</SectionLabel>
      </motion.div>

      <motion.h1
        variants={rise}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className="display-xl mt-8"
      >
        Only the <span className="text-pd-green">best</span>
        <br />
        among the rest
      </motion.h1>

      <motion.div
        variants={rise}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className="mt-14 grid gap-10 border-t border-white/10 pt-10 md:mt-20 md:grid-cols-[1fr_1fr] md:gap-16"
      >
        <Image
          src="/assets/about-pics/about-hero-img.png"
          alt="Programmers' Den members"
          width={1200}
          height={800}
          priority
          className="w-full"
        />

        <div>
          <h2 className="display-md">
            Elite programmers from BSIT, BSIS and BSCS
          </h2>
          <p className="prose-body mt-6">
            We are the Programmers&apos; Den, an organization of Tarlac State
            University - College of Computer Studies that was founded in 2013.
          </p>
          <p className="prose-body mt-4">
            The organization focuses on design and programming-related
            activities, competitions, and development projects. Our goal is to
            enhance its member capabilities to learn, adapt, and perform in
            desired skillsets.
          </p>
        </div>
      </motion.div>

      {/* The toolchain, presented as an inventory rather than a decorative
          badge wall. */}
      <motion.div
        variants={rise}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className="mt-16 md:mt-24"
      >
        <h2 className="data-label">
          Utilizing the latest technologies beyond the classroom
        </h2>
        <ul className="mt-5 grid grid-cols-3 gap-px bg-white/10 sm:grid-cols-5 lg:grid-cols-9">
          {technologies.map((tech) => (
            <li
              key={tech.id}
              className="flex aspect-square items-center justify-center bg-pd-black p-4 transition-colors hover:bg-pd-dark-grey/40"
            >
              <Image
                className="h-8 w-8 object-contain sm:h-10 sm:w-10"
                src={tech.icon}
                alt={tech.alt}
                width={64}
                height={64}
              />
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.section>
  );
}
