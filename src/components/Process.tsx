import { motion } from 'motion/react';
import { Search, Phone, FileCheck, Wrench, ChevronRight } from 'lucide-react';

const STEPS = [
  { 
    icon: <Phone />, 
    title: "Instant Dispatch", 
    desc: "Call us and a licensed master is dispatched within minutes to your north Texas location.",
    color: "bg-electric-blue"
  },
  { 
    icon: <Search />, 
    title: "Rescue Evaluation", 
    desc: "We perform a forensic assessment of your system to find the root cause, not just the symptom.",
    color: "bg-blue-600"
  },
  { 
    icon: <FileCheck />, 
    title: "Flat Quote", 
    desc: "No hidden fees, no hourly tricks. You get a transparent, single-price quote before work begins.",
    color: "bg-blue-800"
  },
  { 
    icon: <Wrench />, 
    title: "Precision Fix", 
    desc: "Our licensed team executes the repair with high-grade tools and parts that last for years.",
    color: "bg-navy-dark"
  }
];

export default function Process() {
  return (
    <section className="py-48 bg-navy-dark relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-electric-blue/[0.02] border border-white/[0.05] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32">
          <span className="text-electric-blue font-black uppercase tracking-[0.6em] text-[10px] mb-8 block">The Overall Standard</span>
          <h2 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-12">
            The Rescue <br/> <span className="text-glow text-electric-blue underline decoration-8 underline-offset-8">Blueprint.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="glass-card p-12 rounded-[40px] group relative"
            >
              <div className="absolute -top-6 left-12 w-12 h-12 bg-electric-blue text-navy-dark rounded-2xl flex items-center justify-center font-black italic text-xl shadow-lg shadow-electric-blue/20 transition-transform group-hover:scale-110">
                0{i + 1}
              </div>
              
              <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-electric-blue mb-10 group-hover:bg-electric-blue group-hover:text-navy-dark transition-all duration-500">
                {step.icon && <div className="w-8 h-8">{step.icon}</div>}
              </div>

              <h3 className="text-2xl font-black uppercase italic tracking-tight mb-6">
                {step.title}
              </h3>
              <p className="text-white/40 font-medium leading-relaxed">
                {step.desc}
              </p>

              {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-50%] text-white/5">
                      <ChevronRight className="w-8 h-8" />
                  </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
