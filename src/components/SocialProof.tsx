import { motion } from 'motion/react';
import { REVIEWS, ACHIEVEMENTS } from '../constants';
import { Star, Quote } from 'lucide-react';

export default function SocialProof() {
  return (
    <section id="testimonials" className="py-32 bg-primary-navy relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none">
        <div className="text-[30rem] font-black uppercase leading-none tracking-tighter absolute -top-40 -left-40 text-white/[0.02] rotate-12">Rescue</div>
        <div className="text-[30rem] font-black uppercase leading-none tracking-tighter absolute -bottom-40 -right-40 text-white/[0.02] -rotate-12">Trust</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-emergency-orange font-black uppercase tracking-[0.4em] text-xs mb-6">Proven Reliability</span>
          <h2 className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter leading-[0.9]">
            The Pride of <br/>
            <span className="text-accent-blue">Texas</span> Locals
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-32">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="glass-card p-12 bg-white/[0.03] border-white/5 flex flex-col relative group transition-all duration-500"
            >
              <Quote className="absolute top-10 right-10 w-16 h-16 text-white/[0.03] group-hover:text-emergency-orange/10 transition-colors" />
              
              <div className="flex items-center gap-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-emergency-orange fill-current" />
                ))}
              </div>

              <p className="text-2xl text-white/90 font-bold leading-tight tracking-tight mb-10 italic">
                "{review.text}"
              </p>

              <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
                <div>
                  <h4 className="text-xl font-black uppercase text-white tracking-tight">{review.author}</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#00C853] mt-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#00C853] rounded-full"></span>
                    Verified {review.location} Resident
                  </p>
                </div>
                <div 
                  className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10 text-white/40"
                >
                  {review.source}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20 pt-20 border-t border-white/10">
          {ACHIEVEMENTS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-3 flex items-center justify-center gap-1 group-hover:scale-110 transition-transform duration-500">
                <span>{stat.value}</span>
                <span className="text-emergency-orange text-3xl md:text-5xl">{stat.suffix}</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-white/60 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
