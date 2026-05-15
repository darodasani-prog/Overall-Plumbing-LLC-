import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Phone, MapPin, Send, CheckCircle2, ChevronRight } from 'lucide-react';
import type { FormEvent } from 'react';

export default function Footer() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <footer id="estimate" className="bg-navy-dark text-white pt-48 pb-12 overflow-hidden relative">
      {/* Decorative Radial */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-electric-blue/[0.03] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32">
          {/* Left Column: Brand & Info */}
          <div className="lg:col-span-4 translate-y-[-24px]">
            <div className="flex items-center gap-3 mb-12 group">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center transition-transform hover:rotate-12">
                <div className="w-6 h-6 border-4 border-electric-blue rounded-full"></div>
              </div>
              <div className="leading-none">
                <h2 className="text-3xl font-black uppercase tracking-tighter italic">Overall</h2>
                <p className="text-[10px] font-black text-electric-blue uppercase tracking-[0.2em] mt-1">Plumbing Texas</p>
              </div>
            </div>
            
            <p className="text-white/40 text-xl leading-relaxed mb-12 font-medium italic">
                Leading the North Texas plumbing industry with radical transparency and licensed precision since 2009.
            </p>

            <div className="space-y-8 mb-12">
               <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-electric-blue shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-white/20 tracking-widest mb-1">Direct Line</p>
                    <a href="tel:9724630180" className="text-2xl font-black italic tracking-tighter hover:text-electric-blue transition-colors leading-none">
                        (972) 463-0180
                    </a>
                  </div>
               </div>
               <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-electric-blue shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-white/20 tracking-widest mb-1">HQ Location</p>
                    <p className="text-xl font-black italic tracking-tighter leading-none">Wylie, Texas</p>
                  </div>
               </div>
            </div>

            <div className="flex gap-4">
               {['GOOGLE', 'BBB', 'YELP'].map(p => (
                 <div key={p} className="glass-card px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white/40">
                   {p} 5.0
                 </div>
               ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-8">
            <div className="glass-card p-12 md:p-20 rounded-[48px] relative overflow-hidden">
               <AnimatePresence mode="wait">
                  {formState === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-24 h-24 bg-success-green/10 rounded-full flex items-center justify-center text-success-green mx-auto mb-10">
                        <CheckCircle2 className="w-12 h-12" />
                      </div>
                      <h3 className="text-5xl font-black uppercase italic italic tracking-tighter mb-4">Rescue Initiated.</h3>
                      <p className="text-white/40 text-xl font-medium">A master plumber will call you within 5 minutes.</p>
                      <button 
                        onClick={() => setFormState('idle')}
                        className="mt-12 text-electric-blue font-black uppercase tracking-widest text-xs border-b border-electric-blue/20 pb-1 hover:border-electric-blue transition-all"
                      >
                         Send another request
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div key="form">
                       <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6">Expert <br/> <span className="text-glow text-electric-blue">Consultation</span></h3>
                       <p className="text-white/40 text-lg mb-12 font-medium">Describe your emergency and we'll dispatch instantly.</p>
                       
                       <form onSubmit={handleSubmit} className="space-y-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                             <div className="relative group">
                                <input 
                                  required 
                                  type="text" 
                                  className="w-full bg-white/5 border border-white/10 h-16 px-8 rounded-2xl focus:border-electric-blue outline-none transition-all peer placeholder-transparent" 
                                  placeholder="Name" 
                                  id="footer-name"
                                />
                                <label htmlFor="footer-name" className="absolute left-8 top-1/2 -translate-y-1/2 text-white/20 uppercase font-black text-[10px] tracking-widest pointer-events-none transition-all peer-focus:top-[-10px] peer-focus:left-4 peer-focus:bg-navy-dark peer-focus:px-2 peer-focus:text-electric-blue peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:bg-navy-dark peer-[:not(:placeholder-shown)]:px-2">First Name</label>
                             </div>
                             <div className="relative group">
                                <input 
                                  required 
                                  type="tel" 
                                  className="w-full bg-white/5 border border-white/10 h-16 px-8 rounded-2xl focus:border-electric-blue outline-none transition-all peer placeholder-transparent" 
                                  placeholder="Phone" 
                                  id="footer-phone"
                                />
                                <label htmlFor="footer-phone" className="absolute left-8 top-1/2 -translate-y-1/2 text-white/20 uppercase font-black text-[10px] tracking-widest pointer-events-none transition-all peer-focus:top-[-10px] peer-focus:left-4 peer-focus:bg-navy-dark peer-focus:px-2 peer-focus:text-electric-blue peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:bg-navy-dark peer-[:not(:placeholder-shown)]:px-2">Phone Number</label>
                             </div>
                          </div>
                          
                          <div className="relative group">
                             <textarea 
                               required 
                               rows={4}
                               className="w-full bg-white/5 border border-white/10 p-8 rounded-2xl focus:border-electric-blue outline-none transition-all peer placeholder-transparent resize-none" 
                               placeholder="Issue" 
                               id="footer-issue"
                             ></textarea>
                             <label htmlFor="footer-issue" className="absolute left-8 top-8 text-white/20 uppercase font-black text-[10px] tracking-widest pointer-events-none transition-all peer-focus:top-[-10px] peer-focus:left-4 peer-focus:bg-navy-dark peer-focus:px-2 peer-focus:text-electric-blue peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:bg-navy-dark peer-[:not(:placeholder-shown)]:px-2">Describe Major Emergency</label>
                          </div>

                          <button 
                            type="submit" 
                            disabled={formState === 'sending'}
                            className="btn-premium btn-electric w-full h-20 text-xl disabled:opacity-50"
                          >
                             {formState === 'sending' ? (
                               <div className="w-8 h-8 border-4 border-navy-dark/20 border-t-navy-dark rounded-full animate-spin"></div>
                             ) : (
                               <>
                                 Immediate Dispatch Request
                                 <Send className="w-6 h-6 ml-4" />
                               </>
                             )}
                          </button>
                       </form>
                    </motion.div>
                  )}
               </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-white/20">
           <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em]">
             <span className="text-electric-blue/40 italic">Overall Plumbing Texas • TX-39042</span>
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
           </div>
           
           <p className="text-[10px] font-black uppercase tracking-[0.3em]">
             © {currentYear} ALL RIGHTS RESERVED
           </p>
        </div>
      </div>
    </footer>
  );
}
