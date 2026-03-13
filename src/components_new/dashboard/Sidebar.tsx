'use client';

import React, { useState } from 'react';
import { cn } from '@/utils/cn';
import Link from 'next/link';

// --- Icons (Custom SVGs based on the image) ---
const HomeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
  </svg>
);

const PoliciesIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const ClaimsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const QuotationIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const SettingsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const MarineIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 17H2" strokeLinecap="round" />
    <path d="M5 17l-1 4h16l-1-4" />
    <path d="M12 17V7" />
    <path d="M15 10l-3-3-3 3" />
    <circle cx="12" cy="5" r="3" />
  </svg>
);

const VehicleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v7h2" />
    <circle cx="7" cy="17" r="2" />
    <path d="M9 17h6" />
    <circle cx="17" cy="17" r="2" />
  </svg>
);

const EngineeringIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
     <rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="4 4" />
     <path d="M12 8v8M8 12h8" />
  </svg>
);

const CasualtyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const HealthIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const PlusIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// --- Data Structure ---
const navItems = [
  { id: 'home', label: 'Home', icon: HomeIcon, subItems: [] },
  { id: 'policies', label: 'Policies', icon: PoliciesIcon, subItems: [] },
  { id: 'claims', label: 'Claims', icon: ClaimsIcon, subItems: [] },
  { 
    id: 'quotation', 
    label: 'Quotation', 
    icon: QuotationIcon, 
    subItems: [
        { id: 'marine', label: 'Marine Quotation', icon: MarineIcon },
        { 
            id: 'vehicle', 
            label: 'Vehicle Quotation', 
            icon: VehicleIcon, 
            hasDropdown: true,
            children: [
                { id: 'vehicle-direct', label: 'Vehicle Direct Quotation', selected: true },
                { id: 'vehicle-fac-in', label: 'Vehicle Fac IN', selected: false },
            ]
        },
        { id: 'engineering', label: 'Engineering Quotation', icon: EngineeringIcon },
        { id: 'casualty', label: 'Casualty Quotation', icon: CasualtyIcon },
        { id: 'health', label: 'Health Care Quotation', icon: HealthIcon },
    ] 
  },
  { id: 'settings', label: 'Settings', icon: SettingsIcon, subItems: [] },
];

/**
 * Sidebar Component - Dashboard Navigation
 * Light Theme Optimized for a clean, modern look.
 */
