import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "../data/siteData";
import MotionSection from "./MotionSection";

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-space bg-mist dark:bg-navy/45">
      <div className="container-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
        <MotionSection>
          <span className="eyebrow">Common questions</span>
          <h2 className="section-title">Straight answers, no technical confusion.</h2>
          <p className="body-copy mt-5">
            You do not need to know web design to get a great website. I’ll guide you through the process.
          </p>
        </MotionSection>
        <MotionSection className="divide-y divide-slate-200 border-y border-slate-200 dark:divide-white/10 dark:border-white/10">
          {faqs.map((item, index) => {
            const isOpen = active === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 py-6 text-left"
                >
                  <span className="font-bold">{item.question}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-electric transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
                  <p className="overflow-hidden pr-10 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </MotionSection>
      </div>
    </section>
  );
}
