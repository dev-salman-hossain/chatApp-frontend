'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FeatureProps {
  label: string;
  title: string;
  description: string;
  imageSrc: string;
  reverse?: boolean; // Determines layout direction
}

const FeatureSection: React.FC<FeatureProps> = ({ label, title, description, imageSrc, reverse }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.feature-content', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-between px-8 py-20 max-w-7xl mx-auto gap-12`}>
      
      {/* Mockup Image */}
      <div className="w-full lg:w-1/2 flex justify-center feature-content">
        <img src={imageSrc} alt={title} className="w-full max-w-md shadow-2xl rounded-3xl" />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2 max-w-lg feature-content">
        <p className="text-green-600 font-bold text-sm tracking-wider uppercase mb-3">{label}</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{title}</h2>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          {description}
        </p>
        <a href="#" className="flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors">
          Learn more <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
};

export default FeatureSection;