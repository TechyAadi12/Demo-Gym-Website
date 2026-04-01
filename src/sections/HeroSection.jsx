import { gymInfo, highlights, stats } from "../data/siteData";
import { motion } from "framer-motion";

function HeroSection() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="overflow-hidden bg-hero-radial">
      <div className="section-shell section-space">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div 
            className="animate-reveal"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex rounded-full border border-ember-500/30 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-ember-300"
            >
              Premium Fitness in {gymInfo.city}
            </motion.div>
            <motion.h1 
              variants={itemVariants}
              className="mt-6 max-w-3xl font-display text-5xl uppercase leading-none tracking-wide text-white sm:text-6xl lg:text-8xl"
            >
              Your Journey To Peak Fitness Starts Here
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg"
            >
              Experience world-class equipment, expert trainers, and a community dedicated to your success. {gymInfo.name} is your ultimate fitness destination in {gymInfo.city}.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <motion.a 
                href={gymInfo.primaryCtaHref} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-primary"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(239, 68, 68, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Us
              </motion.a>
              <motion.a 
                href={gymInfo.secondaryCtaHref} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Directions
              </motion.a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-3"
            >
              {highlights.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-200"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative lg:justify-self-end"
            initial={{ opacity: 0, rotateY: 40, x: 50 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ perspective: 1200 }}
          >
            <motion.div 
              className="absolute inset-0 -translate-x-2 translate-y-4 rounded-[2rem] bg-gradient-to-br from-flare/20 to-ember-500/20 blur-3xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 p-5 shadow-2xl backdrop-blur-sm"
              whileHover={{ boxShadow: "0 30px 60px rgba(249, 115, 22, 0.2)" }}
            >
              <div className="rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: 10,
                        backgroundColor: "rgba(255, 255, 255, 0.08)"
                      }}
                      className={`rounded-3xl border border-white/10 bg-white/5 p-5 ${
                        index === 0 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <motion.p 
                        className="font-display text-5xl uppercase tracking-wide text-white"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        {stat.value}
                      </motion.p>
                      <p className="mt-2 text-sm leading-6 text-zinc-300">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  className="mt-5 rounded-3xl border border-ember-500/20 bg-gradient-to-r from-flare/10 to-ember-500/10 p-5"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ borderColor: "rgba(249, 115, 22, 0.4)" }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-ember-300">
                    Find The Gym Fast
                  </p>
                  <p className="mt-3 font-display text-4xl uppercase tracking-wide text-white">
                    Lucknow, Uttar Pradesh
                  </p>
                  <p className="mt-2 text-sm leading-7 text-zinc-300">
                    Open the live map listing for navigation, business lookup, and the most current contact or timing updates.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
