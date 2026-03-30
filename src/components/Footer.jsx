import { gymInfo, navLinks } from "../data/siteData";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="section-shell py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl uppercase tracking-wide text-white">{gymInfo.name}</p>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-ember-400">{gymInfo.tagline}</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-400">
              A high-energy local gym template designed to help serious fitness centers convert more calls,
              WhatsApp chats, and walk-in visits.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">Quick Links</p>
            <div className="mt-5 space-y-3">
              {navLinks.slice(0, 5).map((link) => (
                <a key={link.href} href={link.href} className="block text-sm text-zinc-400 transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">Contact</p>
            <div className="mt-5 space-y-3 text-sm text-zinc-400">
              <a href={gymInfo.phoneHref} target="_blank" rel="noreferrer" className="block transition hover:text-white">
                {gymInfo.phoneDisplay}
              </a>
              <p>{gymInfo.address}</p>
              <a
                href={gymInfo.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-white"
              >
                Open Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex sm:items-center sm:justify-between">
          <p>Copyright © 2026 {gymInfo.name}. All rights reserved.</p>
          <p className="mt-3 sm:mt-0">Designed by Elevate Local Studio</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
