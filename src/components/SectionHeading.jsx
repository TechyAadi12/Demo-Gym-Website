function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment =
    align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";

  return (
    <div className={alignment}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-ember-400">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl uppercase tracking-wide text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-zinc-300 sm:text-base">
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;
