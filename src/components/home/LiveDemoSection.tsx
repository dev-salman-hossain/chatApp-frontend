'use client';

import React, { useState } from 'react';
import { Send, Smile, Lock, CheckCheck, Sparkles, MessageSquare, Bot, User } from 'lucide-react';

interface ChatMessage {
  id: number;
  sender: 'user' | 'bot';
  text: string;
  time: string;
  sticker?: string;
}

const LiveDemoSection: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, sender: 'bot', text: '👋 Welcome to the alapBD Live Demo! Try typing a message below or sending a sticker.', time: '10:00 AM' },
    { id: 2, sender: 'user', text: 'Is this message end-to-end encrypted?', time: '10:01 AM' },
    { id: 3, sender: 'bot', text: '🔒 Absolutely! All communication in alapBD is secured with client-side end-to-end encryption.', time: '10:01 AM' },
  ]);

  const handleSend = (textToSend?: string, stickerEmoji?: string) => {
    const text = textToSend || input;
    if (!text && !stickerEmoji) return;

    const newMsg: ChatMessage = {
      id: Date.now(),
      sender: 'user',
      text: stickerEmoji ? `Sent sticker: ${stickerEmoji}` : text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sticker: stickerEmoji,
    };

    setMessages((prev) => [...prev, newMsg]);
    if (!textToSend) setInput('');

    // Simulated Auto Response
    setTimeout(() => {
      let replyText = "⚡ Instantly synced across desktop & mobile!";
      if (stickerEmoji) replyText = "😍 Awesome sticker! Our sticker store has 10,000+ free packs.";
      else if (text.toLowerCase().includes('hello') || text.toLowerCase().includes('hi')) replyText = "Hey there! 👋 Excited to have you on alapBD.";
      else if (text.toLowerCase().includes('price') || text.toLowerCase().includes('free')) replyText = "🎉 alapBD personal version is 100% free forever!";

      const botReply: ChatMessage = {
        id: Date.now() + 1,
        sender: 'bot',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botReply]);
    }, 900);
  };

  return (
    <section id="demo" className="py-8 lg:py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 font-semibold text-xs uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Live Simulator</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight">
          Try alapBD chat right now
        </h2>
        <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base">
          Experience ultra-fast real-time messaging, encrypted chat preview, and sticker reactions directly below.
        </p>
      </div>

      {/* Simulator Widget Frame */}
      <div className="max-w-3xl mx-auto bg-white dark:bg-[#161B22] border border-slate-200/80 dark:border-gray-800 rounded-3xl overflow-hidden shadow-sm dark:shadow-none transition-colors duration-300">
        
        {/* Chat Header */}
        <div className="bg-slate-100/90 dark:bg-gray-900/90 border-b border-slate-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-green-500 to-emerald-400 flex items-center justify-center text-white font-bold">
                <Bot className="w-5 h-5" />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                alapBD Interactive Bot
                <span className="text-[10px] bg-green-500/20 text-green-700 dark:text-green-400 px-2 py-0.5 rounded font-semibold">Online</span>
              </h4>
              <p className="text-xs text-slate-500 dark:text-gray-400 flex items-center gap-1">
                <Lock className="w-3 h-3 text-green-600 dark:text-green-400" />
                End-to-End Encrypted Session
              </p>
            </div>
          </div>

          {/* Preset Action Buttons */}
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => handleSend("What are the core features?")}
              className="text-xs bg-slate-200 dark:bg-gray-800 hover:bg-slate-300 dark:hover:bg-gray-700 text-slate-700 dark:text-gray-300 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-gray-700 transition-colors"
            >
              Ask Features
            </button>
            <button
              onClick={() => handleSend(undefined, "🚀")}
              className="text-xs bg-green-500/10 hover:bg-green-500/20 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-lg border border-green-500/30 transition-colors flex items-center gap-1"
            >
              <Smile className="w-3.5 h-3.5" />
              Sticker 🚀
            </button>
          </div>
        </div>

        {/* Chat Stream Window */}
        <div className="p-6 h-[340px] overflow-y-auto space-y-4 bg-slate-50/80 dark:bg-gray-950/60 scrollbar-thin">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] sm:max-w-[70%] p-4 rounded-2xl shadow-md text-sm font-medium ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-br-xs'
                    : 'bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 text-slate-800 dark:text-gray-200 rounded-bl-xs'
                }`}
              >
                {msg.sticker ? (
                  <div className="flex items-center gap-3">
                    <span className="text-3xl animate-bounce">{msg.sticker}</span>
                    <span className="text-xs font-semibold opacity-90">{msg.text}</span>
                  </div>
                ) : (
                  <p className="leading-relaxed">{msg.text}</p>
                )}
                
                <div className={`flex items-center justify-end gap-1 mt-1.5 text-[10px] ${msg.sender === 'user' ? 'text-green-100 dark:text-green-200' : 'text-slate-400 dark:text-gray-400'}`}>
                  <span>{msg.time}</span>
                  {msg.sender === 'user' && <CheckCheck className="w-3.5 h-3.5 text-white dark:text-green-300" />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="bg-slate-100 dark:bg-gray-900 border-t border-slate-200 dark:border-gray-800 p-4 flex items-center gap-3"
        >
          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() => handleSend(undefined, "🔥")}
              className="p-2 text-slate-500 dark:text-gray-400 hover:text-amber-500 hover:bg-slate-200 dark:hover:bg-gray-800 rounded-xl transition-colors text-lg"
              title="Send Flame Sticker"
            >
              🔥
            </button>
            <button
              type="button"
              onClick={() => handleSend(undefined, "❤️")}
              className="p-2 text-slate-500 dark:text-gray-400 hover:text-pink-500 hover:bg-slate-200 dark:hover:bg-gray-800 rounded-xl transition-colors text-lg"
              title="Send Heart Sticker"
            >
              ❤️
            </button>
          </div>

          <input
            type="text"
            placeholder="Type your message to test..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-white dark:bg-gray-950 border border-slate-300 dark:border-gray-800 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 text-sm rounded-xl px-4 py-3 transition-all"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white p-3 rounded-xl shadow-lg transition-all hover:scale-105"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </section>
  );
};

export default LiveDemoSection;
