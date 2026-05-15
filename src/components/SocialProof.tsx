import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';

const REVIEWS = [
  { id: 1, author: "James R.", loc: "Wylie", text: "Water everywhere at 2AM. These guys were here in 40 mins. Saved our foundation." },
  { id: 2, author: "Sarah M.", loc: "Lucas", text: "Flat rate pricing that actually stays flat. Professional, clean, and fast installation." },
  { id: 3, author: "Kevin D.", loc: "Plano", text: "The only plumbers I trust for my commercial builds. Overall standard is very high." },
];

export default function SocialProof() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section ref={containerRef} className="py-48 bg-navy-dark overflow-hidden perspective-1000">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <span className="text-electric-blue font-black uppercase tracking-[0.6em] text-[10px] mb-8 block">World Class Reputation</span>
          <h2 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-4">
             Trusted By <br/>
             <span className="text-glow text-electric-blue">Texas</span> Locals.
          </h2>
        </div>

        <motion.div 
            style={{ rotateX: rotate }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 transition-all"
        >
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="glass-card p-12 md:p-16 rounded-[40px] flex flex-col relative group hover:bg-white/[0.05] transition-all"
            >
              <Quote className="absolute top-10 right-10 w-20 h-20 text-white/[0.02] group-hover:text-electric-blue/10 transition-colors" />
              
              <div className="flex gap-2 mb-10">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-electric-blue fill-current" />
                ))}
              </div>

              <p className="text-2xl md:text-3xl font-bold leading-tight italic tracking-tight mb-16 opacity-80 group-hover:opacity-100">
                "{review.text}"
              </p>

              <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-10">
                <div>
                    <h4 className="text-xl font-black uppercase italic tracking-tight">{review.author}</h4>
                    <p className="text-[10px] font-black uppercase text-electric-blue tracking-widest mt-1">Verified {review.loc} Resident</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center font-black text-xs opacity-20">G</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
