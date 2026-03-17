import { motion } from "motion/react";

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-40 px-6 bg-beige-100/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-serif">01. Skin Renewal</h3>
              <p className="text-ink/60 font-light leading-relaxed">
                Our formula works with your skin's circadian rhythm to accelerate cellular turnover during the night, revealing fresh, vibrant skin by morning.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-serif">02. Collagen Support</h3>
              <p className="text-ink/60 font-light leading-relaxed">
                Bio-active peptides signal the skin to produce more collagen and elastin, effectively rebuilding the skin's internal support structure.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-serif">03. Hydration & Repair</h3>
              <p className="text-ink/60 font-light leading-relaxed">
                Ceramides and botanical lipids reinforce the moisture barrier, preventing transepidermal water loss and protecting against environmental stressors.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2 aspect-square bg-white flex items-center justify-center p-12 luxury-shadow rounded-full"
          >
            <div className="text-center space-y-4">
              <span className="text-6xl font-serif text-beige-300">98%</span>
              <p className="text-[10px] uppercase tracking-[0.2em] text-ink/40">
                Reported smoother, <br /> firmer skin in 4 weeks
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
