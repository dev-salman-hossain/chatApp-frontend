import React from 'react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { ShieldCheck, Lock, EyeOff, FileText, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy - alapBD Zero-Knowledge Standard',
  description: 'Our zero-knowledge privacy policy and cryptographic commitments.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0D1117] text-slate-900 dark:text-gray-100 flex flex-col font-sans selection:bg-green-600 selection:text-white transition-colors duration-300">
      <Navbar />

      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Zero-Knowledge Standard</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-slate-500 dark:text-gray-400 text-xs">
            Last Updated: August 11, 2026 • Version 1.0.0
          </p>
        </div>

        {/* Content Document Card */}
        <div className="bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800 rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm leading-relaxed text-sm">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-green-600 dark:text-green-400" />
              1. End-to-End Encryption Commitment
            </h2>
            <p className="text-slate-600 dark:text-gray-300">
              alapBD is engineered around a zero-knowledge architecture. All messages, voice/video streams, media, and attachments are encrypted before leaving your device. Our servers only relay encrypted ciphertexts and never have access to private decryption keys.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <EyeOff className="w-5 h-5 text-green-600 dark:text-green-400" />
              2. Data We Do NOT Collect
            </h2>
            <ul className="space-y-2 text-slate-600 dark:text-gray-300 list-disc pl-5">
              <li>We do not record or store your message contents or call audio/video.</li>
              <li>We do not track your location data or search history.</li>
              <li>We do not sell user data or share telemetry with advertisers.</li>
              <li>We do not store contact lists on our servers.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-green-600 dark:text-green-400" />
              3. Account Information
            </h2>
            <p className="text-slate-600 dark:text-gray-300">
              The only required identifier to register an account is your mobile phone number for verification via SMS or OTP. You can delete your account and associated cryptographic state at any time.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
