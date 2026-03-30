import SectionHeading from "../components/SectionHeading";
import { galleryImages } from "../data/siteData";

function GallerySection() {
  return (
    <section id="gallery" className="section-space bg-white/[0.02]">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Gallery"
          title="Show The Space, Energy, And Experience"
          description="This section is styled for a local gym showcase. Replace these representative training visuals with actual Red Rock Gym photos from the business listing for the strongest trust boost."
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <img
              src={galleryImages[0].image}
              alt={galleryImages[0].title}
              loading="lazy"
              className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className="inline-flex rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-ember-300">
                {galleryImages[0].tag}
              </span>
              <h3 className="mt-4 font-display text-4xl uppercase tracking-wide text-white sm:text-5xl">
                {galleryImages[0].title}
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-7 text-zinc-200 sm:text-base">
                Give local visitors a quick sense of the setup, training intensity, and overall workout environment before they decide to visit.
              </p>
            </div>
          </article>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {galleryImages.slice(1).map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-72"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ember-300">
                        {item.tag}
                      </p>
                      <h3 className="mt-2 font-display text-2xl uppercase tracking-wide text-white">
                        {item.title}
                      </h3>
                    </div>
                    <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-zinc-200">
                      View
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
