import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { contact } from "../data/contact";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#040b14] py-14 text-white">
      <div className="container-shell">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_.8fr_.8fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Modern, mobile-friendly websites for Connecticut small businesses and local brands.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Explore</p>
            <div className="grid gap-3 text-sm text-slate-300">
              <Link to="/services" className="hover:text-teal">Services</Link>
              <Link to="/pricing" className="hover:text-teal">Pricing</Link>
              <Link to="/portfolio" className="hover:text-teal">Portfolio</Link>
              <Link to="/contact" className="hover:text-teal">Contact</Link>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Connect</p>
            <div className="grid gap-3 text-sm text-slate-300">
              <a href={contact.phoneHref} className="flex items-center gap-2 hover:text-teal">
                <Phone className="h-4 w-4" /> {contact.phoneDisplay}
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-teal">
                <Mail className="h-4 w-4" /> {contact.email}
              </a>
              <a href={contact.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-teal">
                <Instagram className="h-4 w-4" /> {contact.instagramHandle}
              </a>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Connecticut</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Morales Digital CT. All rights reserved.</p>
          <p>Built with care in Connecticut.</p>
        </div>
      </div>
    </footer>
  );
}
