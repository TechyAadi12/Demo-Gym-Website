import SectionHeading from "../components/SectionHeading";
import PlanCard from "../components/PlanCard";
import { plans } from "../data/siteData";

function PlansSection() {
  return (
    <section id="plans" className="section-space">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Joining Options"
          title="Choose Your Membership"
          description="Flexible plans designed for every fitness goal. Start your transformation today with affordable, no-hassle membership options."
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
