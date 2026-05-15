import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Phone, ChevronRight } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 ${
        isScrolled ? "py-4" : "py-8"
      }`}
    >
      <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 glass-card rounded-[32px] px-8 py-4 ${
        isScrolled ? "bg-navy-dark/80 backdrop-blur-3xl border-white/5" : "bg-white/[0.03] backdrop-blur-xl"
      }`}>
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-electric-blue rounded-full flex items-center justify-center shadow-lg shadow-electric-blue/20">
            <div className="w-5 h-5 border-2 border-navy-dark rounded-full"></div>
          </div>
          <div className="leading-none">
            <h1 className="text-xl font-black uppercase tracking-tighter italic">Overall</h1>
            <p className="text-[9px] font-black text-electric-blue uppercase tracking-[0.2em]">Plumbing Texas</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-white/50">
          <a href="#services" className="hover:text-electric-blue transition-colors">Services</a>
          <a href="#testimonials" className="hover:text-electric-blue transition-colors">Reviews</a>
          <a href="#area" className="hover:text-electric-blue transition-colors">Service Area</a>
          <a href="#estimate" className="hover:text-electric-blue transition-colors">Estimate</a>
        </nav>

        {/* Action Call */}
        <div className="flex items-center gap-6">
          <div className="hidden md:block">
            <p className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-none mb-1">Emergency Service</p>
            <a href="tel:9724630180" className="text-lg font-black italic tracking-tighter hover:text-electric-blue transition-colors">
                (972) 463-0180
            </a>
          </div>
          <a 
            href="#estimate"
            className="hidden sm:flex btn-premium btn-electric h-12 px-6 text-[10px] items-center gap-2"
          >
             Get Estimate
             <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
