import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Droplets, Wrench, Shield, Zap, Calculator, HeartHandshake } from 'lucide-react';

interface EstimateFormProps {
  setCursor?: (text: string) => void;
}

const ISSUES = [
  {
    id: 'burst',
    icon: <Droplets className="w-6 h-6 text-emergency-red" />,
    title: 'Pipe Burst / Flood',
    basePrice: 152,
    severity: '🚨 Critical Emergency',
    avgResponse: '30-40 min',
    desc: 'Active leak or water line rupture needing immediate high-pressure shutdown.'
  },
  {
    id: 'clog',
    icon: <Wrench className="w-6 h-6 text-electric-blue" />,
    title: 'Clogged Main Drain',
    basePrice: 94,
    severity: '⚡ High Priority',
    avgResponse: '45-60 min',
    desc: 'Backed up toilets, sinks or main sewer lines causing drain containment errors.'
  },
  {
    id: 'heater',
    icon: <Zap className="w-6 h-6 text-amber-400" />,
    title: 'Water Heater failure',
    basePrice: 120,
    severity: '✓ Urgent Service',
    avgResponse: '60 min',
    desc: 'No hot water or visible leaking baseboards below tankless/traditional boilers.'
  },
  {
    id: 'leak',
    icon: <Shield className="w-6 h-6 text-success-green" />,
    title: 'Leak Detection / Odor',
    basePrice: 110,
    severity: '✓ Scheduled Rescue',
    avgResponse: 'Within 2 hours',
    desc: 'Mysterious water puddles, high water bill spikes, or sulfur line scans.'
  }
];

const ADDONS = [
  { id: 'camera', label: 'Forensic Video Sewer Scan', price: 0, checked: true, desc: 'Always 100% Free with diagnostic' },
  { id: 'warranty', label: '5-Year Master Class Warranty', price: 49, checked: false, desc: 'Extend standard 1-year guarantee' },
  { id: 'priority', label: 'O-VIP Front of Line Dispatch', price: 19, checked: false, desc: 'Skip standard dispatch sequence' }
];

