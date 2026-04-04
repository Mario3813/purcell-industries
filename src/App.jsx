import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Consulting from "./components/consulting";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../scrollTop";

// Home limpio
const Home = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
          <ScrollToTop />

      <Navbar /> {/* ✅ GLOBAL */}

      <div className="max-w-7xl mx-auto px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consulting" element={<Consulting />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;