import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import closeupImg from "@/src/assets/closeup.png";
import { redirectToCheckout } from "@/src/lib/checkout";
import { useCart } from "@/src/lib/cartContext";

export default function ProductPage() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart();
    navigate("/cart");
  };

  return (
    <>
      <div className="min-h-screen bg-beige-50">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center bg-beige-50/90 backdrop-blur-sm">
          <button onClick={() => navigate("/")} className="text-xl font-serif tracking-widest uppercase">
            Revielle
          </button>
          <button onClick={() => navigate("/")} className="text-[10px] uppercase tracking-[0.2em] text-ink/60 hover:text-ink transition-colors">
            ← Back
          </button>
        </nav>

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <img src={closeupImg} alt="Revielle Age-Defying Cream" className="w-full h-full object-cover" />
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 lg:pt-8"
            >
              <span className="text-[11px] uppercase tracking-[0.2em] text-beige-300 font-semibold">The Flagship</span>
              <h1 className="text-4xl md:text-5xl font-serif leading-tight">
                Revielle <br /> Age-Defying Cream
              </h1>
              <div className="flex items-center space-x-4">
                <p className="text-3xl font-serif font-light">$14.99</p>
                <p className="text-xl font-serif font-light text-ink/40 line-through">$45.99</p>
              </div>

              <p className="text-base text-ink/70 font-light leading-relaxed">
                Formulated with our proprietary cellular renewal complex, Revielle targets the fundamental causes of aging. This rich yet weightless cream penetrates deep into the dermal layers to stimulate collagen production and accelerate skin repair.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-1 rounded-full bg-beige-300 mt-2.5"></div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest mb-1">Cellular Renewal</h4>
                    <p className="text-sm text-ink/60 font-light">Accelerates the natural cycle of skin cell turnover.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-1 rounded-full bg-beige-300 mt-2.5"></div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest mb-1">Collagen Support</h4>
                    <p className="text-sm text-ink/60 font-light">Strengthens skin structure to reduce fine lines.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-1 h-1 rounded-full bg-beige-300 mt-2.5"></div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest mb-1">Deep Hydration</h4>
                    <p className="text-sm text-ink/60 font-light">Replenishes moisture for a plump, radiant complexion.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-ink text-white py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-beige-300 transition-colors duration-500"
                >
                  Add to Cart
                </button>
                <button
                  onClick={redirectToCheckout}
                  className="w-full border border-ink py-5 text-[11px] uppercase tracking-[0.2em] hover:border-beige-300 hover:text-beige-300 transition-colors duration-500"
                >
                  Buy Now
                </button>
              </div>

              <p className="text-[10px] uppercase tracking-widest text-ink/40 text-center pt-2">
                Free shipping worldwide · 30-day returns
              </p>
            </motion.div>
          </div>
        </div>
      </div>

    </>
  );
}
