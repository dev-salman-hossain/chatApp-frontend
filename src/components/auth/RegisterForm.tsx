'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MessageSquare, Phone, Lock, User, Eye, EyeOff, UserPlus, ArrowRight, CheckCircle2 } from 'lucide-react';

const RegisterForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [countryCode, setCountryCode] = useState('+880');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<'fullName' | 'phone' | 'password' | null>(null);

  const getPasswordStrength = () => {
    if (!password) return 0;
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
  };

  const strength = getPasswordStrength();

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
      <div className="bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800/80 rounded-3xl p-8 relative overflow-hidden shadow-md shadow-slate-200/40 dark:shadow-none transition-colors duration-300">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

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
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Create Account</h2>
            <p className="text-slate-500 dark:text-gray-400 text-xs mt-1">Register using Name, Phone & Password</p>
          </div>

          {/* Desktop Form Title */}
          <div className="hidden lg:block mb-6">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              Create Free Account
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </h2>
            <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">Register with Name, Phone Number & Password</p>
          </div>

          {/* Success Animated State */}
          {success ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 text-center space-y-4 animate-in fade-in zoom-in duration-300">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-green-500 to-emerald-400 text-white flex items-center justify-center mx-auto shadow-lg shadow-green-500/30 animate-bounce">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Account Created!</h3>
                <p className="text-xs text-green-700 dark:text-green-300 mt-1">Your phone account is ready. Log in to start chatting.</p>
              </div>
              <Link
                href="/login"
                className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 py-3 rounded-xl transition-all shadow-lg shadow-green-950/50"
              >
                <span>Proceed to Login</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* 1. Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-gray-300">Full Name</label>
                <div className="relative group">
                  <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${focusedField === 'fullName' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 dark:text-gray-500'}`}>
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Salman Hossain"
                    value={fullName}
                    onFocus={() => setFocusedField('fullName')}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-100 dark:bg-[#0D1117] border border-slate-300 dark:border-gray-700/80 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 text-sm rounded-xl pl-10 pr-4 py-3 transition-all duration-200"
                  />
                </div>
              </div>

              {/* 2. Phone Number Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-gray-300">Phone Number</label>
                <div className="flex gap-2">
                  {/* Country Code Selector */}
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="bg-slate-100 dark:bg-[#0D1117] border border-slate-300 dark:border-gray-700/80 focus:border-emerald-500 focus:outline-none text-slate-900 dark:text-white text-xs font-bold rounded-xl px-2.5 py-3 transition-all cursor-pointer shrink-0"
                  >
                    <option value="+880">🇧🇩 +880 (BD)</option>
                    <option value="+1">🇺🇸 +1 (US)</option>
                    <option value="+44">🇬🇧 +44 (UK)</option>
                    <option value="+91">🇮🇳 +91 (IN)</option>
                    <option value="+971">🇦🇪 +971 (UAE)</option>
                    <option value="+60">🇲🇾 +60 (MY)</option>
                  </select>

                  <div className="relative flex-1 group">
                    <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${focusedField === 'phone' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 dark:text-gray-500'}`}>
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
                      className="w-full bg-slate-100 dark:bg-[#0D1117] border border-slate-300 dark:border-gray-700/80 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 text-sm rounded-xl pl-10 pr-4 py-3 transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* 3. Password Field */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-gray-300">Password</label>
                <div className="relative group">
                  <div className={`absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors ${focusedField === 'password' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 dark:text-gray-500'}`}>
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
                    className="w-full bg-slate-100 dark:bg-[#0D1117] border border-slate-300 dark:border-gray-700/80 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 text-sm rounded-xl pl-10 pr-10 py-3 transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {/* Animated Password Strength Bar */}
                {password && (
                  <div className="flex items-center gap-2 pt-1 animate-in fade-in">
                    <div className="flex-1 h-1.5 bg-slate-200 dark:bg-gray-800 rounded-full overflow-hidden flex gap-1">
                      <div className={`h-full flex-1 transition-all duration-300 ${strength >= 1 ? 'bg-red-500' : 'bg-transparent'}`} />
                      <div className={`h-full flex-1 transition-all duration-300 ${strength >= 2 ? 'bg-amber-500' : 'bg-transparent'}`} />
                      <div className={`h-full flex-1 transition-all duration-300 ${strength >= 3 ? 'bg-green-500' : 'bg-transparent'}`} />
                      <div className={`h-full flex-1 transition-all duration-300 ${strength >= 4 ? 'bg-emerald-400' : 'bg-transparent'}`} />
                    </div>
                    <span className="text-[10px] text-slate-500 dark:text-gray-400 font-bold uppercase tracking-wider">
                      {strength <= 1 ? 'Weak' : strength <= 2 ? 'Fair' : strength <= 3 ? 'Good' : 'Strong'}
                    </span>
                  </div>
                )}
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  required
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 dark:border-gray-700 text-emerald-600 focus:ring-emerald-500 bg-slate-100 dark:bg-gray-900 cursor-pointer mt-0.5"
                />
                <label className="text-xs text-slate-600 dark:text-gray-300 leading-normal">
                  I agree to the{' '}
                  <a href="#" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Animated Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm py-3.5 rounded-xl shadow-xl shadow-emerald-950/20 dark:shadow-emerald-950/60 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 cursor-pointer mt-2"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Creating Account...</span>
                  </div>
                ) : (
                  <>
                    <UserPlus className="w-4 h-4" />
                    <span>Create Free Account</span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* Footer Link */}
          <div className="mt-6 pt-5 border-t border-slate-200 dark:border-gray-800/80 text-center text-xs text-slate-500 dark:text-gray-400">
            Already have an account?{' '}
            <Link href="/login" className="font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">
              Log In Instead →
            </Link>
          </div>
        </div>

    </div>
  );
};

export default RegisterForm;
