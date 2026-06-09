import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Button({ to, children, variant = "primary", className = "", arrow = true }) {
  const styles = {
    primary:
      "bg-electric text-white shadow-lg shadow-electric/20 hover:-translate-y-0.5 hover:bg-blue-600",
    light: "bg-white text-ink hover:-translate-y-0.5 hover:bg-teal",
    outline:
      "border border-slate-300 bg-white/5 text-ink hover:border-electric hover:text-electric dark:border-white/20 dark:text-white dark:hover:border-teal dark:hover:text-teal",
  };

  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition duration-300 ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && <ArrowUpRight className="h-4 w-4" />}
    </Link>
  );
}
