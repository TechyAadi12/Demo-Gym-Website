import SectionHeading from "../components/SectionHeading";
import PlanCard from "../components/PlanCard";
import { plans } from "../data/siteData";

function PlansSection() {
  return (
    <section id="plans" className="section-space">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Membership Plans"
          title="Affordable Pricing For Consistent Training"
          description="Clear pricing helps reduce friction and gets more people to take action. Replace these sample rates with your client's latest membership offers."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlansSection;
