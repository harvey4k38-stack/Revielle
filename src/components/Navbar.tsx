import { motion } from "motion/react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/src/lib/cartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { count } = useCart();

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-beige-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="hidden md:flex space-x-8 text-[11px] uppercase tracking-[0.2em] font-medium">
            <a href="#product" className="hover:text-beige-300 transition-colors">Product</a>
            <a href="#benefits" className="hover:text-beige-300 transition-colors">Benefits</a>
            <a href="#reviews" className="hover:text-beige-300 transition-colors">Reviews</a>
          </div>

          <div className="text-2xl font-serif tracking-[0.15em] uppercase">
            Revielle
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative" onClick={() => navigate("/cart")}>
              <ShoppingBag size={20} strokeWidth={1.2} />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-beige-300 text-white text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} strokeWidth={1.2} /> : <Menu size={24} strokeWidth={1.2} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-beige-100 px-6 py-8 space-y-6 text-center text-sm uppercase tracking-widest"
          >
            <a href="#product" className="block" onClick={() => setIsOpen(false)}>Product</a>
            <a href="#benefits" className="block" onClick={() => setIsOpen(false)}>Benefits</a>
            <a href="#reviews" className="block" onClick={() => setIsOpen(false)}>Reviews</a>
          </motion.div>
        )}
      </nav>

    </>
  );
}
