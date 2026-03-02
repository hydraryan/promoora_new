import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import WhyPromoora from "@/components/WhyPromoora";
import Packages from "@/components/Packages";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import FoundingClient from "@/components/FoundingClient";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <Problem />
        <div className="section-divider" />
        <Services />
        <Process />
        <div className="section-divider" />
        <Portfolio />
        <WhyPromoora />
        <div className="section-divider" />
        <FoundingClient />
        <div className="section-divider" />
        <Packages />
        <div className="section-divider" />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
