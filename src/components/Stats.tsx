import { motion, useMotionValue, useSpring, useTransform, useInView, animate } from 'motion/react';
import { useEffect, useRef } from 'react';

const STATS = [
  { value: 15, label: "Years Experience", suffix: "+" },
  { value: 5000, label: "Project Completed", suffix: "+" },
  { value: 24, label: "Response Time", suffix: "/7" },
  { value: 100, label: "Licensed Masters", suffix: "%" }
];

export default function Stats() {
  return (
    <section className="py-32 bg-navy-light relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
          {STATS.map((stat, i) => (
            <StatItem key={i} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label, suffix, index }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const spring = useSpring(count, { stiffness: 40, damping: 20 });

  useEffect(() => {
    if (isInView) {
      count.set(value);
    }
  }, [isInView, value, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="text-center group"
    >
      <div className="text-6xl md:text-8xl font-black mb-4 flex items-center justify-center gap-1 group-hover:scale-110 transition-transform duration-500">
        <motion.span className="text-glow text-electric-blue italic">
            {isInView ? <Counter value={value} /> : "0"}
        </motion.span>
        <span className="text-white/20 text-3xl md:text-5xl">{suffix}</span>
      </div>
      <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white/40 group-hover:text-white/60 transition-colors">
        {label}
      </p>
    </motion.div>
  );
}

function Counter({ value }: { value: number }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    
    useEffect(() => {
        const controls = animate(count, value, { duration: 2, ease: "easeOut" });
        return controls.stop;
    }, [value, count]);

    return <motion.span>{rounded}</motion.span>;
}
