import React from 'react';
import { SlideId } from '../types';
import { SLIDE_TABS } from '../data/presentationData';

interface FooterProps {
  currentSlide: SlideId;
  onSelectSlide: (id: SlideId) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentSlide, onSelectSlide }) => {
  const currentIndex = SLIDE_TABS.findIndex((s) => s.id === currentSlide);
  const prevSlide = currentIndex > 0 ? SLIDE_TABS[currentIndex - 1].id : null;
  const nextSlide = currentIndex < SLIDE_TABS.length - 1 ? SLIDE_TABS[currentIndex + 1].id : null;

  return (
    <footer className="w-full bg-[#f5f3ee] text-[#424842] shadow-[0_-1px_8px_rgba(0,0,0,0.04)] border-t border-[#c2c8c0]/40 transition-colors">
      <div className="h-14 max-w-[1600px] mx-auto px-4 md:px-16 flex items-center justify-between font-label-sm text-[12px]">
        {/* Brand and Unit */}
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="font-headline-sm text-[20px] text-[#122d1a] font-bold leading-none tracking-normal">
            ภูตะวัน
          </span>
          <span className="h-3.5 w-px bg-[#c2c8c0]/60"></span>
          <span className="font-body-sm text-[13px] text-[#424842] hidden sm:inline">
            Natural Reed Diffuser Strategic Performance
          </span>
        </div>

        {/* Confidentiality Badge */}
        <div className="flex items-center gap-1.5 text-[#7d5712] font-medium tracking-wide uppercase font-label-caps text-[11px]">
          <span className="material-symbols-outlined text-[16px] text-[#7d5712]">
            verified_user
          </span>
          <span className="hidden md:inline">
            Confidential &amp; Proprietary • Executive Committee 2026
          </span>
          <span className="md:hidden">Confidential 2026</span>
        </div>

        {/* Slide Frame and Navigation controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1">
            <button
              onClick={() => prevSlide && onSelectSlide(prevSlide)}
              disabled={!prevSlide}
              title="สไลด์ก่อนหน้า (Previous Slide)"
              className="p-1 rounded text-[#424842] hover:bg-[#eae8e3] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">chevron_left</span>
            </button>
            <span className="font-mono text-[11px] font-bold text-[#122d1a] px-1">
              0{currentIndex + 1} / 0{SLIDE_TABS.length}
            </span>
            <button
              onClick={() => nextSlide && onSelectSlide(nextSlide)}
              disabled={!nextSlide}
              title="สไลด์ถัดไป (Next Slide)"
              className="p-1 rounded text-[#424842] hover:bg-[#eae8e3] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
          </div>

          <span className="h-3.5 w-px bg-[#c2c8c0]/60 hidden sm:block"></span>

          <span className="font-label-caps text-[11px] tracking-wider text-[#424842] uppercase hidden lg:inline">
            Widescreen 16:9 Presentation Frame
          </span>

          <span className="h-3.5 w-px bg-[#c2c8c0]/60 hidden lg:block"></span>

          <span className="font-body-sm text-[13px] text-[#1b1c19] font-bold">
            FY2026
          </span>
        </div>
      </div>
    </footer>
  );
};
