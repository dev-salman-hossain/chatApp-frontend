import React from 'react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { Building2, Bot, BarChart3, ShoppingBag, Send, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'alapBD for Business - Enterprise Chatbot & Catalog',
  description: 'Grow your business with alapBD Automated Chatbots, Product Catalog, Broadcast Messaging, and CRM APIs.',
};

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0D1117] text-slate-900 dark:text-gray-100 flex flex-col font-sans selection:bg-green-600 selection:text-white transition-colors duration-300">
      <Navbar />

      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>Enterprise Business Suite</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Connect with Customers using <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">alapBD Business</span>
          </h1>
          <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            Automate support, showcase interactive product catalogs, send broadcast updates, and integrate custom CRM webhooks.
          </p>
        </div>

        {/* Business Chatbot Visual Mockup Container */}
        <div className="max-w-4xl mx-auto mb-16 bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                <Bot className="w-4 h-4" />
                <span>AI Automated Auto-Responder</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                Turn Customer Inquiries into Sales 24/7
              </h2>
              <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                Configure automated keyword triggers, instantly display product pricing, and collect orders directly inside chat.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-slate-700 dark:text-gray-300">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> WhatsApp & Telegram API Compatible</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Multi-Agent Shared Inbox</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Verified Green Business Badge</li>
              </ul>
            </div>

            {/* Right Chatbot Simulator Mockup */}
            <div className="lg:col-span-6 bg-slate-100/90 dark:bg-gray-900/90 border border-slate-200 dark:border-gray-800 rounded-2xl p-4 space-y-3">
              {/* Bot Header */}
              <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-gray-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center font-bold text-sm">
                    🏢
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1">
                      <span>TechStore BD Official</span>
                      <span className="text-[10px] text-emerald-500 font-bold">✔ Verified</span>
                    </h4>
                    <p className="text-[10px] text-slate-500 dark:text-gray-400">Automated Catalog Bot</p>
                  </div>
                </div>
              </div>

              {/* Bot Messages */}
              <div className="space-y-2 text-xs">
                <div className="bg-white dark:bg-[#161B22] border border-slate-200 dark:border-gray-800 p-3 rounded-2xl max-w-[90%]">
                  <p className="text-slate-800 dark:text-gray-200 font-medium">
                    🤖 Hello! Welcome to TechStore BD. What are you looking for today?
                  </p>
                </div>
                <div className="bg-emerald-600 text-white p-3 rounded-2xl max-w-[80%] ml-auto text-right font-medium">
                  Show me Wireless Earbuds catalog
                </div>
                <div className="bg-white dark:bg-[#161B22] border border-slate-200 dark:border-gray-800 p-3 rounded-2xl max-w-[90%] space-y-2">
                  <p className="text-slate-800 dark:text-gray-200 font-medium">
                    🎧 Here are our top-rated earbuds:
                  </p>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 flex items-center justify-between">
                    <div>
                      <h5 className="font-bold text-slate-900 dark:text-white text-xs">AirPulse Pro ANC</h5>
                      <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">৳3,490 BDT</p>
                    </div>
                    <button className="bg-emerald-600 text-white font-bold text-[10px] px-2.5 py-1.5 rounded-lg">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800/80 p-6 rounded-3xl space-y-3 shadow-sm">
            <ShoppingBag className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Interactive Catalog</h3>
            <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed">
              Add products with images, variants, stock status, and direct checkout links right inside conversation threads.
            </p>
          </div>

          <div className="bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800/80 p-6 rounded-3xl space-y-3 shadow-sm">
            <Send className="w-8 h-8 text-teal-600 dark:text-teal-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Broadcast Messaging</h3>
            <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed">
              Send targeted promotional campaigns, offer codes, and announcements to opt-in subscribers.
            </p>
          </div>

          <div className="bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800/80 p-6 rounded-3xl space-y-3 shadow-sm">
            <BarChart3 className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Analytics Dashboard</h3>
            <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed">
              Track open rates, message delivery SLAs, agent response speed, and revenue generated from chat.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
