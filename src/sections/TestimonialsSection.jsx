import SectionHeading from "../components/SectionHeading";
import TestimonialCard from "../components/TestimonialCard";
import { testimonials } from "../data/siteData";

function TestimonialsSection() {
  return (
    <section className="section-space">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted By Members Who Wanted Visible Change"
          description="Simple, believable reviews work better than over-designed testimonial sliders. These cards keep the message sharp and mobile-friendly."
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
