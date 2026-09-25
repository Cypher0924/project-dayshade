import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/shared/section";
import { TagList } from "@/components/shared/tag-list";

const swatches = [
  { name: "pd-green", role: "Structure, progress, output", className: "bg-pd-green" },
  { name: "pd-purple", role: "People and membership", className: "bg-pd-purple" },
  { name: "background", role: "Page ground", className: "bg-background" },
  { name: "pd-black", role: "Panel surface", className: "bg-pd-black" },
  { name: "pd-dark-grey", role: "Raised / hover surface", className: "bg-pd-dark-grey" },
  { name: "pd-light-grey", role: "Metadata text", className: "bg-pd-light-grey" },
  { name: "foreground", role: "Prose", className: "bg-foreground" },
  { name: "destructive", role: "Errors only", className: "bg-destructive" },
];

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-white/10 py-12">
      <SectionLabel className="mb-8">{title}</SectionLabel>
      {children}
    </section>
  );
}

const page = () => {
  return (
    <div className="rail-x py-16">
      <h1 className="display-lg">Design System para di ka malito</h1>
      <p className="prose-lead mt-6">
        Three faces, three jobs. League Spartan is the brand shouting and is
        display only. Plex Sans carries prose. Plex Mono carries everything the
        organization measures — ranks, counts, years, dates, credits, tags.
      </p>

      <Block title="Display — League Spartan">
        <div className="space-y-6">
          <p className="display-xl">Display XL</p>
          <p className="display-lg">Display LG</p>
          <p className="display-md">Display MD</p>
          <p className="display-sm">Display SM</p>
        </div>
      </Block>

      <Block title="Prose — IBM Plex Sans">
        <p className="prose-lead">
          prose-lead — the one paragraph under a page heading.
        </p>
        <p className="prose-body mt-6">
          prose-body — body copy, capped at 62 characters so a line never runs
          past a comfortable measure no matter how wide the window gets.
        </p>
      </Block>

      <Block title="Data — IBM Plex Mono">
        <p className="data-label">data-label — every label on the site</p>
        <p className="data-value mt-4 text-5xl text-pd-green">1,240</p>
        <p className="data-value mt-2 text-sm text-pd-light-grey">
          data-value — tabular, so columns of numbers line up
        </p>
        <div className="mt-8">
          <TagList tags={["Next.js", "Supabase", "Three.js"]} />
        </div>
      </Block>

      <Block title="Colour roles">
        <ul className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {swatches.map((swatch) => (
            <li key={swatch.name} className="bg-pd-black p-4">
              <div className={`h-16 w-full ${swatch.className}`} />
              <p className="data-label mt-4">{swatch.name}</p>
              <p className="mt-2 text-sm text-foreground/60">{swatch.role}</p>
            </li>
          ))}
        </ul>
      </Block>

      <Block title="Surfaces">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="panel p-6">
            <p className="data-label">.panel</p>
            <p className="prose-body mt-2 text-sm">
              The default surface. Squared, hairline border, no shadow.
            </p>
          </div>
          <div className="glass-card p-6">
            <p className="data-label">.glass-card</p>
            <p className="prose-body mt-2 text-sm">
              Reserved for elements that genuinely overlap content — the header,
              and nothing else.
            </p>
          </div>
        </div>
      </Block>

      <Block title="Buttons">
        <div className="flex flex-wrap gap-3">
          <Button variant="default">default</Button>
          <Button variant="secondary">secondary</Button>
          <Button variant="outline">outline</Button>
          <Button variant="destructive">destructive</Button>
          <Button variant="ghost">ghost</Button>
          <Button variant="link">link</Button>
        </div>
        <p className="prose-body mt-6 text-sm">
          Page-level calls to action use the mint block treatment directly
          rather than the Button component: mono, uppercase, squared, no radius.
        </p>
      </Block>
    </div>
  );
};

export default page;
