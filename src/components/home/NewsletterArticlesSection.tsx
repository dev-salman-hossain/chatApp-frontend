'use client';

import React, { useState } from 'react';
import { Mail, ArrowRight, Users, CheckCircle2, Lock } from 'lucide-react';

const NewsletterArticlesSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <section id="newsletter" className="py-8 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Newsletter Subscription Box (Left Column - 6 cols) */}
        <div className="lg:col-span-6 bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-green-950/40 dark:via-[#161B22] dark:to-emerald-950/40 border border-green-500/30 dark:border-green-500/20 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md relative overflow-hidden transition-colors duration-300">
          <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-green-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div>
            <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-700 dark:text-green-400 mb-6 shadow-inner">
              <Mail className="w-6 h-6" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
              Stay in the loop
            </h3>
            
            <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base mb-8 leading-relaxed">
              Subscribe to our newsletter for the latest updates, privacy tips, and feature announcements.
            </p>
          </div>

          <div>
            {subscribed ? (
              <div className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-700 dark:text-green-400 text-sm font-semibold animate-in fade-in duration-300">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Thank you! You have successfully subscribed to updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white dark:bg-[#0D1117] border border-slate-300 dark:border-gray-700/80 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 text-sm rounded-xl px-4 py-3 transition-all"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-green-950/20 dark:shadow-green-950/50 hover:scale-105 shrink-0 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Privacy Article Card (Middle Column - 3 cols) */}
        <div className="lg:col-span-3 bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800/80 rounded-3xl p-6 flex flex-col justify-between group hover:border-green-500/50 transition-all duration-300 shadow-sm hover:shadow-md">
          <div>
            {/* Visual Thumbnail */}
            <div className="w-full aspect-16/9 rounded-2xl bg-gradient-to-tr from-slate-100 via-slate-50 to-slate-200 dark:from-emerald-950 dark:via-gray-900 dark:to-gray-950 border border-slate-200 dark:border-gray-800 p-4 mb-6 flex items-center justify-center relative overflow-hidden group-hover:border-green-500/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-700 dark:text-green-400 group-hover:scale-110 transition-transform shadow-lg">
                <Lock className="w-6 h-6" />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:12px_12px] opacity-15 pointer-events-none" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-500/10 text-green-700 dark:text-green-400 font-semibold text-[11px] uppercase tracking-wider mb-3">
              <span>PRIVACY</span>
            </div>

            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
              How end-to-end encryption keeps you safe
            </h4>

            <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed mb-6">
              A look at the technology behind alapBD&apos;s strong client-side encryption and zero-knowledge model.
            </p>
          </div>

          <a
            href="/#privacy"
            className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-bold text-xs hover:text-green-700 dark:hover:text-green-300 transition-colors group/link"
          >
            <span>Read article</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Tips Article Card (Right Column - 3 cols) */}
        <div className="lg:col-span-3 bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800/80 rounded-3xl p-6 flex flex-col justify-between group hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:shadow-md">
          <div>
            {/* Visual Thumbnail */}
            <div className="w-full aspect-16/9 rounded-2xl bg-gradient-to-tr from-slate-100 via-slate-50 to-slate-200 dark:from-green-950 dark:via-gray-900 dark:to-gray-950 border border-slate-200 dark:border-gray-800 p-4 mb-6 flex items-center justify-center relative overflow-hidden group-hover:border-emerald-500/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-700 dark:text-emerald-400 group-hover:scale-110 transition-transform shadow-lg">
                <Users className="w-6 h-6" />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:12px_12px] opacity-15 pointer-events-none" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-semibold text-[11px] uppercase tracking-wider mb-3">
              <span>TIPS</span>
            </div>

            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              10 ways to make the most of group chats
            </h4>

            <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed mb-6">
              Simple tips to keep your groups fun, organized, productive, and secure with custom admin controls.
            </p>
          </div>

          <a
            href="/#faq"
            className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group/link"
          >
            <span>Read article</span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default NewsletterArticlesSection;
