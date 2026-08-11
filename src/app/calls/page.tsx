import React from 'react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { Video, Mic, PhoneOff, Monitor, Volume2, ShieldCheck, Sparkles, User, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Voice & Video Calls - alapBD',
  description: 'Crystal-clear 4K Ultra HD voice and video calls with client-side end-to-end encryption.',
};

export default function CallsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0D1117] text-slate-900 dark:text-gray-100 flex flex-col font-sans selection:bg-green-600 selection:text-white transition-colors duration-300">
      <Navbar />

      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Video className="w-4 h-4" />
            <span>4K Ultra HD Calling</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Encrypted HD Voice & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Video Calls</span>
          </h1>
          <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            Experience zero-lag, crystal clear voice and video calls powered by WebRTC with real-time AI noise suppression.
          </p>
        </div>

        {/* Video Call Interface Graphic Mockup */}
        <div className="max-w-4xl mx-auto mb-16 bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-xl relative group">
          {/* Top Status Bar */}
          <div className="bg-slate-950/80 backdrop-blur-md px-6 py-3 border-b border-slate-800 flex items-center justify-between text-xs text-white">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />
              <span className="font-bold text-green-400">● 4K HD Encrypted Call • 00:14:22</span>
            </div>
            <div className="flex items-center gap-3 text-slate-400 font-mono text-[11px]">
              <span>Latency: 12ms</span>
              <span>Codec: Opus HD</span>
            </div>
          </div>

          {/* Video Grid Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-slate-950/60 min-h-[380px] items-center">
            {/* Participant 1 */}
            <div className="relative aspect-16/10 rounded-2xl bg-gradient-to-tr from-slate-900 via-slate-800 to-gray-900 border border-slate-700 p-4 flex flex-col justify-between overflow-hidden shadow-inner">
              <div className="flex justify-between items-center z-10">
                <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-green-400" />
                  <span>Salman Hossain (You)</span>
                </span>
                <span className="text-[10px] bg-green-500/20 text-green-400 font-bold px-2 py-0.5 rounded-full border border-green-500/30">
                  Host
                </span>
              </div>
              <div className="my-auto text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-green-500 to-emerald-400 text-white flex items-center justify-center text-2xl font-black mx-auto shadow-lg animate-pulse">
                  S
                </div>
              </div>
              <div className="flex justify-between items-center text-[10px] text-slate-400 z-10">
                <span>Microphone On</span>
                <span className="text-green-400">AI Noise Filter Active</span>
              </div>
            </div>

            {/* Participant 2 */}
            <div className="relative aspect-16/10 rounded-2xl bg-gradient-to-tr from-slate-900 via-slate-800 to-gray-900 border border-slate-700 p-4 flex flex-col justify-between overflow-hidden shadow-inner">
              <div className="flex justify-between items-center z-10">
                <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-blue-400" />
                  <span>Ayesha Rahman</span>
                </span>
                <span className="text-[10px] bg-blue-500/20 text-blue-400 font-bold px-2 py-0.5 rounded-full border border-blue-500/30">
                  Remote
                </span>
              </div>
              <div className="my-auto text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white flex items-center justify-center text-2xl font-black mx-auto shadow-lg">
                  A
                </div>
              </div>
              <div className="flex justify-between items-center text-[10px] text-slate-400 z-10">
                <span>Camera 1080p60</span>
                <span className="text-blue-400">E2EE Verified</span>
              </div>
            </div>
          </div>

          {/* Call Controls Toolbar */}
          <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex items-center justify-center gap-4">
            <button className="w-11 h-11 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors">
              <Mic className="w-5 h-5 text-green-400" />
            </button>
            <button className="w-11 h-11 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors">
              <Video className="w-5 h-5 text-blue-400" />
            </button>
            <button className="w-11 h-11 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors">
              <Monitor className="w-5 h-5 text-purple-400" />
            </button>
            <button className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-lg transition-colors">
              <PhoneOff className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800/80 p-6 rounded-3xl space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
              <Volume2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">AI Background Noise Filter</h3>
            <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed">
              Filters out street sounds, keyboard typing, and echo automatically so your voice sounds crisp anywhere.
            </p>
          </div>

          <div className="bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800/80 p-6 rounded-3xl space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-600 dark:text-green-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Peer-to-Peer E2EE Protocol</h3>
            <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed">
              Direct WebRTC connections protected by DTLS-SRTP encryption guarantee zero wiretapping.
            </p>
          </div>

          <div className="bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800/80 p-6 rounded-3xl space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
              <Monitor className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">4K Screen Sharing</h3>
            <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed">
              Share your entire screen, specific windows, or tab presentation with crystal clear 60 FPS resolution.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
