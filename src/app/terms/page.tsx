import React from 'react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { FileText, ShieldCheck, Scale } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service - alapBD',
  description: 'Read the terms of service and acceptable usage guidelines for alapBD.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0D1117] text-slate-900 dark:text-gray-100 flex flex-col font-sans selection:bg-green-600 selection:text-white transition-colors duration-300">
      <Navbar />

      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider">
            <Scale className="w-4 h-4" />
            <span>Legal Guidelines</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Terms of Service
          </h1>
          <p className="text-slate-500 dark:text-gray-400 text-xs">
            Last Updated: August 11, 2026 • Version 1.0.0
          </p>
        </div>

        {/* Content Document Card */}
        <div className="bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800 rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm leading-relaxed text-sm">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Service Agreement</h2>
            <p className="text-slate-600 dark:text-gray-300">
              By accessing or using the alapBD website, desktop client, or mobile application, you agree to comply with and be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Acceptable Use Policy</h2>
            <p className="text-slate-600 dark:text-gray-300">
              You agree not to use alapBD for transmitting malware, spam broadcasts, illegal activities, or violating intellectual property rights. We reserve the right to suspend accounts violating network standards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Limitation of Liability</h2>
            <p className="text-slate-600 dark:text-gray-300">
              alapBD is provided &quot;as is&quot; without warranties of any kind. As an end-to-end encrypted protocol, you are responsible for maintaining backups of your encryption keys and phone access.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
