'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Smile, Store, Sparkles, Heart, Coffee, Star, ThumbsUp, Flame } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const StickersBusinessSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.sb-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 35,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-8 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Card: Express Yourself - Stickers */}
        <div className="sb-card relative rounded-3xl bg-[#161B22] border border-gray-800/80 p-8 sm:p-10 flex flex-col justify-between overflow-hidden group hover:border-green-500/30 transition-all duration-500 shadow-xl">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-all" />
          
          {/* Visual Showcase Box */}
          <div className="relative z-10 w-full mb-8 bg-gray-950/70 border border-gray-800/90 rounded-2xl p-5 shadow-inner">
            <div className="flex items-center justify-between border-b border-gray-800 pb-3 mb-4 text-xs font-semibold text-gray-400">
              <div className="flex items-center gap-2 text-green-400">
                <Smile className="w-4 h-4" />
                <span>Sticker & GIF Pack</span>
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-400 text-[10px]">Stickers</span>
                <span className="px-2 py-0.5 rounded bg-gray-800 text-gray-400 text-[10px]">GIFs</span>
                <span className="px-2 py-0.5 rounded bg-gray-800 text-gray-400 text-[10px]">Emojis</span>
              </div>
            </div>

            {/* Mock Chat Bubble with Stickers */}
            <div className="space-y-3">
              <div className="bg-gray-900 border border-gray-800/90 rounded-xl p-3.5 max-w-xs shadow-md">
                <p className="text-xs text-gray-300 font-medium mb-2">Feeling super hyped today! 🎉</p>
                <div className="grid grid-cols-4 gap-2 pt-1">
                  <div className="bg-green-900/30 border border-green-700/40 rounded-lg p-2 flex flex-col items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <span className="text-2xl mb-1">🐊</span>
                    <span className="text-[9px] font-bold text-green-400">YEAH!</span>
                  </div>
                  <div className="bg-pink-900/30 border border-pink-700/40 rounded-lg p-2 flex flex-col items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <Heart className="w-6 h-6 text-pink-400 fill-pink-400 mb-1" />
                    <span className="text-[9px] font-bold text-pink-300">LOVE</span>
                  </div>
                  <div className="bg-amber-900/30 border border-amber-700/40 rounded-lg p-2 flex flex-col items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <Coffee className="w-6 h-6 text-amber-400 mb-1" />
                    <span className="text-[9px] font-bold text-amber-300">CHILL</span>
                  </div>
                  <div className="bg-blue-900/30 border border-blue-700/40 rounded-lg p-2 flex flex-col items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <ThumbsUp className="w-6 h-6 text-blue-400 mb-1" />
                    <span className="text-[9px] font-bold text-blue-300">NICE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-semibold text-xs uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Express Yourself</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Say it with stickers
            </h3>
            
            <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">
              Thousands of fun stickers, GIFs and emojis to make your chats more expressive, personal, and alive.
            </p>

            <a
              href="#register"
              className="inline-flex items-center gap-2 text-green-400 font-bold text-sm hover:text-green-300 transition-colors group/link"
            >
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Card: Made for Business - Catalog */}
        <div className="sb-card relative rounded-3xl bg-[#161B22] border border-gray-800/80 p-8 sm:p-10 flex flex-col justify-between overflow-hidden group hover:border-emerald-500/30 transition-all duration-500 shadow-xl">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all" />
          
          {/* Visual Showcase Box */}
          <div className="relative z-10 w-full mb-8 bg-gray-950/70 border border-gray-800/90 rounded-2xl p-5 shadow-inner">
            <div className="flex items-center justify-between border-b border-gray-800 pb-3 mb-4 text-xs font-semibold text-gray-400">
              <div className="flex items-center gap-2 text-emerald-400">
                <Store className="w-4 h-4" />
                <span>Green Bean Cafe (Business)</span>
              </div>
              <span className="text-[10px] text-gray-500">Catalog Preview</span>
            </div>

            {/* Catalog Items Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-2.5 flex items-center justify-between hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-900/40 border border-amber-700/40 flex items-center justify-center text-amber-300 font-bold text-xs">☕</div>
                  <div>
                    <p className="text-xs font-bold text-gray-200">Cappuccino</p>
                    <p className="text-[10px] text-gray-400">$3.50</p>
                  </div>
                </div>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-semibold">+ Order</span>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-2.5 flex items-center justify-between hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-green-900/40 border border-green-700/40 flex items-center justify-center text-green-300 font-bold text-xs">🍵</div>
                  <div>
                    <p className="text-xs font-bold text-gray-200">Matcha Latte</p>
                    <p className="text-[10px] text-gray-400">$4.25</p>
                  </div>
                </div>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-semibold">+ Order</span>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-2.5 flex items-center justify-between hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-900/40 border border-purple-700/40 flex items-center justify-center text-purple-300 font-bold text-xs">🧁</div>
                  <div>
                    <p className="text-xs font-bold text-gray-200">Blueberry Muffin</p>
                    <p className="text-[10px] text-gray-400">$3.75</p>
                  </div>
                </div>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-semibold">+ Order</span>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-2.5 flex items-center justify-between hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-lime-900/40 border border-lime-700/40 flex items-center justify-center text-lime-300 font-bold text-xs">🥑</div>
                  <div>
                    <p className="text-xs font-bold text-gray-200">Avocado Toast</p>
                    <p className="text-[10px] text-gray-400">$5.50</p>
                  </div>
                </div>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-semibold">+ Order</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold text-xs uppercase tracking-widest mb-4">
              <Store className="w-3.5 h-3.5" />
              <span>Made For Business</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Grow your business
            </h3>
            
            <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">
              Create a business profile, showcase your products in an interactive catalog, and build direct relationships with customers.
            </p>

            <a
              href="#register"
              className="inline-flex items-center gap-2 text-emerald-400 font-bold text-sm hover:text-emerald-300 transition-colors group/link"
            >
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StickersBusinessSection;
