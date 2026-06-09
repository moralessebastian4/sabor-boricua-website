import { CheckCircle2 } from "lucide-react";
import Button from "./Button";

export default function CTA() {
  return (
    <section className="container-shell pb-20 sm:pb-24">
      <div className="noise relative overflow-hidden rounded-[2rem] bg-electric px-6 py-12 text-white shadow-glow sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14 lg:py-14">
        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-teal/30 blur-3xl" />
        <div className="relative max-w-2xl">
          <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-100">
            <CheckCircle2 className="h-4 w-4 text-teal" /> No-pressure conversation
          </p>
          <h2 className="text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
            Ready for a website that works as hard as you do?
          </h2>
          <p className="mt-4 max-w-xl text-blue-100">
            Tell me what you need. I’ll help you choose the right package and give you a clear next step.
          </p>
        </div>
        <Button to="/contact" variant="light" className="relative mt-7 w-full sm:w-auto lg:mt-0">
          Get a Free Quote
        </Button>
      </div>
    </section>
  );
}
