import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const Icon = project.icon;
  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-3xl bg-slate-100 dark:bg-white/5">
        <img
          src={project.image}
          alt={`${project.title} website concept`}
          className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
        <Link
          to="/contact"
          className="absolute bottom-5 right-5 flex translate-y-3 items-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-bold text-ink opacity-0 shadow-lg transition group-hover:translate-y-0 group-hover:opacity-100"
        >
          View Demo <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="flex items-start justify-between gap-6 px-1 pt-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-electric dark:text-teal">{project.category}</p>
          <h3 className="mt-2 text-xl font-extrabold tracking-tight">{project.title}</h3>
          <p className="mt-2 max-w-lg text-sm leading-6 text-slate-600 dark:text-slate-300">{project.summary}</p>
        </div>
        <span className={`mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full ${project.accent} text-ink`}>
          <Icon className="h-4 w-4" />
        </span>
      </div>
    </article>
  );
}
