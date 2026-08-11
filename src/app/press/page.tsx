import React from 'react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { Download, MessageSquare, Shield, Award, Sparkles, FileText } from 'lucide-react';

export const metadata = {
  title: 'Press & Media Kit - alapBD',
  description: 'Download official alapBD brand assets, logos, screenshots, and press releases.',
};

export default function PressPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0D1117] text-slate-900 dark:text-gray-100 flex flex-col font-sans selection:bg-green-600 selection:text-white transition-colors duration-300">
      <Navbar />

      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Brand & Media Kit</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Official Brand Assets & <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300">Press Kit</span>
          </h1>
          <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            Download vector logos, brand guidelines, product screenshots, and official press announcements.
          </p>
        </div>

        {/* Media Kit Download Box */}
        <div className="bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800 rounded-3xl p-8 sm:p-10 max-w-4xl mx-auto mb-16 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-green-600 to-emerald-400 text-white flex items-center justify-center font-bold shadow-md shrink-0">
                <MessageSquare className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">alapBD Complete Brand Package (2026)</h3>
                <p className="text-slate-500 dark:text-gray-400 text-xs mt-1">Includes SVG, PNG, EPS logos, color palette tokens & typography guide.</p>
              </div>
            </div>

            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-md transition-all shrink-0 cursor-pointer">
              <Download className="w-4 h-4" />
              <span>Download ZIP (12.4 MB)</span>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
