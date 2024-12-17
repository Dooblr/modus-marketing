import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import LearnMore from "./pages/services/LearnMore";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import BrandStrategy from "./pages/services/BrandStrategy";
import ContentCreation from "./pages/services/ContentCreation";
import PageTransition from "./components/PageTransition";
import "./App.scss";

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <>
      <PageTransition />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/learnmore" element={<LearnMore />} />
          <Route path="/services/digitalmarketing" element={<DigitalMarketing />} />
          <Route path="/services/brandstrategy" element={<BrandStrategy />} />
          <Route path="/services/contentcreation" element={<ContentCreation />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
