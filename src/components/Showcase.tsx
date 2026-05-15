import { motion } from 'motion/react';

const SHOWCASE_IMAGES = [
  { id: '1m7wywPda4rqkjtnQ2Y_3WsBBk15Qu2Jv', title: 'Mainline Rescue' },
  { id: '1fajCTcd4P7ZAk_NP2N_XaYT02fGcCDVG', title: 'Tankless Master' },
  { id: '1d0tOpHWTTVlNCGLsfRa7REwWdGWanzGT', title: 'Rapid Repair' },
  { id: '1N4JoHmiMIaL37VukK588iGzwU50rzxaS', title: 'Code Perfect' }
];

export default function Showcase() {
  return (
    <section className="py-48 bg-navy-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-32 text-center lg:text-left flex flex-col lg:flex-row items-end justify-between gap-12">
            <div>
                <span className="text-electric-blue font-black uppercase tracking-[0.6em] text-[10px] mb-8 block">Project Spotlight</span>
                <h2 className="text-6xl md:text-9xl font-black uppercase italic leading-[0.85] tracking-tighter">
                    Texas Craft <br/> <span className="text-glow text-electric-blue">Proven Daily.</span>
                </h2>
            </div>
            <p className="max-w-sm text-xl text-white/40 font-bold italic border-l-4 border-electric-blue pl-8">
                "We don't just fix pipes; we engineer peace of mind for north Texas homeowners."
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SHOWCASE_IMAGES.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ filter: "blur(20px)", opacity: 0, y: 50 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 1 }}
              className="group relative h-[600px] rounded-[48px] overflow-hidden shadow-2xl border border-white/[0.05] bg-white/5"
            >
              <img 
                src={`https://lh3.googleusercontent.com/d/${img.id}`} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              {/* Overlay Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              
              <div className="absolute bottom-12 left-12 right-12 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <p className="text-electric-blue font-black uppercase tracking-[0.3em] text-[10px] mb-4">Confirmed Success</p>
                <p className="text-4xl font-black uppercase italic tracking-tighter text-white leading-none mb-6">{img.title}</p>
                <div className="w-12 h-1 bg-electric-blue"></div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-12 right-12 bg-white/10 backdrop-blur-3xl px-6 py-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">Full Rescue</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
