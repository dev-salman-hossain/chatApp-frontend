'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageSquare, Menu, X, LogIn, UserPlus, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeProvider';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', id: 'features' },
    { name: 'Demo', id: 'demo' },
    { name: 'Security', id: 'security' },
    { name: 'Apps', id: 'apps' },
    { name: 'Stickers', id: 'stickers' },
    { name: 'Stats', id: 'stats' },
    { name: 'FAQ', id: 'faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
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
    <header
      className={`sticky top-0 z-[100] transition-all duration-300 w-full ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#0D1117]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-gray-800/80 shadow-md shadow-slate-200/50 dark:shadow-black/30 py-3'
          : 'bg-white/80 dark:bg-[#0D1117]/80 backdrop-blur-md border-b border-slate-200/50 dark:border-gray-800/40 py-4'
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
                <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  alap<span className="text-green-600 dark:text-green-500">BD</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20 rounded-md">
                  v1.0.0
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`/#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-sm font-semibold text-slate-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-500 hover:after:w-full after:transition-all cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-gray-800/80 text-slate-700 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-gray-700 hover:text-amber-500 transition-all border border-slate-200 dark:border-gray-700/80 cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
              aria-label="Toggle light and dark mode"
              title="Toggle light and dark mode"
            >
              <Sun className="w-4 h-4 text-amber-400 hidden dark:block animate-in spin-in-90 duration-300" />
              <Moon className="w-4 h-4 text-indigo-600 block dark:hidden animate-in spin-in-90 duration-300" />
              <span className="text-gray-300 text-xs hidden dark:lg:inline">Light</span>
              <span className="text-slate-700 text-xs hidden lg:inline dark:lg:hidden">Dark</span>
            </button>

            <Link
              href="/login"
              className={`flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl transition-all ${
                pathname === '/login'
                  ? 'bg-slate-200 dark:bg-gray-800 text-slate-900 dark:text-white border border-slate-300 dark:border-gray-700'
                  : 'text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-gray-800/80 border border-transparent hover:border-slate-200 dark:hover:border-gray-700'
              }`}
            >
              <LogIn className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span>Login</span>
            </Link>
            <Link
              href="/register"
              className={`flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-xl shadow-lg transition-all ${
                pathname === '/register'
                  ? 'bg-gradient-to-r from-emerald-500 to-green-600 shadow-green-700/40 ring-2 ring-green-400/50'
                  : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 shadow-green-900/30 hover:shadow-green-700/40 hover:-translate-y-0.5'
              }`}
            >
              <UserPlus className="w-4 h-4" />
              <span>Sign Up</span>
            </Link>
          </div>

          {/* Mobile Right Controls: Theme Toggle + Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-gray-800/80 text-slate-700 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors border border-slate-200 dark:border-gray-700"
              aria-label="Toggle light and dark mode"
            >
              <Sun className="w-5 h-5 text-amber-400 hidden dark:block" />
              <Moon className="w-5 h-5 text-indigo-600 block dark:hidden" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-gray-800/80 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-gray-700 transition-colors border border-slate-200 dark:border-gray-700"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-50 dark:bg-[#161B22] border-b border-slate-200 dark:border-gray-800 px-4 pt-4 pb-6 mt-3 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`/#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-base font-medium text-slate-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 py-2 border-b border-slate-200 dark:border-gray-800/50 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-200/80 dark:bg-gray-800 text-slate-800 dark:text-gray-200 border border-slate-300 dark:border-gray-700 font-semibold text-sm cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-amber-400 hidden dark:block" />
                <Moon className="w-4 h-4 text-indigo-600 block dark:hidden" />
                <span className="hidden dark:inline">Switch to Light Mode</span>
                <span className="inline dark:hidden">Switch to Dark Mode</span>
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-slate-300 dark:bg-gray-700 font-mono uppercase">
                <span className="hidden dark:inline">DARK</span>
                <span className="inline dark:hidden">LIGHT</span>
              </span>
            </button>

            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-slate-800 dark:text-gray-200 bg-slate-200 dark:bg-gray-800 py-3 rounded-xl hover:bg-slate-300 dark:hover:bg-gray-700 border border-slate-300 dark:border-gray-700"
            >
              <LogIn className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span>Login</span>
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 py-3 rounded-xl hover:bg-green-500 shadow-md shadow-green-900/40"
            >
              <UserPlus className="w-4 h-4" />
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;