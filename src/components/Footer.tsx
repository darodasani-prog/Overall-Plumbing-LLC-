import { Phone, MapPin, Quote, ChevronRight, Star } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-navy text-white pt-32 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-10 group">
              <div className="w-12 h-12 bg-emergency-orange rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                <div className="w-6 h-6 border-4 border-white rounded-full"></div>
              </div>
              <div className="leading-none">
                <h2 className="text-3xl font-black uppercase tracking-tighter">Overall</h2>
                <p className="text-xs font-black text-accent-blue uppercase tracking-[0.2em] mt-1">Plumbing Texas</p>
              </div>
            </div>
            <p className="text-white/40 text-lg leading-relaxed mb-10 max-w-sm font-bold">
              Wylie's premier 24/7 plumbing service. Flat-rate, same-day rescue for residential and commercial needs across North Texas.
            </p>
            <div className="flex gap-4">
               {['Google', 'Yelp', 'BBB', 'FB'].map(brand => (
                 <div key={brand} className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-xs font-black hover:bg-white/10 transition-colors cursor-pointer border border-white/5 text-white/40">
                   {brand}
                 </div>
               ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-black text-sm uppercase tracking-[0.2em] text-accent-blue mb-10">Services</h4>
            <ul className="space-y-6 text-sm font-bold text-white/40 uppercase tracking-widest">
              <li className="hover:text-white transition-colors cursor-pointer">Emergency Repair</li>
              <li className="hover:text-white transition-colors cursor-pointer">Drain & Sewer</li>
              <li className="hover:text-white transition-colors cursor-pointer">Water Heaters</li>
              <li className="hover:text-white transition-colors cursor-pointer">Leak Detection</li>
              <li className="hover:text-white transition-colors cursor-pointer">Hydro Jetting</li>
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h4 className="font-black text-sm uppercase tracking-[0.2em] text-accent-blue mb-10">Direct Contact</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <p className="text-[10px] font-black uppercase text-white/30 tracking-widest mb-2">Location</p>
                <p className="font-bold text-white/60 leading-relaxed uppercase text-sm">
                   114 Hunters Glen Dr<br/>Wylie, TX 75098
                </p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-white/30 tracking-widest mb-2">24/7 Emergency</p>
                <a href="tel:9724630180" className="text-3xl font-black text-white hover:text-emergency-orange transition-colors block leading-none">
                  (972) 463-0180
                </a>
                <span className="text-[10px] font-black text-success-green uppercase tracking-widest mt-2 block animate-pulse">● Available Now</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-6 items-center">
             <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Visa_Logo.png" alt="Visa" className="h-6 grayscale opacity-20" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="Mastercard" className="h-6 grayscale opacity-20" />
             <div className="text-[10px] font-black uppercase text-white/10 tracking-widest">Financing Available</div>
          </div>
          
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/10">
            © {currentYear} Overall Plumbing Texas • TX-39042
          </p>
        </div>
      </div>
    </footer>
  );
}
