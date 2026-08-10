'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Users, ShieldCheck, Zap, Star } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  {
    icon: Users,
    value: '10M+',
    label: 'Active Daily Users',
    desc: 'Trusting alapBD across 140+ countries',
  },
  {
    icon: ShieldCheck,
    value: '100%',
    label: 'End-to-End Encrypted',
    desc: 'Zero logs, zero data harvesting',
  },
  {
    icon: Zap,
    value: '< 50ms',
    label: 'Ultra Fast Latency',
    desc: 'Instant message delivery everywhere',
  },
  {
    icon: Star,
    value: '4.9 / 5',
    label: 'App Store Rating',
    desc: 'Over 250,000 positive user reviews',
  },
];

const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.stat-card', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
      },
      y: 30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out',
    });
  }, { scope: sectionRef });

  return (
    <section id="stats" ref={sectionRef} className="py-8 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
          Engineered for scale & absolute privacy
        </h2>
        <p className="text-gray-400 text-base sm:text-lg">
          Connecting millions of people effortlessly with uncompromised encryption and lightning speed.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="stat-card bg-[#161B22] border border-gray-800/80 hover:border-green-500/40 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/10 group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 mb-5 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-2 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-sm font-bold text-gray-200 mb-1">{stat.label}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{stat.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;
