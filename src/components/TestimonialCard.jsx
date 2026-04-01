import { motion } from "framer-motion";

function TestimonialCard({ name, result, quote }) {
  return (
    <motion.article 
      className="card-surface h-full p-6"
      initial={{ opacity: 0, y: 40, rotateY: 30 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: "spring" }}
      whileHover={{
        rotateY: -5,
        rotateX: 5,
        scale: 1.02,
        boxShadow: "0 25px 50px rgba(249, 115, 22, 0.2)"
      }}
      style={{ perspective: 1200 }}
    >
      <motion.p 
        className="text-base leading-7 text-zinc-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        "{quote}"
      </motion.p>
      <motion.div 
        className="mt-6 border-t border-white/10 pt-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="font-semibold text-white">{name}</p>
        <p className="mt-1 text-sm text-ember-400">{result}</p>
      </motion.div>
    </motion.article>
  );
}

export default TestimonialCard;
