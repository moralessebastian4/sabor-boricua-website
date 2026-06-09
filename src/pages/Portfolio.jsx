import MotionSection from "../components/MotionSection";
import PageHero from "../components/PageHero";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/siteData";

export default function Portfolio() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Modern website concepts for brands people remember."
        description="A look at the kinds of thoughtful, business-focused websites Morales Digital CT can create for local companies, creators, and service providers."
      />
      <section className="section-space">
        <div className="container-shell grid gap-x-8 gap-y-14 lg:grid-cols-2">
          {projects.map((project, index) => (
            <MotionSection key={project.title} delay={(index % 2) * 0.08}>
              <ProjectCard project={project} />
            </MotionSection>
          ))}
        </div>
      </section>
    </>
  );
}
