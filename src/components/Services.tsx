import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Droplets, Wrench, ShieldCheck, Zap, Factory, Construction, ChevronRight } from 'lucide-react';

const SERVICES = [
  { icon: <Droplets />, title: "Emergency Rescue", desc: "Pipe bursts and major leaks stopped fast.", color: "bg-red-500" },
  { icon: <Wrench />, title: "Residential Service", desc: "Expert care for your home plumbing system.", color: "bg-blue-500" },
  { icon: <Factory />, title: "Commercial Power", desc: "Industrial strength solutions for businesses.", color: "bg-electric-blue" },
  { icon: <Construction />, title: "Drain Cleaning", desc: "Clearing Texas-sized clogs efficiently.", color: "bg-green-500" },
  { icon: <ShieldCheck />, title: "Water Heaters", desc: "Installation and repair for all brands.", color: "bg-purple-500" },
  { icon: <Zap />, title: "Leak Detection", desc: "High-tech ultrasonic location testing.", color: "bg-yellow-500" }
];

export default function Services() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-navy-dark overflow-hidden">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full mb-16 relative z-10">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-electric-blue font-black uppercase tracking-[0.4em] text-xs mb-4 block">Our Solutions</span>
              <h2 className="text-5xl md:text-8xl font-black uppercase italic leading-[0.85] tracking-tighter">
                Premium Support <br/> For <span className="text-electric-blue">Texas</span> Homes.
              </h2>
            </div>
            <p className="max-w-xs text-white/40 font-medium hidden lg:block pb-4">
              From minor leaks to major commercial infrastructure — we bring the Overall standard to every job.
            </p>
          </div>
        </div>

        {/* Horizontal Scroll Content */}
        <div className="w-full flex">
          <motion.div style={{ x }} className="flex gap-8 px-6 lg:px-[calc((100vw-1280px)/2)]">
            {SERVICES.map((service, i) => (
              <ServiceCard key={i} {...service} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc, color, index }: any) {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", opacity: 0 }}
      whileInView={{ filter: "blur(0px)", opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="w-[350px] md:w-[450px] glass-card p-10 md:p-16 rounded-[40px] flex flex-col group relative overflow-hidden"
    >
      {/* Background Icon Glow */}
      <div className={`absolute -top-20 -right-20 w-64 h-64 ${color} opacity-5 blur-[80px] rounded-full group-hover:opacity-10 transition-opacity`}></div>

      <div className={`w-16 h-16 md:w-24 md:h-24 ${color}/10 rounded-3xl flex items-center justify-center text-white mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
        {icon && <div className="w-8 h-8 md:w-12 md:h-12 text-white">{icon}</div>}
      </div>

      <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none italic">
        {title}
      </h3>
      <p className="text-lg md:text-xl text-white/40 font-medium mb-12 flex-grow leading-relaxed">
        {desc}
      </p>

      <div className="flex items-center gap-4 group/btn cursor-pointer">
        <span className="text-xs font-black uppercase tracking-[0.2em] group-hover/btn:text-electric-blue transition-colors">Learn More</span>
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-electric-blue group-hover/btn:border-electric-blue transition-all">
          <ChevronRight className="w-5 h-5 group-hover/btn:text-navy-dark transition-colors" />
        </div>
      </div>
    </motion.div>
  );
}
