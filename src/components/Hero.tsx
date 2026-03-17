import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import heroBg from "@/src/assets/hero-bg.png";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg}
          alt="Revielle Age-Defying Cream on marble surface"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="block text-[11px] uppercase tracking-[0.3em] mb-6 text-ink/60"
        >
          Clinical Luxury Skincare
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[1.1] mb-8"
        >
          Timeless Skin <br /> Starts Here.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl font-light text-ink/70 max-w-xl mx-auto mb-12 leading-relaxed"
        >
          A clinically inspired anti-aging cream designed to smooth, firm, and restore your skin.
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/product")}
          className="bg-ink text-white px-12 py-5 text-[11px] uppercase tracking-[0.2em] hover:bg-beige-300 transition-colors duration-500"
        >
          Shop Now
        </motion.button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4">
        <div className="w-[1px] h-12 bg-ink/20"></div>
        <span className="text-[9px] uppercase tracking-widest text-ink/40 rotate-90 origin-left translate-x-1">Scroll</span>
      </div>
    </section>
  );
}
