import { motion } from "framer-motion";

function ProgramCard({ title, icon, description }) {
  return (
    <motion.article 
      className="card-surface group p-6 transition duration-300 hover:-translate-y-1 hover:border-ember-500/40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        rotateY: 10,
        rotateX: -5,
        scale: 1.05,
        boxShadow: "0 25px 50px rgba(249, 115, 22, 0.2)"
      }}
      style={{ perspective: 1200 }}
    >
      <motion.div 
        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-flare/90 to-ember-500/90 font-display text-2xl uppercase tracking-wide text-white"
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.8 }}
      >
        {icon}
      </motion.div>
      <h3 className="mt-6 font-display text-3xl uppercase tracking-wide text-white">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-zinc-300">{description}</p>
    </motion.article>
  );
}

export default ProgramCard;
