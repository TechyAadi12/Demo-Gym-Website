import SectionHeading from "../components/SectionHeading";
import PlanCard from "../components/PlanCard";
import { plans } from "../data/siteData";

function PlansSection() {
  return (
    <section id="plans" className="section-space">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Joining Options"
          title="Use The Listing To Confirm Current Membership Pricing"
          description="Public sources for this gym clearly show the business details, but not fixed package prices. These cards now guide visitors toward the latest official enquiry channels."
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
