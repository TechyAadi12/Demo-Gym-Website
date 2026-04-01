import SectionHeading from "../components/SectionHeading";
import { galleryImages } from "../data/siteData";
import { motion } from "framer-motion";

function GallerySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="gallery" className="section-space bg-white/[0.02]">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Gallery"
          title="Show The Space, Energy, And Experience"
          description="This section is styled for a local gym showcase. Replace these representative visuals with actual photos from Fit Life GYM for stronger local trust."
          align="center"
        />

        <motion.div 
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryImages.map((item, index) => (
            <motion.article
              key={item.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px rgba(249, 115, 22, 0.2)",
                rotateY: 5
              }}
              style={{ perspective: 1000 }}
            >
              <motion.img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-80"
                whileHover={{ scale: 1.15, rotate: 2 }}
                transition={{ duration: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-5"
                initial={{ opacity: 0, y: 15 }}
                whileHover={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ember-300">
                      {item.tag}
                    </p>
                    <h3 className="mt-2 font-display text-xl uppercase tracking-wide text-white">
                      {item.title}
                    </h3>
                  </div>
                  <motion.span 
                    className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-zinc-200"
                    whileHover={{ scale: 1.15, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                  >
                    View
                  </motion.span>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default GallerySection;
