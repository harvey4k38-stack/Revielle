import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/src/lib/cartContext";
import { redirectToCheckout } from "@/src/lib/checkout";

export default function Cart() {
  const navigate = useNavigate();
  const { items, addToCart, removeFromCart, total, count } = useCart();

  return (
    <div className="min-h-screen bg-beige-50">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center bg-beige-50/90 backdrop-blur-sm">
        <button onClick={() => navigate("/")} className="text-xl font-serif tracking-widest uppercase">
          Revielle
        </button>
        <button onClick={() => navigate(-1)} className="text-[10px] uppercase tracking-[0.2em] text-ink/60 hover:text-ink transition-colors">
          ← Back
        </button>
      </nav>

      <div className="max-w-3xl mx-auto px-6 pt-40 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6 mb-16">
          <span className="text-[11px] uppercase tracking-[0.2em] text-beige-300 font-semibold">Your Selection</span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight">Cart {count > 0 && `(${count})`}</h1>
        </motion.div>

        {items.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-center space-y-8 py-20">
            <p className="text-ink/40 font-light">Your cart is empty.</p>
            <button
              onClick={() => navigate("/product")}
              className="bg-ink text-white px-12 py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-beige-300 transition-colors duration-500"
            >
              Shop Now
            </button>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-12">
            {/* Items */}
            <div className="space-y-8">
              {items.map((item) => (
                <div key={item.name} className="flex items-center justify-between border-b border-beige-200 pb-8">
                  <div className="space-y-2">
                    <p className="font-serif text-lg">{item.name}</p>
                    <p className="text-[11px] uppercase tracking-widest text-ink/50">${item.price.toFixed(2)} each</p>
                    <div className="flex items-center space-x-4 pt-2">
                      <button
                        onClick={removeFromCart}
                        className="w-8 h-8 border border-beige-200 flex items-center justify-center hover:border-ink transition-colors text-lg"
                      >
                        −
                      </button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={addToCart}
                        className="w-8 h-8 border border-beige-200 flex items-center justify-center hover:border-ink transition-colors text-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="font-serif text-xl">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="space-y-4 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-[11px] uppercase tracking-widest">Subtotal</span>
                <span className="font-serif text-xl">${total.toFixed(2)}</span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-ink/40">Free shipping worldwide · 30-day returns</p>
            </div>

            <div className="space-y-4 pt-4">
              <button
                onClick={redirectToCheckout}
                className="w-full bg-ink text-white py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-beige-300 transition-colors duration-500"
              >
                Checkout
              </button>
              <button
                onClick={() => navigate("/product")}
                className="w-full border border-ink py-5 text-[11px] uppercase tracking-[0.2em] hover:border-beige-300 hover:text-beige-300 transition-colors duration-500"
              >
                Continue Shopping
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
