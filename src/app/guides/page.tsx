import React from 'react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { Compass, CheckCircle2, ArrowRight, ShieldCheck, Smartphone, Users } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'User Guides - alapBD Setup Walkthroughs',
  description: 'Step-by-step user walkthroughs for encrypted chats, group management, and device sync.',
};

export default function GuidesPage() {
  const guides = [
    {
      title: 'How to Verify End-to-End Safety Numbers',
      time: '3 min read',
      desc: 'Verify cryptographic fingerprint keys with your contact to guarantee zero man-in-the-middle attacks.',
      steps: ['Open Contact Profile', 'Tap Encryption Info', 'Scan QR Code or Verify 60-digit Fingerprint'],
    },
    {
      title: 'Setting Up Multi-Device Desktop Sync',
      time: '2 min read',
      desc: 'Authorize your Windows or macOS desktop client seamlessly without uploading chat history to servers.',
      steps: ['Install Desktop App', 'Open alapBD on Mobile', 'Scan Desktop Auth QR Code'],
    },
    {
      title: 'Configuring Disappearing Messages',
      time: '4 min read',
      desc: 'Automatically wipe sensitive chats and shared media after a designated expiration timer.',
      steps: ['Open Chat Settings', 'Select Disappearing Timer', 'Choose Duration (5s to 7 days)'],
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0D1117] text-slate-900 dark:text-gray-100 flex flex-col font-sans selection:bg-green-600 selection:text-white transition-colors duration-300">
      <Navbar />

      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Step-by-Step Guides</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Master Every Feature of <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300">alapBD</span>
          </h1>
          <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            Detailed walkthroughs and security tutorials designed for privacy-conscious users.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((g, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800/80 rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:border-green-500/50 transition-all duration-300 group"
            >
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-400 text-[11px] font-bold mb-4">
                  {g.time}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {g.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed mb-6">
                  {g.desc}
                </p>

                <div className="space-y-2 mb-6">
                  {g.steps.map((st, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-gray-300">
                      <span className="w-5 h-5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-[10px] font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span>{st}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-gray-800/80 flex items-center justify-between text-xs font-bold text-green-700 dark:text-green-400">
                <span>Read Full Walkthrough</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
