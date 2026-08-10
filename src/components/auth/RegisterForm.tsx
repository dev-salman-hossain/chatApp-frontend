'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MessageSquare, Mail, Lock, User, Eye, EyeOff, UserPlus, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

const RegisterForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

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
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
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
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

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
          <h2 className="text-2xl font-bold text-white tracking-tight">Create Free Account</h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Start messaging securely with zero setup fees
          </p>
        </div>

        {/* Success Alert */}
        {success ? (
          <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 text-center space-y-3 animate-in fade-in duration-300">
            <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Account Created!</h3>
            <p className="text-xs text-gray-300">Welcome to alapBD. You can now log in to your account.</p>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-green-600 hover:bg-green-500 px-5 py-2.5 rounded-xl transition-all shadow-md mt-2"
            >
              <span>Go to Login</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium p-3 rounded-xl">
                {error}
              </div>
            )}

            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-gray-900/90 border border-gray-700/80 focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none text-white placeholder-gray-500 text-sm rounded-xl pl-10 pr-4 py-3 transition-all"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300">Email Address</label>
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
              <label className="text-xs font-semibold text-gray-300">Password</label>
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

              {/* Password Strength Indicator */}
              {password && (
                <div className="flex items-center gap-1.5 pt-1">
                  <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden flex gap-1">
                    <div className={`h-full flex-1 ${strength >= 1 ? 'bg-red-500' : 'bg-transparent'}`} />
                    <div className={`h-full flex-1 ${strength >= 2 ? 'bg-amber-500' : 'bg-transparent'}`} />
                    <div className={`h-full flex-1 ${strength >= 3 ? 'bg-green-500' : 'bg-transparent'}`} />
                    <div className={`h-full flex-1 ${strength >= 4 ? 'bg-emerald-400' : 'bg-transparent'}`} />
                  </div>
                  <span className="text-[10px] text-gray-400 font-semibold uppercase">
                    {strength <= 1 ? 'Weak' : strength <= 2 ? 'Fair' : strength <= 3 ? 'Good' : 'Strong'}
                  </span>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-gray-900/90 border border-gray-700/80 focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none text-white placeholder-gray-500 text-sm rounded-xl pl-10 pr-4 py-3 transition-all"
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-2.5 pt-1">
              <input
                type="checkbox"
                required
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-4 h-4 rounded border-gray-700 text-green-600 focus:ring-green-500 bg-gray-900 cursor-pointer mt-0.5"
              />
              <label className="text-xs text-gray-300 leading-normal">
                I agree to the{' '}
                <a href="#" className="text-green-400 font-semibold hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-green-400 font-semibold hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-green-950/50 hover:scale-[1.02] transition-all disabled:opacity-50 cursor-pointer mt-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
        <div className="mt-8 pt-6 border-t border-gray-800/80 text-center text-xs text-gray-400">
          Already have an account?{' '}
          <Link href="/login" className="font-bold text-green-400 hover:text-green-300">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
