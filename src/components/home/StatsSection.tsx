'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Users, ShieldCheck, Zap, Star } from 'lucide-react';

interface CountUpProps {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

const CountUpNumber: React.FC<CountUpProps> = ({
  target,
  decimals = 0,
  prefix = '',
  suffix = '',
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let current = 0;
    const duration = 1800; // 1.8 seconds animation
    const steps = 50;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasAnimated, target]);

  return (
    <span ref={elementRef}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const stats = [
  {
    icon: Users,
    target: 10,
    decimals: 0,
    prefix: '',
    suffix: 'M+',
    label: 'Active Daily Users',
    desc: 'Trusting alapBD across 140+ countries',
  },
  {
    icon: ShieldCheck,
    target: 100,
    decimals: 0,
    prefix: '',
    suffix: '%',
    label: 'End-to-End Encrypted',
    desc: 'Zero logs, zero data harvesting',
  },
  {
    icon: Zap,
    target: 50,
    decimals: 0,
    prefix: '< ',
    suffix: 'ms',
    label: 'Ultra Fast Latency',
    desc: 'Instant message delivery everywhere',
  },
  {
    icon: Star,
    target: 4.9,
    decimals: 1,
    prefix: '',
    suffix: ' / 5',
    label: 'App Store Rating',
    desc: 'Over 250,000 positive user reviews',
  },
];

const StatsSection: React.FC = () => {
  return (
    <section id="stats" className="py-8 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
          Engineered for scale & absolute privacy
        </h2>
        <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg">
          Connecting millions of people effortlessly with uncompromised encryption and lightning speed.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800/80 hover:border-green-500/50 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-700 dark:text-green-400 mb-5 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
                <CountUpNumber
                  target={stat.target}
                  decimals={stat.decimals}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </h3>
              <p className="text-sm font-bold text-slate-800 dark:text-gray-200 mb-1">{stat.label}</p>
              <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">{stat.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;
