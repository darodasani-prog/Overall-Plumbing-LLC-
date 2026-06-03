import { motion, useScroll, useSpring, useMotionValue } from 'motion/react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Showcase from './components/Showcase';
import Services from './components/Services';
import Stats from './components/Stats';
import Differentiators from './components/Differentiators';
import Process from './components/Process';
import SocialProof from './components/SocialProof';
import ServiceArea from './components/ServiceArea';
import EmergencyCTA from './components/EmergencyCTA';
import Footer from './components/Footer';
import DrawingPipe from './components/DrawingPipe';
import RevealSection from './components/RevealSection';
import EstimateForm from './components/EstimateForm';
import { Phone } from 'lucide-react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Custom Cursor Logic
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="relative min-h-screen bg-navy-dark selection:bg-electric-blue selection:text-navy-dark font-sans text-white overflow-x-hidden md:cursor-none">
      {/* Custom Cursor */}
       <motion.div
        className="fixed top-0 left-0 w-10 h-10 bg-electric-blue rounded-full z-[9999] pointer-events-none mix-blend-difference hidden md:flex items-center justify-center overflow-hidden transition-transform duration-100"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorText ? 2.5 : 1
        }}
      >
        {cursorText && (
          <span className="text-[8px] font-black uppercase text-navy-dark whitespace-nowrap px-2">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-electric-blue z-[100] origin-left"
        style={{ scaleX }}
      />

      <DrawingPipe />

      <Header />
      
      <main>
        <Hero setCursor={setCursorText} />
        <TrustBar />
        <Stats />
        <Services />
        <RevealSection 
          imageId="1m7wywPda4rqkjtnQ2Y_3WsBBk15Qu2Jv" 
          headline="Unyielding Precision." 
          subheadline="We don't just fix pipes. We secure the future of your Texas estate with industrial-grade resilience."
        />
        <Differentiators />
        <Showcase />
        <Process />
        <SocialProof />
        <RevealSection 
          imageId="1fajCTcd4P7ZAk_NP2N_XaYT02fGcCDVG" 
          headline="The Master Standard." 
          subheadline="Experience the harmony of expert craft and rapid response. Every job, every time."
        />
        <EstimateForm setCursor={setCursorText} />
        <EmergencyCTA />
        <ServiceArea />
      </main>

      <Footer />

      {/* Mobile Emergency Button */}
      <div className="fixed bottom-6 right-6 z-[60] md:hidden">
        <a
          href="tel:9724630180"
          className="w-16 h-16 bg-emergency-red text-white rounded-full flex items-center justify-center shadow-2xl animate-pulse active:scale-95 border-2 border-white/20"
          aria-label="Emergency Call"
        >
          <Phone className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}
