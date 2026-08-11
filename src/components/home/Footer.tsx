'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageSquare, Globe, LogIn, UserPlus, MessageCircle, Share2, Send, Heart, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (typeof window !== 'undefined') {
      if (pathname === '/') {
        e.preventDefault();
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.location.hash = targetId;
        }
      } else {
        window.location.href = `/#${targetId}`;
      }
    }
  };

  return (
    <footer className="bg-slate-100 dark:bg-[#0A0D12] border-t border-slate-200 dark:border-gray-800/80 pt-10 pb-8 text-slate-600 dark:text-gray-400 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-slate-200 dark:border-gray-800/60">
          
          {/* Brand Info (Cols 1-2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-green-600 to-emerald-400 flex items-center justify-center text-white shadow-md shadow-green-500/20">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
                alap<span className="text-green-600 dark:text-green-500">BD</span>
              </span>
            </Link>
            
            <p className="text-sm text-slate-600 dark:text-gray-400 max-w-sm leading-relaxed">
              Message freely. Connect deeply. alapBD is a fast, simple and secure messaging app for personal and professional conversations.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="Global Community" className="w-9 h-9 rounded-lg bg-slate-200/80 dark:bg-gray-800/80 text-slate-700 dark:text-gray-300 hover:bg-green-600 hover:text-white flex items-center justify-center transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Community" className="w-9 h-9 rounded-lg bg-slate-200/80 dark:bg-gray-800/80 text-slate-700 dark:text-gray-300 hover:bg-green-600 hover:text-white flex items-center justify-center transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Share" className="w-9 h-9 rounded-lg bg-slate-200/80 dark:bg-gray-800/80 text-slate-700 dark:text-gray-300 hover:bg-green-600 hover:text-white flex items-center justify-center transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Send" className="w-9 h-9 rounded-lg bg-slate-200/80 dark:bg-gray-800/80 text-slate-700 dark:text-gray-300 hover:bg-green-600 hover:text-white flex items-center justify-center transition-colors">
                <Send className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Security" className="w-9 h-9 rounded-lg bg-slate-200/80 dark:bg-gray-800/80 text-slate-700 dark:text-gray-300 hover:bg-green-600 hover:text-white flex items-center justify-center transition-colors">
                <Shield className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/features" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Features</Link></li>
              <li><Link href="/calls" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Voice & Video Calls</Link></li>
              <li><Link href="/stickers" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Stickers & GIFs</Link></li>
              <li><Link href="/business" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Business Catalog</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Blog</Link></li>
              <li><Link href="/press" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Press</Link></li>
              <li><Link href="/contact" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/help" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Help Center</Link></li>
              <li><Link href="/guides" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Guides</Link></li>
              <li><Link href="/privacy" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/status" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Status</Link></li>
            </ul>
          </div>

          {/* Quick Account Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Account</h4>
            <div className="flex flex-col gap-3">
              <a
                href="/register"
                className="flex items-center justify-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 py-2.5 px-4 rounded-xl shadow-md transition-all"
              >
                <UserPlus className="w-4 h-4" />
                <span>Sign Up</span>
              </a>
              <a
                href="/login"
                className="flex items-center justify-center gap-2 text-xs font-bold text-slate-800 dark:text-gray-200 bg-slate-200 dark:bg-gray-800/90 hover:bg-slate-300 dark:hover:bg-gray-700 py-2.5 px-4 rounded-xl border border-slate-300 dark:border-gray-700 transition-all"
              >
                <LogIn className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span>Login</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} alapBD. All rights reserved.</p>
          
          <div className="flex items-center gap-3 text-slate-600 dark:text-gray-400 bg-slate-200/80 dark:bg-gray-900/80 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-gray-800">
            <Globe className="w-4 h-4 text-green-600 dark:text-green-400" />
            <select className="bg-transparent text-xs text-slate-800 dark:text-gray-300 focus:outline-none cursor-pointer">
              <option value="en" className="bg-white dark:bg-gray-900 text-slate-900 dark:text-white">English 🌐</option>
              <option value="bn" className="bg-white dark:bg-gray-900 text-slate-900 dark:text-white">বাংলা 🌐</option>
            </select>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
