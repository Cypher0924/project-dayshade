"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { SectionLabel } from "@/components/shared/section";

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const sequence = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

function PerksHero() {
  return (
    <motion.section
      variants={sequence}
      initial="hidden"
      animate="show"
      className="rail-x pt-16 pb-16 md:pt-24 md:pb-24"
    >
      <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <motion.div
            variants={rise}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <SectionLabel>Membership</SectionLabel>
          </motion.div>

          <motion.h1
            variants={rise}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="display-lg mt-8"
          >
            Sign up for exclusive{" "}
            <span className="text-pd-green">membership perks</span>
          </motion.h1>

          <motion.p
            variants={rise}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="prose-lead mt-8"
          >
            Join our community of passionate programmers and unlock amazing
            benefits
          </motion.p>

          <motion.div
            variants={rise}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-10"
          >
            <Link
              href="/join"
              className="group inline-flex items-center gap-3 bg-pd-green px-8 py-4 font-mono text-xs uppercase tracking-[0.16em] text-pd-void transition-colors hover:bg-white"
            >
              Get started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={rise}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <Image
            src="/assets/perks-pics/perks-1.png"
            alt="Programmers' Den members at an event"
            width={1000}
            height={600}
            priority
            className="w-full object-contain"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default PerksHero;
