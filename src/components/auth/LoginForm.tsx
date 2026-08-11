'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MessageSquare, Phone, Lock, Eye, EyeOff, LogIn, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

const LoginForm: React.FC = () => {
  const [countryCode, setCountryCode] = useState('+880');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<'phone' | 'password' | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <div className="w-full max-w-md mx-auto animate-in fade-in zoom-in-95 duration-300">
      {/* Inner Card Container */}
      <div className="bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800/80 rounded-3xl p-5 sm:p-8 relative overflow-hidden shadow-md shadow-slate-200/40 dark:shadow-none transition-colors duration-300">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Mobile Header (Hidden on lg desktop) */}
          <div className="text-center mb-6 lg:hidden">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-green-600 to-emerald-400 flex items-center justify-center text-white shadow-md shadow-green-500/20 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white">
                alap<span className="text-green-600 dark:text-green-500">BD</span>
              </span>
            </Link>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Welcome Back</h2>
            <p className="text-slate-500 dark:text-gray-400 text-xs mt-1">Log in with your phone number</p>
          </div>

          {/* Desktop Form Title */}
          <div className="hidden lg:block mb-6">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              Log In to Account
              <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
            </h2>
            <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">Enter your mobile phone number and password</p>
          </div>

          {/* Success Animated State */}
          {success ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 text-center space-y-4 animate-in fade-in zoom-in duration-300">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-green-500 to-emerald-400 text-white flex items-center justify-center mx-auto shadow-lg shadow-green-500/30 animate-bounce">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Welcome Back!</h3>
                <p className="text-xs text-green-700 dark:text-green-300 mt-1">Phone number verified. Loading your chats...</p>
              </div>
              <Link
                href="/"
                className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 py-3 rounded-xl transition-all shadow-lg shadow-green-950/50"
              >
                <span>Launch Chat Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Phone Number Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-gray-300 flex items-center justify-between">
                  <span>Phone Number</span>
                  {focusedField === 'phone' && <span className="text-[10px] text-green-600 dark:text-green-400 font-normal animate-pulse">Required</span>}
                </label>
                <div className="flex gap-1.5 sm:gap-2">
                  {/* Country Code Selector */}
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="w-[100px] sm:w-[125px] bg-slate-100 dark:bg-[#0D1117] border border-slate-300 dark:border-gray-700/80 focus:border-green-500 focus:outline-none text-slate-900 dark:text-white text-xs font-bold rounded-xl px-2 py-3 sm:py-3.5 transition-all cursor-pointer shrink-0 truncate"
                  >
                    <option value="+880">🇧🇩 +880</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+971">🇦🇪 +971</option>
                    <option value="+60">🇲🇾 +60</option>
                  </select>

                  <div className="relative flex-1 min-w-0 group">
                    <div className={`absolute inset-y-0 left-0 pl-3 sm:pl-3.5 flex items-center pointer-events-none transition-colors ${focusedField === 'phone' ? 'text-green-600 dark:text-green-400' : 'text-slate-400 dark:text-gray-500'}`}>
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="01712-345678"
                      value={phone}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-100 dark:bg-[#0D1117] border border-slate-300 dark:border-gray-700/80 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 text-xs sm:text-sm rounded-xl pl-9 sm:pl-10 pr-3 sm:pr-4 py-3 sm:py-3.5 transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* Password Field with Toggle Animation */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-700 dark:text-gray-300">Password</label>
                  <a href="#" className="text-xs font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors">
                    Forgot Password?
                  </a>
                </div>
                <div className="relative group">
                  <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${focusedField === 'password' ? 'text-green-600 dark:text-green-400' : 'text-slate-400 dark:text-gray-500'}`}>
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••"
                    value={password}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-100 dark:bg-[#0D1117] border border-slate-300 dark:border-gray-700/80 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 text-sm rounded-xl pl-10 pr-10 py-3.5 transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4 text-green-600 dark:text-green-400" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2.5 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 dark:border-gray-700 text-green-600 focus:ring-green-500 bg-slate-100 dark:bg-gray-900 cursor-pointer"
                  />
                  <span className="text-xs font-medium text-slate-600 dark:text-gray-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Keep me logged in for 30 days</span>
                </label>
              </div>

              {/* Animated Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-500 hover:to-teal-500 text-white font-bold text-sm py-3.5 rounded-xl shadow-xl shadow-green-950/20 dark:shadow-green-950/60 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 cursor-pointer"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Verifying Credentials...</span>
                  </div>
                ) : (
                  <>
                    <LogIn className="w-4 h-4" />
                    <span>Log In to Dashboard</span>
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-slate-200 dark:border-gray-800" />
                <span className="shrink mx-4 text-[11px] uppercase tracking-wider text-slate-400 dark:text-gray-500 font-semibold">Or Sign In with</span>
                <div className="flex-grow border-t border-slate-200 dark:border-gray-800" />
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 bg-slate-100 dark:bg-gray-900 hover:bg-slate-200 dark:hover:bg-gray-800 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-gray-800 hover:border-slate-400 dark:hover:border-gray-700 py-2.5 rounded-xl text-xs font-bold transition-all hover:scale-105 cursor-pointer"
                >
                  <span className="text-emerald-600 dark:text-emerald-400">G</span>
                  <span>Google</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 bg-slate-100 dark:bg-gray-900 hover:bg-slate-200 dark:hover:bg-gray-800 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-gray-800 hover:border-slate-400 dark:hover:border-gray-700 py-2.5 rounded-xl text-xs font-bold transition-all hover:scale-105 cursor-pointer"
                >
                  <span>💬 SMS OTP</span>
                </button>
              </div>
            </form>
          )}

          {/* Footer Link */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-gray-800/80 text-center text-xs text-slate-500 dark:text-gray-400">
            Don&apos;t have an account yet?{' '}
            <Link href="/register" className="font-bold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors">
              Create Account Free →
            </Link>
          </div>
        </div>

    </div>
  );
};

export default LoginForm;
