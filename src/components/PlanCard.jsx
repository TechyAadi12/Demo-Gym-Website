import { gymInfo } from "../data/siteData";
import { motion } from "framer-motion";

function PlanCard({ name, price, period, description, features, popular }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50, rotateX: 20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        y: -10,
        rotateY: 5,
        rotateX: -5,
        boxShadow: "0 30px 60px rgba(239, 68, 68, 0.3)"
      }}
      style={{ perspective: 1200 }}
      className={`relative rounded-[2rem] border p-8 transition duration-300 hover:-translate-y-2 ${
        popular
          ? "border-ember-500/60 bg-gradient-to-b from-white/15 to-ember-500/15 shadow-glow scale-105 lg:scale-100 lg:shadow-[0_20px_40px_rgba(239,68,68,0.3)]"
          : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
      }`}
    >
      {popular && (
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute -top-4 left-8 rounded-full bg-gradient-to-r from-flare to-ember-500 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-lg"
        >
          Most Popular
        </motion.div>
      )}
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ember-400">{name}</p>
      <div className="mt-6 flex items-end gap-2">
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="font-display text-6xl font-bold text-white"
        >
          {price}
        </motion.span>
        <span className="pb-3 text-sm text-zinc-400">/ {period}</span>
      </div>
      <p className="mt-5 text-sm leading-6 text-zinc-300">{description}</p>
      <ul className="mt-7 space-y-3 text-sm">
        {features.map((feature, index) => (
          <motion.li 
            key={feature} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
            className="flex items-start gap-3"
          >
            <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-b from-ember-400 to-flare flex-shrink-0" />
            <span className="text-zinc-200">{feature}</span>
          </motion.li>
        ))}
      </ul>
      <motion.a 
        href={gymInfo.primaryCtaHref} 
        target="_blank" 
        rel="noreferrer" 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn-primary mt-8 flex w-full justify-center"
      >
        Join Now
      </motion.a>
    </motion.article>
  );
}

export default PlanCard;
