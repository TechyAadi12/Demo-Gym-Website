import SectionHeading from "../components/SectionHeading";
import { gymInfo } from "../data/siteData";
import { motion } from "framer-motion";

function AboutSection() {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <section id="about" className="section-space">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div 
            className="card-surface overflow-hidden p-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-full rounded-[1.6rem] bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8 sm:p-10">
              <motion.p 
                className="text-sm font-semibold uppercase tracking-[0.24em] text-ember-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Why Members Stay
              </motion.p>
              <div className="mt-6 space-y-5">
                {[
                  "Clean, motivating training floor with strength and cardio zones.",
                  "Certified trainers who guide beginners without making them feel lost.",
                  "Affordable membership plans designed for students, working professionals, and families."
                ].map((item, i) => (
                  <motion.div 
                    key={item} 
                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.08)", borderColor: "rgba(249, 115, 22, 0.3)" }}
                  >
                    <span className="mt-1 h-3 w-3 rounded-full bg-ember-400" />
                    <p className="text-sm leading-7 text-zinc-200">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div>
            <SectionHeading
              eyebrow="About The Gym"
              title="Dominate Your Fitness Goals"
              description="Fit Life GYM brings cutting-edge equipment, expert trainers, and a supportive community to help you achieve your best physique."
            />

            <motion.div 
              className="mt-8 grid gap-5 sm:grid-cols-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {[
                { value: "500+", label: "Active Members" },
                { value: "2000 sqft", label: "Training Space" },
                { value: "20+", label: "Premium Equipment" }
              ].map((item, i) => (
                <motion.div 
                  key={item.label} 
                  className="card-surface p-5"
                  custom={i}
                  variants={statsVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.08)"
                  }}
                >
                  <motion.p 
                    className="font-display text-4xl uppercase tracking-wide text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    {item.value}
                  </motion.p>
                  <p className="mt-2 text-sm text-zinc-300">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="mt-8 rounded-[2rem] border border-ember-500/20 bg-gradient-to-r from-flare/10 to-ember-500/10 p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ borderColor: "rgba(249, 115, 22, 0.4)" }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ember-300">Our Location</p>
              <h3 className="mt-3 font-display text-4xl uppercase tracking-wide text-white">{gymInfo.locality}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-200">
                Centrally located for easy access. Find us on Google Maps or just call ahead to plan your visit. We're open for members all week.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