export default function Sidebar() {
  const [activeItemId, setActiveItemId] = useState('quotation');
  const [expandedSubId, setExpandedSubId] = useState<string | null>('vehicle');
  
  const currentItem = navItems.find(i => i.id === activeItemId) || navItems[0];

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white text-slate-900 antialiased font-inter-tight transition-colors duration-300">
      {/* 1. Primary Mini Sidebar */}
      <aside className="relative z-30 flex w-24 flex-col items-center bg-slate-50 border-r border-slate-200 py-8 text-center shrink-0">
        {/* Logo container */}
        <div className="mb-14 group cursor-pointer">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ns-cyan text-slate-900 shadow-xl shadow-ns-cyan/30 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                <span className="text-2xl font-black">H</span>
            </div>
        </div>

        {/* Action icons */}
        <nav className="flex flex-1 flex-col items-center space-y-10 w-full">
           {navItems.map((item) => (
             <button
                key={item.id}
                onClick={() => setActiveItemId(item.id)}
                className={cn(
                    "group relative flex w-full flex-col items-center transition-all duration-300 py-1",
                    activeItemId === item.id ? "text-ns-cyan" : "text-slate-400 hover:text-slate-600"
                )}
             >
                {/* Visual Active Indicator */}
                {activeItemId === item.id && (
                    <div className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-ns-cyan shadow-lg shadow-ns-cyan/50" />
                )}

                <div className={cn(
                    "mb-1 flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300 shadow-sm",
                    activeItemId === item.id 
                        ? "bg-white text-slate-900 ring-2 ring-ns-cyan shadow-md" 
                        : "bg-transparent group-hover:bg-white"
                )}>
                    <item.icon className={cn("h-6 w-6 stroke-2", activeItemId === item.id ? "text-slate-900" : "text-inherit")} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest opacity-80">
                    {item.label}
                </span>
             </button>
           ))}
        </nav>

        {/* Plus Button */}
        <div className="mt-auto">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-xl shadow-slate-900/10 ring-4 ring-transparent transition-all duration-300 hover:scale-110 active:scale-95">
                <PlusIcon className="h-7 w-7 stroke-3" />
            </button>
        </div>
      </aside>

      {/* 2. Expanded Detail Sidebar */}
      <aside className="relative z-20 flex w-80 flex-col bg-white border-r border-slate-200 transition-all duration-500 ease-in-out shrink-0">
        {/* Detail Header */}
        <div className="px-8 py-10">
            <div className="flex flex-col space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Insurance Platform</span>
                <h2 className="text-2xl font-black tracking-tighter text-slate-900">Fubon Insurance</h2>
            </div>
        </div>

        {/* Category List */}
        <div className="flex-1 overflow-y-auto px-5 scrollbar-hide">
            <header className="mb-6 px-4">
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-300">
                    {currentItem.label}
                </h3>
            </header>

            <div className="space-y-3">
                {currentItem.subItems.length > 0 ? (
                    currentItem.subItems.map((sub) => (
                        <div key={sub.id} className="group overflow-hidden rounded-2xl transition-all duration-300">
                            <button
                                onClick={() => sub.hasDropdown && setExpandedSubId(expandedSubId === sub.id ? null : sub.id)}
                                className={cn(
                                    "flex w-full items-center justify-between px-5 py-4.5 transition-all duration-500 rounded-2xl",
                                    (sub.hasDropdown && expandedSubId === sub.id) 
                                        ? "bg-slate-900 text-white shadow-xl shadow-slate-900/10" 
                                        : "hover:bg-slate-50 text-slate-700 hover:text-slate-900"
                                )}
                            >
                                <div className="flex items-center gap-5">
                                    <sub.icon className={cn(
                                        "h-6 w-6 transition-all duration-300",
                                        (sub.hasDropdown && expandedSubId === sub.id) 
                                            ? "text-ns-cyan scale-110" 
                                            : "text-slate-300 group-hover:text-slate-500"
                                    )} />
                                    <span className="text-[15px] font-bold tracking-tight">{sub.label}</span>
                                </div>
                                {sub.hasDropdown && (
                                    <ChevronDownIcon className={cn(
                                        "h-4 w-4 transition-transform duration-500",
                                        expandedSubId === sub.id ? "rotate-180" : "opacity-40"
                                    )} />
                                )}
                            </button>

                            {/* Inner Dropdown Content */}
                            {sub.hasDropdown && (
                                <div className={cn(
                                    "transition-all duration-500 ease-in-out bg-slate-50 mx-2 rounded-b-2xl",
                                    expandedSubId === sub.id ? "max-h-[300px] opacity-100 py-5" : "max-h-0 opacity-0 py-0"
                                )}>
                                    <div className="ml-15 space-y-4">
                                        {sub.children?.map((child) => (
                                            <button
                                                key={child.id}
                                                className={cn(
                                                    "group/sub flex w-full items-center gap-4 text-left transition-all duration-200",
                                                    child.selected ? "font-bold text-slate-900" : "font-medium text-slate-400 hover:text-slate-600"
                                                )}
                                            >
                                                <div className={cn(
                                                    "flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all duration-300",
                                                    child.selected ? "border-ns-cyan bg-ns-cyan" : "border-slate-200 bg-transparent group-hover/sub:border-slate-300"
                                                )}>
                                                    {child.selected && <div className="h-1.5 w-1.5 rounded-full bg-slate-900" />}
                                                </div>
                                                <span className="text-sm tracking-tight">{child.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center px-4 py-12 text-center opacity-40">
                         <div className="mb-4 h-px w-full bg-linear-to-r from-transparent via-slate-200 to-transparent" />
                         <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 italic">No Content Available</p>
                    </div>
                )}
            </div>
        </div>

        {/* Bottom User Area */}
        <div className="p-8 border-t border-slate-100">
             <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 shrink-0">
                    <img 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                      alt="User Avatar" 
                      className="h-full w-full rounded-2xl bg-slate-50 p-1 border border-slate-200"
                    />
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-green-500 shadow-md" />
                </div>
                <div className="flex flex-col truncate">
                    <span className="truncate text-sm font-black text-slate-900">Alexander Rossi</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Claims Adjuster</span>
                </div>
             </div>
        </div>
      </aside>

      {/* 3. Main Interface Background */}
      <main className="relative flex-1 bg-slate-50 overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-ns-cyan/10 blur-[120px]" />

          <div className="p-12 relative z-10">
            <nav className="flex items-center gap-2 mb-8 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                <span>Platform</span>
                <span className="text-slate-200">/</span>
                <span className="text-slate-900">{currentItem.label}</span>
            </nav>

            <header className="max-w-xl">
                 <h1 className="text-5xl font-black tracking-tighter text-slate-900 mb-6 leading-none">
                    {currentItem.label}
                 </h1>
                 <p className="text-lg text-slate-500 font-medium leading-relaxed">
                    Streamline your workflow with our advanced {currentItem.label.toLowerCase()} management tools. View and process active records in real-time.
                 </p>
            </header>

            <div className="mt-16 grid grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        <div className="h-12 w-12 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full bg-ns-cyan animate-pulse" />
                        </div>
                        <h4 className="font-black text-slate-900 mb-2">Metrics {i}</h4>
                        <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
                            <div className="h-full bg-ns-cyan w-2/3" />
                        </div>
                    </div>
                ))}
            </div>
          </div>
      </main>
    </div>
  );
}
