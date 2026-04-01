import { gymInfo } from "../data/siteData";
import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";

function ContactSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <section id="contact" className="section-space">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Location & Contact"
              title="Visit Us Today"
              description="Located in the heart of Lucknow, we're just a call or message away. Drop by anytime to see our facilities and meet the team."
            />

            <motion.div 
              className="mt-8 space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {[
                {
                  label: "Address",
                  content: gymInfo.address,
                  href: null,
                },
                {
                  label: "Phone",
                  content: gymInfo.phoneDisplay,
                  href: gymInfo.phoneHref,
                },
                {
                  label: "Opening Hours",
                  content: "Mon - Fri: 6AM - 10PM\nSat - Sun: 7AM - 8PM",
                  href: null,
                },
              ].map((item, i) => (
                <motion.div 
                  key={item.label}
                  className="card-surface p-5"
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "rgba(255, 255, 255, 0.08)"
                  }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ember-400">
                    {item.label}
                  </p>
                  {item.href ? (
                    <motion.a
                      href={item.href}
                      className="mt-3 block text-lg font-semibold text-white hover:text-ember-400 transition"
                      whileHover={{ x: 5 }}
                    >
                      {item.content}
                    </motion.a>
                  ) : (
                    <p className="mt-3 text-sm leading-7 text-zinc-200 whitespace-pre-line">
                      {item.content}
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.a 
                href={gymInfo.primaryCtaHref} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-primary inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View on Google Maps
              </motion.a>
            </motion.div>
          </div>

          <motion.div 
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2"
            initial={{ opacity: 0, x: 50, rotateY: 30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ perspective: 1200 }}
            whileHover={{ boxShadow: "0 30px 60px rgba(249, 115, 22, 0.2)" }}
          >
            <motion.iframe
              title="Gym location map"
              src={gymInfo.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full rounded-[1.5rem] border-0 sm:h-full sm:min-h-[540px]"
              whileHover={{ scale: 1.02 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
