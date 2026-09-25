import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * The shell shared by /404Page and /recruitmentclose.
 *
 * Both pages say the same kind of thing — the door you tried is not open — so
 * they get the same shape: the status word at display size, the explanation
 * beneath it, one way forward. Left-aligned to the spine like every other page,
 * rather than floating in a centred card.
 */
export function StatusPage({
  code,
  headline,
  body,
}: {
  code: string;
  headline: string;
  body: string;
}) {
  return (
    <div className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden md:min-h-[calc(100svh-5rem)]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/assets/Star-3.png"
          alt=""
          width={520}
          height={520}
          className="animate-spin-slow absolute -right-24 top-[12%] h-[24rem] w-[24rem] object-contain opacity-[0.12] blur-sm"
          unoptimized
        />
        <Image
          src="/assets/Star-4.png"
          alt=""
          width={620}
          height={620}
          className="animate-spin-slow-reverse absolute -left-32 bottom-[6%] h-[28rem] w-[28rem] object-contain opacity-[0.1] blur-sm"
          unoptimized
        />
      </div>

      <div className="rail-x relative z-10 w-full py-20">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-6 shrink-0 bg-pd-green md:w-10" />
          <span className="data-label">Programmers&apos; Den</span>
        </div>

        <p className="display-xl mt-8 text-pd-green">{code}</p>

        <h1 className="display-md mt-8 max-w-[20ch]">{headline}</h1>

        <p className="prose-body mt-6">{body}</p>

        <Link
          href="/"
          className="group mt-12 inline-flex items-center gap-3 bg-pd-green px-8 py-4 font-mono text-xs uppercase tracking-[0.16em] text-pd-void transition-colors hover:bg-white"
        >
          Take me home
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
