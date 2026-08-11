import React from 'react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { Search, HelpCircle, Shield, Key, Smartphone, MessageSquare, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Help Center - alapBD Support & Documentation',
  description: 'Find answers, setup guides, and troubleshooting support for alapBD messaging.',
};

export default function HelpPage() {
  const categories = [
    {
      icon: Shield,
      title: 'Security & Key Safety',
      desc: 'How to verify safety numbers, manage E2EE keys, and enable fingerprint lock.',
      count: '14 Articles',
    },
    {
      icon: Smartphone,
      title: 'Device Sync & Backups',
      desc: 'Linking desktop apps, QR code authorization, and encrypted cloud backups.',
      count: '18 Articles',
    },
    {
      icon: MessageSquare,
      title: 'Groups & Channels',
      desc: 'Creating 100k member channels, admin roles, and pinned message controls.',
      count: '12 Articles',
    },
    {
      icon: Key,
      title: 'Account & Phone Number',
      desc: 'Changing phone numbers, two-step verification PIN, and account deletion.',
      count: '9 Articles',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0D1117] text-slate-900 dark:text-gray-100 flex flex-col font-sans selection:bg-green-600 selection:text-white transition-colors duration-300">
      <Navbar />

      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Search Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Support Knowledge Base</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300">help you today?</span>
          </h1>
          
          <div className="relative max-w-xl mx-auto pt-4">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-7" />
            <input
              type="text"
              placeholder="Search help articles (e.g. 'backup chat', '2FA', 'video call')..."
              className="w-full bg-white dark:bg-[#161B22] border border-slate-300 dark:border-gray-800 text-slate-900 dark:text-white text-sm rounded-2xl pl-12 pr-4 py-4 shadow-md focus:border-green-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800/80 rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:border-green-500/50 transition-all duration-300 group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-600 dark:text-green-400 flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 dark:text-gray-400 bg-slate-100 dark:bg-gray-800 px-2.5 py-1 rounded-full">
                      {cat.count}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-gray-800/80 flex items-center justify-between text-xs font-bold text-green-700 dark:text-green-400">
                  <span>Browse Category</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
