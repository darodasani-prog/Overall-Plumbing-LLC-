import { motion } from 'motion/react';
import { Moon, ShieldCheck, Zap, Receipt } from 'lucide-react';

const DIFFERENTIATORS = [
  {
    icon: <Moon className="w-8 h-8" />,
    title: "No Emergency Fees",
    description: "2 AM costs the same as 2 PM. Most plumbers charge double—we never do.",
    color: "bg-primary-navy"
  },
  {
    icon: <Receipt className="w-8 h-8" />,
    title: "Flat Rate Guarantee",
    description: "Know the exact price before we start. No hourly surprises. No hidden fees.",
    color: "bg-accent-blue"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Same-Day Service",
    description: "Real 24/7 dispatch. Most residential calls handled within 90 minutes.",
    color: "bg-emergency-orange"
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Licensed & Local",
    description: "Serving Collin & Cooke counties for 15+ years. Code compliant always.",
    color: "bg-success-green"
  }
];

export default function Differentiators() {
  return (
    <section className="bg-primary-navy py-32 relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-[3rem] overflow-hidden">
          {DIFFERENTIATORS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary-navy p-12 hover:bg-white/[0.02] transition-colors group relative"
            >
              <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-4 leading-none">
                {item.title}
              </h3>
              <p className="text-white/50 leading-relaxed text-sm font-bold">
                {item.description}
              </p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-emergency-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
