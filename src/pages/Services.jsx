import Button from "../components/Button";
import MotionSection from "../components/MotionSection";
import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/siteData";

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="The right website for the way you do business."
        description="From a focused landing page to a complete business website, every project is designed to make your offer clear and help customers take the next step."
      />
      <section className="section-space">
        <div className="container-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <MotionSection key={service.title} delay={(index % 3) * 0.08}>
              <ServiceCard service={service} index={index} />
            </MotionSection>
          ))}
        </div>
      </section>
      <section className="container-shell pb-24">
        <MotionSection className="grid items-center gap-10 rounded-[2rem] bg-mist p-8 dark:bg-navy sm:p-12 lg:grid-cols-[1fr_auto]">
          <div>
            <span className="eyebrow">Not sure what you need?</span>
            <h2 className="text-3xl font-extrabold tracking-tight">Tell me about your business. I’ll help you choose.</h2>
            <p className="body-copy mt-4 max-w-2xl">No technical vocabulary needed. A few simple details are enough to start.</p>
          </div>
          <Button to="/contact">Get a Recommendation</Button>
        </MotionSection>
      </section>
    </>
  );
}
