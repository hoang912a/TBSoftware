import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfiniteTicker from "./components/InfiniteTicker";
import InteractiveShowcase from "./components/InteractiveShowcase";
import TrustMetrics from "./components/TrustMetrics";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import DashboardShowcase from "./components/DashboardShowcase";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <InfiniteTicker />
        <InteractiveShowcase />
        <TrustMetrics />
        <WhyChooseUs />
        <Process />
        <DashboardShowcase />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
