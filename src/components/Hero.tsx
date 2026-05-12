import { motion } from 'motion/react';
import { Star, Phone, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 bg-white overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-0 w-full text-[25vw] font-black text-primary-navy/[0.02] leading-none -translate-y-1/2 select-none pointer-events-none uppercase tracking-tighter">
        Overall
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <span className="bg-success-green text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-success-green/20">
              ● Live Dispatch Available NOW in Wylie
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl xl:text-9xl font-black leading-[0.85] tracking-tighter mb-8 uppercase italic"
          >
            Panic to <br/>
            <span className="text-accent-blue">Peace</span> <br/>
            In One Call.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-navy/70 max-w-lg mb-12 leading-relaxed font-bold"
          >
            Flat-rate pricing. Same-day service. 24/7 Texas licensed pros. We rescue your home when water won't wait.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 items-center sm:items-start"
          >
            <a href="tel:9724630180" className="btn-primary group">
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              CALL (972) 463-0180
            </a>
            <div className="flex flex-col justify-center items-center sm:items-start h-full py-2">
              <div className="flex text-emergency-orange text-2xl mb-1">★★★★★</div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">4.9/5 Rating | BBB A+</div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-soft-gray rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-white group">
              <img 
                src="https://lh3.googleusercontent.com/d/1m7wywPda4rqkjtnQ2Y_3WsBBk15Qu2Jv" 
                alt="Overall Plumbing Texas Service"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/20 to-transparent opacity-80"></div>
              
              <div className="absolute bottom-10 left-10 right-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform">
                <p className="text-[10px] font-black uppercase tracking-widest text-success-green mb-3">On-Site in Wylie, TX</p>
                <p className="text-3xl font-black leading-tight italic tracking-tighter uppercase mb-4">
                  "Arrived in 45 mins on a Sunday. Lifesavers!"
                </p>
                <div className="w-12 h-1 bg-emergency-orange"></div>
              </div>
            </div>
            
            {/* Absolute Badges */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl hidden md:block border border-soft-gray"
            >
              <div className="text-center">
                <p className="text-4xl font-black text-primary-navy leading-none">15+</p>
                <p className="text-[10px] font-black text-accent-blue uppercase tracking-widest mt-1">Years Local</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
