import { motion } from 'motion/react';

const differentiators = [
  {
    title: "No Emergency Fees",
    description: "2 AM costs the same as 2 PM. Most plumbers charge double—we never do.",
    icon: "🌙"
  },
  {
    title: "Flat Rate Guarantee",
    description: "Know the exact price before we start. No hourly surprises. No hidden fees.",
    icon: "📋"
  },
  {
    title: "Same-Day Service",
    description: "Real 24/7 dispatch. Most calls handled within 90 minutes, not days.",
    icon: "⚡"
  },
  {
    title: "Texas Licensed",
    description: "Serving Collin & Cooke counties for 15+ years. Code compliant always.",
    icon: "🛡️"
  }
];

export default function DifferentiatorGrid() {
  return (
    <section className="bg-primary-navy py-20 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-l-2 border-white/20 pl-8 group hover:border-emergency-orange transition-colors"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">
                {item.icon}
              </div>
              <h4 className="text-white font-black text-lg uppercase tracking-tight mb-3">
                {item.title}
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
