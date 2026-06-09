import { Link } from "react-router-dom";

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Morales Digital CT home">
      <span
        className={`grid h-10 w-10 place-items-center rounded-xl border text-sm font-extrabold transition group-hover:-rotate-3 ${
          light
            ? "border-white/20 bg-white/10 text-teal"
            : "border-electric/15 bg-electric/10 text-electric dark:border-white/15 dark:bg-white/10 dark:text-teal"
        }`}
      >
        MD
      </span>
      <span className="leading-tight">
        <span className={`block text-sm font-extrabold tracking-tight ${light ? "text-white" : "text-ink dark:text-white"}`}>
          Morales Digital
        </span>
        <span className={`block text-[10px] font-bold uppercase tracking-[0.24em] ${light ? "text-slate-400" : "text-slate-500 dark:text-slate-400"}`}>
          Connecticut
        </span>
      </span>
    </Link>
  );
}
