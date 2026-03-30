function TestimonialCard({ name, result, quote }) {
  return (
    <article className="card-surface h-full p-6">
      <p className="text-base leading-7 text-zinc-200">"{quote}"</p>
      <div className="mt-6 border-t border-white/10 pt-5">
        <p className="font-semibold text-white">{name}</p>
        <p className="mt-1 text-sm text-ember-400">{result}</p>
      </div>
    </article>
  );
}

export default TestimonialCard;
