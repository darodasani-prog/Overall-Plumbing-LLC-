import { motion } from 'motion/react';
import { REVIEWS, ACHIEVEMENTS, LOCATIONS } from '../constants';
import { Star, MapPin } from 'lucide-react';

export default function SocialAndArea() {
  return (
    <div className="bg-white">
      {/* Testimonials */}
      <section className="py-24 overflow-hidden border-b border-soft-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-primary-navy mb-4 uppercase">
              What <span className="text-emergency-orange">Texas</span> Says
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 mt-8 border-y border-soft-gray">
              {ACHIEVEMENTS.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl md:text-5xl font-black text-primary-navy">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-[10px] uppercase font-black tracking-widest text-primary-navy/40 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-soft-gray p-8 rounded-3xl relative"
              >
                <div className="flex text-emergency-orange mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-primary-navy font-bold leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-black`} style={{ backgroundColor: review.bubblesColor }}>
                    {review.author[0]}
                  </div>
                  <div>
                    <h4 className="font-black text-sm text-primary-navy">{review.author}</h4>
                    <p className="text-[10px] font-bold uppercase text-primary-navy/40">{review.location}, TX</p>
                  </div>
                  <div className="ml-auto opacity-30 font-black text-xs uppercase tracking-tighter">
                    {review.source}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section id="area" className="py-24 bg-primary-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase leading-none">
                Service Area <br/> <span className="text-accent-blue">Domination</span>
              </h2>
              <p className="text-lg text-white/70 max-w-xl mb-10 leading-relaxed font-medium">
                Serving Collin & Cooke counties. From Wylie to Plano, we've fixed over 5,000 leaks in your neighborhood.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {LOCATIONS.map((city) => (
                  <div key={city} className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
                    <MapPin className="w-4 h-4 text-accent-blue mb-2 group-hover:scale-125 transition-transform" />
                    <span className="font-black text-xs uppercase tracking-widest">{city}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full order-first lg:order-last">
              <div className="aspect-square bg-white/5 rounded-full relative flex items-center justify-center border border-white/5 p-8">
                 {/* Visual abstraction of a map area */}
                 <div className="absolute inset-0 opacity-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                      <path d="M10 10 L40 10 L50 30 L80 20 L90 60 L60 90 L10 70 Z" />
                    </svg>
                 </div>
                 <div className="text-center relative z-10">
                    <div className="w-24 h-24 bg-accent-blue rounded-full mx-auto flex items-center justify-center mb-4 shadow-2xl animate-pulse">
                       <MapPin className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-2xl font-black uppercase tracking-tighter">Wylie, TX HUB</p>
                    <p className="text-xs uppercase tracking-widest opacity-50 font-bold mt-2">114 Hunters Glen Dr, 75098</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