export default function EstimateForm({ setCursor }: EstimateFormProps) {
  const [selectedIssue, setSelectedIssue] = useState(ISSUES[0]);
  const [activeAddons, setActiveAddons] = useState<string[]>(['camera']);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', city: 'Wylie' });

  const toggleAddon = (addonId: string) => {
    // Camera scan is always free & included (cannot toggle out)
    if (addonId === 'camera') return;
    if (activeAddons.includes(addonId)) {
      setActiveAddons(activeAddons.filter(id => id !== addonId));
    } else {
      setActiveAddons([...activeAddons, addonId]);
    }
  };

  const calculatedTotal = () => {
    const addonPrice = ADDONS.reduce((total, cur) => {
      if (activeAddons.includes(cur.id)) {
        return total + cur.price;
      }
      return total;
    }, 0);
    return selectedIssue.basePrice + addonPrice;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="estimate" className="py-24 md:py-36 bg-navy-dark relative overflow-hidden text-white border-t border-white/[0.05]">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy-light/20 to-navy-dark pointer-events-none" />
      
      {/* Background Graphic elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-electric-blue/5 blur-[150px] rounded-full pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <span className="text-electric-blue font-black uppercase tracking-[0.6em] text-[10px] mb-4 block">Interactive Tool</span>
          <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-6">
            Instant Flat <br/> <span className="text-electric-blue text-glow">Calculations.</span>
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-base md:text-lg">
            No blind appointments or hourly tricks. Choose your concern to build an instantaneous transparent rate estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Panel: Selector */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            <div className="glass-card p-8 md:p-10 rounded-[32px] flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-electric-blue/10 flex items-center justify-center border border-electric-blue/30 text-electric-blue">
                  <Calculator className="w-5 h-5" />
                </div>
                <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tight">Step 1: Select Your Emergency</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {ISSUES.map((issue) => {
                  const isSelected = selectedIssue.id === issue.id;
                  return (
                    <button
                      key={issue.id}
                      type="button"
                      onClick={() => setSelectedIssue(issue)}
                      onMouseEnter={() => setCursor?.("SELECT")}
                      onMouseLeave={() => setCursor?.("")}
                      className={`text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-44 cursor-pointer select-none ${
                        isSelected 
                          ? 'border-electric-blue bg-electric-blue/[0.05] shadow-[0_0_30px_rgba(0,212,255,0.15)]'
                          : 'border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10'
                      }`}
                    >
                      <div className="flex justify-between items-start w-full">
                        <div className={`p-3 rounded-xl ${isSelected ? 'bg-electric-blue/20' : 'bg-white/5'}`}>
                          {issue.icon}
                        </div>
                        <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${
                          issue.id === 'burst' 
                            ? 'bg-emergency-red/20 text-emergency-red' 
                            : 'bg-white/10 text-white/60'
                        }`}>
                          {issue.avgResponse}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-lg font-black uppercase italic tracking-tight mt-4 leading-none">{issue.title}</h4>
                        <p className="text-xs text-white/40 mt-1 line-clamp-1">{issue.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Addons Selection */}
              <div className="mt-auto pt-6 border-t border-white/[0.05]">
                <h4 className="text-xs font-black uppercase tracking-widest text-white/30 mb-4 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-electric-blue animate-pulse" /> Included & Flexible Upgrades:
                </h4>
                <div className="flex flex-col gap-3">
                  {ADDONS.map((addon) => {
                    const isChecked = activeAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        onMouseEnter={() => addon.id !== 'camera' && setCursor?.("TOGGLE")}
                        onMouseLeave={() => setCursor?.("")}
                        className={`flex items-center justify-between p-4 rounded-xl border transition-all select-none ${
                          addon.id === 'camera' ? 'cursor-default' : 'cursor-pointer'
                        } ${
                          isChecked 
                            ? 'border-electric-blue/40 bg-electric-blue/[0.03]' 
                            : 'border-white/[0.03] bg-white/[0.005] hover:bg-white/[0.02]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            readOnly
                            disabled={addon.id === 'camera'}
                            className="w-4 h-4 accent-electric-blue border-white/20 rounded bg-transparent"
                          />
                          <div>
                            <span className="text-sm font-bold block">{addon.label}</span>
                            <span className="text-[10px] text-white/30">{addon.desc}</span>
                          </div>
                        </div>
                        <span className={`text-xs font-black uppercase ${isChecked && addon.price > 0 ? 'text-electric-blue' : 'text-white/40'}`}>
                          {addon.price === 0 ? 'FREE' : `+$${addon.price}`}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Summary Invoice & Request */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            <div className="glass-card p-8 md:p-10 rounded-[32px] flex flex-col justify-between h-full relative overflow-hidden border-2 border-electric-blue/30 bg-gradient-to-b from-navy-light/30 to-navy-dark">
              {/* Decorative top strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue to-blue-500" />
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="estimator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Premium Logo Header */}
                      <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/[0.05]">
                        <div>
                          <span className="text-[9px] font-black uppercase text-electric-blue tracking-widest block">Overall Standard Setup</span>
                          <span className="text-xl font-black uppercase italic tracking-tighter">Diagnostic Ticket</span>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-3 py-1 rounded bg-electric-blue/10 border border-electric-blue/20 text-electric-blue font-black uppercase text-[9px] tracking-widest">
                            {selectedIssue.severity}
                          </span>
                        </div>
                      </div>

                      {/* Line Items */}
                      <div className="flex flex-col gap-4 text-sm mb-10">
                        <div className="flex justify-between items-center py-2 border-b border-white/[0.03]">
                          <span className="text-white/40">Diagnostic / Assessment Base:</span>
                          <span className="font-bold text-white">${selectedIssue.basePrice}.00</span>
                        </div>
                        
                        {activeAddons.map(id => {
                          const item = ADDONS.find(a => a.id === id);
                          if (!item) return null;
                          return (
                            <div key={id} className="flex justify-between items-center py-2 border-b border-white/[0.03]">
                              <span className="text-white/40">{item.label}:</span>
                              <span className="font-bold text-electric-blue">{item.price === 0 ? 'FREE / Included' : `+$${item.price}.00`}</span>
                            </div>
                          );
                        })}

                        {/* Subtotal */}
                        <div className="flex justify-between items-end pt-6">
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/30 block mb-1">Guaranteed Flat Estimated Total</span>
                            <span className="text-xs text-white/40">Includes local dispatch & full diagnostic scan</span>
                          </div>
                          <div className="text-right">
                            <span className="text-4xl md:text-5xl font-black text-glow text-electric-blue italic">${calculatedTotal()}.00</span>
                          </div>
                        </div>
                      </div>

                      {/* Coverage parameters */}
                      <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between gap-4 mb-8">
                        <div>
                          <span className="text-[9px] text-white/30 uppercase font-black tracking-widest block mb-0.5">Est. Arrival Time</span>
                          <span className="text-sm font-black italic uppercase tracking-tight text-white/80">{selectedIssue.avgResponse} En Route</span>
                        </div>
                        <div className="h-6 w-px bg-white/10" />
                        <div>
                          <span className="text-[9px] text-white/30 uppercase font-black tracking-widest block mb-0.5">Dispatch Status</span>
                          <span className="text-sm font-black italic uppercase tracking-tight text-success-green flex items-center gap-1">
                            <span className="w-2 h-2 bg-success-green rounded-full animate-ping" /> High Priority
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Booking Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="YOUR FULL NAME"
                          className="w-full h-14 bg-white/5 border border-white/10 rounded-xl px-5 text-sm uppercase font-bold tracking-widest placeholder:text-white/20 focus:outline-none focus:border-electric-blue transition-colors text-white"
                        />
                      </div>
                      
                      <div className="relative">
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="MOBILE PHONE FOR DISPATCH"
                          className="w-full h-14 bg-white/5 border border-white/10 rounded-xl px-5 text-sm uppercase font-bold tracking-widest placeholder:text-white/20 focus:outline-none focus:border-electric-blue transition-colors text-white"
                        />
                      </div>

                      <div className="relative">
                        <select
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full h-14 bg-white/5 border border-white/10 rounded-xl px-5 text-sm font-bold tracking-widest focus:outline-none focus:border-electric-blue transition-colors text-white appearance-none cursor-pointer"
                        >
                          <option value="Wylie" className="bg-navy-dark">Wylie TX (Plumbing Headquarters)</option>
                          <option value="Plano" className="bg-navy-dark">Plano TX (Active Dispatch Unit)</option>
                          <option value="Garland" className="bg-navy-dark">Garland TX (Active Dispatch Unit)</option>
                          <option value="Sachse" className="bg-navy-dark">Sachse TX</option>
                          <option value="Murphy" className="bg-navy-dark">Murphy TX</option>
                          <option value="Lucas" className="bg-navy-dark">Lucas TX</option>
                          <option value="Allen" className="bg-navy-dark">Allen TX</option>
                          <option value="Richardson" className="bg-navy-dark">Richardson TX</option>
                          <option value="Frisco" className="bg-navy-dark">Frisco TX</option>
                          <option value="McKinney" className="bg-navy-dark">McKinney TX</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        onMouseEnter={() => setCursor?.("SUBMIT")}
                        onMouseLeave={() => setCursor?.("")}
                        className="btn-premium btn-electric w-full h-16 text-lg tracking-widest font-black uppercase flex items-center justify-center gap-3 cursor-pointer mt-2"
                      >
                        Lock In Flat Quote
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 px-4 h-full"
                  >
                    <div className="w-20 h-20 bg-success-green/10 border border-success-green/30 text-success-green rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(0,255,136,0.15)] animate-bounce">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <h4 className="text-3xl font-black uppercase italic tracking-tighter leading-none mb-6">
                      Priority Lock <br/> <span className="text-success-green text-glow">COMMITTED</span>
                    </h4>
                    
                    <p className="text-white/50 text-base leading-relaxed mb-8 max-w-sm">
                      Thank you, <strong className="text-white uppercase">{formData.name}</strong>. Your flat quote of <strong className="text-electric-blue font-black">${calculatedTotal()}.00</strong> for <strong className="text-white uppercase">{selectedIssue.title}</strong> has been priority locked on our local board in <strong className="text-white uppercase">{formData.city}</strong>.
                    </p>

                    <div className="w-full border-t border-white/[0.05] pt-8 flex flex-col gap-4 text-xs font-bold uppercase tracking-wider text-white/40">
                      <div className="flex items-center gap-3 justify-center">
                        <ShieldCheck className="w-4 h-4 text-success-green" />
                        <span>Licensed Plumber Assigned to Truck</span>
                      </div>
                      <div className="flex items-center gap-3 justify-center">
                        <HeartHandshake className="w-4 h-4 text-electric-blue" />
                        <span>A dispatcher is calling you at <strong className="text-white">{formData.phone}</strong> in ~3 mins</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', phone: '', city: 'Wylie' });
                      }}
                      className="mt-12 btn-premium btn-outline text-xs tracking-widest py-3 px-8 cursor-pointer h-12"
                    >
                      Calculate Another
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
