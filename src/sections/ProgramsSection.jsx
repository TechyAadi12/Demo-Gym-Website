import SectionHeading from "../components/SectionHeading";
import ProgramCard from "../components/ProgramCard";
import { programs } from "../data/siteData";
import { motion } from "framer-motion";

function ProgramsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section id="programs" className="section-space bg-white/[0.02]">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Programs"
          title="Everything You Need To Get Stronger, Leaner, And Fitter"
          description="Each program is designed for local gym members who want practical coaching, visible results, and a routine they can actually maintain."
          align="center"
        />

        <motion.div 
          className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ProgramsSection;
