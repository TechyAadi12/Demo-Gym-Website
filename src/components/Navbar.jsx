import { useEffect, useState } from "react";
import { gymInfo, navLinks } from "../data/siteData";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      opacity: 0,
      x: -300,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.header
      className={`sticky top-0 z-50 transition duration-300 ${
        scrolled ? "border-b border-white/10 bg-zinc-950/90 backdrop-blur-md" : "bg-transparent"
      }`}
      animate={{ boxShadow: scrolled ? "0 10px 30px rgba(0, 0, 0, 0.3)" : "none" }}
    >
      <div className="section-shell">
        <nav className="flex items-center justify-between py-4">
          <motion.a 
            href="#home" 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-flare to-ember-500 font-display text-2xl shadow-glow"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              FL
            </motion.div>
            <div>
              <p className="font-display text-2xl uppercase tracking-wide text-white">
                {gymInfo.name}
              </p>
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">
                {gymInfo.area}, {gymInfo.city}
              </p>
            </div>
          </motion.a>

          <div className="hidden items-center gap-8 lg:flex">
            <div className="flex items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-zinc-300 transition hover:text-white"
                  custom={i}
                  variants={navVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.1, color: "#fff" }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <motion.a 
              href={gymInfo.primaryCtaHref} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {gymInfo.primaryCtaLabel}
            </motion.a>
          </div>

          <motion.button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-white transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 bg-white transition ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </motion.button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-zinc-950 px-6 pb-10 pt-28 lg:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="mx-auto flex h-full max-w-sm flex-col justify-between">
              <div className="space-y-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="block border-b border-white/10 pb-4 font-display text-4xl uppercase tracking-wide text-white"
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    whileHover={{ x: 10, color: "#fda857" }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.a
                  href={gymInfo.primaryCtaHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary flex w-full"
                  onClick={() => setOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {gymInfo.primaryCtaLabel}
                </motion.a>
                <motion.a
                  href={gymInfo.secondaryCtaHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary flex w-full"
                  onClick={() => setOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {gymInfo.secondaryCtaLabel}
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
