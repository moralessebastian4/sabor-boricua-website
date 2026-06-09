import MotionSection from "../components/MotionSection";
import PageHero from "../components/PageHero";
import PricingCard from "../components/PricingCard";
import { pricing } from "../data/siteData";

export default function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Simple pricing"
        title="Professional options for real small-business budgets."
        description="Choose a starting package that fits your goals. Every website includes responsive design, a clear process, and help getting online."
      />
      <section className="section-space">
        <div className="container-shell">
          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            {pricing.map((plan, index) => (
              <MotionSection key={plan.name} delay={index * 0.08}>
                <PricingCard plan={plan} />
              </MotionSection>
            ))}
          </div>
          <MotionSection className="mx-auto mt-9 max-w-2xl rounded-2xl border border-slate-200 bg-mist px-6 py-4 text-center text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
            Final pricing depends on project size, features, and content needed. You’ll receive a clear quote before the project begins.
          </MotionSection>
        </div>
      </section>
    </>
  );
}
