'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MessageSquare, Menu, X, LogIn, UserPlus } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '/#features' },
    { name: 'Demo', href: '/#demo' },
    { name: 'Stickers', href: '/#stickers' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Stats', href: '/#stats' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? 'bg-[#0D1117]/90 backdrop-blur-md border-b border-gray-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-green-600 to-emerald-400 flex items-center justify-center shadow-md shadow-green-500/20 group-hover:scale-105 transition-transform">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-green-400 transition-colors">
                  alap<span className="text-green-500">BD</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-green-500/10 text-green-400 border border-green-500/20 rounded-md">
                  v2.0
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-500 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons: Login & Sign Up */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/login"
              className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white px-4 py-2 rounded-xl hover:bg-gray-800/80 border border-transparent hover:border-gray-700 transition-all"
            >
              <LogIn className="w-4 h-4 text-green-400" />
              <span>Login</span>
            </a>
            <a
              href="/register"
              className="flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 px-5 py-2.5 rounded-xl shadow-lg shadow-green-900/30 hover:shadow-green-700/40 hover:-translate-y-0.5 transition-all"
            >
              <UserPlus className="w-4 h-4" />
              <span>Sign Up</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-gray-800/80 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161B22] border-b border-gray-800 px-4 pt-4 pb-6 mt-3 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-300 hover:text-green-400 py-2 border-b border-gray-800/50"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-gray-200 bg-gray-800 py-3 rounded-xl hover:bg-gray-700 border border-gray-700"
            >
              <LogIn className="w-4 h-4 text-green-400" />
              <span>Login</span>
            </a>
            <a
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 py-3 rounded-xl hover:bg-green-500 shadow-md shadow-green-900/40"
            >
              <UserPlus className="w-4 h-4" />
              <span>Sign Up</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;