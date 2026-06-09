import { Clock3, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import MotionSection from "../components/MotionSection";
import PageHero from "../components/PageHero";
import { contact } from "../data/contact";

const websiteTypes = [
  "Business website",
  "Restaurant / menu website",
  "Portfolio website",
  "Landing page",
  "Website redesign",
  "Not sure yet",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Website quote request from ${form.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nEmail: ${form.get("email")}\nPhone: ${form.get("phone")}\nBusiness: ${form.get("business")}\nWebsite type: ${form.get("type")}\nBudget: ${form.get("budget")}\n\nProject details:\n${form.get("message")}`,
    );
    setSubmitted(true);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <PageHero
        eyebrow="Start a project"
        title="Tell me what you need. Let's make it clear and professional."
        description="Share a few details about your business and the website you have in mind. I’ll review your request and respond with a simple next step."
      />
      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[.68fr_1.32fr]">
          <MotionSection>
            <span className="eyebrow">Contact details</span>
            <h2 className="text-3xl font-extrabold tracking-tight">Local help, easy communication.</h2>
            <p className="body-copy mt-5">
              You do not need a complete plan. Tell me what your business does and what you want the website to help with.
            </p>
            <div className="mt-9 space-y-4">
              <a href={contact.phoneHref} className="card flex items-center gap-4 p-5 hover:border-electric/30">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-electric/10 text-electric dark:text-teal"><Phone className="h-5 w-5" /></span>
                <div><p className="text-xs text-slate-500">Phone</p><p className="text-sm font-bold">{contact.phoneDisplay}</p></div>
              </a>
              <a href={`mailto:${contact.email}`} className="card flex items-center gap-4 p-5 hover:border-electric/30">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-electric/10 text-electric dark:text-teal"><Mail className="h-5 w-5" /></span>
                <div><p className="text-xs text-slate-500">Email</p><p className="break-all text-sm font-bold">{contact.email}</p></div>
              </a>
              <a href={contact.instagramUrl} target="_blank" rel="noreferrer" className="card flex items-center gap-4 p-5 hover:border-electric/30">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-electric/10 text-electric dark:text-teal"><Instagram className="h-5 w-5" /></span>
                <div><p className="text-xs text-slate-500">Instagram</p><p className="text-sm font-bold">{contact.instagramHandle}</p></div>
              </a>
              <div className="card flex items-center gap-4 p-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-electric/10 text-electric dark:text-teal"><MapPin className="h-5 w-5" /></span>
                <div><p className="text-xs text-slate-500">Location</p><p className="text-sm font-bold">Connecticut</p></div>
              </div>
              <div className="card flex items-center gap-4 p-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-electric/10 text-electric dark:text-teal"><Clock3 className="h-5 w-5" /></span>
                <div><p className="text-xs text-slate-500">Response time</p><p className="text-sm font-bold">Usually responds within 24 hours</p></div>
              </div>
            </div>
          </MotionSection>

          <MotionSection className="card p-6 sm:p-9">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-electric dark:text-teal">Free quote request</p>
              <h2 className="mt-2 text-2xl font-extrabold">A few details to get started</h2>
            </div>
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold">
                Name *
                <input className="field font-normal" type="text" name="name" placeholder="Your name" required />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Email *
                <input className="field font-normal" type="email" name="email" placeholder="you@email.com" required />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Phone
                <input className="field font-normal" type="tel" name="phone" placeholder="Your phone number" />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Business name
                <input className="field font-normal" type="text" name="business" placeholder="Your business" />
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Type of website *
                <select className="field font-normal" name="type" required defaultValue="">
                  <option value="" disabled>Select one</option>
                  {websiteTypes.map((type) => <option key={type}>{type}</option>)}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Budget range *
                <select className="field font-normal" name="budget" required defaultValue="">
                  <option value="" disabled>Select a range</option>
                  <option>$250-$449</option>
                  <option>$450-$749</option>
                  <option>$750-$1,200</option>
                  <option>$1,200+</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold sm:col-span-2">
                Tell me about your project *
                <textarea className="field min-h-36 resize-y font-normal" name="message" placeholder="What does your business do, and what would you like the website to help you accomplish?" required />
              </label>
              <div className="sm:col-span-2">
                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-electric px-5 py-4 text-sm font-bold text-white transition hover:bg-blue-600 sm:w-auto">
                  Send Quote Request <Send className="h-4 w-4" />
                </button>
                {submitted && <p className="mt-3 text-xs text-slate-500">Your email app should open with the project details ready to send.</p>}
              </div>
            </form>
          </MotionSection>
        </div>
      </section>
    </>
  );
}
