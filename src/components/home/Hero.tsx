'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Download, Monitor, Apple } from 'lucide-react';

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chatBubbleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Chat bubble floating animation
    gsap.to(chatBubbleRef.current, {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    // Headline slide up
    gsap.from('.hero-text', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative flex flex-col lg:flex-row items-center justify-between px-8 py-20 bg-emerald-900 text-white overflow-hidden">
      
      {/* Left Content */}
      <div className="z-10 max-w-xl">
        <h1 className="hero-text text-5xl md:text-7xl font-bold leading-tight mb-6">
          Message freely.<br />Connect deeply.
        </h1>
        <p className="hero-text text-lg mb-8 text-emerald-100">
          Chatly is a fast, simple and secure messaging app for personal and professional conversations.
        </p>
        
        <div className="hero-text flex items-center gap-4">
          <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors">
            <Download size={20} />
            Download Chatly
          </button>
          <div className="flex gap-3 text-emerald-200">
            <Apple size={24} className="hover:text-white cursor-pointer" />
            <Monitor size={24} className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Right Content (Image & Floating Chat Bubbles) */}
      <div className="relative mt-12 lg:mt-0 w-full lg:w-1/2 flex justify-center">
        {/* Placeholder for Main Girl Image */}
        <div className="w-[400px] h-[500px] bg-emerald-800 rounded-2xl overflow-hidden relative">
            <img src="/hero-girl.jpg" alt="User smiling" className="object-cover w-full h-full opacity-80" />
            
            {/* Floating Chat Bubble */}
            <div ref={chatBubbleRef} className="absolute top-10 right-[-50px] bg-white text-black p-4 rounded-2xl shadow-xl w-64">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                <span className="font-semibold text-sm">Emily</span>
              </div>
              <p className="text-sm">Hey! How was your trip? ⛺</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;