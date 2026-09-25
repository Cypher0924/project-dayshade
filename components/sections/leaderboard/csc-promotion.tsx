import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/shared/section";

const CSCPromotion = () => {
  return (
    <section className="rail-x pb-24 md:pb-32">
      <SectionLabel className="mb-8">In partnership with</SectionLabel>

      <div className="panel grid items-center gap-8 p-6 md:grid-cols-[auto_1fr] md:gap-12 md:p-10">
        <Image
          src="https://graph.facebook.com/TSUCCSSC/picture?width=450&height=450"
          alt="CCS Student Council"
          width={350}
          height={350}
          quality={100}
          className="h-40 w-40 object-cover md:h-52 md:w-52"
        />

        <div>
          <p className="data-label">
            For updates, follow the official CCS Student Council Page!
          </p>
          <p className="prose-body mt-4 text-lg">
            Official FB page for the TSU College of Computer Studies Student
            Council located at the San Isidro Extension Campus of TSU!
          </p>
          <p className="mt-4 font-mono text-sm text-pd-purple">#RedHawks 🦅</p>

          <Link
            href="https://www.facebook.com/TSUCCSSC"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 border border-white/25 px-5 py-3 font-mono text-[0.6875rem] uppercase tracking-[0.16em] transition-colors hover:border-pd-green hover:text-pd-green"
          >
            Visit official page
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CSCPromotion;
