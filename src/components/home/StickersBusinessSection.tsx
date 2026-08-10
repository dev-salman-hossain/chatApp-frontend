'use client';

import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Smile, Store, Sparkles, Heart, Coffee, Star, ThumbsUp, Flame, Check, Search, Image as ImageIcon } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stickerPacks = {
  trending: [
    { id: 1, emoji: '🐊', label: 'YEAH!', bg: 'from-green-600/30 to-emerald-900/40', border: 'border-green-500/40', text: 'text-green-400' },
    { id: 2, emoji: '🔥', label: 'LIT!', bg: 'from-amber-600/30 to-orange-900/40', border: 'border-amber-500/40', text: 'text-amber-400' },
    { id: 3, emoji: '💖', label: 'LOVE', bg: 'from-pink-600/30 to-rose-900/40', border: 'border-pink-500/40', text: 'text-pink-400' },
    { id: 4, emoji: '🚀', label: 'HYPED', bg: 'from-blue-600/30 to-indigo-900/40', border: 'border-blue-500/40', text: 'text-blue-400' },
    { id: 5, emoji: '😎', label: 'COOL', bg: 'from-purple-600/30 to-violet-900/40', border: 'border-purple-500/40', text: 'text-purple-400' },
    { id: 6, emoji: '🥳', label: 'PARTY', bg: 'from-yellow-600/30 to-amber-900/40', border: 'border-yellow-500/40', text: 'text-yellow-400' },
    { id: 7, emoji: '🍕', label: 'YUMMY', bg: 'from-orange-600/30 to-red-900/40', border: 'border-orange-500/40', text: 'text-orange-400' },
    { id: 8, emoji: '💯', label: 'PERFECT', bg: 'from-teal-600/30 to-emerald-900/40', border: 'border-teal-500/40', text: 'text-teal-400' },
  ],
  cuteCats: [
    { id: 9, emoji: '🐱', label: 'MEOW', bg: 'from-amber-600/30 to-yellow-900/40', border: 'border-amber-500/40', text: 'text-amber-300' },
    { id: 10, emoji: '😻', label: 'PURR', bg: 'from-pink-600/30 to-rose-900/40', border: 'border-pink-500/40', text: 'text-pink-300' },
    { id: 11, emoji: '😿', label: 'SAD CAT', bg: 'from-blue-600/30 to-cyan-900/40', border: 'border-blue-500/40', text: 'text-blue-300' },
    { id: 12, emoji: '😹', label: 'LOL CAT', bg: 'from-emerald-600/30 to-teal-900/40', border: 'border-emerald-500/40', text: 'text-emerald-300' },
  ],
  reactions: [
    { id: 13, emoji: '👍', label: 'NICE', bg: 'from-blue-600/30 to-indigo-900/40', border: 'border-blue-500/40', text: 'text-blue-400' },
    { id: 14, emoji: '👏', label: 'BRAVO', bg: 'from-green-600/30 to-emerald-900/40', border: 'border-green-500/40', text: 'text-green-400' },
    { id: 15, emoji: '🙌', label: 'HOORAY', bg: 'from-purple-600/30 to-violet-900/40', border: 'border-purple-500/40', text: 'text-purple-400' },
    { id: 16, emoji: '🤯', label: 'MIND BLOWN', bg: 'from-red-600/30 to-pink-900/40', border: 'border-red-500/40', text: 'text-red-400' },
  ]
};

const StickersBusinessSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'trending' | 'cuteCats' | 'reactions'>('trending');
  const [selectedSticker, setSelectedSticker] = useState<string>('🐊 YEAH!');

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
          <div className="relative z-10 w-full mb-8 bg-gray-950/80 border border-gray-800/90 rounded-2xl p-5 shadow-2xl">
            
            {/* Header / Tabs */}
            <div className="flex items-center justify-between border-b border-gray-800 pb-3 mb-4">
              <div className="flex items-center gap-2 text-green-400 font-bold text-xs">
                <Smile className="w-4 h-4" />
                <span>alapBD Sticker Store</span>
              </div>

              <div className="flex gap-1 bg-gray-900 p-1 rounded-xl border border-gray-800">
                <button
                  type="button"
                  onClick={() => setActiveTab('trending')}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
                    activeTab === 'trending' ? 'bg-green-600 text-white shadow' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  🔥 Trending
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('cuteCats')}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
                    activeTab === 'cuteCats' ? 'bg-green-600 text-white shadow' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  🐱 Cats
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('reactions')}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
                    activeTab === 'reactions' ? 'bg-green-600 text-white shadow' : 'text-gray-400 hover:text-white'
                  }`}
                >
                   Reactions
                </button>
              </div>
            </div>

            {/* Simulated Chat Message Preview with Selected Sticker */}
            <div className="mb-4 bg-gray-900/90 border border-gray-800 rounded-xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 font-medium">Selected sticker:</span>
                <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
                  {selectedSticker}
                </span>
              </div>
              <span className="text-[10px] text-gray-500 font-semibold">Click any sticker below to preview</span>
            </div>

            {/* Sticker Items Grid */}
            <div className="grid grid-cols-4 gap-3">
              {stickerPacks[activeTab].map((sticker) => (
                <button
                  key={sticker.id}
                  type="button"
                  onClick={() => setSelectedSticker(`${sticker.emoji} ${sticker.label}`)}
                  className={`bg-gradient-to-br ${sticker.bg} border ${sticker.border} rounded-xl p-3 flex flex-col items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer shadow-md group/sticker`}
                >
                  <span className="text-3xl mb-1 group-hover/sticker:scale-125 transition-transform duration-200">
                    {sticker.emoji}
                  </span>
                  <span className={`text-[10px] font-black ${sticker.text} tracking-wider`}>
                    {sticker.label}
                  </span>
                </button>
              ))}
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
              Thousands of fun animated stickers, GIFs and emojis to make your chats more expressive, personal, and alive.
            </p>

            <a
              href="/register"
              className="inline-flex items-center gap-2 text-green-400 font-bold text-sm hover:text-green-300 transition-colors group/link"
            >
              <span>Explore sticker store</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Card: Made for Business - Catalog */}
        <div className="sb-card relative rounded-3xl bg-[#161B22] border border-gray-800/80 p-8 sm:p-10 flex flex-col justify-between overflow-hidden group hover:border-emerald-500/30 transition-all duration-500 shadow-xl">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all" />
          
          {/* Visual Showcase Box */}
          <div className="relative z-10 w-full mb-8 bg-gray-950/80 border border-gray-800/90 rounded-2xl p-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-800 pb-3 mb-4 text-xs font-semibold text-gray-400">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
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
              href="/register"
              className="inline-flex items-center gap-2 text-emerald-400 font-bold text-sm hover:text-emerald-300 transition-colors group/link"
            >
              <span>Create business account</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StickersBusinessSection;
