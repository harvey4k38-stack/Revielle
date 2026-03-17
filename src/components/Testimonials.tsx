import { motion } from "motion/react";

const reviews = [
  {
    text: "The texture is unlike anything I've tried. It melts into the skin and leaves a subtle, healthy glow. My fine lines around the eyes are visibly reduced.",
    author: "Elena V.",
    location: "London"
  },
  {
    text: "Truly a clinical-grade product with a luxury feel. I've replaced my entire night routine with just this cream. The results speak for themselves.",
    author: "Claire T.",
    location: "New York"
  },
  {
    text: "Revielle has transformed my skin texture. It feels firmer and more resilient. Worth every penny for the confidence it gives me.",
    author: "Sophia L.",
    location: "Paris"
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 md:py-40 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[11px] uppercase tracking-[0.3em] text-ink/40 mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif italic">The Revielle Experience</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="space-y-8"
            >
              <div className="text-beige-300 text-4xl font-serif">“</div>
              <p className="text-xl font-serif leading-relaxed italic text-ink/80">
                {review.text}
              </p>
              <div className="pt-4">
                <p className="text-[11px] uppercase tracking-widest font-semibold">{review.author}</p>
                <p className="text-[10px] uppercase tracking-widest text-ink/40">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
