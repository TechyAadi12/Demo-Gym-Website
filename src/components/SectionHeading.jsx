import { motion } from "framer-motion";

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment =
    align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";

  return (
    <motion.div 
      className={alignment}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.p 
        className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-ember-400"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2 
        className="font-display text-4xl uppercase tracking-wide text-white sm:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h2>
      <motion.p 
        className="mt-4 text-sm leading-7 text-zinc-300 sm:text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

export default SectionHeading;
