import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServiceCard({ service, index }) {
  const Icon = service.icon;
  return (
    <article className="card group flex h-full flex-col p-7 hover:-translate-y-1 hover:border-electric/30">
      <div className="mb-10 flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-electric/10 text-electric dark:bg-teal/10 dark:text-teal">
          <Icon className="h-5 w-5" />
        </span>
        <span className="text-xs font-bold text-slate-300 dark:text-slate-600">0{index + 1}</span>
      </div>
      <h3 className="text-xl font-extrabold tracking-tight">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.description}</p>
      <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-electric dark:text-teal">
        Ask about this <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
