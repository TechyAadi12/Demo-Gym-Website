function ProgramCard({ title, icon, description }) {
  return (
    <article className="card-surface group p-6 transition duration-300 hover:-translate-y-1 hover:border-ember-500/40">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-flare/90 to-ember-500/90 font-display text-2xl uppercase tracking-wide text-white">
        {icon}
      </div>
      <h3 className="mt-6 font-display text-3xl uppercase tracking-wide text-white">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-zinc-300">{description}</p>
    </article>
  );
}

export default ProgramCard;
