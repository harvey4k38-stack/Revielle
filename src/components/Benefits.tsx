import { motion } from "motion/react";
import { Sparkles, Shield, Droplets, Sun } from "lucide-react";

const benefits = [
  {
    icon: <Sparkles size={32} strokeWidth={1} />,
    title: "Reduces fine lines & wrinkles",
    description: "Visibly smooths the appearance of deep set wrinkles and expression lines."
  },
  {
    icon: <Shield size={32} strokeWidth={1} />,
    title: "Firms and smooths skin",
    description: "Restores elasticity and bounce for a more youthful, lifted contour."
  },
  {
    icon: <Droplets size={32} strokeWidth={1} />,
    title: "Deep hydration",
    description: "Multi-molecular hyaluronic acid provides 24-hour moisture retention."
  },
  {
    icon: <Sun size={32} strokeWidth={1} />,
    title: "Improves texture and glow",
    description: "Refines skin surface and boosts radiance for a luminous complexion."
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 md:py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[11px] uppercase tracking-[0.3em] text-ink/40 mb-4 block">Efficacy</span>
          <h2 className="text-4xl md:text-5xl font-serif">Clinical Results</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center space-y-6 group"
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center text-beige-300 group-hover:scale-110 transition-transform duration-500">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-serif">{benefit.title}</h3>
              <p className="text-sm text-ink/60 font-light leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
