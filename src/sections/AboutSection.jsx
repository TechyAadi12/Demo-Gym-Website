import SectionHeading from "../components/SectionHeading";

function AboutSection() {
  return (
    <section id="about" className="section-space">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="card-surface overflow-hidden p-2">
            <div className="h-full rounded-[1.6rem] bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-ember-400">Why Members Stay</p>
              <div className="mt-6 space-y-5">
                {[
                  "Clean, motivating training floor with strength and cardio zones.",
                  "Certified trainers who guide beginners without making them feel lost.",
                  "Affordable membership plans designed for students, working professionals, and families."
                ].map((item) => (
                  <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <span className="mt-1 h-3 w-3 rounded-full bg-ember-400" />
                    <p className="text-sm leading-7 text-zinc-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="About The Gym"
              title="Built For Real Results And Real Schedules"
              description="Iron Pulse Fitness is a modern local gym focused on practical transformation. We help college students, working adults, and beginners train consistently with expert guidance, smart programming, and a welcoming atmosphere."
            />

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {[
                { value: "2018", label: "Established" },
                { value: "3", label: "Certified trainers" },
                { value: "6 Days", label: "Open for action" }
              ].map((item) => (
                <div key={item.label} className="card-surface p-5">
                  <p className="font-display text-4xl uppercase tracking-wide text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-zinc-300">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[2rem] border border-ember-500/20 bg-gradient-to-r from-flare/10 to-ember-500/10 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ember-300">Head Trainer</p>
              <h3 className="mt-3 font-display text-4xl uppercase tracking-wide text-white">Rajat Singh</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-200">
                Strength coach with 8+ years of experience helping local members improve physique, confidence,
                mobility, and sustainable fitness habits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
