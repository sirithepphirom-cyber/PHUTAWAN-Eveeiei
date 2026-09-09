import React from 'react';
import { SlideId } from '../types';
import { SLIDE_TABS, PHUTAWAN_LOGO_URL } from '../data/presentationData';

interface HeaderProps {
  currentSlide: SlideId;
  onSelectSlide: (id: SlideId) => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  isAutoplay: boolean;
  onToggleAutoplay: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentSlide,
  onSelectSlide,
  isFullscreen,
  onToggleFullscreen,
  isAutoplay,
  onToggleAutoplay,
}) => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#28432f] text-white shadow-[0_4px_24px_rgba(18,45,26,0.16)] transition-all">
      <div className="h-20 max-w-[1600px] mx-auto px-4 md:px-16 flex items-center justify-between gap-4">
        {/* Brand Group */}
        <div className="flex items-center gap-4 lg:gap-6">
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onSelectSlide('03-top-best-sellers')}
            title="ภูตะวัน Phutawan Herbal Wellness"
          >
            <img
              alt="Phutawan Logo"
              className="h-8 w-auto object-contain brightness-0 invert transition-transform duration-200 group-hover:scale-105"
              src={PHUTAWAN_LOGO_URL}
              onError={(e) => {
                // Fallback text if network blocked
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-[22px] tracking-wide text-white leading-none">
                Phutawan
              </span>
              <span className="font-label-caps text-[11px] text-[#91af96] tracking-widest uppercase mt-0.5">
                ภูตะวัน • Herbal Wellness
              </span>
            </div>
          </div>

          {/* Executive Review Tag */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#122d1a]/50 border border-[#afceb3]/25">
            <span className="w-2 h-2 rounded-full bg-[#ffddaf] animate-pulse"></span>
            <span className="font-label-caps text-[11px] uppercase tracking-wider text-[#ffddaf]">
              Executive Review 2026
            </span>
          </div>
        </div>

        {/* Slide Navigation Tabs */}
        <nav
          className="hidden lg:flex items-center gap-1 p-1 rounded-lg bg-[#122d1a]/40 backdrop-blur-sm border border-white/5"
          aria-label="Executive Slide Navigation"
        >
          {SLIDE_TABS.map((tab) => {
            const isActive = currentSlide === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectSlide(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg font-label-sm text-[12px] transition-all duration-200 cursor-pointer select-none whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-[#122d1a] font-bold shadow-md'
                    : 'text-[#91af96] hover:text-white hover:bg-white/5'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {tab.title}
              </button>
            );
          })}
        </nav>

        {/* Controls & Board Designation */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Quick Autoplay & Fullscreen Controls */}
          <div className="flex items-center gap-1 bg-[#122d1a]/50 p-1 rounded-lg border border-white/10">
            <button
              onClick={onToggleAutoplay}
              title={isAutoplay ? 'หยุดสไลด์อัตโนมัติ (Pause Auto-play)' : 'เล่นสไลด์อัตโนมัติ (Auto-play Slides)'}
              className={`p-1.5 rounded text-white/80 hover:text-white transition-colors cursor-pointer ${
                isAutoplay ? 'bg-[#ffddaf]/20 text-[#ffddaf]' : 'hover:bg-white/10'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">
                {isAutoplay ? 'pause' : 'play_arrow'}
              </span>
            </button>
            <button
              onClick={onToggleFullscreen}
              title={isFullscreen ? 'ออกจากโหมดเต็มหน้าจอ (Exit Fullscreen)' : 'เต็มหน้าจอ (Fullscreen Presentation)'}
              className="p-1.5 rounded text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">
                {isFullscreen ? 'fullscreen_exit' : 'fullscreen'}
              </span>
            </button>
          </div>

          <div className="hidden sm:flex flex-col text-right">
            <span className="font-label-caps text-[11px] uppercase text-[#91af96] tracking-wider">
              Board of Directors
            </span>
            <span className="font-label-sm text-[12px] text-white font-medium">
              Natural Reed Diffuser Unit
            </span>
          </div>

          <div
            className="w-8 h-8 rounded-full bg-[#122d1a] border border-[#91af96]/40 flex items-center justify-center shrink-0 shadow-inner"
            title="Executive Member Logged In"
          >
            <span className="material-symbols-outlined text-white text-[18px]">
              person
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Slide Navigation Sub-bar */}
      <div className="flex lg:hidden overflow-x-auto py-2 px-4 bg-[#122d1a]/70 border-t border-white/10 scrollbar-none gap-2">
        {SLIDE_TABS.map((tab) => {
          const isActive = currentSlide === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectSlide(tab.id)}
              className={`px-3 py-1 text-xs rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                isActive
                  ? 'bg-white text-[#122d1a] font-bold shadow'
                  : 'text-[#91af96] bg-black/20 hover:text-white'
              }`}
            >
              {tab.shortTitle}
            </button>
          );
        })}
      </div>
    </header>
  );
};
