import React from 'react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { Lock, Shield, BookOpen, ArrowRight, User, Calendar } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Blog - alapBD Engineering & Privacy',
  description: 'Read the latest technical articles, security updates, and privacy insights from the alapBD team.',
};

export default function BlogPage() {
  const articles = [
    {
      title: 'How End-to-End Encryption Keeps Your Messages 100% Private',
      excerpt: 'A deep dive into Signal protocol implementation, client-side key generation, and zero-knowledge verification.',
      author: 'Security Team',
      date: 'Aug 10, 2026',
      tag: 'PRIVACY',
      tagBg: 'bg-green-500/10 text-green-700 dark:text-green-400',
    },
    {
      title: '10 Tips for Managing Large Group Channels with 100k+ Members',
      excerpt: 'Best practices for custom admin permissions, pinned announcements, reaction filters, and media compression.',
      author: 'Community Team',
      date: 'Aug 05, 2026',
      tag: 'GUIDES',
      tagBg: 'bg-blue-500/10 text-blue-700 dark:text-blue-400',
    },
    {
      title: 'Introducing 4K WebRTC Video Calling with AI Noise Cancellation',
      excerpt: 'Learn how our WebRTC engine delivers zero-latency 60 FPS video calls with real-time background noise suppression.',
      author: 'Media Eng',
      date: 'Jul 28, 2026',
      tag: 'ENGINEERING',
      tagBg: 'bg-purple-500/10 text-purple-700 dark:text-purple-400',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0D1117] text-slate-900 dark:text-gray-100 flex flex-col font-sans selection:bg-green-600 selection:text-white transition-colors duration-300">
      <Navbar />

      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4" />
            <span>alapBD Blog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Engineering & <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300">Privacy Insights</span>
          </h1>
          <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            The latest updates, cryptography research, and product guides directly from our core engineering team.
          </p>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800/80 rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-green-500/50 transition-all duration-300 group"
            >
              <div>
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider mb-4 ${art.tagBg}`}>
                  {art.tag}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed mb-6">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-gray-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-gray-400">
                <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-green-500" /> {art.author}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {art.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
