import { motion } from "motion/react";
import closeupImg from "@/src/assets/closeup.png";


export default function ProductFocus() {
  return (
    <section id="product" className="py-24 md:py-40 px-6 bg-beige-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/5] overflow-hidden"
        >
          <img 
            src={closeupImg}
            alt="Revielle Age-Defying Cream close-up"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] text-beige-300 font-semibold">The Flagship</span>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            Revielle <br /> Age-Defying Cream
          </h2>
          <p className="text-lg text-ink/70 font-light leading-relaxed">
            Formulated with our proprietary cellular renewal complex, Revielle targets the fundamental causes of aging. This rich yet weightless cream penetrates deep into the dermal layers to stimulate collagen production and accelerate skin repair.
          </p>
          
          <div className="pt-8 space-y-6">
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
          </div>

          <button className="border-b border-ink pb-2 text-[11px] uppercase tracking-[0.2em] hover:text-beige-300 hover:border-beige-300 transition-all duration-300">
            Discover the Science
          </button>
        </motion.div>
      </div>
    </section>
  );
}
