import { gymInfo } from "../data/siteData";

function PlanCard({ name, price, period, description, features, popular }) {
  return (
    <article
      className={`relative rounded-[2rem] border p-7 transition duration-300 hover:-translate-y-1 ${
        popular
          ? "border-ember-500/60 bg-gradient-to-b from-white/10 to-ember-500/10 shadow-glow"
          : "border-white/10 bg-white/5"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-flare to-ember-500 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-white">
          Most Popular
        </div>
      )}
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ember-400">{name}</p>
      <div className="mt-5 flex items-end gap-2">
        <span className="font-display text-5xl uppercase tracking-wide text-white">{price}</span>
        <span className="pb-2 text-sm text-zinc-400">{period}</span>
      </div>
      <p className="mt-4 text-sm leading-7 text-zinc-300">{description}</p>
      <ul className="mt-6 space-y-3 text-sm text-zinc-200">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-ember-400" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a href={gymInfo.primaryCtaHref} target="_blank" rel="noreferrer" className="btn-primary mt-8 flex w-full">
        {gymInfo.primaryCtaLabel}
      </a>
    </article>
  );
}

export default PlanCard;
