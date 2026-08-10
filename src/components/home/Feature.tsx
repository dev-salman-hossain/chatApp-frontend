'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface FeatureProps {
  label: string;
  title: string;
  description: string;
  imageSrc: string;
  highlights?: string[];
  reverse?: boolean;
}

const FeatureSection: React.FC<FeatureProps> = ({
  label,
  title,
  description,
  imageSrc,
  highlights = ["Instant Delivery", "End-to-End Encrypted", "Cross-Platform Sync"],
  reverse = false,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.feature-anim', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      y: 35,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className={`flex flex-col ${
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } items-center justify-between px-6 sm:px-10 py-8 lg:py-10 max-w-7xl mx-auto gap-8 lg:gap-12 border-b border-gray-800/40`}
    >
      {/* Mockup Frame Container */}
      <div className="w-full lg:w-1/2 flex justify-center feature-anim relative group">
        <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-600/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
        <div className="relative rounded-3xl p-3 bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700/80 shadow-2xl shadow-black/60 max-w-md w-full overflow-hidden">
          <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-gray-950">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 max-w-xl feature-anim">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-semibold text-xs uppercase tracking-widest mb-4">
          <span>{label}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-white leading-tight tracking-tight">
          {title}
        </h2>

        <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
          {description}
        </p>

        {/* Highlights List */}
        <div className="space-y-3 mb-8">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-gray-300 font-medium text-sm">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <a
          href="#register"
          className="inline-flex items-center gap-2 text-green-400 font-bold hover:text-green-300 transition-colors group"
        >
          <span>Learn more</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default FeatureSection;