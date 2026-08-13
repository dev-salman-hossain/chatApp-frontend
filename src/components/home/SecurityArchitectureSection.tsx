'use client';

import React from 'react';
import { ShieldCheck, Lock, EyeOff, KeyRound, Fingerprint, HardDrive, CheckCircle2, Zap } from 'lucide-react';

const securityFeatures = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    desc: 'Every message, call, and file is encrypted on your device. Only you and the receiver hold the decryption keys.',
    badge: 'AES-256 GCM',
    color: 'text-green-400 bg-green-500/10 border-green-500/30',
  },
  {
    icon: EyeOff,
    title: 'Zero-Knowledge Privacy',
    desc: 'alapBD servers never log, store, or profile your private messages or call metadata. Zero data monetization.',
    badge: 'Zero Logs',
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  },
  {
    icon: KeyRound,
    title: 'Disappearing Messages',
    desc: 'Set automatic self-destruct timers for sensitive messages (24 hours, 7 days, or 90 days) to keep chats clean.',
    badge: 'Auto Delete',
    color: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
  },
  {
    icon: Fingerprint,
    title: 'Biometric Security Lock',
    desc: 'Protect your app with Fingerprint, FaceID, or PIN authentication when opening the web or mobile app.',
    badge: 'FaceID / TouchID',
    color: 'text-lime-400 bg-lime-500/10 border-lime-500/30',
  },
  {
    icon: Zap,
    title: 'P2P Encrypted Calls',
    desc: 'Direct peer-to-peer audio and 1080p HD video routing for lowest latency and maximum security during calls.',
    badge: 'Direct P2P',
    color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
  },
  {
    icon: HardDrive,
    title: 'Encrypted Cloud Backup',
    desc: 'Optional client-side encrypted chat backups protected with a personal 64-digit security key.',
    badge: 'Client Encrypted',
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  },
];

/**
 * SecurityArchitectureSection displays the multi-layered security & encryption features of alapBD.
 */
const SecurityArchitectureSection: React.FC = () => {
  return (
    <section id="security" aria-label="Security & Data Protection Architecture" className="py-8 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 font-semibold text-xs uppercase tracking-widest mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Security & Data Protection</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
          Built from the ground up for privacy
        </h2>
        <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base">
          Your conversations belong to you. Discover how our multi-layered security architecture protects your communication.
        </p>
      </div>

      {/* Grid of Security Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {securityFeatures.map((sec, idx) => {
          const Icon = sec.icon;
          return (
            <div
              key={idx}
              className="bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800/80 hover:border-green-500/50 p-6 sm:p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${sec.color} border flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-700 dark:text-gray-300 bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {sec.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {sec.title}
                </h3>

                <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                  {sec.desc}
                </p>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-green-700 dark:text-green-400 font-semibold border-t border-slate-200 dark:border-gray-800/80 pt-4">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified End-to-End</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SecurityArchitectureSection;
