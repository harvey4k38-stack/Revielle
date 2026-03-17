import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

interface SimplePageProps {
  title: string;
  subtitle?: string;
  sections: { heading: string; body: string }[];
}

export default function SimplePage({ title, subtitle, sections }: SimplePageProps) {
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
          {subtitle && <span className="text-[11px] uppercase tracking-[0.2em] text-beige-300 font-semibold">{subtitle}</span>}
          <h1 className="text-4xl md:text-6xl font-serif leading-tight">{title}</h1>
        </motion.div>

        <div className="space-y-12">
          {sections.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="space-y-3"
            >
              <h2 className="text-sm uppercase tracking-widest font-semibold">{s.heading}</h2>
              <p className="text-ink/70 font-light leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
