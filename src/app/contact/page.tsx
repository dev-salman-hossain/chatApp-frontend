import React from 'react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import { Mail, Phone, MapPin, Send, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - alapBD Support & Sales',
  description: 'Get in touch with the alapBD support, enterprise sales, and press team.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0D1117] text-slate-900 dark:text-gray-100 flex flex-col font-sans selection:bg-green-600 selection:text-white transition-colors duration-300">
      <Navbar />

      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider">
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            We&apos;d Love to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-400 dark:to-emerald-300">Hear from You</span>
          </h1>
          <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            Have questions about enterprise plans, security protocol, or account support? Send us a message.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Left Contact Info */}
          <div className="lg:col-span-5 bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800 rounded-3xl p-8 space-y-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Contact Information</h3>
            <p className="text-slate-600 dark:text-gray-400 text-xs leading-relaxed">
              Our support team operates 24/7 with average response times under 15 minutes.
            </p>

            <div className="space-y-4 text-xs font-medium text-slate-700 dark:text-gray-300">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800">
                <Mail className="w-5 h-5 text-green-600 dark:text-green-400" />
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Email Support</p>
                  <p className="text-slate-500 dark:text-gray-400">support@alapbd.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800">
                <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Enterprise Hotline</p>
                  <p className="text-slate-500 dark:text-gray-400">+880 (2) 987-6543</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800">
                <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Headquarters</p>
                  <p className="text-slate-500 dark:text-gray-400">Gulshan-2, Dhaka 1212, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Message Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800 rounded-3xl p-8 shadow-sm">
            <form className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-gray-300 block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Salman Hossain"
                  className="w-full bg-slate-100 dark:bg-[#0D1117] border border-slate-300 dark:border-gray-700/80 focus:border-green-500 text-slate-900 dark:text-white text-sm rounded-xl px-4 py-3 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-gray-300 block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="salman@example.com"
                  className="w-full bg-slate-100 dark:bg-[#0D1117] border border-slate-300 dark:border-gray-700/80 focus:border-green-500 text-slate-900 dark:text-white text-sm rounded-xl px-4 py-3 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-gray-300 block mb-1">Message Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Inquiry about Business Enterprise API"
                  className="w-full bg-slate-100 dark:bg-[#0D1117] border border-slate-300 dark:border-gray-700/80 focus:border-green-500 text-slate-900 dark:text-white text-sm rounded-xl px-4 py-3 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 dark:text-gray-300 block mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write your query here..."
                  className="w-full bg-slate-100 dark:bg-[#0D1117] border border-slate-300 dark:border-gray-700/80 focus:border-green-500 text-slate-900 dark:text-white text-sm rounded-xl px-4 py-3 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold text-sm py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
