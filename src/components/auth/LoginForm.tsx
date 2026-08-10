'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MessageSquare, Mail, Lock, Eye, EyeOff, LogIn, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Shadcn UI Styled Card Container */}
      <div className="bg-[#161B22] border border-gray-800/90 rounded-3xl p-8 shadow-2xl shadow-black/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-green-600 to-emerald-400 flex items-center justify-center text-white shadow-md shadow-green-500/20 group-hover:scale-105 transition-transform">
              <MessageSquare className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-white">
              alap<span className="text-green-500">BD</span>
            </span>
          </Link>
          <h2 className="text-2xl font-bold text-white tracking-tight">Welcome Back</h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Log in to access your end-to-end encrypted chats
          </p>
        </div>

        {/* Success Alert */}
        {success ? (
          <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 text-center space-y-3 animate-in fade-in duration-300">
            <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Login Successful!</h3>
            <p className="text-xs text-gray-300">Redirecting to your secure web dashboard...</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-green-400 hover:text-green-300 pt-2"
            >
              <span>Go to Chat Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                <span>Email Address</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-900/90 border border-gray-700/80 focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none text-white placeholder-gray-500 text-sm rounded-xl pl-10 pr-4 py-3 transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-gray-300">Password</label>
                <a href="#" className="text-xs font-medium text-green-400 hover:text-green-300">
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-900/90 border border-gray-700/80 focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none text-white placeholder-gray-500 text-sm rounded-xl pl-10 pr-10 py-3 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-200"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-700 text-green-600 focus:ring-green-500 bg-gray-900 cursor-pointer"
                />
                <span className="text-xs font-medium text-gray-300">Remember this device</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-green-950/50 hover:scale-[1.02] transition-all disabled:opacity-50 cursor-pointer"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  <span>Log In</span>
                </>
              )}
            </button>

            {/* Divider */}
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-gray-800" />
              <span className="shrink mx-4 text-[11px] uppercase tracking-wider text-gray-500 font-semibold">Or continue with</span>
              <div className="flex-grow border-t border-gray-800" />
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-gray-300 border border-gray-800 py-2.5 rounded-xl text-xs font-semibold transition-colors"
              >
                <span>Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-gray-300 border border-gray-800 py-2.5 rounded-xl text-xs font-semibold transition-colors"
              >
                <span>Phone OTP</span>
              </button>
            </div>
          </form>
        )}

        {/* Footer Link */}
        <div className="mt-8 pt-6 border-t border-gray-800/80 text-center text-xs text-gray-400">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="font-bold text-green-400 hover:text-green-300">
            Sign Up Free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
