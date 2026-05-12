import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { Phone, ChevronRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-accent-blue font-black uppercase tracking-[0.3em] text-xs mb-6 block">Our Expertise</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
              All-Inclusive <br/>
              <span className="text-emergency-orange">Texas</span> Plumbing.
            </h2>
          </div>
          <p className="text-lg text-primary-navy/60 font-bold max-w-sm">
            From drips to commercial repipes — Overall Plumbing Texas handles it with flat-rate precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="group relative bg-soft-gray rounded-[2.5rem] p-10 border-2 border-transparent hover:border-accent-blue/10 hover:bg-white hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
            >
              <div className="text-5xl mb-8 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500 origin-left">
                {service.icon}
              </div>
              <div className="mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-accent-blue bg-accent-blue/5 px-2 py-1 rounded-full">
                   {service.category}
                </span>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-primary-navy mb-4">
                {service.title}
              </h3>
              <p className="text-sm text-primary-navy/60 font-bold mb-8 flex-grow leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between pt-8 border-t border-black/5">
                <span className="text-[10px] font-black text-primary-navy/30 uppercase tracking-[0.2em] italic">
                  {service.priceIndicator}
                </span>
                <a 
                  href="tel:9724630180" 
                  className="w-10 h-10 bg-white text-primary-navy rounded-full shadow-lg flex items-center justify-center group-hover:bg-emergency-orange group-hover:text-white transition-all transform group-hover:rotate-45"
                >
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic CTA Banner */}
        <div className="mt-32 p-12 lg:p-20 bg-primary-navy rounded-[4rem] text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/10 blur-[120px] -mr-64 -mt-64 group-hover:bg-accent-blue/20 transition-all duration-1000"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emergency-orange/5 blur-[120px] -ml-64 -mb-64 group-hover:bg-emergency-orange/10 transition-all duration-1000"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] tracking-tighter mb-6 underline decoration-emergency-orange decoration-8 underline-offset-8">
                The "Overall" Standard
              </h3>
              <p className="text-xl text-white/70 font-bold leading-relaxed">
                If it carries water, gas, or waste, we fix it. Over 15 years experience handling Texas's toughest plumbing challenges.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
              <a href="tel:9724630180" className="btn-primary py-6 px-12 group">
                 <span>FREE ESTIMATE</span>
                 <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
