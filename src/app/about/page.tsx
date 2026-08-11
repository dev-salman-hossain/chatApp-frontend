import React from 'react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { ShieldCheck, Heart, Users, Globe, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'About Us - alapBD',
  description: 'Learn about alapBD’s mission to provide fast, zero-knowledge end-to-end encrypted communication for everyone.',
};

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Privacy as a Human Right',
      desc: 'We believe digital privacy is non-negotiable. Zero telemetry, zero ad tracking, zero user data selling.',
    },
    {
      icon: Heart,
      title: 'Free & Open Protocol',
      desc: 'Built on open-source cryptographic foundations so anyone can inspect and verify our code integrity.',
    },
    {
      icon: Globe,
      title: 'Global High-Speed Network',
      desc: 'Edge servers deployed across Dhaka, Singapore, London, and Frankfurt for ultra-low 12ms latency.',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0D1117] text-slate-900 dark:text-gray-100 flex flex-col font-sans selection:bg-green-600 selection:text-white transition-colors duration-300">
      <Navbar />

      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Our Core Mission</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Building the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300">Encrypted Communication</span>
          </h1>
          <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            alapBD was founded with a singular goal: to create a messaging platform where your personal and professional conversations belong strictly to you.
          </p>
        </div>

        {/* Mission Card Visual Showcase */}
        <div className="bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800 rounded-3xl p-8 sm:p-12 mb-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                Zero-Knowledge Architecture by Design
              </h2>
              <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                Unlike traditional chat applications, alapBD never stores unencrypted messages or private keys on servers. Your cryptographic keys are generated and stored exclusively on your device.
              </p>
              <div className="pt-2 space-y-2 text-xs font-semibold text-slate-700 dark:text-gray-300">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Client-side AES-256 GCM Encryption</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Independent Third-Party Security Audits</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 100% Free for Individual Users</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 p-6 rounded-2xl text-center">
                <span className="text-3xl sm:text-4xl font-black text-green-600 dark:text-green-400">10M+</span>
                <p className="text-xs text-slate-500 dark:text-gray-400 mt-1 font-semibold">Active Users</p>
              </div>
              <div className="bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 p-6 rounded-2xl text-center">
                <span className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400">99.99%</span>
                <p className="text-xs text-slate-500 dark:text-gray-400 mt-1 font-semibold">Uptime SLA</p>
              </div>
              <div className="bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 p-6 rounded-2xl text-center">
                <span className="text-3xl sm:text-4xl font-black text-teal-600 dark:text-teal-400">190+</span>
                <p className="text-xs text-slate-500 dark:text-gray-400 mt-1 font-semibold">Countries</p>
              </div>
              <div className="bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 p-6 rounded-2xl text-center">
                <span className="text-3xl sm:text-4xl font-black text-cyan-600 dark:text-cyan-400">0</span>
                <p className="text-xs text-slate-500 dark:text-gray-400 mt-1 font-semibold">Data Sold</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800/80 p-6 rounded-3xl space-y-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-600 dark:text-green-400 flex items-center justify-center font-bold">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{v.title}</h3>
                <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
