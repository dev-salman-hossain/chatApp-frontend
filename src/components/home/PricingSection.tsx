'use client';

import React, { useState } from 'react';
import { Check, Sparkles, UserPlus, Zap, Shield, Crown } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: 'Personal',
      desc: 'Forever free for individuals & close friends.',
      price: '$0',
      period: 'forever',
      icon: Zap,
      popular: false,
      buttonText: 'Sign Up Free',
      buttonHref: '/register',
      features: [
        'Unlimited end-to-end encrypted chats',
        'HD voice & video calls up to 10 participants',
        'Group chats up to 10,000 members',
        'File sharing up to 2GB per file',
        'Cross-platform browser sync',
      ],
    },
    {
      name: 'Pro Community',
      desc: 'Ideal for creators, large groups & power users.',
      price: annual ? '$4.99' : '$6.99',
      period: 'per month',
      icon: Sparkles,
      popular: true,
      buttonText: 'Start 14-Day Free Trial',
      buttonHref: '/register',
      features: [
        'Everything in Personal',
        'HD video calls up to 100 participants',
        'Unlimited group members (100,000+)',
        'File sharing up to 10GB per file',
        'Custom sticker packs & animated badges',
        'Priority message delivery servers',
      ],
    },
    {
      name: 'Business Team',
      desc: 'Complete communication stack for enterprises.',
      price: annual ? '$12.99' : '$15.99',
      period: 'per seat / month',
      icon: Crown,
      popular: false,
      buttonText: 'Get Started with Business',
      buttonHref: '/register',
      features: [
        'Everything in Pro Community',
        'Interactive business catalog & store front',
        'Granular admin role permissions',
        'Dedicated SLA & 24/7 priority support',
        'Custom domain integration',
        'Audit logs & compliance reporting',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-8 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-semibold text-xs uppercase tracking-widest mb-3">
          <Shield className="w-3.5 h-3.5" />
          <span>Transparent Pricing</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
          Simple plans for everyone
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mb-6">
          100% Free personal messaging forever. Upgrade anytime for advanced business & community tools.
        </p>

        {/* Toggle Switch */}
        <div className="inline-flex items-center gap-3 bg-gray-900 border border-gray-800 p-1.5 rounded-2xl">
          <button
            onClick={() => setAnnual(false)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              !annual ? 'bg-gray-800 text-white shadow' : 'text-gray-400 hover:text-white'
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              annual ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow' : 'text-gray-400 hover:text-white'
            }`}
          >
            <span>Annual Billing</span>
            <span className="text-[10px] bg-green-400 text-gray-950 px-1.5 py-0.5 rounded font-black uppercase">Save 25%</span>
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, idx) => {
          const Icon = plan.icon;
          return (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-green-950/60 via-[#161B22] to-gray-900 border-2 border-green-500/60 shadow-2xl shadow-green-950/40 scale-105 z-10'
                  : 'bg-[#161B22] border border-gray-800/80 hover:border-gray-700 shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-400 text-gray-950 font-black text-[11px] uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 mb-6">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-gray-400 mb-6 leading-relaxed">{plan.desc}</p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl sm:text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-xs text-gray-400 font-medium">/ {plan.period}</span>
                </div>

                <div className="space-y-3 mb-8 border-t border-gray-800 pt-6">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-xs text-gray-300 font-medium">
                      <Check className="w-4 h-4 text-green-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={plan.buttonHref}
                className={`w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-center transition-all shadow-lg ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-green-950/60 hover:scale-105'
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white border border-gray-700'
                }`}
              >
                {plan.buttonText}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingSection;
