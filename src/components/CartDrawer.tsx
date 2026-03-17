import { motion, AnimatePresence } from "motion/react";
import { useCart } from "@/src/lib/cartContext";
import { redirectToCheckout } from "@/src/lib/checkout";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: Props) {
  const { items, addToCart, removeFromCart, total, count } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-beige-50 z-50 flex flex-col shadow-xl"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-8 py-6 border-b border-beige-200">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold">Cart {count > 0 && `(${count})`}</span>
              <button onClick={onClose} className="text-ink/40 hover:text-ink transition-colors text-xl leading-none">×</button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-8 py-6">
              {items.length === 0 ? (
                <p className="text-sm text-ink/40 font-light mt-8 text-center">Your cart is empty.</p>
              ) : (
                items.map((item) => (
                  <div key={item.name} className="flex items-start justify-between space-x-4">
                    <div className="flex-1 space-y-2">
                      <p className="text-sm font-serif">{item.name}</p>
                      <p className="text-xs text-ink/50">${item.price.toFixed(2)} each</p>
                      <div className="flex items-center space-x-4 pt-1">
                        <button onClick={removeFromCart} className="w-6 h-6 border border-beige-200 text-sm flex items-center justify-center hover:border-ink transition-colors">−</button>
                        <span className="text-sm">{item.quantity}</span>
                        <button onClick={addToCart} className="w-6 h-6 border border-beige-200 text-sm flex items-center justify-center hover:border-ink transition-colors">+</button>
                      </div>
                    </div>
                    <p className="text-sm font-serif">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-8 py-6 border-t border-beige-200 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="uppercase tracking-widest text-[11px]">Total</span>
                  <span className="font-serif">${total.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => { onClose(); redirectToCheckout(); }}
                  className="w-full bg-ink text-white py-4 text-[11px] uppercase tracking-[0.2em] hover:bg-beige-300 transition-colors duration-500"
                >
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
