import { motion } from 'motion/react';

const PARTNERS = [
  "State Farm", "Allstate", "Progressive", "USAA", "Farmers", "Liberty Mutual", "State Farm", "Allstate", "Progressive", "USAA"
];

export default function TrustBar() {
  return (
    <section className="py-20 border-y border-white/[0.05] bg-navy-dark overflow-hidden relative">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-navy-dark via-transparent to-navy-dark"></div>
      
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center relative z-10">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Trusted by Insurance & Industry Leaders</span>
      </div>

      <div className="flex relative z-0">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-20 py-4 items-center"
        >
          {PARTNERS.map((name, index) => (
            <div key={index} className="flex items-center gap-4">
               <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group hover:border-electric-blue transition-colors">
                  <span className="text-white font-black text-xl leading-none italic group-hover:text-electric-blue">{name[0]}</span>
               </div>
               <span className="text-2xl font-black uppercase tracking-tighter text-white/20 hover:text-white/40 transition-colors cursor-default">
                 {name}
               </span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {PARTNERS.map((name, index) => (
            <div key={`dup-${index}`} className="flex items-center gap-4">
               <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group hover:border-electric-blue transition-colors">
                  <span className="text-white font-black text-xl leading-none italic group-hover:text-electric-blue">{name[0]}</span>
               </div>
               <span className="text-2xl font-black uppercase tracking-tighter text-white/20 hover:text-white/40 transition-colors cursor-default">
                 {name}
               </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
