import React from 'react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { Smile, Sparkles, Flame, Heart, Zap, Search, Download, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Stickers & GIFs Store - alapBD',
  description: 'Explore thousands of animated Bengali meme stickers, GIFs, and custom reaction packs on alapBD.',
};

export default function StickersPage() {
  const stickerPacks = [
    {
      title: 'Bangla Memes & Jokes 🇧🇩',
      creator: 'alapBD Studios',
      stickers: ['😂', '🔥', '🇧🇩', '😎', '🤣', '👀'],
      downloads: '142,000+',
      bg: 'from-amber-500/10 to-orange-500/10 border-amber-500/30',
      badge: 'Popular',
    },
    {
      title: 'Cyberpunk & Animated Motion 🚀',
      creator: 'Futuristic Arts',
      stickers: ['⚡', '🤖', '👾', '💥', '✨', '🛸'],
      downloads: '98,500+',
      bg: 'from-purple-500/10 to-pink-500/10 border-purple-500/30',
      badge: 'Trending',
    },
    {
      title: 'Cute Expressive Cats 🐱',
      creator: 'Paws & Love',
      stickers: ['🐱', '😻', '🐾', '😽', '❤️', '🧶'],
      downloads: '210,000+',
      bg: 'from-pink-500/10 to-rose-500/10 border-pink-500/30',
      badge: 'Featured',
    },
    {
      title: 'Office & Work Reactions 💼',
      creator: 'Productivity Labs',
      stickers: ['☕', '💻', '📈', '✅', '🧠', '⌛'],
      downloads: '76,200+',
      bg: 'from-blue-500/10 to-cyan-500/10 border-blue-500/30',
      badge: 'Work',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0D1117] text-slate-900 dark:text-gray-100 flex flex-col font-sans selection:bg-green-600 selection:text-white transition-colors duration-300">
      <Navbar />

      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-400 text-xs font-bold uppercase tracking-wider">
            <Smile className="w-4 h-4" />
            <span>Sticker & GIF Store</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Express Yourself with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-300">Animated Stickers</span>
          </h1>
          <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            Thousands of free animated stickers, custom reaction GIFs, and authentic Bengali stickers to make every chat memorable.
          </p>
        </div>

        {/* Sticker Pack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {stickerPacks.map((pack, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${pack.bg} bg-white dark:bg-[#161B22] border rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-gray-700">
                    {pack.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-gray-400">
                    {pack.downloads} Installs
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {pack.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-gray-400 mb-6">By {pack.creator}</p>

                {/* Sticker Sample Row */}
                <div className="grid grid-cols-6 gap-3 p-4 rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-slate-200/80 dark:border-gray-800 mb-6">
                  {pack.stickers.map((st, i) => (
                    <div
                      key={i}
                      className="text-3xl text-center hover:scale-125 transition-transform cursor-pointer select-none"
                    >
                      {st}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200/60 dark:border-gray-800">
                <span className="text-xs font-bold text-green-700 dark:text-green-400 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> 100% Free Pack
                </span>
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md transition-all cursor-pointer">
                  <Download className="w-3.5 h-3.5" />
                  <span>Add to alapBD</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
