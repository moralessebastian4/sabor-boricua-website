import {
  AppWindow,
  BriefcaseBusiness,
  Camera,
  ChefHat,
  Dumbbell,
  Globe2,
  LayoutPanelTop,
  Paintbrush,
  RefreshCw,
  Rocket,
  Scissors,
  Utensils,
} from "lucide-react";

export const services = [
  {
    icon: BriefcaseBusiness,
    title: "Business Websites",
    description:
      "A polished online home for your business that clearly explains what you do and makes it easy for customers to reach you.",
  },
  {
    icon: Utensils,
    title: "Restaurant & Menu Websites",
    description:
      "Show off your food, hours, location, and menu with a fast mobile experience your customers can use anywhere.",
  },
  {
    icon: Camera,
    title: "Portfolio Websites",
    description:
      "A clean, visual website for creators and professionals who need their work to make a strong first impression.",
  },
  {
    icon: LayoutPanelTop,
    title: "Landing Pages",
    description:
      "A focused single page built to promote one service, event, product, or campaign and turn attention into action.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesigns",
    description:
      "Give an outdated or confusing site a modern look, clearer message, and a much better experience on phones.",
  },
  {
    icon: Globe2,
    title: "Domain & Deployment Setup",
    description:
      "Get help connecting your domain, putting your site online, and making sure everything works before launch.",
  },
];

export const pricing = [
  {
    name: "Starter Website",
    price: "$250+",
    description: "Best for personal brands, portfolios, or simple single-page businesses.",
    features: [
      "1-page website",
      "Mobile-friendly design",
      "Contact section",
      "Basic SEO setup",
      "Deployed online",
    ],
  },
  {
    name: "Business Website",
    price: "$450+",
    description: "Best for small businesses that need a professional online presence.",
    featured: true,
    features: [
      "3-5 custom pages",
      "Home, Services, About & Contact",
      "Mobile-friendly design",
      "Contact form",
      "Social media links",
      "Domain connection help",
      "Basic SEO setup",
    ],
  },
  {
    name: "Premium Website",
    price: "$750+",
    description: "Best for restaurants, service businesses, or brands that need more.",
    features: [
      "5-7 custom pages",
      "Custom content sections",
      "Menu or service showcase",
      "Image gallery",
      "Contact form",
      "Google Maps section",
      "Domain setup help",
      "Deployment included",
      "More polished visual design",
    ],
  },
];

export const projects = [
  {
    title: "Sabor Boricua",
    category: "Restaurant website",
    image: "/images/sabor-boricua.jpg",
    icon: ChefHat,
    accent: "bg-rose-500",
    summary: "A warm, modern restaurant site designed to make the menu and reservations easy to find.",
  },
  {
    title: "Ironwood Barbershop",
    category: "Local barbershop demo",
    image: "/images/barbershop.jpg",
    icon: Scissors,
    accent: "bg-amber-500",
    summary: "A bold local service site built around appointments, services, and a premium first impression.",
  },
  {
    title: "Altitude Performance",
    category: "Fitness coach landing page",
    image: "/images/fitness-coach.jpg",
    icon: Dumbbell,
    accent: "bg-lime-400",
    summary: "A focused landing page that turns a coach's offer and results into a clear next step.",
  },
  {
    title: "Solstice Photography",
    category: "Photography portfolio demo",
    image: "/images/photography.jpg",
    icon: Paintbrush,
    accent: "bg-emerald-500",
    summary: "An editorial portfolio that lets the photography lead while keeping inquiries close at hand.",
  },
];

export const faqs = [
  {
    question: "How long does a website take?",
    answer:
      "Most smaller websites take about 1-3 weeks once the content is ready. Larger projects may take longer, and you will always get a clear timeline before work begins.",
  },
  {
    question: "Do I need to already own a domain?",
    answer:
      "No. If you already have one, I can help connect it. If not, I can guide you through choosing and purchasing the right domain for your business.",
  },
  {
    question: "Can you help me put the site online?",
    answer:
      "Yes. Deployment is included in every package, and I can help with the technical steps needed to connect your domain and launch.",
  },
  {
    question: "Can you redesign my current website?",
    answer:
      "Absolutely. I can review what is working, simplify what is not, and rebuild the site with a cleaner design and better mobile experience.",
  },
  {
    question: "Do I have to provide photos and text?",
    answer:
      "Your own photos and business details are best, but you do not need to have everything perfectly prepared. I can help organize your copy and recommend image options.",
  },
];

export const processSteps = [
  { number: "01", title: "Quick conversation", text: "Tell me about your business, goals, and what you need the site to do." },
  { number: "02", title: "Design & build", text: "I turn your ideas into a clean, responsive website and keep the process simple." },
  { number: "03", title: "Review & launch", text: "We make final adjustments, connect your domain, and put your new site online." },
];

export const trustItems = [
  { icon: AppWindow, label: "Mobile-Friendly Design" },
  { icon: Rocket, label: "Fast Turnaround" },
  { icon: Globe2, label: "Domain Setup Help" },
  { icon: BriefcaseBusiness, label: "Affordable Packages" },
];
