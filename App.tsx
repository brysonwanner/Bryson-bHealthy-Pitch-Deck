import React, { useState } from 'react';
import { Slide } from './components/Slide';
import { SlideHeader } from './components/SlideHeader';
import { ValuesGrid } from './components/ValuesGrid';
import { AnalyticsCharts } from './components/AnalyticsCharts';
import { TestimonialsGrid } from './components/TestimonialsGrid';
import { SOCIALS, OVERVIEW_STATS } from './constants';
import { ArrowRight, ChevronDown, Mail, ExternalLink, Target, Shield, Zap, Users, Newspaper } from 'lucide-react';

enum SlideIndex {
  INTRO = 0,
  ABOUT = 1,
  STATS = 2,
  VALUES = 3,
  TESTIMONIALS = 4,
  CONTACT = 5,
}

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const totalSlides = 6;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) setCurrentSlide(curr => curr + 1);
  };

  return (
    <div className="relative h-screen w-full bg-slate-900 text-white selection:bg-emerald-500 selection:text-white">
      
      {/* Navigation Indicators (Global Fixed) */}
      <div className="fixed right-3 md:right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3 md:gap-4 pointer-events-auto">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 shadow-sm ${
              currentSlide === idx ? 'bg-emerald-500 scale-125' : 'bg-slate-600 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>

      {/* --- SLIDE 0: INTRO / ABOUT ME (Centered Hero) --- */}
      <Slide isActive={currentSlide === SlideIndex.INTRO} header={<SlideHeader />}>
        <div className="flex flex-col h-full">
          <div className="flex-1 flex flex-col items-center justify-center px-4 text-center relative z-10 pt-24 pb-12 md:pt-28 md:pb-20">
            <div className="animate-fade-in-up max-w-5xl mx-auto flex flex-col items-center">
              <span className="inline-block py-1 px-3 md:py-1.5 md:px-4 rounded-full text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 text-xs md:text-sm font-bold tracking-widest uppercase mb-4 md:mb-8 shadow-lg shadow-emerald-900/20">
                120lbs Down
              </span>
              
              <h1 className="text-4xl md:text-7xl lg:text-9xl font-black text-white mb-4 md:mb-6 leading-tight tracking-tight whitespace-nowrap">
                Bryson Wanner
              </h1>
              
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-400 mb-4 md:mb-6 max-w-3xl mx-auto">
                From Obese to Healthy. Inspiring Millions.
              </h2>
              
              <p className="text-base md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-6 md:mb-8">
                Building an <span className="text-white font-semibold">anti-toxic fitness culture</span> community. Inspiring others to take charge of their health in a healthy & sustainable way.
              </p>

              <div className="mb-8 md:mb-12 inline-flex items-center gap-2 md:gap-3 bg-slate-800/60 pl-2 pr-4 md:pr-6 py-1.5 md:py-2 rounded-full border border-slate-700 backdrop-blur-md">
                 <div className="bg-slate-700/50 p-1.5 md:p-2 rounded-full">
                   <Shield className="w-3 h-3 md:w-4 md:h-4 text-emerald-400" />
                 </div>
                 <p className="text-slate-200 font-medium text-xs md:text-base">
                   Prioritizing <span className="text-white font-bold">Integrity</span> & <span className="text-white font-bold">Impact</span> over Virality
                 </p>
              </div>
              
              <div>
                 <button 
                    onClick={nextSlide}
                    className="px-6 py-3 md:px-8 md:py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-full transition-all hover:scale-105 flex items-center gap-2 mx-auto shadow-xl shadow-emerald-500/20 text-sm md:text-base"
                  >
                    See the Impact <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                 </button>
              </div>
            </div>
            
            {/* Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </div>
      </Slide>

      {/* --- SLIDE 1: ABOUT (Mission) --- */}
      <Slide isActive={currentSlide === SlideIndex.ABOUT} header={<SlideHeader />}>
        <div className="min-h-full max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-28 pb-8 md:pb-12 flex flex-col justify-center">
          
          {/* Top Section: 2-Column Grid (Left: Stack, Right: Image) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 h-full items-stretch">
            
            {/* Left Column: Stacked Content */}
            <div className="flex flex-col gap-4 md:gap-6 h-full">
              
              {/* Mission Text Box */}
              <div className="bg-slate-800/50 p-4 md:p-8 rounded-2xl md:rounded-3xl border border-slate-700 backdrop-blur-sm shadow-xl relative overflow-hidden flex-shrink-0">
                  <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Target className="w-24 h-24 md:w-32 md:h-32 text-emerald-400" />
                  </div>
                  
                  <div className="border-b border-slate-700/50 mb-3 md:mb-4 pb-2 w-full z-10">
                    <h3 className="text-base md:text-xl font-bold flex items-center uppercase tracking-wider text-emerald-400">
                      <Target className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                      The Mission
                    </h3>
                  </div>
                  
                  <blockquote className="text-sm md:text-lg text-slate-300 leading-relaxed mb-3 md:mb-4 pl-3 md:pl-4 border-l-4 border-emerald-500 italic relative z-10">
                    "I aspire to make content that actually makes an impact. Encouraging positivity in the fitness, health & wellness community. I find it very integral to treat everyone like a human being. Offering real, sustainable advice that actually works. Not some magic, one size fits all, cookie cutter solution. My approach is balance and moderation. Understanding that everyone has a unique situation, while also still being grounded by science and facts."
                  </blockquote>
                  
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed z-10 mt-1">
                    My content isn't just about weight loss; it's about the <strong>mental fortitude</strong>, <strong>discipline</strong>, and <strong>honest struggle</strong> that comes with it.
                  </p>
              </div>

              {/* Mobile Image (Moved here to sit above Audience on mobile) */}
              <div className="h-40 md:hidden rounded-2xl overflow-hidden relative border border-slate-700/50 shrink-0">
                 <img src="/bryson-transformation.jpg" alt="Bryson Lifestyle" className="object-cover w-full h-full" />
                 <div className="absolute bottom-3 left-3">
                   <p className="text-white font-bold text-base">Real Results</p>
                   <p className="text-emerald-400 font-medium text-xs">Honest Advice</p>
                 </div>
              </div>

              {/* Audience Box (Stacked Middle) */}
              <div className="bg-slate-800/50 p-4 md:p-5 rounded-2xl border border-slate-700/50 backdrop-blur-sm shadow-lg flex-shrink-0">
                  <div className="flex items-center gap-2 mb-2 md:mb-3 text-blue-400 font-bold text-xs uppercase tracking-wider">
                      <Users className="w-3 h-3 md:w-4 md:h-4" /> AUDIENCE
                  </div>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {['Wellness Seekers', 'Health Enthusiasts', 'Gym Goers', 'Weightloss Seekers', 'Self Improvers', 'Value Driven Community'].map(tag => (
                      <span key={tag} className="px-2 py-1 md:px-3 md:py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-100 text-[10px] md:text-xs font-medium whitespace-nowrap transition-colors hover:bg-blue-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
              </div>

              {/* Content Verticals Box (Stacked Bottom) */}
              <div className="bg-slate-800/50 p-4 md:p-5 rounded-2xl border border-slate-700/50 backdrop-blur-sm shadow-lg flex-shrink-0">
                  <div className="flex items-center gap-2 mb-2 md:mb-3 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                      <Zap className="w-3 h-3 md:w-4 md:h-4" /> CONTENT VERTICALS
                  </div>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {['Honest Advice', 'Real Stories & Lessons', 'Mental Fitness', 'Healthy Recipes', '& More!'].map(tag => (
                      <span key={tag} className="px-2 py-1 md:px-3 md:py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-100 text-[10px] md:text-xs font-medium whitespace-nowrap transition-colors hover:bg-emerald-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
              </div>

            </div>

            {/* Right Column: Full Height Image (Desktop only) */}
            <div className="hidden md:block h-full">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl group border border-slate-700/50">
                 <img src="/bryson-transformation.jpg" alt="Bryson Lifestyle" className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                 <div className="absolute bottom-6 left-6">
                   <p className="text-white font-bold text-2xl lg:text-3xl mb-1">Real Results</p>
                   <p className="text-emerald-400 font-medium text-lg lg:text-xl">Honest Advice</p>
                 </div>
              </div>
            </div>

          </div>

        </div>
      </Slide>

      {/* --- SLIDE 2: STATS --- */}
      <Slide isActive={currentSlide === SlideIndex.STATS} header={<SlideHeader />}>
        <div className="min-h-full flex flex-col items-center pt-20 md:pt-24 pb-8 md:pb-12 px-4 md:px-6">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Relevant Analytics</h2>
            <p className="text-sm md:text-base text-slate-400">Authentic engagement. Real people. Verified growth.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3 w-full max-w-7xl mb-6 md:mb-10 px-0 md:px-2">
            {OVERVIEW_STATS.map((stat, idx) => (
              <div 
                key={idx} 
                className={`bg-slate-800 p-3 md:p-4 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-colors ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}
              >
                <p className="text-slate-400 text-[9px] md:text-xs font-medium uppercase tracking-wider mb-1 truncate">{stat.label}</p>
                <div className="text-xl md:text-3xl font-black text-white mb-0.5 md:mb-1 truncate">{stat.value}</div>
                <div className="flex items-center text-[9px] md:text-xs">
                  {stat.growth && <span className="text-emerald-400 font-bold mr-1">{stat.growth}</span>}
                  <span className="text-slate-500 truncate">{stat.sub}</span>
                </div>
              </div>
            ))}
          </div>

          <AnalyticsCharts />
        </div>
      </Slide>

      {/* --- SLIDE 3: VALUES --- */}
      <Slide isActive={currentSlide === SlideIndex.VALUES} header={<SlideHeader />}>
        <div className="min-h-full flex flex-col items-center pt-20 md:pt-24 pb-8 md:pb-12 px-4 md:px-6 bg-slate-900">
          <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
            <div className="inline-flex items-center justify-center p-2 md:p-3 bg-emerald-500/10 rounded-full mb-4 md:mb-6">
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6">The "Value Driven" Guarantee</h2>
            <p className="text-sm md:text-lg text-slate-300">
              Integrity isn't a buzzword here; it's the foundation. 
              I am stingy with what I promote because my audience trusts me.
            </p>
          </div>
          
          <ValuesGrid />
        </div>
      </Slide>

      {/* --- SLIDE 4: TESTIMONIALS / IMPACT --- */}
      <Slide isActive={currentSlide === SlideIndex.TESTIMONIALS} header={<SlideHeader />}>
         <div className="min-h-full flex flex-col items-center pt-20 md:pt-24 pb-8 md:pb-12 px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10">
            <div className="inline-flex items-center justify-center p-2 md:p-3 bg-rose-500/10 rounded-full mb-4 md:mb-6">
              <Users className="w-5 h-5 md:w-6 md:h-6 text-rose-400" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Community Impact</h2>
            <p className="text-sm md:text-lg text-slate-300">
              The real value of my content isn't in views—it's in the lives changed. 
              Here is what the community has to say.
            </p>
          </div>
          
          <div className="w-full flex-1 overflow-y-auto custom-scrollbar pb-20">
            <TestimonialsGrid />
          </div>
         </div>
      </Slide>

      {/* --- SLIDE 5: CONTACT --- */}
      <Slide isActive={currentSlide === SlideIndex.CONTACT} header={<SlideHeader />}>
        <div className="min-h-full flex flex-col justify-center px-4 md:px-6 pt-24 md:pt-32 pb-12">
          <div className="max-w-3xl w-full mx-auto space-y-6 md:space-y-12">
            
            <div className="text-center">
               <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Let's Build Something Real.</h2>
               <p className="text-slate-400 text-base md:text-xl leading-relaxed">
                  If your brand prioritizes impact, health, and honesty, I want to hear from you.
               </p>
            </div>

            {/* Voyage Utah Feature */}
            <div 
              className="bg-slate-800/50 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-700 hover:border-emerald-500/50 transition-all group cursor-pointer shadow-2xl"
              onClick={() => window.open('https://voyageutah.com/interview/meet-bryson-wanner-of-clearfield', '_blank')}
            >
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4 border-b border-slate-700/50 pb-3 md:pb-4">
                <div className="bg-orange-500/10 p-2 md:p-3 rounded-xl text-orange-400">
                  <Newspaper size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl text-white group-hover:text-emerald-400 transition-colors">Featured in Voyage Utah</h3>
                  <p className="text-[10px] md:text-sm text-slate-500 uppercase tracking-wider font-bold">Learn more about Bryson's Journey</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                "Meet Bryson Wanner." An exclusive interview diving deep into the mental and physical transformation that sparked a movement.
                Discover the raw, unfiltered story behind the 120lb weight loss and the "anti-toxic" philosophy.
              </p>
              <div className="flex items-center text-emerald-400 text-xs md:text-sm font-bold uppercase tracking-wider gap-2 group-hover:gap-3 transition-all">
                Read Full Story <ExternalLink size={14} className="md:w-4 md:h-4" />
              </div>
            </div>

            {/* Contact Box */}
            <div className="bg-slate-800 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-700 shadow-xl text-center">
              <div className="inline-flex bg-slate-900 p-3 md:p-4 rounded-full mb-4 md:mb-6">
                <Mail className="text-emerald-400 w-6 h-6 md:w-8 md:h-8" />
              </div>
              <p className="text-slate-400 text-sm mb-2">Email for Inquiries</p>
              <a href="mailto:brysonwanner@gmail.com" className="text-xl md:text-4xl font-black hover:text-emerald-400 transition-colors block break-all">
                brysonwanner@gmail.com
              </a>
              
              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-slate-700 flex justify-center gap-4 md:gap-6">
                {SOCIALS.map(s => (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 md:gap-2 font-medium text-xs md:text-base">
                    {s.name} <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </Slide>

      {/* Footer / Navigation Hint */}
      <div className="fixed bottom-4 md:bottom-6 w-full text-center pointer-events-none z-40">
        {currentSlide < totalSlides - 1 && (
          <button 
            onClick={nextSlide}
            className="pointer-events-auto animate-bounce p-1.5 md:p-2 bg-slate-800/80 rounded-full text-slate-400 hover:text-white transition-colors"
          >
            <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        )}
      </div>

    </div>
  );
}

export default App;