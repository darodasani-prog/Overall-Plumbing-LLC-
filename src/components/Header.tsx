import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="bg-emergency-orange text-white py-2 px-6 flex justify-between items-center shrink-0 shadow-lg relative z-[60]"
          >
            <div className="flex items-center gap-2">
              <span className="animate-pulse">🚨</span>
              <span className="font-black uppercase tracking-wider text-xs md:text-sm">Plumbing Emergency?</span>
            </div>
            <div className="flex items-center gap-4 md:gap-8">
              <span className="font-bold text-base md:text-xl hidden xs:inline">(972) 463-0180</span>
              <a 
                href="tel:9724630180"
                className="bg-white text-emergency-orange px-4 py-1.5 rounded-full font-black text-[10px] md:text-xs uppercase hover:scale-105 transition-transform"
              >
                Call Now — 24/7
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <nav className="bg-white/90 backdrop-blur-md border-b border-soft-gray px-6 md:px-10 py-4 flex justify-between items-center transition-all">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-navy rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
            <div className="w-5 h-5 border-2 border-white rounded-full"></div>
          </div>
          <div className="leading-none">
            <h1 className="font-black text-xl uppercase tracking-tighter text-primary-navy">Overall</h1>
            <p className="text-[10px] font-black text-accent-blue uppercase tracking-[0.2em]">Plumbing Texas</p>
          </div>
        </div>
        <div className="hidden lg:flex gap-10 font-black text-xs uppercase tracking-widest text-primary-navy/70">
          <a href="#services" className="hover:text-emergency-orange transition-colors">Services</a>
          <a href="#area" className="hover:text-emergency-orange transition-colors">Service Area</a>
          <a href="#testimonials" className="hover:text-emergency-orange transition-colors">Reviews</a>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="#estimate"
            className="hidden sm:block border-2 border-primary-navy px-6 py-2.5 font-black text-[10px] uppercase tracking-widest hover:bg-primary-navy hover:text-white transition-all active:scale-95"
          >
            Get Free Estimate
          </a>
        </div>
      </nav>
    </header>
  );
}
