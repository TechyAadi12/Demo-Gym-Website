import { gymInfo } from "../data/siteData";
import { motion } from "framer-motion";

function FloatingActions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50, scale: 0 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.div 
      className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.a
        href={gymInfo.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Open Google Maps listing"
        variants={itemVariants}
        whileHover={{ 
          scale: 1.15,
          rotate: 10,
          boxShadow: "0_30px_60px_rgba(22,163,74,0.5)"
        }}
        whileTap={{ scale: 0.95 }}
        className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-green-400 to-green-600 text-white shadow-[0_16px_35px_rgba(22,163,74,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(22,163,74,0.45)]"
      >
        <motion.span 
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/12"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5 fill-current"
          >
            <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.62 2 2.2 6.41 2.2 11.85c0 1.74.45 3.45 1.3 4.96L2 22l5.35-1.4a9.8 9.8 0 0 0 4.68 1.19h.01c5.41 0 9.83-4.41 9.83-9.85a9.8 9.8 0 0 0-2.82-7.03Zm-7.02 15.21h-.01a8.13 8.13 0 0 1-4.14-1.14l-.3-.18-3.18.83.85-3.1-.2-.32a8.16 8.16 0 0 1-1.25-4.35c0-4.5 3.68-8.17 8.21-8.17 2.19 0 4.24.85 5.79 2.39a8.1 8.1 0 0 1 2.4 5.78c0 4.5-3.68 8.18-8.17 8.18Zm4.48-6.12c-.25-.12-1.47-.72-1.7-.8-.23-.08-.4-.12-.57.12-.17.25-.66.8-.81.97-.15.17-.3.19-.56.06-.25-.12-1.07-.39-2.04-1.25-.75-.67-1.27-1.49-1.42-1.74-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.88-.21-.49-.42-.42-.57-.43h-.49c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.06 0 1.22.89 2.39 1.01 2.55.12.17 1.75 2.67 4.24 3.75.59.26 1.06.42 1.42.54.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z" />
          </svg>
        </motion.span>
      </motion.a>
      <motion.a
        href={gymInfo.phoneHref}
        aria-label={`Call ${gymInfo.name}`}
        variants={itemVariants}
        whileHover={{ 
          scale: 1.15,
          rotate: -10,
          boxShadow: "0_30px_60px_rgba(249,115,22,0.5)"
        }}
        whileTap={{ scale: 0.95 }}
        className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-flare to-ember-500 text-white shadow-[0_16px_35px_rgba(239,68,68,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(249,115,22,0.45)]"
      >
        <motion.span 
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/12"
          whileHover={{ rotate: -360 }}
          transition={{ duration: 0.6 }}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5 fill-current"
          >
            <path d="M6.62 10.79a15.54 15.54 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z" />
          </svg>
        </motion.span>
      </motion.a>
    </motion.div>
  );
}

export default FloatingActions;
