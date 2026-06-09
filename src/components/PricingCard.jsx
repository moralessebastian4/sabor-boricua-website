import { Check } from "lucide-react";
import Button from "./Button";

export default function PricingCard({ plan }) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl border p-7 sm:p-8 ${
        plan.featured
          ? "border-electric bg-ink text-white shadow-glow"
          : "border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.04]"
      }`}
    >
      {plan.featured && (
        <span className="absolute right-6 top-0 -translate-y-1/2 rounded-full bg-teal px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-ink">
          Most popular
        </span>
      )}
      <h3 className="text-xl font-extrabold">{plan.name}</h3>
      <div className="mt-5 flex items-end gap-2">
        <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
        <span className={`pb-1 text-xs ${plan.featured ? "text-slate-400" : "text-slate-500"}`}>starting price</span>
      </div>
      <p className={`mt-5 min-h-[72px] text-sm leading-6 ${plan.featured ? "text-slate-300" : "text-slate-600 dark:text-slate-300"}`}>
        {plan.description}
      </p>
      <div className={`my-6 h-px ${plan.featured ? "bg-white/10" : "bg-slate-200 dark:bg-white/10"}`} />
      <ul className="mb-8 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm">
            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? "text-teal" : "text-electric"}`} />
            <span className={plan.featured ? "text-slate-200" : "text-slate-700 dark:text-slate-200"}>{feature}</span>
          </li>
        ))}
      </ul>
      <Button to="/contact" variant={plan.featured ? "light" : "primary"} className="w-full">
        Request This Package
      </Button>
    </article>
  );
}
