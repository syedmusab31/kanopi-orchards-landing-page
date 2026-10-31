import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import {
  About,
  Benefits,
  Clients,
  Cta,
  Faq,
  Gallery,
  Markets,
  Process,
  Team,
  Testimonials,
} from "../components/Sections";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { FloatingWhatsApp, ScrollToTop } from "../components/FloatingActions";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <About />
        <Process />
        <Benefits />
        <Markets />
        <Team />
        <Gallery />
        <Testimonials />
        <Faq />
        <Cta />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
};

export default LandingPage;
