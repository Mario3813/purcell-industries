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

const Home = () => {
  return (
    <>
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
      </div>

      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/consulting"
          element={
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <Consulting />
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;