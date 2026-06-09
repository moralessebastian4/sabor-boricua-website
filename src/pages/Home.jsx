import { ArrowDown, Check, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import FAQ from "../components/FAQ";
import MotionSection from "../components/MotionSection";
import ProjectCard from "../components/ProjectCard";
import ServiceCard from "../components/ServiceCard";
import { processSteps, projects, services, trustItems } from "../data/siteData";

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[570px]"
    >
      <div className="absolute -left-8 top-14 h-44 w-44 rounded-full bg-electric/30 blur-3xl" />
      <div className="absolute -right-8 bottom-4 h-40 w-40 rounded-full bg-teal/20 blur-3xl" />
      <div className="relative rotate-[1.5deg] overflow-hidden rounded-[1.6rem] border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur">
        <div className="overflow-hidden rounded-[1.2rem] bg-white text-ink">
          <div className="flex h-9 items-center gap-1.5 border-b border-slate-100 px-4">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="ml-3 h-4 w-32 rounded-full bg-slate-100" />
          </div>
          <div className="grid min-h-[390px] lg:grid-cols-[1.1fr_.9fr]">
            <div className="flex flex-col justify-between p-7 sm:p-9">
              <div>
                <div className="mb-9 flex items-center gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-ink text-[8px] font-extrabold text-teal">LO</span>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider">Local Oak Co.</span>
                </div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-electric">Built for your neighborhood</p>
                <h3 className="mt-3 text-3xl font-extrabold leading-[1.05] tracking-[-0.05em] sm:text-4xl">
                  Good work.<br />Clearly shown.
                </h3>
                <p className="mt-4 max-w-[230px] text-xs leading-5 text-slate-500">
                  A focused website that helps local customers understand, trust, and choose your business.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <span className="rounded-lg bg-electric px-4 py-2.5 text-[9px] font-bold text-white">Get an estimate</span>
                <span className="text-[9px] font-bold">See our work →</span>
              </div>
            </div>
            <div className="relative hidden overflow-hidden bg-[#d7eee8] lg:block">
              <div className="absolute -right-10 top-8 h-56 w-56 rounded-full border-[36px] border-white/40" />
              <div className="absolute bottom-0 left-7 right-0 top-16 rounded-tl-[4rem] bg-ink p-6 text-white">
                <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Sparkles className="h-5 w-5 text-teal" />
                  <p className="mt-8 text-2xl font-extrabold tracking-tight">Modern.</p>
                  <p className="text-2xl font-extrabold tracking-tight text-teal">Fast.</p>
                  <p className="text-2xl font-extrabold tracking-tight">Local.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-7 -left-3 rounded-2xl border border-white/15 bg-ink/90 p-4 text-white shadow-xl backdrop-blur sm:-left-8"
      >
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-teal/15 text-teal"><Check className="h-4 w-4" /></span>
          <div><p className="text-[10px] text-slate-400">Designed to look great</p><p className="text-xs font-bold">On every screen</p></div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <section className="noise relative overflow-hidden bg-ink pb-20 pt-16 text-white sm:pb-24 sm:pt-20 lg:min-h-[760px] lg:pt-24">
        <div className="hero-grid absolute inset-0 bg-grid" />
        <div className="absolute left-[12%] top-12 h-72 w-72 rounded-full bg-electric/15 blur-3xl" />
        <div className="container-shell relative grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-300">
              <MapPin className="h-3.5 w-3.5 text-teal" /> Serving businesses across Connecticut
            </div>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[4.75rem]">
              Professional Websites for <span className="gradient-text">Local Businesses</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Morales Digital CT builds clean, mobile-friendly websites that help small businesses look professional, get found online, and turn visitors into customers.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact" variant="light">Get a Free Quote</Button>
              <Button to="/services" variant="outline" className="border-white/20 !text-white hover:!border-teal hover:!text-teal">View Services</Button>
            </div>
            <a href="#why" className="mt-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500 hover:text-teal">
              See why clients choose us <ArrowDown className="h-4 w-4" />
            </a>
          </motion.div>
          <HeroVisual />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-6 dark:border-white/10 dark:bg-ink">
        <div className="container-shell grid grid-cols-2 gap-5 lg:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3">
                <Icon className="h-5 w-5 shrink-0 text-electric dark:text-teal" />
                <span className="text-xs font-bold sm:text-sm">{item.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section id="why" className="section-space">
        <div className="container-shell grid items-start gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <MotionSection>
            <span className="eyebrow">Why Morales Digital CT?</span>
            <h2 className="section-title">A better website experience, without the agency runaround.</h2>
            <p className="body-copy mt-6">
              You deserve a website that feels professional and a process that feels simple. I work closely with local businesses to build the right site, explain the details clearly, and get it online.
            </p>
            <Button to="/contact" className="mt-8">Let's Talk About Your Site</Button>
          </MotionSection>
          <MotionSection className="grid gap-4 sm:grid-cols-2">
            {[
              ["01", "Clear communication", "Straightforward updates and simple explanations from start to finish."],
              ["02", "Built around your business", "Your goals, customers, and personality shape the design."],
              ["03", "Strong on every screen", "Every page is carefully designed for phones, tablets, and desktops."],
              ["04", "Launch help included", "I help connect the technical pieces so your site is ready for customers."],
            ].map(([number, title, text]) => (
              <div key={number} className="card p-6">
                <span className="text-xs font-extrabold text-electric dark:text-teal">{number}</span>
                <h3 className="mt-8 text-lg font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p>
              </div>
            ))}
          </MotionSection>
        </div>
      </section>

      <section className="section-space bg-mist dark:bg-navy/45">
        <div className="container-shell">
          <MotionSection className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow">What I build</span>
              <h2 className="section-title">A focused service for every kind of local business.</h2>
            </div>
            <Button to="/services" variant="outline">View All Services</Button>
          </MotionSection>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service, index) => (
              <MotionSection key={service.title} delay={index * 0.08}><ServiceCard service={service} index={index} /></MotionSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <MotionSection className="max-w-2xl">
            <span className="eyebrow">Selected concepts</span>
            <h2 className="section-title">Websites designed to feel like the business behind them.</h2>
          </MotionSection>
          <div className="mt-12 grid gap-x-7 gap-y-12 lg:grid-cols-2">
            {projects.slice(0, 2).map((project, index) => (
              <MotionSection key={project.title} delay={index * 0.08}><ProjectCard project={project} /></MotionSection>
            ))}
          </div>
          <MotionSection className="mt-12 text-center">
            <Button to="/portfolio" variant="outline">See the Full Portfolio</Button>
          </MotionSection>
        </div>
      </section>

      <section className="section-space bg-ink text-white">
        <div className="container-shell">
          <MotionSection className="max-w-xl">
            <span className="eyebrow !text-teal">Simple process</span>
            <h2 className="section-title">From first idea to live website.</h2>
          </MotionSection>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
            {processSteps.map((step) => (
              <MotionSection key={step.number} className="bg-ink p-8 sm:p-10">
                <span className="text-4xl font-extrabold text-teal/30">{step.number}</span>
                <h3 className="mt-10 text-xl font-extrabold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
}
