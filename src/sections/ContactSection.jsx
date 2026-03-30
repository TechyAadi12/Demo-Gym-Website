import { gymInfo } from "../data/siteData";
import SectionHeading from "../components/SectionHeading";

function ContactSection() {
  return (
    <section id="contact" className="section-space">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Location & Contact"
              title="Visit Us Today"
              description="Located in the heart of Jaunpur, we're just a call or message away. Drop by anytime to see our facilities and meet the team."
            />

            <div className="mt-8 space-y-4">
              <div className="card-surface p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ember-400">Address</p>
                <p className="mt-3 text-sm leading-7 text-zinc-200">{gymInfo.address}</p>
              </div>

              <div className="card-surface p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ember-400">Phone</p>
                <a
                  href={gymInfo.phoneHref}
                  className="mt-3 block text-lg font-semibold text-white hover:text-ember-400 transition"
                >
                  09653009682
                </a>
              </div>

              <div className="card-surface p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ember-400">Opening Hours</p>
                <p className="mt-3 text-sm leading-7 text-zinc-200">Mon - Fri: 6AM - 10PM<br />Sat - Sun: 7AM - 8PM</p>
              </div>
            </div>

            <div className="mt-8">
              <a href={gymInfo.primaryCtaHref} target="_blank" rel="noreferrer" className="btn-primary inline-block">
                View on Google Maps
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2">
            <iframe
              title="Gym location map"
              src={gymInfo.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full rounded-[1.5rem] border-0 sm:h-full sm:min-h-[540px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
