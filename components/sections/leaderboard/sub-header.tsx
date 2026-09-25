import Image from "next/image";
import { SectionLabel } from "@/components/shared/section";

const SubHeader = () => {
  return (
    <section className="rail-x pt-16 md:pt-24">
      <SectionLabel>Standings</SectionLabel>

      {/* Co-branded event: two marks, joined. */}
      <div className="mt-8 flex items-center gap-3">
        <Image
          src="/assets/pd-logo.png"
          alt="Programmers' Den"
          width={52}
          height={35}
          className="h-8 w-auto"
        />
        <span aria-hidden className="font-mono text-sm text-pd-light-grey">
          ×
        </span>
        <Image
          src="/assets/csc-logo.png"
          alt="CCS Student Council"
          width={52}
          height={35}
          className="h-8 w-auto"
        />
      </div>

      {/* Not uppercased: the inner caps in "QuiCCStions" are the CCS pun, and
          the display class would flatten them. */}
      <h1 className="display-xl mt-6 normal-case">QuiCCStions Overdrive</h1>
      <p className="prose-lead mt-6">Check who&apos;s winning the race!</p>
    </section>
  );
};

export default SubHeader;
