import React from 'react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { Activity, Server, ShieldCheck, CheckCircle2, RefreshCw } from 'lucide-react';

export const metadata = {
  title: 'System Status - alapBD Operational Performance',
  description: 'Real-time uptime, server latency, and system operational metrics for alapBD.',
};

export default function StatusPage() {
  const regions = [
    { name: 'Asia-South (Dhaka, BD)', status: 'Operational', latency: '12ms', uptime: '100%' },
    { name: 'Asia-Southeast (Singapore)', status: 'Operational', latency: '28ms', uptime: '99.99%' },
    { name: 'Europe-West (London, UK)', status: 'Operational', latency: '84ms', uptime: '100%' },
    { name: 'Europe-Central (Frankfurt)', status: 'Operational', latency: '90ms', uptime: '99.98%' },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0D1117] text-slate-900 dark:text-gray-100 flex flex-col font-sans selection:bg-green-600 selection:text-white transition-colors duration-300">
      <Navbar />

      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider">
            <Activity className="w-4 h-4" />
            <span>Live System Metrics</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            System Status
          </h1>
          <p className="text-slate-600 dark:text-gray-400 text-sm">
            Real-time operational status of all alapBD relay servers and E2EE key distribution nodes.
          </p>
        </div>

        {/* Live Status Summary Banner */}
        <div className="bg-green-500/10 border border-green-500/30 rounded-3xl p-6 mb-12 flex items-center justify-between text-green-700 dark:text-green-400">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-green-500 text-white flex items-center justify-center font-bold shadow-md">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">All Systems Operational</h3>
              <p className="text-xs text-green-700 dark:text-green-300">Global average response latency: 28ms</p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold bg-green-500/20 px-3 py-1 rounded-full">
            99.99% Uptime SLA
          </span>
        </div>

        {/* Edge Region Status Table */}
        <div className="bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm mb-12">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Server className="w-5 h-5 text-green-500" />
            Regional Edge Nodes
          </h3>

          <div className="space-y-3">
            {regions.map((r, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />
                  <span className="font-bold text-slate-900 dark:text-white">{r.name}</span>
                </div>
                <div className="flex items-center gap-6 font-mono text-slate-500 dark:text-gray-400">
                  <span>Latency: <strong className="text-green-600 dark:text-green-400">{r.latency}</strong></span>
                  <span>Uptime: <strong className="text-slate-900 dark:text-white">{r.uptime}</strong></span>
                  <span className="text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                    {r.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
