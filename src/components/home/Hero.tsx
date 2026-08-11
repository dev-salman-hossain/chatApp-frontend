'use client';

import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { UserPlus, LogIn, CheckCheck, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: "Message freely.\nConnect deeply.",
    desc: "alapBD is a fast, simple and end-to-end encrypted messaging app for instant global communication.",
    img: "/assets/heroImage1.avif",
    notifications: [
      { sender: "Emily", time: "10:30 AM", text: "Hey! How was your trip? ⛺", type: "incoming", color: "bg-emerald-400" },
      { sender: "You", time: "10:31 AM", text: "Amazing! Check out this view 😍", type: "outgoing" },
    ]
  },
  {
    id: 2,
    title: "Face-to-face,\nwherever you are.",
    desc: "Experience ultra-clear voice & HD video calls for intimate family moments or team collaborations.",
    img: "/assets/heroImage2.avif",
    notifications: [
      { sender: "Alex", time: "08:15 PM", text: "Are you ready for the call? 📞", type: "incoming", color: "bg-blue-400" },
      { sender: "You", time: "08:16 PM", text: "Yes, joining in a minute! 💻", type: "outgoing" },
    ]
  },
  {
    id: 3,
    title: "Bring people\ntogether.",
    desc: "Create vibrant group chats, share instant media, and stay synced across mobile and desktop.",
    img: "/assets/heroImage3.avif",
    notifications: [
      { sender: "Design Team", time: "11:00 AM", text: "Who's up for a quick sync? 🚀", type: "incoming", color: "bg-purple-400" },
      { sender: "You", time: "11:05 AM", text: "Sharing the link now 🎨", type: "outgoing" }
    ]
  },
  {
    id: 4,
    title: "Speak freely.\nPrivacy First.",
    desc: "Military-grade end-to-end encryption ensures your chats remain strictly between you and your contacts.",
    img: "/assets/heroImage4.avif",
    notifications: [
      { sender: "System", time: "09:00 AM", text: "🔒 Messages are end-to-end encrypted.", type: "incoming", color: "bg-gray-400" },
      { sender: "You", time: "09:06 AM", text: "Safe & verified. 🛡️", type: "outgoing" }
    ]
  }
];

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // GSAP Timeline Animation
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      '.hero-text-anim',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
    );

    tl.fromTo(
      '.hero-img-anim',
      { scale: 0.96, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.7, ease: 'power3.out' },
      "-=0.4"
    );

    tl.fromTo(
      '.msg-bubble',
      { y: 12, opacity: 0, scale: 0.92 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: 0.15,
        ease: 'back.out(1.4)',
      },
      "-=0.3"
    );
  }, { dependencies: [currentSlide], scope: containerRef });

  return (
    <section className="px-3 sm:px-6 lg:px-8 py-3 sm:py-6 max-w-7xl mx-auto w-full">
      <div 
        ref={containerRef} 
        className="relative bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800/80 rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-10 md:p-12 overflow-hidden shadow-sm dark:shadow-none flex items-center transition-colors duration-300"
      >
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Content Grid */}
        <div className="relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Action (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="hero-text-anim inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-6 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next-Gen Messaging</span>
            </div>

            <h1 className="hero-text-anim text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-6 whitespace-pre-line text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-gray-100 dark:to-gray-400">
              {slides[currentSlide].title}
            </h1>

            <p className="hero-text-anim text-slate-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed max-w-lg">
              {slides[currentSlide].desc}
            </p>
            
            {/* CTA Buttons */}
            <div className="hero-text-anim flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="/register"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-xl shadow-green-950/20 dark:shadow-green-950/60 hover:scale-105 cursor-pointer flex-1 sm:flex-initial"
              >
                <UserPlus className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Sign Up Free</span>
              </a>
              
              <a
                href="/login"
                className="flex items-center justify-center gap-2 bg-slate-100 dark:bg-gray-900/90 hover:bg-slate-200 dark:hover:bg-gray-800 text-slate-800 dark:text-gray-200 hover:text-slate-900 dark:hover:text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-semibold text-xs sm:text-sm border border-slate-300 dark:border-gray-700 hover:border-slate-400 dark:hover:border-gray-600 transition-all backdrop-blur-sm cursor-pointer flex-1 sm:flex-initial"
              >
                <LogIn className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400" />
                <span>Log In</span>
              </a>
            </div>

            {/* Slider Dots and Arrows */}
            <div className="hero-text-anim flex items-center justify-between sm:justify-start gap-4">
              <div className="flex items-center gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 sm:h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                      idx === currentSlide ? 'w-6 sm:w-8 bg-green-500' : 'w-2 sm:w-2.5 bg-slate-300 dark:bg-gray-700 hover:bg-slate-400 dark:hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2 sm:ml-4">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="p-1.5 sm:p-2 rounded-xl bg-slate-100 dark:bg-gray-900 border border-slate-300 dark:border-gray-800 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-gray-700 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="p-1.5 sm:p-2 rounded-xl bg-slate-100 dark:bg-gray-900 border border-slate-300 dark:border-gray-800 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-gray-700 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Full Visible Centered Image Showcase Frame (6 cols) */}
          <div className="lg:col-span-6 relative flex items-center justify-center w-full mt-2 lg:mt-0">
            
            {/* Image Frame Box */}
            <div className="hero-img-anim relative w-full max-w-lg aspect-square sm:aspect-16/10 rounded-2xl sm:rounded-3xl bg-slate-100 dark:bg-gray-950/90 border border-slate-200 dark:border-gray-800 p-2.5 sm:p-4 shadow-2xl overflow-hidden group">
              <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-200/60 dark:bg-gray-900 flex items-center justify-center">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-700 ${
                      index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <Image
                      src={slide.img}
                      alt={slide.title}
                      fill
                      priority={index === 0}
                      className="object-contain object-center p-1.5 sm:p-2 rounded-xl"
                    />
                  </div>
                ))}
              </div>

              {/* Overlay Notification Cards */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 z-20 flex flex-col gap-1.5 sm:gap-2 pointer-events-none">
                {slides[currentSlide].notifications.map((msg, idx) => {
                  if (msg.type === "incoming") {
                    return (
                      <div
                        key={idx}
                        className="msg-bubble bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border border-slate-200 dark:border-gray-800 text-slate-900 dark:text-white p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl w-full max-w-[220px] sm:max-w-[280px] self-start"
                      >
                        <div className="flex justify-between items-center mb-0.5 sm:mb-1">
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${msg.color}`}></div>
                            <span className="font-bold text-[11px] sm:text-xs text-slate-800 dark:text-gray-200">{msg.sender}</span>
                          </div>
                          <span className="text-[9px] sm:text-[10px] text-slate-500 dark:text-gray-400">{msg.time}</span>
                        </div>
                        <p className="text-[11px] sm:text-xs font-medium text-slate-700 dark:text-gray-100 truncate">{msg.text}</p>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={idx}
                      className="msg-bubble bg-gradient-to-r from-green-600 to-emerald-700 dark:from-green-900/95 dark:to-emerald-950/95 backdrop-blur-md text-white p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl w-full max-w-[200px] sm:max-w-[260px] self-end border border-green-500/30 dark:border-green-700/50"
                    >
                      <p className="text-[11px] sm:text-xs font-medium mb-0.5 sm:mb-1 text-white dark:text-green-50 truncate">{msg.text}</p>
                      <div className="flex justify-end items-center gap-1">
                        <span className="text-[9px] sm:text-[10px] text-green-100 dark:text-green-300/80">{msg.time}</span>
                        <CheckCheck className="w-3.5 h-3.5 text-white dark:text-green-400" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;