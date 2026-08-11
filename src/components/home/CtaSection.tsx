'use client';

import React from 'react';
import { UserPlus, LogIn, ShieldCheck, Sparkles, Lock, MessageSquare, Zap } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section id="cta" className="py-8 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl bg-gradient-to-r from-green-500/10 via-white to-emerald-500/10 dark:from-green-950/80 dark:via-[#161B22] dark:to-emerald-950/80 border border-green-500/30 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xl shadow-green-500/5 dark:shadow-2xl dark:shadow-green-950/30 transition-colors duration-300">
        
        {/* Glow Circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 font-semibold text-xs uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Started Today</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
              Ready for seamless, <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300">private messaging</span>?
            </h2>

            <p className="text-slate-600 dark:text-gray-300 text-base sm:text-lg mb-8 max-w-2xl leading-relaxed">
              Join millions of users chatting securely. Experience real-time synchronization across all your devices directly from your browser.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/register"
                className="flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-green-950/20 dark:shadow-green-950/60 hover:scale-105 transition-all"
              >
                <UserPlus className="w-5 h-5" />
                <span>Create Free Account</span>
              </a>

              <a
                href="/login"
                className="flex items-center gap-3 bg-white dark:bg-gray-900/90 hover:bg-slate-100 dark:hover:bg-gray-800 text-slate-800 dark:text-gray-200 hover:text-slate-900 dark:hover:text-white font-semibold px-8 py-4 rounded-2xl border border-slate-300 dark:border-gray-700/80 hover:border-slate-400 dark:hover:border-gray-600 transition-all"
              >
                <LogIn className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span>Login to Web App</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-xs bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-slate-200 dark:border-gray-800 p-6 rounded-2xl shadow-xl space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400">Why alapBD</div>
              
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100/80 dark:bg-gray-800/60 border border-slate-200/50 dark:border-gray-700/50">
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-semibold text-slate-800 dark:text-gray-200">End-to-End Encrypted</span>
                </div>
                <span className="text-xs font-medium text-green-600 dark:text-green-400">100%</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100/80 dark:bg-gray-800/60 border border-slate-200/50 dark:border-gray-700/50">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-sm font-semibold text-slate-800 dark:text-gray-200">Instant Web Sync</span>
                </div>
                <span className="text-xs font-medium text-green-600 dark:text-green-400">Realtime</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100/80 dark:bg-gray-800/60 border border-slate-200/50 dark:border-gray-700/50">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-semibold text-slate-800 dark:text-gray-200">Group & Media Share</span>
                </div>
                <span className="text-xs font-medium text-green-600 dark:text-green-400">Unlimited</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CtaSection;
