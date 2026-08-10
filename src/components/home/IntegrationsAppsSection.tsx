'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Monitor, Smartphone, Globe, Code, ArrowRight, CheckCircle2, Download, ExternalLink } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const platforms = [
  {
    icon: Globe,
    title: 'Web Application',
    desc: 'Access your chats instantly from any modern web browser without installing anything.',
    specs: ['Chrome, Firefox, Safari, Edge', 'Instant real-time sync', 'Zero install required'],
    action: 'Open Web App',
    href: '/login',
    badge: 'Instant Access',
  },
  {
    icon: Monitor,
    title: 'Desktop Apps',
    desc: 'Native desktop experience for power users with system notifications and hotkeys.',
    specs: ['Windows, macOS & Linux', 'System tray integration', 'Keyboard shortcuts'],
    action: 'Get Desktop App',
    href: '/register',
    badge: 'Native Speed',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'Stay connected on the go with optimized low data consumption and instant push alerts.',
    specs: ['Android & iOS Support', 'Battery optimized engine', 'Biometric app lock'],
    action: 'Get Mobile App',
    href: '/register',
    badge: 'iOS & Android',
  },
  {
    icon: Code,
    title: 'Developer APIs & Webhooks',
    desc: 'Build custom bots, automated alerts, and integration workflows with our open APIs.',
    specs: ['RESTful & WebSocket APIs', 'Custom bot triggers', 'Granular OAuth scopes'],
    action: 'View API Docs',
    href: '/register',
    badge: 'Developers',
  },
];

const IntegrationsAppsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.plat-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-8 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-semibold text-xs uppercase tracking-widest mb-3">
          <Monitor className="w-3.5 h-3.5" />
          <span>Cross-Platform Everywhere</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 tracking-tight">
          Available on all your devices
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Seamlessly switch between your browser, desktop computer, and mobile phone without losing a single message.
        </p>
      </div>

      {/* Grid of Platform Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platforms.map((plat, idx) => {
          const Icon = plat.icon;
          return (
            <div
              key={idx}
              className="plat-card bg-[#161B22] border border-gray-800/80 hover:border-green-500/30 p-6 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/30 text-green-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-green-400 bg-green-500/10 border border-green-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {plat.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {plat.title}
                </h3>

                <p className="text-gray-400 text-xs leading-relaxed mb-6">
                  {plat.desc}
                </p>

                {/* Specs list */}
                <div className="space-y-2 mb-6 border-t border-gray-800/80 pt-4">
                  {plat.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={plat.href}
                className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-gray-900 hover:bg-green-600 border border-gray-700/80 hover:border-green-500 py-3 rounded-xl transition-all shadow-md group/btn"
              >
                <span>{plat.action}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default IntegrationsAppsSection;
