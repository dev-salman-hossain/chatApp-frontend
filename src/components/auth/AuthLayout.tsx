'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageSquare, ShieldCheck, Lock, Zap, Users, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface AuthLayoutProps {
  children: React.ReactNode;
  mode: 'login' | 'register';
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, mode }) => {
  const pathname = usePathname();

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Side: Desktop Feature Showcase & Motion Panel (Hidden on small, visible lg+) */}
        <div className="hidden lg:flex lg:col-span-6 flex-col justify-between h-full bg-[#161B22] border border-gray-800/80 rounded-[2.5rem] p-10 relative overflow-hidden shadow-2xl min-h-[620px]">
          
          {/* Animated Background Ambient Glow */}
          <div className="absolute top-0 left-0 -ml-20 -mt-20 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl animate-pulse" />

          {/* Top Brand Info */}
          <div className="relative z-10">
            <Link href="/" className="inline-flex items-center gap-3 group mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-green-600 to-emerald-400 flex items-center justify-center text-white shadow-lg shadow-green-500/30 group-hover:scale-105 transition-transform duration-300">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white group-hover:text-green-400 transition-colors">
                alap<span className="text-green-500">BD</span>
              </span>
            </Link>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Next-Gen Encrypted Messaging</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight mb-4">
              {mode === 'login' ? (
                <>Welcome back to your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">private space</span></>
              ) : (
                <>Join millions chatting with <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">absolute security</span></>
              )}
            </h1>

            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Experience zero-latency messaging, HD voice & video calls, and group synchronization with client-side end-to-end encryption.
            </p>
          </div>

          {/* Center Showcase: Animated Floating Glassmorphism Cards */}
          <div className="relative z-10 space-y-4 my-auto">
            {/* Card 1 */}
            <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700/60 p-4 rounded-2xl shadow-xl flex items-center gap-3.5 animate-in slide-in-from-left duration-500 hover:scale-[1.02] transition-transform">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">End-to-End Encryption</h4>
                <p className="text-[11px] text-gray-400">Zero-knowledge architecture. Only you read your messages.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-r from-green-950/90 to-gray-900/90 backdrop-blur-md border border-green-700/40 p-4 rounded-2xl shadow-xl flex items-center gap-3.5 animate-in slide-in-from-left duration-700 hover:scale-[1.02] transition-transform">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Instant Cross-Device Sync</h4>
                <p className="text-[11px] text-green-200/80">Sync seamlessly across web, desktop, and mobile.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700/60 p-4 rounded-2xl shadow-xl flex items-center gap-3.5 animate-in slide-in-from-left duration-1000 hover:scale-[1.02] transition-transform">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">100,000+ Group Channels</h4>
                <p className="text-[11px] text-gray-400">Custom admin roles, reactions, and media sharing.</p>
              </div>
            </div>
          </div>

          {/* Bottom Trust Badge */}
          <div className="relative z-10 pt-6 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center gap-2 text-green-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Free & Open Protocol</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <span className="text-amber-400 font-bold">★ 4.9/5</span>
              <span>(250k+ Reviews)</span>
            </div>
          </div>
        </div>

        {/* Right Side: Auth Form Container */}
        <div className="lg:col-span-6 w-full flex flex-col justify-center">
          
          {/* Animated Tab Selector (Login / Sign Up) */}
          <div className="w-full max-w-md mx-auto mb-6 bg-gray-900/90 border border-gray-800 p-1.5 rounded-2xl flex items-center shadow-lg">
            <Link
              href="/login"
              className={`flex-1 py-3 rounded-xl text-xs font-bold text-center transition-all duration-300 ${
                mode === 'login'
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md shadow-green-950/50 scale-[1.02]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Log In
            </Link>
            <Link
              href="/register"
              className={`flex-1 py-3 rounded-xl text-xs font-bold text-center transition-all duration-300 ${
                mode === 'register'
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md shadow-green-950/50 scale-[1.02]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Sign Up Free
            </Link>
          </div>

          {/* Form Children */}
          {children}
        </div>

      </div>
    </div>
  );
};

export default AuthLayout;
