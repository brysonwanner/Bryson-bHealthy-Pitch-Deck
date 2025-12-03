import React, { useState } from 'react';
import { CORE_VALUES } from '../constants';
import { ShieldCheck, Heart, Scale, Brain, Mountain, Flame, Info, Sun, HeartHandshake } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />,
  Heart: <Heart className="w-6 h-6 md:w-8 md:h-8 text-rose-400" />,
  Scale: <Scale className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />,
  Brain: <Brain className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />,
  Mountain: <Mountain className="w-6 h-6 md:w-8 md:h-8 text-amber-400" />,
  Flame: <Flame className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />,
  Sun: <Sun className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 md:w-8 md:h-8 text-pink-400" />
};

export const ValuesGrid: React.FC = () => {
  const [activeValue, setActiveValue] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-7xl mx-auto p-4">
      {CORE_VALUES.map((val, idx) => (
        <div 
          key={idx}
          className={`h-full flex flex-col relative group bg-slate-800 rounded-xl p-3 md:p-5 border border-slate-700 hover:border-emerald-500 transition-all duration-300 cursor-pointer overflow-hidden ${activeValue === idx ? 'ring-2 ring-emerald-500 bg-slate-750' : ''}`}
          onClick={() => setActiveValue(activeValue === idx ? null : idx)}
        >
          <div className="flex items-center justify-between mb-2 md:mb-3 flex-shrink-0">
            <div className="p-1.5 md:p-2 bg-slate-900 rounded-full shadow-lg">
              {iconMap[val.iconName] || <Info />}
            </div>
            {activeValue === idx ? (
               <span className="text-[9px] md:text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Expanded</span>
            ) : (
               <span className="text-[9px] md:text-[10px] text-slate-500 group-hover:text-slate-300 transition-colors">More</span>
            )}
          </div>
          
          <h3 className="text-sm md:text-lg font-bold text-white mb-1 truncate flex-shrink-0">{val.title}</h3>
          
          <div className="mt-1 md:mt-2 flex-grow">
            {activeValue === idx ? (
              <p className="text-slate-200 text-[10px] md:text-[11px] leading-relaxed animate-in fade-in duration-300">
                {val.fullDef}
              </p>
            ) : (
              <p className="text-slate-400 text-xs md:text-sm leading-snug animate-in fade-in duration-300">
                {val.shortDef}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};