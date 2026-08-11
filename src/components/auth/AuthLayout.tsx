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
        <div className="hidden lg:flex lg:col-span-6 flex-col justify-between h-full bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800/80 rounded-[2.5rem] p-10 relative overflow-hidden shadow-md shadow-slate-200/40 dark:shadow-none min-h-[620px] transition-colors duration-300">
          
          {/* Animated Background Ambient Glow */}
          <div className="absolute top-0 left-0 -ml-20 -mt-20 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl animate-pulse" />

          {/* Top Brand Info */}
          <div className="relative z-10">
            <Link href="/" className="inline-flex items-center gap-3 group mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-green-600 to-emerald-400 flex items-center justify-center text-white shadow-md shadow-green-500/20 group-hover:scale-105 transition-transform duration-300">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                alap<span className="text-green-600 dark:text-green-500">BD</span>
              </span>
            </Link>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Next-Gen Encrypted Messaging</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight tracking-tight mb-2">
              {mode === 'login' ? (
                <>Welcome back to your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300">private space</span></>
              ) : (
                <>Join millions chatting with <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300">absolute security</span></>
              )}
            </h1>

            <p className="text-slate-600 dark:text-gray-300 text-xs leading-relaxed">
              Experience zero-latency messaging, HD voice & video calls, and group synchronization with client-side E2EE.
            </p>
          </div>

          {/* Center Showcase: Rich 3D Futuristic Graphic Illustration */}
          <div className="relative z-10 my-4">
            <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden border border-slate-200 dark:border-gray-800 bg-slate-900 shadow-md group">
              {/* 3D Generated Image */}
              <Image
                src="/auth-visual.png"
                alt="End-to-End Encrypted Messaging Security Visual"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />

              {/* Glassmorphism Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20 pointer-events-none" />

              {/* Floating Top-Right Badge */}
              <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md border border-green-500/30 text-green-400 text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg animate-pulse">
                <Lock className="w-3 h-3 text-green-400" />
                <span>256-Bit E2EE Active</span>
              </div>

              {/* Floating Bottom-Left Badge */}
              <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-white text-[10px] font-bold px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                <span>Instant Multi-Device Sync</span>
              </div>
            </div>
          </div>

          {/* Bottom Trust Badge */}
          <div className="relative z-10 pt-4 border-t border-slate-200/80 dark:border-gray-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-gray-400">
            <div className="flex items-center gap-2 text-green-700 dark:text-green-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Free & Open Protocol</span>
            </div>
            <div className="flex items-center gap-1 text-slate-500 dark:text-gray-400">
              <span className="text-amber-500 dark:text-amber-400 font-bold">★ 4.9/5</span>
              <span>(250k+ Reviews)</span>
            </div>
          </div>
        </div>

        {/* Right Side: Auth Form Container */}
        <div className="lg:col-span-6 w-full flex flex-col justify-center">
          
          {/* Animated Tab Selector (Login / Sign Up) */}
          <div className="w-full max-w-md mx-auto mb-6 bg-slate-100 dark:bg-gray-900/90 border border-slate-200/80 dark:border-gray-800 p-1.5 rounded-2xl flex items-center shadow-sm">
            <Link
              href="/login"
              className={`flex-1 py-3 rounded-xl text-xs font-bold text-center transition-all duration-300 ${
                mode === 'login'
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md shadow-green-900/20 scale-[1.02]'
                  : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Log In
            </Link>
            <Link
              href="/register"
              className={`flex-1 py-3 rounded-xl text-xs font-bold text-center transition-all duration-300 ${
                mode === 'register'
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md shadow-green-900/20 scale-[1.02]'
                  : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
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
