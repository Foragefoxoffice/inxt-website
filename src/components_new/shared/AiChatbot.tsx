'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Modal, ConfigProvider, theme } from 'antd';
import { useLenis } from 'lenis/react';
import gsap from 'gsap';
import { cn } from '@/utils/cn';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const QUICK_PICKS = [
  "Discover INXT's Core Services",
  "Explore Modern Insurance Solutions",
  "Find carrier partnership opportunities",
  "What is our latest AI performance?"
];

const AiChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const msgsRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  
  const lenis = useLenis();

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // AUTO-SCROLL to bottom
  useEffect(() => {
    if (isExpanded && msgsRef.current) {
      msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
    }
  }, [messages, isLoading, isExpanded]);

  // Handle Lenis Scroll Lock
  useEffect(() => {
    if (isExpanded) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
    return () => {
      lenis?.start();
    };
  }, [isExpanded, lenis]);

  const handleSend = async (overrideText?: string) => {
    const textToSend = overrideText || input.trim();
    if (!textToSend || isLoading) return;

    if (!isExpanded) setIsExpanded(true);

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5002/api/en/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend, language: 'en', topK: 5 })
      });

      const data = await response.json();
      if (data.success) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          text: data.data.response
        }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', text: "I'm sorry, I encountered an error." }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', text: "Network error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const iconBot = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none stroke-2"><rect x="3" y="11" width="18" height="10" rx="2" ry="2"/><path d="M12 11V3"/><circle cx="12" cy="3" r="1"/><path d="M8 11V9a4 4 0 0 1 8 0v2"/></svg>
  );

  const iconUser = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none stroke-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  );

  const iconSend = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none stroke-2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
  );

  const iconClose = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none stroke-2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  );

  // --- Initial Inline View (Trigger) ---
  const renderInline = () => (
    <div className="w-full max-w-4xl mx-auto mt-12 mb-20 p-8 md:p-12 rounded-[32px] bg-slate-900/40 border border-white/5 backdrop-blur-xl shadow-2xl relative z-10 transition-all hover:bg-slate-900/50">
      <h2 className="text-3xl md:text-5xl font-semibold text-white text-center mb-10 tracking-tight">
        Start your journey with our AI.
      </h2>
      
      <div className="relative group max-w-2xl mx-auto">
        <div className="absolute inset-0 bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative flex items-center bg-transparent border-2 border-white/10 rounded-[20px] px-3 py-1.5 hover:border-[#1D74BA] transition-colors backdrop-blur-md">
          <div className="w-8 h-8 shrink-0 text-[#1D74BA] p-1.5 flex items-center justify-center">
            {iconBot()}
          </div>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
            placeholder="Type your challenge here..."
            className="flex-1 bg-transparent border-none outline-none text-white px-4 py-3 text-base md:text-lg placeholder:text-slate-500"
          />
          <button 
             onClick={() => handleSend()}
             disabled={!input.trim()}
             className="p-2.5 bg-[#1D74BA] rounded-full text-white hover:scale-105 active:scale-95 transition-all disabled:opacity-30"
          >
            <div className="w-4 h-4">{iconSend()}</div>
          </button>
        </div>
      </div>

      <div className="mt-12 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {QUICK_PICKS.map((pick, idx) => (
            <button 
              key={idx}
              onClick={() => handleSend(pick)}
              className="p-4 text-left rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group"
            >
              <p className="text-sm text-slate-400 group-hover:text-white transition-colors">{pick}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#1D74BA',
          borderRadius: 16,
        },
      }}
    >
      <style jsx global>{`
        .ant-modal-root .chatbot-modal .ant-modal-content {
          background-color: #0b0f1a !important;
          padding: 0 !important;
          border-radius: 0 !important;
          height: 100vh !important;
          overflow: hidden !important;
        }
        .ant-modal-root .chatbot-modal {
          max-width: 100vw !important;
          top: 0 !important;
          padding-bottom: 0 !important;
          margin: 0 !important;
        }
        .ant-modal-root .chatbot-modal .ant-modal-body {
          height: 100vh !important;
          padding: 0 !important;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
      `}</style>

      {renderInline()}

      <Modal
        open={isExpanded}
        onCancel={() => setIsExpanded(false)}
        footer={null}
        closeIcon={null}
        closable={false}
        width="100%"
        centered
        destroyOnClose
        className="chatbot-modal"
        transitionName=""
        maskTransitionName=""
      >
        <div className="flex flex-col h-screen w-full bg-[#0b0f1a] relative overflow-hidden font-sans">
          {/* Background Decor */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[80%] bg-blue-900/20 blur-[200px] rounded-full"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[70%] h-[70%] bg-[#1D74BA]/10 blur-[200px] rounded-full"></div>
          </div>

          {/* Header */}
          <header className="h-24 w-full shrink-0 relative z-50">
            <div className="max-w-4xl mx-auto h-full flex items-center justify-end px-6 md:px-10">
              <button 
                onClick={() => { setIsExpanded(false); setMessages([]); }}
                className="w-12 h-12 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-[#1D74BA] flex items-center justify-center transition-all border border-white/5 group shadow-lg"
              >
                <div className="w-6 h-6">{iconClose()}</div>
              </button>
            </div>
          </header>

          {/* Scrollable Messages Area */}
          <main 
            ref={msgsRef}
            data-lenis-prevent
            className="flex-1 w-full max-w-4xl mx-auto overflow-y-auto px-6 md:px-10 py-6 relative z-40 scroll-smooth"
            style={{ 
              scrollbarWidth: 'thin', 
              scrollbarColor: 'rgba(255,255,255,0.1) transparent' 
            }}
          >
            <div className="flex flex-col gap-10 pb-20">
              {messages.length === 0 && (
                <div className="flex-1 flex flex-col items-center justify-center opacity-20 mt-20">
                   <div className="w-16 h-16 text-[#1D74BA] mb-6">{iconBot()}</div>
                   <h3 className="text-xl font-light text-white italic tracking-widest text-center">How can I assist you today?</h3>
                </div>
              )}

              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={cn(
                    "w-full flex gap-5 animate-fade-in-up",
                    msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                  )}
                >
                  <div className={cn(
                    "w-11 h-11 rounded-xl shrink-0 flex items-center justify-center p-2.5 shadow-xl transition-transform",
                    msg.role === 'user' ? 'bg-[#1D74BA] text-white' : 'bg-slate-800 text-slate-300 border border-white/5'
                  )}>
                    {msg.role === 'user' ? iconUser() : iconBot()}
                  </div>
                  <div className={cn("flex flex-col flex-1", msg.role === 'user' ? 'items-end' : 'items-start')}>
                     <div className={cn(
                       "text-[16px] md:text-[17px] leading-relaxed max-w-[85%] select-text px-1",
                       msg.role === 'user' ? 'text-white font-medium text-right' : 'text-slate-200 text-left'
                     )}>
                       {msg.text}
                     </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="w-full flex gap-5 opacity-40 animate-pulse">
                  <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center p-2.5 shadow-xl">
                     {iconBot()}
                  </div>
                  <div className="h-4 w-48 bg-slate-800 rounded-full mt-5"></div>
                </div>
              )}
            </div>
          </main>

          {/* Bottom Fixed Footer Area */}
          <footer className="w-full max-w-4xl mx-auto px-6 md:px-10 py-10 shrink-0 relative z-50">
             <div className="relative group bg-[#161b2a]/95 backdrop-blur-3xl border border-white/10 rounded-[28px] p-3 flex items-end gap-4 shadow-2xl focus-within:border-[#1D74BA]/50 transition-all">
                <div className="w-9 h-9 shrink-0 text-[#1D74BA] p-2 mb-1.5 opacity-60">
                  {iconBot()}
                </div>
                <textarea 
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { 
                    if (e.key === 'Enter' && !e.shiftKey) { 
                      e.preventDefault(); 
                      handleSend(); 
                    } 
                  }}
                  autoFocus
                  placeholder="Ask anything..."
                  rows={1}
                  className="flex-1 bg-transparent border-none outline-none text-white py-3.5 text-[17px] placeholder:text-slate-600 resize-none max-h-48 selection:bg-blue-500/30"
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    target.style.height = 'auto';
                    target.style.height = `${target.scrollHeight}px`;
                  }}
                />
                <button 
                   onClick={() => handleSend()}
                   disabled={!input.trim() || isLoading}
                   className="p-4 bg-[#1D74BA] rounded-2xl text-white hover:brightness-110 active:scale-95 transition-all disabled:opacity-20 shadow-xl"
                >
                  <div className="w-5 h-5">{iconSend()}</div>
                </button>
             </div>
          </footer>
        </div>
      </Modal>
    </ConfigProvider>
  );
};

export default AiChatbot;
