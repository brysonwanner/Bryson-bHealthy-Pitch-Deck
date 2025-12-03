import React from 'react';
import { TESTIMONIALS } from '../constants';
import { MessageCircle, Heart } from 'lucide-react';

export const TestimonialsGrid: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {TESTIMONIALS.map((t, idx) => (
          <div 
            key={idx} 
            className="break-inside-avoid bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-emerald-500/50 transition-colors shadow-lg"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-slate-700/50 p-2 rounded-full min-w-[32px] flex justify-center items-center text-xs font-bold text-emerald-400">
                {t.author[0].toUpperCase()}
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">{t.author}</h4>
                <div className="flex items-center gap-1 text-[10px] text-slate-500 uppercase tracking-wider">
                  Verified Comment
                </div>
              </div>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed relative">
              <span className="text-emerald-500/20 text-4xl absolute -top-3 -left-2 font-serif select-none">"</span>
              {t.text}
            </p>
            
            <div className="mt-4 pt-3 border-t border-slate-700/50 flex justify-end">
              <Heart className="w-4 h-4 text-rose-500/50" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};