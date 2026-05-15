import { motion, useScroll, useTransform } from 'motion/react';

export default function DrawingPipe() {
  const { scrollYProgress } = useScroll();
  const drawVertical = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 overflow-hidden hidden lg:block -translate-x-1/2 pointer-events-none">
      <motion.div
        style={{ scaleY: drawVertical, originY: 0 }}
        className="w-full h-full bg-gradient-to-b from-electric-blue via-electric-blue to-transparent"
      />
    </div>
  );
}
