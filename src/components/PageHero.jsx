import MotionSection from "./MotionSection";

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-mist py-20 dark:bg-navy sm:py-24">
      <div className="absolute right-[-8rem] top-[-10rem] h-80 w-80 rounded-full bg-teal/20 blur-3xl" />
      <div className="container-shell relative">
        <MotionSection className="max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="display-title">{title}</h1>
          <p className="body-copy mt-6 max-w-2xl">{description}</p>
        </MotionSection>
      </div>
    </section>
  );
}
