'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'How does end-to-end encryption work on alapBD?',
    answer: 'All your text messages, voice calls, video streams, and attachments are encrypted on your device before being transmitted. Only the intended recipient possesses the decryption key, meaning no third party—not even alapBD servers—can inspect your content.',
  },
  {
    question: 'Is alapBD completely free to use?',
    answer: 'Yes! The personal version of alapBD is 100% free forever with zero message limits, unlimited 1-on-1 calls, and group chats up to 10,000 members.',
  },
  {
    question: 'Can I use alapBD across multiple devices simultaneously?',
    answer: 'Absolutely. alapBD features instant real-time synchronization across your web browser, mobile devices, and desktop apps without needing your primary phone to stay connected.',
  },
  {
    question: 'How does the Business Catalog feature work?',
    answer: 'Business profiles can set up interactive digital catalogs to showcase products and services directly within chat threads. Customers can browse items, inquire, and place orders directly in conversation.',
  },
  {
    question: 'What is the maximum file size I can share?',
    answer: 'Free personal accounts can share files up to 2GB each. Pro and Business tier subscribers can send attachments up to 10GB with high-speed delivery.',
  },
];

const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleIdx = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-8 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-semibold text-xs uppercase tracking-widest mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
          Everything you need to know
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Got questions? We have got answers. Here is how alapBD keeps your conversations safe and connected.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-[#161B22] border-green-500/40 shadow-lg shadow-green-950/20'
                  : 'bg-gray-900/60 border-gray-800 hover:border-gray-700'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleIdx(idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-base font-bold text-white pr-4">{faq.question}</span>
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-transform duration-300 shrink-0 ${isOpen ? 'bg-green-500/20 text-green-400 rotate-180' : 'bg-gray-800 text-gray-400'}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-5 pt-1 text-sm text-gray-300 leading-relaxed border-t border-gray-800/60 animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;
