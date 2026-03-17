import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-beige-50 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8 max-w-md"
      >
        <div className="w-16 h-16 mx-auto border border-beige-300 rounded-full flex items-center justify-center text-beige-300 text-2xl">
          ✓
        </div>
        <h1 className="text-4xl font-serif">Order Confirmed</h1>
        <p className="text-ink/60 font-light leading-relaxed">
          Thank you for your order. You will receive a confirmation email shortly with your tracking details.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-ink text-white px-12 py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-beige-300 transition-colors duration-500"
        >
          Back to Home
        </button>
      </motion.div>
    </div>
  );
}
