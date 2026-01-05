
import React, { useState } from 'react';
import { getCoffeeRecommendation } from '../services/geminiService.tsx';

export const CoffeeConcierge: React.FC = () => {
  const [query, setQuery] = useState('');
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleRecommend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const result = await getCoffeeRecommendation(query);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 overflow-hidden animate-slide-up border border-ivory">
          <div className="bg-espresso p-4 flex justify-between items-center">
            <h3 className="text-ivory font-serif text-lg italic">The Lucid Concierge</h3>
            <button onClick={() => setIsOpen(false)} className="text-ivory hover:opacity-70">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <div className="p-6">
            {!recommendation ? (
              <form onSubmit={handleRecommend} className="space-y-4">
                <p className="text-charcoal/70 text-sm italic">"What kind of flavor are you in the mood for today?"</p>
                <input 
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g., something creamy and sweet"
                  className="w-full p-3 bg-ivory border border-tan/20 rounded-lg focus:outline-none focus:border-tan transition-colors"
                />
                <button 
                  disabled={loading}
                  className="w-full bg-espresso text-ivory py-3 rounded-lg hover:bg-charcoal transition-all disabled:opacity-50"
                >
                  {loading ? 'Curating...' : 'Get Recommendation'}
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                <p className="text-charcoal leading-relaxed italic text-sm">
                  {recommendation}
                </p>
                <button 
                  onClick={() => { setRecommendation(null); setQuery(''); }}
                  className="text-tan font-medium text-sm uppercase tracking-widest hover:text-espresso transition-colors"
                >
                  Ask Again
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-espresso text-ivory p-4 rounded-full shadow-xl hover:scale-105 transition-transform flex items-center space-x-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
          <span className="font-serif italic hidden md:block">Concierge</span>
        </button>
      )}
    </div>
  );
};
