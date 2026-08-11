'use client';

import React from 'react';
import { Star, Quote, MessageCircle, ShieldCheck } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  comment: string;
  rating: number;
  avatarBg: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Tariq Islam',
    role: 'Lead Product Designer',
    company: 'DevStudio Ltd',
    comment: 'alapBD has completely replaced our team chat stack. The low-latency HD call quality and seamless browser sync make collaboration effortless.',
    rating: 5,
    avatarBg: 'from-green-500 to-emerald-600',
  },
  {
    name: 'Nusrat Jahan',
    role: 'Founder & CEO',
    company: 'Green Bean Coffee',
    comment: 'The Business Catalog feature is a game-changer! Our customers can browse our espresso menu and order directly inside chat threads.',
    rating: 5,
    avatarBg: 'from-purple-500 to-indigo-600',
  },
  {
    name: 'Rafiqul Ahmed',
    role: 'Cybersecurity Engineer',
    company: 'SecureNet',
    comment: 'As someone obsessed with data privacy, alapBD’s client-side zero-knowledge encryption gives me absolute peace of mind for confidential chats.',
    rating: 5,
    avatarBg: 'from-amber-500 to-orange-600',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-8 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 font-semibold text-xs uppercase tracking-widest mb-3">
          <MessageCircle className="w-3.5 h-3.5" />
          <span>User Testimonials</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">
          Loved by thousands of users & teams
        </h2>
        <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base">
          Here is what founders, creators, and daily communicators say about alapBD.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800/80 hover:border-green-500/50 p-6 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1.5 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
                  {Array.from({ length: t.rating }).map((_, rIdx) => (
                    <Star key={rIdx} className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />
                  ))}
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-300 ml-1">5.0</span>
                </div>
                <Quote className="w-6 h-6 text-slate-300 dark:text-gray-700 group-hover:text-green-500/40 transition-colors" />
              </div>

              <p className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed mb-6 italic">
                &ldquo;{t.comment}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3 border-t border-slate-200 dark:border-gray-800/80 pt-4">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${t.avatarBg} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                {t.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</h4>
                <p className="text-xs text-slate-500 dark:text-gray-400">{t.role} • <span className="text-green-600 dark:text-green-400 font-semibold">{t.company}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
