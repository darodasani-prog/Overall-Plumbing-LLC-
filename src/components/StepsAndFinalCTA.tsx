import { motion } from 'motion/react';
import { Phone, CheckCircle2 } from 'lucide-react';

export default function StepsAndFinalCTA() {
  const steps = [
    { num: '01', title: 'Call or Book', desc: 'Any time, any day. We answer live.' },
    { num: '02', title: 'We Diagnose', desc: 'Expert inspection with flat-rate quotes.' },
    { num: '03', title: 'You Approve', desc: 'No work starts without your signature.' },
    { num: '04', title: 'We Fix', desc: 'Clean, guaranteed, and code-compliant.' }
  ];

  return (
    <div className="bg-white">
      {/* Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-primary-navy uppercase">
              The <span className="text-accent-blue">Process</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
             {/* Connector line for desktop */}
             <div className="hidden lg:block absolute top-1/4 left-0 w-full h-[2px] bg-soft-gray -z-10"></div>
             
             {steps.map((step, i) => (
                <div key={i} className="text-center relative bg-white px-4">
                  <div className="w-16 h-16 bg-primary-navy text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-xl border-4 border-white">
                    {step.num}
                  </div>
                  <h4 className="text-lg font-black uppercase text-primary-navy mb-2 tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-sm text-primary-navy/60 leading-relaxed max-w-[200px] mx-auto">
                    {step.desc}
                  </p>
                </div>
             ))}
          </div>
          
          <div className="mt-16 text-center">
             <p className="text-primary-navy/40 font-bold uppercase tracking-widest text-[10px]">
                No pressure. No hidden fees. Just honest Texas plumbing.
             </p>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-emergency-orange py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
             <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
               <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
             </pattern>
             <rect width="100" height="100" fill="url(#grid)" />
           </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase leading-[0.9]">
              Water Damage <br/> Doesn't Wait. <span className="opacity-50">Neither Do We.</span>
            </h2>
            <p className="text-xl text-white font-bold mb-10 max-w-2xl mx-auto opacity-90">
              Our Wylie dispatchers are standing by. Every minute counts when your home is on the line.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
               <a
                  href="tel:9724630180"
                  className="bg-white text-emergency-orange px-10 py-5 rounded-2xl font-black text-2xl shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 active:scale-95"
               >
                  <Phone className="w-8 h-8 fill-current" />
                  CALL (972) 463-0180 NOW
               </a>
               <button className="bg-primary-navy text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-primary-navy/90 transition-all flex items-center justify-center gap-2 active:scale-95">
                  <CheckCircle2 className="w-6 h-6" />
                  TEXT FOR CALLBACK
               </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
