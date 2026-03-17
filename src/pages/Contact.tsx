import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
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
          <span className="text-[11px] uppercase tracking-[0.2em] text-beige-300 font-semibold">Get in Touch</span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight">Contact Us</h1>
          <p className="text-ink/60 font-light leading-relaxed">Our team typically responds within 1 business day.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-ink/60">First Name</label>
              <input type="text" className="w-full border-b border-beige-200 bg-transparent py-2 text-sm outline-none focus:border-ink transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-ink/60">Last Name</label>
              <input type="text" className="w-full border-b border-beige-200 bg-transparent py-2 text-sm outline-none focus:border-ink transition-colors" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-ink/60">Email</label>
            <input type="email" className="w-full border-b border-beige-200 bg-transparent py-2 text-sm outline-none focus:border-ink transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-ink/60">Message</label>
            <textarea rows={5} className="w-full border-b border-beige-200 bg-transparent py-2 text-sm outline-none focus:border-ink transition-colors resize-none" />
          </div>
          <button type="submit" className="bg-ink text-white px-12 py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-beige-300 transition-colors duration-500">
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}
