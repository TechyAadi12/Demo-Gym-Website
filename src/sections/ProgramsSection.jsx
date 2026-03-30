import SectionHeading from "../components/SectionHeading";
import ProgramCard from "../components/ProgramCard";
import { programs } from "../data/siteData";

function ProgramsSection() {
  return (
    <section id="programs" className="section-space bg-white/[0.02]">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Programs"
          title="Everything You Need To Get Stronger, Leaner, And Fitter"
          description="Each program is designed for local gym members who want practical coaching, visible results, and a routine they can actually maintain."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
