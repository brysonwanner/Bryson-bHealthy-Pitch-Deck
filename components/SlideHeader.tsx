import React from 'react';
import { SOCIALS } from '../constants';
import { Facebook, Youtube, Instagram } from 'lucide-react';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'facebook': return <Facebook size={18} />;
    case 'youtube': return <Youtube size={18} />;
    case 'instagram': return <Instagram size={18} />;
    case 'tiktok': return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    );
    default: return null;
  }
};

export const SlideHeader: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-50 px-4 py-4 md:px-6 md:py-6 flex justify-between items-start pointer-events-none">
      {/* Logo */}
      <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 px-4 py-2 md:px-5 md:py-2.5 rounded-full pointer-events-auto shadow-xl flex items-center gap-2">
        <span className="text-lg md:text-xl font-black tracking-tighter text-white">
          Bryson <span className="text-emerald-400">bHealthy</span>
        </span>
      </div>

      {/* Socials */}
      <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-1.5 md:p-2 rounded-full pointer-events-auto shadow-xl flex gap-1.5 md:gap-2">
        {SOCIALS.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-emerald-500 hover:text-slate-900 text-slate-400 border border-slate-600 transition-all duration-300"
            aria-label={social.name}
          >
            {getIcon(social.icon)}
          </a>
        ))}
      </div>
    </div>
  );
};