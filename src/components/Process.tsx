import { motion } from 'motion/react';
import { Phone, Search, FileCheck, Wrench } from 'lucide-react';

const STEPS = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call or Book",
    desc: "Any time, any day. We answer 24/7.",
    color: "bg-primary-navy"
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "We Diagnose",
    desc: "Camera inspection & expert testing.",
    color: "bg-accent-blue"
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "You Approve",
    desc: "Clear, upfront flat rate quote.",
    color: "bg-emergency-orange"
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "We Fix",
    desc: "Clean, guaranteed, and code-compliant.",
    color: "bg-success-green"
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent-blue font-black uppercase tracking-[0.25em] text-xs mb-4 block">The "Overall" Standard</span>
          <h2 className="text-5xl md:text-6xl font-black uppercase font-oswald tracking-tighter leading-none mb-6">
            From Panic To Rescue <br/>In <span className="text-emergency-orange">4 Simple Steps.</span>
          </h2>
          <p className="text-lg text-primary-navy/60 font-medium leading-relaxed">
            No pressure. No hidden fees. Just honest Texas plumbing done right the first time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-px bg-black/5 z-0"></div>

          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="relative mb-8">
                <div className={`${step.color} w-[120px] h-[120px] rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl relative z-10 hover:rotate-6 transition-transform cursor-default`}>
                   {step.icon}
                </div>
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full shadow-lg border-2 border-soft-gray flex items-center justify-center font-black text-primary-navy text-sm z-20">
                   {index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-black uppercase font-oswald tracking-tight mb-3 text-primary-navy">
                {step.title}
              </h3>
              <p className="text-sm font-medium text-primary-navy/60 leading-relaxed max-w-[200px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-10 md:p-16 rounded-[4rem] bg-soft-gray border border-black/5 text-center relative group">
           <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/100 pointer-events-none rounded-[4rem]"></div>
           <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase font-oswald tracking-tighter mb-6 relative z-10">
              "Water Damage Doesn't Wait. <br/><span className="text-accent-blue">Neither Do We.</span>"
           </h3>
           <p className="text-lg text-primary-navy/70 max-w-2xl mx-auto mb-10 font-medium relative z-10">
              Our dispatchers are standing by right now in Wylie, ready to rescue your home.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
             <a href="tel:9724630180" className="bg-emergency-orange text-white px-10 py-5 rounded-2xl font-black text-xl hover:shadow-[0_15px_40px_rgba(255,107,0,0.4)] transition-all shadow-lg active:scale-95 flex items-center gap-3 justify-center">
               <Phone className="w-6 h-6 border-2 border-white/30 rounded-full p-1" />
               (972) 463-0180
             </a>
           </div>
        </div>
      </div>
    </section>
  );
}
