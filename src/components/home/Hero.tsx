'use client';

import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { UserPlus, LogIn, CheckCheck, ShieldCheck, Sparkles } from 'lucide-react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: "Message freely.\nConnect deeply.",
    desc: "alapBD is a fast, simple and end-to-end encrypted messaging app for instant global communication.",
    img: "/assets/heroImage1.avif",
    fallbackImg: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?q=80&w=2000&auto=format&fit=crop",
    notifications: [
      { sender: "Emily", time: "10:30 AM", text: "Hey! How was your trip? ⛺", type: "incoming", color: "bg-emerald-400" },
      { sender: "You", time: "10:31 AM", text: "Amazing! Check out this view 😍", type: "outgoing" },
      { sender: "Emily", time: "10:31 AM", text: "Wow! Looks incredible 🔥", type: "incoming", color: "bg-emerald-400" }
    ]
  },
  {
    id: 2,
    title: "Face-to-face,\nwherever you are.",
    desc: "Experience ultra-clear voice & HD video calls for intimate family moments or team collaborations.",
    img: "/assets/heroImage2.avif",
    fallbackImg: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2000&auto=format&fit=crop",
    notifications: [
      { sender: "Alex", time: "08:15 PM", text: "Are you ready for the call? 📞", type: "incoming", color: "bg-blue-400" },
      { sender: "You", time: "08:16 PM", text: "Yes, joining in a minute! 💻", type: "outgoing" },
      { sender: "Alex", time: "08:16 PM", text: "Awesome, see you soon!", type: "incoming", color: "bg-blue-400" }
    ]
  },
  {
    id: 3,
    title: "Bring people\ntogether.",
    desc: "Create vibrant group chats, share instant media, and stay synced across mobile and desktop.",
    img: "/assets/heroImage3.avif",
    fallbackImg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
    notifications: [
      { sender: "Design Team", time: "11:00 AM", text: "Who's up for a quick sync? 🚀", type: "incoming", color: "bg-purple-400" },
      { sender: "Sarah", time: "11:02 AM", text: "I'm in! Let's do this. ✨", type: "incoming", color: "bg-pink-400" },
      { sender: "You", time: "11:05 AM", text: "Sharing the Figma link now 🎨", type: "outgoing" }
    ]
  },
  {
    id: 4,
    title: "Speak freely.\nPrivacy First.",
    desc: "Military-grade end-to-end encryption ensures your chats remain strictly between you and your contacts.",
    img: "/assets/heroImage4.avif",
    fallbackImg: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop",
    notifications: [
      { sender: "System", time: "09:00 AM", text: "🔒 Messages are end-to-end encrypted.", type: "incoming", color: "bg-gray-400" },
      { sender: "David", time: "09:05 AM", text: "Sent the confidential files. 📁", type: "incoming", color: "bg-teal-400" },
      { sender: "You", time: "09:06 AM", text: "Received. Safe & verified. 🛡️", type: "outgoing" }
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
    }, 7500);
    return () => clearInterval(timer);
  }, []);

  // GSAP Timeline Animation
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      '.hero-text-anim',
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out' }
    );

    tl.fromTo(
      '.msg-bubble',
      { y: 20, opacity: 0, scale: 0.92 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.3,
        ease: 'back.out(1.4)',
      },
      "-=0.3"
    );
  }, { dependencies: [currentSlide], scope: containerRef });

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
      <div 
        ref={containerRef} 
        className="relative bg-[#161B22] border border-gray-800 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden min-h-[580px] lg:min-h-[620px] flex items-center shadow-2xl shadow-black/40"
      >
        {/* Background Images Crossfade */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#161B22] via-[#161B22]/90 to-[#161B22]/40 md:to-transparent z-10 pointer-events-none" />
          {slides.map((slide, index) => (
            <Image
              key={slide.id}
              src={slide.img}
              alt={slide.title}
              fill
              priority={index === 0}
              className={`object-cover object-center transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-70 md:opacity-90' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        {/* Content Grid */}
        <div className="relative z-20 w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-6 sm:px-10 md:px-14 py-12 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="flex flex-col justify-center text-white max-w-lg">
            <div className="hero-text-anim inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold uppercase tracking-wider mb-6 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next-Gen Messaging</span>
            </div>

            <h1 className="hero-text-anim text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 whitespace-pre-line text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-400">
              {slides[currentSlide].title}
            </h1>

            <p className="hero-text-anim text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
              {slides[currentSlide].desc}
            </p>
            
            <div className="hero-text-anim flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="/register"
                className="flex items-center gap-2.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-xl shadow-green-900/40 hover:scale-105"
              >
                <UserPlus className="w-5 h-5" />
                <span>Sign Up Free</span>
              </a>
              
              <a
                href="/login"
                className="flex items-center gap-2.5 bg-gray-900/80 hover:bg-gray-800 text-gray-200 hover:text-white px-6 py-3.5 rounded-xl font-semibold border border-gray-700/80 hover:border-gray-600 transition-all backdrop-blur-sm"
              >
                <LogIn className="w-5 h-5 text-green-400" />
                <span>Log In</span>
              </a>
            </div>
          </div>

          {/* Right Column: Floating Notifications */}
          <div className="flex flex-col justify-center items-start md:items-end gap-4 pointer-events-none w-full">
            {slides[currentSlide].notifications.map((msg, idx) => {
              if (msg.type === "incoming") {
                return (
                  <div
                    key={idx}
                    className="msg-bubble bg-gray-900/90 backdrop-blur-md border border-gray-700/60 text-white p-4 rounded-2xl shadow-2xl w-full max-w-[320px] rounded-bl-xs md:mr-4"
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${msg.color}`}></div>
                        <span className="font-bold text-sm text-gray-200">{msg.sender}</span>
                      </div>
                      <span className="text-[11px] text-gray-400">{msg.time}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-100">{msg.text}</p>
                  </div>
                );
              }

              return (
                <div
                  key={idx}
                  className="msg-bubble bg-gradient-to-br from-green-900/90 to-emerald-950/90 backdrop-blur-md text-white p-4 rounded-2xl shadow-2xl w-full max-w-[300px] rounded-br-xs border border-green-700/50"
                >
                  <p className="text-sm font-medium mb-1.5 text-green-50">{msg.text}</p>
                  <div className="flex justify-end items-center gap-1.5">
                    <span className="text-[11px] text-green-300/80">{msg.time}</span>
                    <CheckCheck className="w-4 h-4 text-green-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-6 left-6 sm:left-14 flex items-center gap-2.5 z-30">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                idx === currentSlide ? 'w-10 bg-green-500' : 'w-2.5 bg-gray-600/60 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default HeroSection;