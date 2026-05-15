import { motion } from 'motion/react';
import { Phone, AlertTriangle } from 'lucide-react';

export default function EmergencyCTA() {
  return (
    <section className="relative py-48 bg-navy-dark overflow-hidden">
      {/* Red Alert Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-emergency-red/10 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="inline-flex items-center gap-4 bg-emergency-red text-white px-8 py-3 rounded-full mb-12 shadow-[0_0_40px_rgba(255,62,62,0.4)] animate-pulse"
        >
            <AlertTriangle className="w-6 h-6" />
            <span className="text-sm font-black uppercase tracking-[0.4em]">Emergency Response Locked & Ready</span>
        </motion.div>

        <h2 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-12">
            Water Won't Wait. <br/>
            Neither Do <span className="text-glow text-emergency-red underline decoration-8 underline-offset-[16px]">We.</span>
        </h2>

        <p className="text-xl md:text-3xl text-white/40 max-w-3xl mx-auto mb-16 font-medium">
            24/7 Rapid response for Collin & Cooke counties. No emergency surcharges. Just fast, local help.
        </p>

        <a 
           href="tel:9724630180" 
           className="btn-premium bg-emergency-red text-white hover:bg-white hover:text-navy-dark shadow-[0_20px_50px_rgba(255,62,62,0.3)] transition-all mx-auto sm:inline-flex h-20 px-16 text-2xl"
        >
            <Phone className="w-8 h-8 mr-4" />
            CALL (972) 463-0180
        </a>
      </div>

      {/* Animated Water Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="relative w-[200%] h-32 animate-[wave_10s_linear_infinite]"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(0,212,255,0.1)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(0,212,255,0.2)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0,212,255,0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(0,212,255,1)" />
          </g>
        </svg>
      </div>

      <style>{`
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
