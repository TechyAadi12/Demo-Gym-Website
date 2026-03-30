import { gymInfo, highlights, stats } from "../data/siteData";

function HeroSection() {
  return (
    <section id="home" className="overflow-hidden bg-hero-radial">
      <div className="section-shell section-space">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-reveal">
            <div className="inline-flex rounded-full border border-ember-500/30 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-ember-300">
              Premium Gym in {gymInfo.city}
            </div>
            <h1 className="mt-6 max-w-3xl font-display text-5xl uppercase leading-none tracking-wide text-white sm:text-6xl lg:text-8xl">
              Train Hard At One Of Susuwahi's Best-Rated Gyms
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
              Discover {gymInfo.name} in {gymInfo.area}, {gymInfo.city} for crossfit, strength workouts,
              trainer support, and a motivating local gym environment near Karamanvir School.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={gymInfo.primaryCtaHref} target="_blank" rel="noreferrer" className="btn-primary">
                {gymInfo.primaryCtaLabel}
              </a>
              <a href={gymInfo.secondaryCtaHref} target="_blank" rel="noreferrer" className="btn-secondary">
                {gymInfo.secondaryCtaLabel}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative lg:justify-self-end">
            <div className="absolute inset-0 -translate-x-2 translate-y-4 rounded-[2rem] bg-gradient-to-br from-flare/20 to-ember-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 p-5 shadow-2xl backdrop-blur-sm">
              <div className="rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className={`rounded-3xl border border-white/10 bg-white/5 p-5 ${
                        index === 0 ? "sm:col-span-2" : ""
                      }`}
                    >
                      <p className="font-display text-5xl uppercase tracking-wide text-white">{stat.value}</p>
                      <p className="mt-2 text-sm leading-6 text-zinc-300">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-3xl border border-ember-500/20 bg-gradient-to-r from-flare/10 to-ember-500/10 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-ember-300">
                    Find The Gym Fast
                  </p>
                  <p className="mt-3 font-display text-4xl uppercase tracking-wide text-white">
                    Near Karamanvir School
                  </p>
                  <p className="mt-2 text-sm leading-7 text-zinc-300">
                    Use the live map listing or the official website for directions, timings, and the latest enquiry details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
