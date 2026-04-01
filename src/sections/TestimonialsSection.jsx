import SectionHeading from "../components/SectionHeading";
import TestimonialCard from "../components/TestimonialCard";
import { testimonials } from "../data/siteData";
import { motion } from "framer-motion";

function TestimonialsSection() {
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
    <section className="section-space">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Public Feedback"
          title="What People Commonly Notice About The Gym"
          description="These testimonial cards summarize visible review patterns from the gym's public listings and are meant to stay grounded and believable."
          align="center"
        />

        <motion.div 
          className="mt-12 grid gap-5 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
