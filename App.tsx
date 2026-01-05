
import React, { useState, useEffect } from 'react';
import { MENU_PHOTOS, NAV_ITEMS, CAFE_DETAILS, MENU_DATA } from './constants';
import { SectionHeading } from './components/SectionHeading';
import { CoffeeConcierge } from './components/CoffeeConcierge';
import { Toast } from './components/Toast';

// --- Page Components ---

const Home: React.FC<{ setPage: (p: string) => void }> = ({ setPage }) => (
  <>
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop" 
          alt="Lucid Café Interior" 
          className="w-full h-full object-cover scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-espresso/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-ivory px-6 max-w-4xl animate-slide-up">
        <span className="block text-sm uppercase tracking-[0.5em] mb-6 font-light">Midtown Manhattan</span>
        <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight italic">
          Where Flavor <br /> Meets Intention
        </h1>
        <p className="text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
          A sanctuary of boutique coffee culture, artisanal pastries, and curated NYC lifestyle.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => { setPage('menu'); window.scrollTo(0, 0); }}
            className="bg-ivory text-espresso px-12 py-5 rounded-sm font-medium tracking-widest uppercase text-xs hover:bg-tan hover:text-ivory transition-all shadow-xl"
          >
            Explore Offerings
          </button>
          <button 
            onClick={() => { setPage('story'); window.scrollTo(0, 0); }}
            className="text-ivory border-b border-ivory/30 pb-1 font-medium tracking-widest uppercase text-xs hover:border-ivory transition-all"
          >
            Our Story
          </button>
        </div>
      </div>
    </header>

    <section className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="A Visual Journey" subtitle="Our Offerings" />
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in max-w-5xl mx-auto">
          {MENU_PHOTOS.map((photo, index) => (
            <div key={index} className="group relative h-[450px] overflow-hidden rounded-sm shadow-xl cursor-default">
              <img src={photo.url} alt={photo.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-espresso/20 group-hover:bg-espresso/60 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-serif text-white mb-2">{photo.title}</h3>
                <p className="text-ivory/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">{photo.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <button 
            onClick={() => { setPage('menu'); window.scrollTo(0, 0); }}
            className="text-espresso border border-espresso/20 px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-espresso hover:text-ivory transition-all"
          >
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  </>
);

const Menu: React.FC = () => {
  const categories = [
    { id: 'coffee', label: 'Coffee & Espresso' },
    { id: 'specialty', label: 'Specialty, Tea & Juices' },
    { id: 'savory', label: 'Light Bites & Breakfast' },
  ];

  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Curated Selection" subtitle="The Menu" />
        
        <div className="grid lg:grid-cols-2 gap-x-20 gap-y-16 max-w-6xl mx-auto">
          {categories.map((cat) => (
            <div key={cat.id} className="space-y-8">
              <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-tan border-b border-tan/20 pb-4">
                {cat.label}
              </h3>
              <div className="space-y-8">
                {MENU_DATA.filter(item => item.category === cat.id).map(item => (
                  <div key={item.id} className="group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-xl font-serif text-espresso group-hover:text-tan transition-colors">{item.name}</h4>
                      <span className="text-tan font-medium ml-4">{item.price}</span>
                    </div>
                    <p className="text-charcoal/60 text-sm leading-relaxed max-w-md italic">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-cream text-center rounded-sm border border-tan/10 max-w-3xl mx-auto">
          <p className="text-charcoal/70 italic text-sm mb-6 leading-relaxed">
            "Every drink at Lucid is calibrated for precision. Our seasonal beans rotate monthly to ensure we are always serving the peak of the harvest."
          </p>
          <div className="flex flex-col items-center gap-2">
             <span className="text-[10px] uppercase tracking-widest text-tan font-bold">House Standards</span>
             <p className="text-[9px] text-charcoal/40 uppercase tracking-widest">Extra Shot $1.75 • Syrups $0.75 • Alt Milks Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Story: React.FC = () => (
  <div className="pt-32 pb-24 bg-cream">
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <SectionHeading title="The Lucid Narrative" subtitle="The Story" />
        <p className="text-charcoal/60 italic text-xl font-serif">"Crafting a sanctuary for the senses in the heart of the city."</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
        <div className="order-2 md:order-1">
          <h3 className="text-3xl font-serif text-espresso mb-6">Our Origins</h3>
          <p className="text-charcoal/80 leading-relaxed mb-6">
            Lucid Café began as a quiet ambition: to redefine the frantic energy of Midtown with a space that demands presence. We looked at the typical coffee run and saw an opportunity for elevation—a moment where flavor is matched by intention.
          </p>
          <p className="text-charcoal/80 leading-relaxed">
            In our 311 Lexington location, we've curated every detail, from the acoustics that dampen the city noise to the textures of our ceramic vessels. We are not just a café; we are a destination for those who seek quality without pretension.
          </p>
        </div>
        <div className="order-1 md:order-2 rounded-sm overflow-hidden shadow-2xl h-[500px]">
          <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale-[30%]" alt="Art of brewing" />
        </div>
      </div>

      <div className="bg-espresso text-ivory p-12 md:p-24 rounded-sm shadow-2xl relative overflow-hidden mb-32">
        <div className="absolute top-0 right-0 w-64 h-64 bg-tan opacity-10 rounded-full -mr-32 -mt-32"></div>
        <div className="relative z-10 grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <span className="text-tan font-serif text-5xl italic block mb-4">01.</span>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Integrity</h4>
            <p className="text-sm opacity-60">We source exclusively from micro-lots that prioritize ethical transparency.</p>
          </div>
          <div className="text-center">
            <span className="text-tan font-serif text-5xl italic block mb-4">02.</span>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Artistry</h4>
            <p className="text-sm opacity-60">Our baristas are curators of flavor, trained in the technical and sensory arts of extraction.</p>
          </div>
          <div className="text-center">
            <span className="text-tan font-serif text-5xl italic block mb-4">03.</span>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Connection</h4>
            <p className="text-sm opacity-60">Every interaction at Lucid is an opportunity to cultivate community in Manhattan.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Gallery: React.FC = () => (
  <div className="pt-32 pb-24 bg-ivory">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading title="A Glimpse Inside" subtitle="Gallery" />
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {[
          'https://images.unsplash.com/photo-1511920170033-f8396924c348',
          'https://images.unsplash.com/photo-1442512595331-e89e73853f31',
          'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd',
          'https://images.unsplash.com/photo-1461023058943-07fcbe16d735',
          'https://images.unsplash.com/photo-1497935586351-b67a49e012bf',
          'https://images.unsplash.com/photo-1525648199074-cee30ba79a4a',
          'https://images.unsplash.com/photo-1559496417-e7f25cb247f3',
          'https://images.unsplash.com/photo-1551024601-bec78aea704b',
          'https://images.unsplash.com/photo-1509042239860-f550ce710b93'
        ].map((url, i) => (
          <div key={i} className="relative group overflow-hidden rounded-sm shadow-md">
            <img src={`${url}?q=80&w=800&auto=format&fit=crop`} alt="Café Lifestyle" className="w-full hover:scale-105 transition-transform duration-700 cursor-pointer" />
            <div className="absolute inset-0 bg-espresso/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="text-ivory text-xs uppercase tracking-widest">Lucid Moments</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Visit: React.FC = () => (
  <div className="pt-32 pb-24 bg-cream">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading title="Join Us in Midtown" subtitle="Visit Us" />
      <div className="grid lg:grid-cols-2 gap-20 items-stretch">
        <div className="space-y-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-tan mb-4">Our Address</h4>
              <p className="text-charcoal leading-relaxed">
                {CAFE_DETAILS.address}<br />
                {CAFE_DETAILS.neighborhood}
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-tan mb-4">Contact</h4>
              <p className="text-charcoal">📞 {CAFE_DETAILS.phone}</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-tan mb-6">Service Hours</h4>
            {CAFE_DETAILS.hours.map((h, i) => (
              <div key={i} className="flex justify-between border-b border-tan/10 py-3">
                <span className="font-medium text-espresso">{h.days}</span>
                <span className="text-charcoal/70">{h.time}</span>
              </div>
            ))}
          </div>

          <form className="space-y-6 pt-6">
             <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-tan mb-2">Inquiry</h4>
             <div className="grid md:grid-cols-2 gap-6">
               <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-espresso/20 py-3 focus:outline-none focus:border-tan" />
               <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-espresso/20 py-3 focus:outline-none focus:border-tan" />
             </div>
             <textarea placeholder="Your Message" rows={4} className="w-full bg-transparent border-b border-espresso/20 py-3 focus:outline-none focus:border-tan resize-none"></textarea>
             <button type="button" className="bg-espresso text-ivory px-12 py-4 text-xs uppercase tracking-widest font-bold hover:bg-tan transition-all">Send Inquiry</button>
          </form>
        </div>

        <div className="min-h-[500px] h-full relative rounded-sm overflow-hidden shadow-2xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.43577747833!2d-73.9778073!3d40.7487442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25906a539567f%3A0xb2eba6cfb1c112f9!2sLucid%20Cafe!5e0!3m2!1sen!2sus!4v1715620000000!5m2!1sen!2sus" 
            width="100%" height="100%" style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }} allowFullScreen loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
);

// --- Main App / Routing ---

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setToast({ message: "Welcome to the collective. You've been subscribed.", type: 'success' });
      setNewsletterEmail('');
      setIsSubmitting(false);
    }, 1200);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'menu': return <Menu />;
      case 'story': return <Story />;
      case 'gallery': return <Gallery />;
      case 'visit': return <Visit />;
      default: return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-tan selection:text-ivory bg-ivory">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled || currentPage !== 'home' ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button 
            onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}
            className="text-3xl font-serif font-bold tracking-tight text-espresso leading-none"
          >
            Lucid Café
          </button>
          <div className="hidden md:flex space-x-12">
            {NAV_ITEMS.map((item) => (
              <button 
                key={item.label} 
                onClick={() => { setCurrentPage(item.href); window.scrollTo(0, 0); }}
                className={`text-xs uppercase tracking-[0.3em] font-medium transition-colors ${currentPage === item.href ? 'text-tan underline underline-offset-8' : 'text-charcoal/80 hover:text-tan'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="animate-fade-in">
        {renderContent()}
      </main>

      <footer className="bg-espresso text-ivory py-20 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16 mb-20">
            <div className="space-y-6">
              <h4 className="text-3xl font-serif font-bold tracking-tight">Lucid Café</h4>
              <p className="text-ivory/60 text-sm leading-relaxed max-w-xs">
                An invitation to slow down and savor the intentionality of craft coffee and curated NYC lifestyle.
              </p>
            </div>
            
            <div className="col-span-2 space-y-8">
              <h5 className="text-xs uppercase tracking-[0.3em] font-bold text-tan">Stay Inspired</h5>
              <p className="text-xl font-serif">Join our collective for seasonal releases and exclusive events.</p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col md:flex-row gap-4">
                <input required type="email" value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)} placeholder="Your Email Address" className="bg-transparent border-b border-ivory/20 py-4 flex-1 focus:outline-none focus:border-tan transition-colors text-ivory placeholder:text-ivory/30" />
                <button type="submit" disabled={isSubmitting} className="bg-ivory text-espresso px-12 py-4 text-xs uppercase tracking-widest font-bold hover:bg-tan transition-all disabled:opacity-50">{isSubmitting ? 'Joining...' : 'Subscribe'}</button>
              </form>
            </div>
          </div>
          
          <div className="pt-12 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-ivory/40 gap-4">
            <p>&copy; {new Date().getFullYear()} Lucid Café NYC. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      <CoffeeConcierge />
    </div>
  );
};

export default App;
