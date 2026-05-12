/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Differentiators from './components/Differentiators';
import Services from './components/Services';
import Showcase from './components/Showcase';
import SocialProof from './components/SocialProof';
import ServiceArea from './components/ServiceArea';
import Process from './components/Process';
import Footer from './components/Footer';
import { Phone } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen selection:bg-emergency-orange selection:text-white font-sans text-primary-navy overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emergency-orange z-[100] origin-left"
        style={{ scaleX }}
      />

      <Header />
      
      <main>
        <Hero />
        <Differentiators />
        <Services />
        <Showcase />
        <Process />
        <SocialProof />
        <ServiceArea />
      </main>

      <Footer />

      {/* Floating Action Button mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a
          href="tel:9724630180"
          className="w-16 h-16 bg-emergency-orange text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(255,107,0,0.6)] animate-bounce active:scale-95 border-4 border-white"
          aria-label="Call Now"
        >
          <Phone className="w-8 h-8 fill-current" />
        </a>
      </div>
    </div>
  );
}
