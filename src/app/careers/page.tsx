import React from 'react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Careers - alapBD',
  description: 'Join the engineering and product team at alapBD and build zero-knowledge encrypted messaging for millions.',
};

export default function CareersPage() {
  const jobs = [
    {
      title: 'Senior Cryptography & Security Engineer',
      dept: 'Security Architecture',
      location: 'Dhaka (Hybrid) / Remote',
      type: 'Full-time',
    },
    {
      title: 'Senior Frontend Developer (Next.js & React)',
      dept: 'Product Engineering',
      location: 'Dhaka (On-site)',
      type: 'Full-time',
    },
    {
      title: 'DevOps & Distributed Systems Infrastructure Engineer',
      dept: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Product Designer (UI/UX Motion Graphic Specialist)',
      dept: 'Design Studio',
      location: 'Dhaka (Hybrid)',
      type: 'Full-time',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0D1117] text-slate-900 dark:text-gray-100 flex flex-col font-sans selection:bg-green-600 selection:text-white transition-colors duration-300">
      <Navbar />

      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            <span>Join Our Team</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Build the Next Generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300">Private Tech</span>
          </h1>
          <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            We are looking for passionate engineers, designers, and security researchers to solve complex distributed systems & privacy challenges.
          </p>
        </div>

        {/* Open Positions Grid */}
        <div className="space-y-4 max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">Open Positions (4)</h2>
          {jobs.map((j, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800/80 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:border-green-500/50 transition-all duration-300 group"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-green-700 dark:text-green-400">
                  <span>{j.dept}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {j.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-gray-400">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {j.location}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {j.type}</span>
                </div>
              </div>

              <a
                href="mailto:careers@alapbd.com"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-gray-800 hover:bg-green-600 text-slate-800 dark:text-gray-200 hover:text-white border border-slate-300 dark:border-gray-700 hover:border-green-500 text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer shrink-0"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
