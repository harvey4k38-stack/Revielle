import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductFocus from "./components/ProductFocus";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";
import OurStory from "./pages/OurStory";
import TheScience from "./pages/TheScience";
import Sustainability from "./pages/Sustainability";
import Shipping from "./pages/Shipping";
import Returns from "./pages/Returns";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import OrderSuccess from "./pages/OrderSuccess";

function Home() {
  return (
    <main className="min-h-screen selection:bg-beige-300 selection:text-white">
      <Navbar />
      <Hero />
      <ProductFocus />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/the-science" element={<TheScience />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}
