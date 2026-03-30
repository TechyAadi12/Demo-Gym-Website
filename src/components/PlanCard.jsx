import { gymInfo } from "../data/siteData";

function PlanCard({ name, price, period, description, features, popular }) {
  return (
    <article
      className={`relative rounded-[2rem] border p-8 transition duration-300 hover:-translate-y-2 ${
        popular
          ? "border-ember-500/60 bg-gradient-to-b from-white/15 to-ember-500/15 shadow-glow scale-105 lg:scale-100 lg:shadow-[0_20px_40px_rgba(239,68,68,0.3)]"
          : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-8 rounded-full bg-gradient-to-r from-flare to-ember-500 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-lg">
          Most Popular
        </div>
      )}
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ember-400">{name}</p>
      <div className="mt-6 flex items-end gap-2">
        <span className="font-display text-6xl font-bold text-white">{price}</span>
        <span className="pb-3 text-sm text-zinc-400">/ {period}</span>
      </div>
      <p className="mt-5 text-sm leading-6 text-zinc-300">{description}</p>
      <ul className="mt-7 space-y-3 text-sm">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-b from-ember-400 to-flare flex-shrink-0" />
            <span className="text-zinc-200">{feature}</span>
          </li>
        ))}
      </ul>
      <a href={gymInfo.primaryCtaHref} target="_blank" rel="noreferrer" className="btn-primary mt-8 flex w-full justify-center">
        Join Now
      </a>
    </article>
  );
}

export default PlanCard;
