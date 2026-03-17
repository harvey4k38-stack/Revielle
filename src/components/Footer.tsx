import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { redirectToCheckout } from "@/src/lib/checkout";

export default function Footer() {
  return (
    <footer className="bg-beige-100 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-serif">Experience Youthful, Radiant Skin</h2>
            <p className="text-ink/60 font-light tracking-wide">
              Join the clinical luxury revolution. Your journey to timeless skin begins with a single step.
            </p>
            <button onClick={redirectToCheckout} className="bg-ink text-white px-12 py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-beige-300 transition-colors duration-500">
              Order Revielle Cream
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-beige-200 pt-12">
          <div className="space-y-6">
            <div className="text-xl font-serif tracking-widest uppercase">Revielle</div>
            <p className="text-xs text-ink/40 leading-loose max-w-xs">
              Clinically inspired skincare designed for the modern individual. Focused on results, rooted in luxury.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold">Explore</h4>
            <ul className="space-y-4 text-[10px] uppercase tracking-widest text-ink/60">
              <li><Link to="/our-story" className="hover:text-beige-300 transition-colors">Our Story</Link></li>
              <li><Link to="/the-science" className="hover:text-beige-300 transition-colors">The Science</Link></li>
              <li><Link to="/sustainability" className="hover:text-beige-300 transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold">Support</h4>
            <ul className="space-y-4 text-[10px] uppercase tracking-widest text-ink/60">
              <li><Link to="/shipping" className="hover:text-beige-300 transition-colors">Shipping</Link></li>
              <li><Link to="/returns" className="hover:text-beige-300 transition-colors">Returns</Link></li>
              <li><Link to="/contact" className="hover:text-beige-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold">Newsletter</h4>
            <div className="flex border-b border-beige-300 pb-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-none outline-none text-[10px] w-full placeholder:text-ink/30"
              />
              <button className="text-[10px] uppercase tracking-widest font-semibold">Join</button>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[9px] uppercase tracking-[0.2em] text-ink/30">
          <p>© 2026 Revielle Skincare. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <Link to="/privacy-policy" className="hover:text-ink transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-ink transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
