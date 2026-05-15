import { motion } from 'motion/react';
import { Shield, Clock, BadgeCheck, DollarSign } from 'lucide-react';

const DIFFERENTIATORS = [
  { 
    icon: <Clock />, 
    title: "Instant Response", 
    desc: "30-60 minute arrival times across North Texas. We mean it when we say 24/7.",
    color: "bg-electric-blue"
  },
  { 
    icon: <DollarSign />, 
    title: "True Flat Rate", 
    desc: "The quote we give before starting is the total you pay. No surprises.",
    color: "bg-success-green"
  },
  { 
    icon: <BadgeCheck />, 
    title: "Master Licensed", 
    desc: "Top-tier Texas licensing on every truck. No rookies on your complex repairs.",
    color: "bg-purple-500"
  },
  { 
    icon: <Shield />, 
    title: "Home Protection", 
    desc: "We leave your home cleaner than we found it. Total protective gear on every job.",
    color: "bg-red-500"
  }
];

export default function Differentiators() {
  return (
    <section className="py-48 bg-navy-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-32 gap-12">
            <div className="max-w-xl text-center lg:text-left">
                <span className="text-electric-blue font-black uppercase tracking-[0.6em] text-[10px] mb-8 block">Why Choose Overall</span>
                <h2 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-none">
                    Unfair <br/> <span className="text-glow text-electric-blue">Advantage.</span>
                </h2>
            </div>
            <p className="max-w-sm text-xl text-white/40 font-bold italic border-l-4 border-electric-blue pl-8">
                In a sea of average plumbers, Overall stands alone in North Texas with a commitment to radical precision.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-[48px] overflow-hidden">
          {DIFFERENTIATORS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1 }}
              className="bg-navy-dark p-16 hover:bg-white/[0.02] transition-colors group relative border-white/5"
            >
              <div className={`${item.color} w-20 h-20 rounded-3xl flex items-center justify-center text-navy-dark mb-12 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                {item.icon && <div className="w-10 h-10">{item.icon}</div>}
              </div>
              
              <h3 className="text-3xl font-black uppercase italic tracking-tighter text-white mb-6 leading-none">
                {item.title}
              </h3>
              <p className="text-white/30 leading-relaxed text-lg font-medium group-hover:text-white/60 transition-colors">
                {item.desc}
              </p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-electric-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[600px] h-600px] bg-electric-blue/[0.02] blur-[150px] pointer-events-none translate-x-[200px] translate-y-[-200px]"></div>
    </section>
  );
}
