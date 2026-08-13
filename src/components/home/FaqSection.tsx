'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Shield, Sparkles, Lock, MessageSquare, Smartphone, Zap } from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  icon: React.ElementType;
}

const leftFaqs: FaqItem[] = [
  {
    id: 1,
    question: 'How does end-to-end encryption work on alapBD?',
    answer: 'All your text messages, voice calls, video streams, and attachments are encrypted on your device before being transmitted. Only the intended recipient possesses the decryption key.',
    icon: Lock,
  },
  {
    id: 3,
    question: 'Can I use alapBD across multiple devices simultaneously?',
    answer: 'Absolutely. alapBD features instant real-time synchronization across your web browser, mobile devices, and desktop apps without needing your primary phone to stay connected.',
    icon: Smartphone,
  },
  {
    id: 5,
    question: 'What is the maximum file size I can share?',
    answer: 'You can share photos, videos, documents, and voice notes up to 2GB per file with lightning fast CDN delivery.',
    icon: Zap,
  },
];

const rightFaqs: FaqItem[] = [
  {
    id: 2,
    question: 'Is alapBD completely free to use?',
    answer: 'Yes! The personal version of alapBD is 100% free forever with zero message limits, unlimited 1-on-1 calls, and group chats up to 10,000 members.',
    icon: Sparkles,
  },
  {
    id: 4,
    question: 'How does the Business Catalog feature work?',
    answer: 'Business profiles can set up interactive digital catalogs to showcase products and services directly within chat threads. Customers can browse items, inquire, and place orders directly in conversation.',
    icon: MessageSquare,
  },
  {
    id: 6,
    question: 'Are my voice and video calls private?',
    answer: 'Yes, all 1-on-1 and group voice & HD video calls are protected by peer-to-peer encrypted protocols with zero server recording.',
    icon: Shield,
  },
];

const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<number[]>([1, 2]);

  const toggleFaq = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderFaqCard = (faq: FaqItem) => {
    const isOpen = openIds.includes(faq.id);
    const Icon = faq.icon;

    return (
      <div
        key={faq.id}
        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
          isOpen
            ? 'bg-white dark:bg-[#161B22] border-green-500/50 dark:border-green-500/40 shadow-md shadow-green-500/10 dark:shadow-xl'
            : 'bg-slate-100/80 dark:bg-gray-900/60 border-slate-200 dark:border-gray-800/90 hover:border-slate-300 dark:hover:border-gray-700'
        }`}
      >
        <button
          type="button"
          onClick={() => toggleFaq(faq.id)}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${faq.id}`}
          className="w-full p-5 sm:p-6 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
        >
          <div className="flex items-center gap-3.5 pr-4">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
              isOpen ? 'bg-green-500/20 text-green-700 dark:text-green-400 border border-green-500/30' : 'bg-slate-200 dark:bg-gray-800 text-slate-500 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white'
            }`}>
              <Icon className="w-4 h-4" />
            </div>
            <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
              {faq.question}
            </span>
          </div>

          <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-transform duration-300 shrink-0 ${
            isOpen ? 'bg-green-500/20 text-green-700 dark:text-green-400 rotate-180' : 'bg-slate-200 dark:bg-gray-800 text-slate-500 dark:text-gray-400'
          }`}>
            <ChevronDown className="w-4 h-4" />
          </div>
        </button>

        {/* Animated Accordion Content */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed border-t border-slate-200 dark:border-gray-800/60 ml-12">
            {faq.answer}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="faq" className="py-8 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 font-semibold text-xs uppercase tracking-widest mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
          Everything you need to know
        </h2>
        <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base">
          Got questions? We have got answers. Here is how alapBD keeps your conversations safe and connected.
        </p>
      </div>

      {/* 2 Independent Columns Desktop Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
        <div className="space-y-4">
          {leftFaqs.map(renderFaqCard)}
        </div>
        <div className="space-y-4">
          {rightFaqs.map(renderFaqCard)}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
