import { motion } from 'motion/react';
import { MapPin, Phone, ChevronRight } from 'lucide-react';

const CITIES = [
  "Wylie", "Plano", "Allen", "Lucas", "Murphy", "Sachse", 
  "Rowlett", "Richardson", "Frisco", "McKinney", "Garland"
];

export default function ServiceArea() {
  return (
    <section id="area" className="py-48 bg-navy-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
            >
                <div className="glass-card p-12 md:p-20 rounded-[48px] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8">
                        <MapPin className="w-12 h-12 text-electric-blue/20" />
                    </div>
                    
                    <span className="text-electric-blue font-black uppercase tracking-[0.6em] text-[10px] mb-8 block">Regional Coverage</span>
                    <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-12">
                        Serving <br/> <span className="text-glow text-electric-blue">North Texas.</span>
                    </h2>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-12 mb-16">
                        {CITIES.map((city, i) => (
                            <div key={city} className="flex items-center gap-3 group">
                                <div className="w-1.5 h-1.5 bg-electric-blue rounded-full group-hover:scale-[2] transition-transform"></div>
                                <span className="text-lg font-black uppercase italic italic tracking-tight text-white/40 group-hover:text-white transition-colors">{city}</span>
                            </div>
                        ))}
                    </div>

                    <div className="p-10 bg-white/5 rounded-3xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <p className="text-xs font-black uppercase tracking-widest text-white/20 mb-2">Service HQ</p>
                            <p className="text-xl font-bold">114 Hunters Glen Dr, Wylie TX</p>
                        </div>
                        <a href="tel:9724630180" className="btn-premium btn-electric h-16 px-10">
                            Call HQ
                        </a>
                    </div>
                </div>
            </motion.div>

            <div className="relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="aspect-square glass-card rounded-full flex flex-col items-center justify-center text-center p-20 relative border-4 border-electric-blue/20"
                >
                    <div className="absolute inset-0 bg-electric-blue opacity-5 blur-[100px] rounded-full"></div>
                    
                    <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-none">
                        30 MIN <br/> <span className="text-electric-blue text-glow">RESPONSE</span>
                    </h3>
                    <p className="text-white/40 text-xl font-medium leading-relaxed italic max-w-xs mx-auto mb-12">
                        Strategic master plumbers stationed across Collin and Cooke counties for rapid-fire rescue.
                    </p>
                    
                    <div className="flex gap-4">
                        <div className="w-16 h-1 w bg-white/10"></div>
                        <div className="w-16 h-1 w bg-electric-blue"></div>
                        <div className="w-16 h-1 w bg-white/10"></div>
                    </div>
                </motion.div>

                {/* Floating Map Indicators */}
                <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-0 right-0 glass-card p-6 rounded-3xl animate-pulse"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-success-green rounded-full"></div>
                        <span className="text-[10px] font-black uppercase tracking-widest">Wylie Active</span>
                    </div>
                </motion.div>
                <motion.div 
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="absolute bottom-10 left-[-20px] glass-card p-6 rounded-3xl animate-pulse"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-success-green rounded-full"></div>
                        <span className="text-[10px] font-black uppercase tracking-widest">Plano Dispatch</span>
                    </div>
                </motion.div>
            </div>

        </div>
      </div>
    </section>
  );
}
