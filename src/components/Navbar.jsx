import { useEffect, useState } from "react";
import { gymInfo, navLinks } from "../data/siteData";

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

  return (
    <header
      className={`sticky top-0 z-50 transition duration-300 ${
        scrolled ? "border-b border-white/10 bg-zinc-950/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="section-shell">
        <nav className="flex items-center justify-between py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-flare to-ember-500 font-display text-2xl shadow-glow">
              IP
            </div>
            <div>
              <p className="font-display text-2xl uppercase tracking-wide text-white">
                {gymInfo.name}
              </p>
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">
                {gymInfo.area}, {gymInfo.city}
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-zinc-300 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a href={gymInfo.whatsappHref} target="_blank" rel="noreferrer" className="btn-primary">
              Join Now
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 lg:hidden"
            onClick={() => setOpen((value) => !value)}
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
          </button>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-zinc-950 px-6 pb-10 pt-28 transition lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-auto flex h-full max-w-sm flex-col justify-between">
          <div className="space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block border-b border-white/10 pb-4 font-display text-4xl uppercase tracking-wide text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-4">
            <a
              href={gymInfo.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="btn-primary flex w-full"
              onClick={() => setOpen(false)}
            >
              Join on WhatsApp
            </a>
            <a href={gymInfo.phoneHref} className="btn-secondary flex w-full" onClick={() => setOpen(false)}>
              Call {gymInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
