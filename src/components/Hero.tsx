import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring, animate } from 'motion/react';
import { Phone, ChevronRight, Droplets, ShieldCheck, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';

interface HeroProps {
  setCursor: (text: string) => void;
}

function MagneticButton({ children, className, onMouseEnter, onMouseLeave, href }: any) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        x.set((clientX - centerX) * 0.3);
        y.set((clientY - centerY) * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        onMouseLeave();
    };

    return (
        <motion.a
            href={href}
            style={{ x: mouseX, y: mouseY }}
            onMouseMove={handleMouseMove}
            onMouseEnter={onMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={className}
        >
            {children}
        </motion.a>
    );
}

export default function Hero({ setCursor }: HeroProps) {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Emergency Plumbing Experts";
  const [index, setIndex] = useState(0);
  const [subHeadlineVisible, setSubHeadlineVisible] = useState(false);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 70);
      return () => clearTimeout(timeout);
    } else {
        setSubHeadlineVisible(true);
    }
  }, [index]);

  const droplets = Array.from({ length: 20 });

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        {droplets.map((_, i) => (
          <div
            key={i}
            className="droplet"
            style={{
              left: `${Math.random() * 100}%`,
              "--duration": `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 5}s`,
            } as any}
          />
        ))}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/10 blur-[120px] rounded-full z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-glow text-electric-blue mb-8"
          >
            <Zap className="w-3 h-3 fill-current" />
            24/7 Rapid Response Available
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter mb-8 uppercase italic selection:bg-electric-blue selection:text-navy-dark">
            {displayText}
            <span className="inline-block w-1 md:w-3 h-[0.9em] bg-electric-blue animate-pulse ml-2" />
          </h1>

          <div className="h-12 md:h-16 mb-12">
            <AnimatePresence>
                {subHeadlineVisible && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-medium"
                    >
                        Flat-rate pricing. Licensed masters. We rescue your Texas home from water disasters instantly.
                    </motion.p>
                )}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-6 items-center justify-center pt-8"
          >
            <MagneticButton
              href="tel:9724630180"
              className="btn-premium btn-electric w-full sm:w-auto"
              onMouseEnter={() => setCursor("CALL NOW")}
              onMouseLeave={() => setCursor("")}
            >
              <Phone className="w-5 h-5 animate-pulse" />
              (972) 463-0180
            </MagneticButton>
            <MagneticButton
              href="#estimate"
              className="btn-premium btn-outline w-full sm:w-auto"
              onMouseEnter={() => setCursor("GET QUOTE")}
              onMouseLeave={() => setCursor("")}
            >
              Get Free Estimate
              <ChevronRight className="w-5 h-5" />
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <DriftingBadge 
        icon={<Droplets className="w-5 h-5" />} 
        text="Leak Fix" 
        className="top-1/4 left-[10%]" 
        delay={0}
      />
      <DriftingBadge 
        icon={<ShieldCheck className="w-5 h-5" />} 
        text="Licensed" 
        className="bottom-1/3 left-[15%]" 
        delay={1}
      />
      <DriftingBadge 
        icon={<Zap className="w-5 h-5" />} 
        text="Fast Repipe" 
        className="top-1/3 right-[10%]" 
        delay={1.5}
      />
      <DriftingBadge 
        icon={<Droplets className="w-5 h-5" />} 
        text="24/7 Rescue" 
        className="bottom-1/4 right-[15%]" 
        delay={0.5}
      />
    </section>
  );
}

function DriftingBadge({ icon, text, className, delay }: { icon: any, text: string, className: string, delay: number }) {
    return (
        <motion.div
            animate={{
                y: [0, -40, 0],
                x: [0, 20, 0],
                rotate: [0, 5, 0]
            }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }}
            className={`absolute z-20 hidden lg:flex items-center gap-3 glass-card px-6 py-3 rounded-full ${className}`}
        >
            <div className="text-electric-blue">{icon}</div>
            <span className="text-[10px] font-black uppercase tracking-widest">{text}</span>
        </motion.div>
    )
}
