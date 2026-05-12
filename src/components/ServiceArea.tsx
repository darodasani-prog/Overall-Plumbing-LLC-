import { motion } from 'motion/react';
import { LOCATIONS } from '../constants';
import { MapPin, Phone } from 'lucide-react';

export default function ServiceArea() {
  return (
    <section id="area" className="py-24 bg-soft-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-12 xl:col-span-5">
            <span className="text-accent-blue font-black uppercase tracking-[0.2em] text-xs mb-4 block">Where We Work</span>
            <h2 className="text-5xl md:text-6xl font-black uppercase font-oswald tracking-tighter leading-none mb-8">
              Serving Collin & <br/><span className="text-emergency-orange">Cooke</span> Counties.
            </h2>
            <p className="text-lg text-primary-navy/70 leading-relaxed font-medium mb-10 max-w-xl">
              Based in Wylie, we've fixed over 10,000 leaks across North Texas. Whether you're in Plano, Allen, or Garland, our local heroes are less than 90 minutes away.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-10">
              {LOCATIONS.map((city) => (
                <div key={city} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-transparent hover:border-accent-blue/20 transition-all group">
                  <div className="w-8 h-8 bg-accent-blue/10 rounded-full flex items-center justify-center text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-black uppercase text-sm tracking-tight text-primary-navy">{city}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary-navy p-8 rounded-3xl text-white shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-emergency-orange opacity-20 blur-3xl -mr-16 -mt-16"></div>
               <h4 className="text-xl font-bold font-oswald uppercase mb-2">Outside these areas?</h4>
               <p className="text-sm text-white/70 mb-6 font-medium leading-relaxed">Give us a call. We often take larger structural projects throughout the Dallas-Fort Worth metroplex.</p>
               <a 
                 href="tel:9724630180" 
                 className="inline-flex items-center gap-2 bg-white text-primary-navy px-6 py-3 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-emergency-orange hover:text-white transition-all shadow-lg active:scale-95"
               >
                 <Phone className="w-4 h-4" />
                 Check Availability
               </a>
            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-7 relative">
            <div className="aspect-square lg:aspect-video xl:aspect-square bg-white rounded-[3rem] shadow-2xl relative overflow-hidden border-8 border-white p-4">
              {/* Map Placeholder Graphic */}
              <div className="absolute inset-0 bg-slate-100 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-96.5389,33.0151,10,0/800x800?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTAAbzlueG9qNzhzZndpM2gifQ.p_98S76u7z9t.p-m5S_15_pS-9-S-9-S_15_pS-m5')] bg-cover bg-center">
                <div className="absolute inset-0 bg-accent-blue/5"></div>
              </div>
              
              {/* Pulsing Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                  <div className="w-32 h-32 bg-accent-blue/20 rounded-full animate-ping absolute -top-12 -left-12"></div>
                  <div className="w-8 h-8 bg-primary-navy rounded-full border-4 border-white shadow-2xl relative z-10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-emergency-orange rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Location Badge */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute top-8 right-8 z-30 bg-white p-6 rounded-3xl shadow-xl border border-soft-gray max-w-[240px]"
              >
                <div className="flex gap-4 items-start mb-4">
                   <div className="w-10 h-10 bg-emergency-orange rounded-2xl flex items-center justify-center text-white shrink-0">
                     <MapPin className="w-5 h-5" />
                   </div>
                   <div>
                     <h5 className="font-black uppercase font-oswald text-primary-navy text-sm">Headquarters</h5>
                     <p className="text-[10px] font-bold text-primary-navy/50 leading-tight uppercase mt-1">114 Hunters Glen Dr<br/>Wylie, TX 75098</p>
                   </div>
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-[#00C853] flex items-center gap-1.5 pt-4 border-t border-black/5">
                  <span className="w-1.5 h-1.5 bg-[#00C853] rounded-full animate-pulse"></span>
                  Trucks on Route Now
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
