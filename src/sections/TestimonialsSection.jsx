import SectionHeading from "../components/SectionHeading";
import TestimonialCard from "../components/TestimonialCard";
import { testimonials } from "../data/siteData";

function TestimonialsSection() {
  return (
    <section className="section-space">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Public Feedback"
          title="What People Commonly Notice About The Gym"
          description="These testimonial cards summarize visible review patterns from the gym's public listings and are meant to stay grounded and believable."
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
