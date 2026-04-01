import SectionHeading from "../components/SectionHeading";
import PlanCard from "../components/PlanCard";
import { plans } from "../data/siteData";
import { motion } from "framer-motion";

function PlansSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section id="plans" className="section-space">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Joining Options"
          title="Choose Your Membership"
          description="Flexible plans designed for every fitness goal. Start your transformation today with affordable, no-hassle membership options."
          align="center"
        />

        <motion.div 
          className="mt-12 grid gap-6 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default PlansSection;
