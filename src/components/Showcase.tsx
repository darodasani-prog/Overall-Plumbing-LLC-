import { motion } from 'motion/react';

const SHOWCASE_IMAGES = [
  { id: '1fajCTcd4P7ZAk_NP2N_XaYT02fGcCDVG', title: 'Water Heater Install' },
  { id: '1d0tOpHWTTVlNCGLsfRa7REwWdGWanzGT', title: 'Emergency Repair' },
  { id: '1N4JoHmiMIaL37VukK588iGzwU50rzxaS', title: 'Clean Setup' },
  { id: '1a9lWwVcSWXBw_ai1VslG7uVIK3Zpbdmz', title: 'Texas Trusted' }
];

export default function Showcase() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20 text-center">
            <span className="text-accent-blue font-black uppercase tracking-[0.4em] text-xs mb-6 block">Our Work In Action</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter">
                Real Pros. Real <span className="text-emergency-orange">Results.</span>
            </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SHOWCASE_IMAGES.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-soft-gray"
            >
              <img 
                src={`https://lh3.googleusercontent.com/d/${img.id}`} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-black uppercase tracking-widest text-xs mb-1">Service Spotlight</p>
                <p className="text-white text-xl font-black uppercase font-oswald italic">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
