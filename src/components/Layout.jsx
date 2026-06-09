import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CTA from "./CTA";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>{children}</main>
      <CTA />
      <Footer />
    </div>
  );
}
