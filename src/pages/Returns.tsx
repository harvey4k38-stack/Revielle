import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";

export default function Returns() {
  const navigate = useNavigate();
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
          <span className="text-[11px] uppercase tracking-[0.2em] text-beige-300 font-semibold">Our Policy</span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight">Returns</h1>
        </motion.div>

        <div className="space-y-12">
          {[
            {
              heading: "30-Day Guarantee",
              body: "We stand behind every product we make. If you are not completely satisfied within 30 days of receiving your order, we will issue a full refund — no questions asked.",
            },
            {
              heading: "Condition of Returns",
              body: "We accept returns on both used and unused products. If you've tried the cream and it simply wasn't right for you, we still want to make it right.",
            },
            {
              heading: "Exchanges",
              body: "At this time, we offer refunds rather than direct exchanges. If you'd like a different product, please return your original order and place a new one.",
            },
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} className="space-y-3">
              <h2 className="text-sm uppercase tracking-widest font-semibold">{s.heading}</h2>
              <p className="text-ink/70 font-light leading-relaxed">{s.body}</p>
            </motion.div>
          ))}

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-3">
            <h2 className="text-sm uppercase tracking-widest font-semibold">How to Return</h2>
            <p className="text-ink/70 font-light leading-relaxed">
              To initiate a return, please fill out our{" "}
              <Link to="/contact" className="underline underline-offset-4 hover:text-beige-300 transition-colors">
                Contact form
              </Link>{" "}
              with your order number and reason for return. Our team will review your request and get back to you within 1 business day with next steps.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
