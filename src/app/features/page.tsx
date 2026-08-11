import React from 'react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { Lock, Zap, Shield, Sparkles, MessageSquare, Video, Smartphone, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Features - alapBD',
  description: 'Explore the powerful features of alapBD encrypted messaging app.',
};

export default function FeaturesPage() {
  const featureList = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      desc: 'All messages, calls, and shared media are encrypted on your device using Signal Protocol & 256-bit AES. Nobody else can read them.',
      badge: 'Zero-Knowledge Security',
      color: 'from-green-500/20 to-emerald-500/10 text-green-600 dark:text-green-400 border-green-500/30',
    },
    {
      icon: Zap,
      title: 'Zero-Latency Cross-Device Sync',
      desc: 'Sync your messages instantly across web, desktop, and mobile devices with zero lag and cloud backup options.',
      badge: 'Instant Sync',
      color: 'from-emerald-500/20 to-teal-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    },
    {
      icon: Video,
      title: '4K Voice & Video Calls',
      desc: 'Crystal clear 1-on-1 and group video calls powered by WebRTC with real-time AI noise cancellation.',
      badge: '4K Ultra HD',
      color: 'from-blue-500/20 to-cyan-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
    },
    {
      icon: Smartphone,
      title: 'Stickers, GIFs & Expressive Reactions',
      desc: 'Access thousands of animated sticker packs, reaction emojis, Bengali meme stickers, and custom GIF support.',
      badge: 'Expressive Chat',
      color: 'from-purple-500/20 to-pink-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
    },
    {
      icon: Shield,
      title: 'Self-Destructing Messages',
      desc: 'Set custom timer for auto-disappearing messages after 5 seconds to 1 week with screenshot protection alerts.',
      badge: 'Ephemeral Messaging',
      color: 'from-amber-500/20 to-orange-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
    },
    {
      icon: Cpu,
      title: 'Group Channels & Admin Roles',
      desc: 'Create channels with up to 100,000 members, custom admin permissions, pinned announcements, and poll tools.',
      badge: 'Large Communities',
      color: 'from-teal-500/20 to-emerald-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0D1117] text-slate-900 dark:text-gray-100 flex flex-col font-sans selection:bg-green-600 selection:text-white transition-colors duration-300">
      <Navbar />

      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Next-Gen Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300">Speed, Privacy & Fun</span>
          </h1>
          <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            Discover all the state-of-the-art tools and security features engineered into alapBD.
          </p>
        </div>

        {/* Feature Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featureList.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800/80 rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-green-500/40 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${f.color} border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-300 border border-slate-200 dark:border-gray-700">
                      {f.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    {f.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-gray-800/80 flex items-center text-xs font-semibold text-green-700 dark:text-green-400 gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Fully Verified Protocol</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Box */}
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl relative overflow-hidden">
          <h2 className="text-3xl sm:text-4xl font-black">Ready to experience privacy?</h2>
          <p className="text-green-100 text-sm sm:text-base max-w-xl mx-auto">
            Join millions of users chatting securely with end-to-end encryption.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-white text-green-700 font-bold text-sm px-6 py-3.5 rounded-xl shadow-md hover:bg-slate-100 transition-all cursor-pointer"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
