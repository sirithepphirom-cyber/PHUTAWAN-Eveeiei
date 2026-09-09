import React, { useState } from 'react';
import {
  MONTHLY_SALES_DATA,
  EDITORIAL_SUNSHINE_URL,
  STRATEGIC_TAKEAWAYS,
} from '../data/presentationData';

interface Slide04Props {
  onNavigateSlide: (slideId: '03-top-best-sellers' | '05-strategic-growth') => void;
}

export const Slide04SeasonalityTrends: React.FC<Slide04Props> = () => {
  const [activeMonthHover, setActiveMonthHover] = useState<string | null>(null);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-16 py-6 md:py-8 flex flex-col gap-6 md:gap-8 animate-fadeIn">
      {/* Top Third Rule: Executive Headline & Synthesized Insight Bar */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-[#c2c8c0]/40 pb-6">
        <div className="flex flex-col gap-1 max-w-4xl">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-label-caps text-[11px] uppercase px-3 py-1 rounded-full bg-[#7d5712]/10 text-[#7d5712] border border-[#7d5712]/20 font-bold">
              Slide 04 • Seasonality &amp; Trends
            </span>
            <span className="font-label-caps text-[11px] uppercase px-3 py-1 rounded-full bg-[#122d1a]/10 text-[#122d1a] border border-[#122d1a]/20 font-bold">
              FY2026 Monthly Velocity
            </span>
            <span className="flex items-center gap-1.5 font-label-caps text-[11px] text-[#424842] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#f1be71]"></span>
              Annual Net Target: ฿1.85M
            </span>
          </div>

          <h1 className="font-headline-lg text-[28px] sm:text-[34px] md:text-[40px] text-[#122d1a] leading-tight tracking-tight mt-1">
            พลวัตยอดขายตลอด 12 เดือน: จุดพีคแคมเปญ Q1–Q2 และเทศกาลของขวัญ Q4
          </h1>

          <p className="font-lead text-[16px] sm:text-[18px] text-[#424842] font-normal leading-relaxed mt-1">
            วิเคราะห์ช่วงเวลาทำรายได้สูงสุดเพื่อวางแผนสต็อกวัตถุดิบ ก้านไม้กระจายกลิ่น และกลยุทธ์การตลาดล่วงหน้า
          </p>
        </div>

        {/* Quick Executive Indicator Module */}
        <div className="flex items-center gap-4 bg-white px-4 sm:px-6 py-3 rounded-xl shadow-sm border border-[#122d1a]/5 shrink-0 self-start lg:self-end">
          <div className="flex flex-col">
            <span className="font-label-caps text-[11px] text-[#424842] uppercase tracking-wider font-semibold">
              H1 vs H2 Proportion
            </span>
            <span className="font-headline-sm text-[22px] sm:text-[26px] text-[#122d1a] font-bold">
              52.8% : 47.2%
            </span>
          </div>
          <div className="h-8 w-px bg-[#c2c8c0]/40"></div>
          <div className="flex flex-col">
            <span className="font-label-caps text-[11px] text-[#7d5712] uppercase tracking-wider font-semibold">
              High Season Surge
            </span>
            <span className="font-headline-sm text-[22px] sm:text-[26px] text-[#7d5712] font-bold">
              +60.1% Peak/Trough
            </span>
          </div>
        </div>
      </div>

      {/* Center Stage: Visual Data Architecture & Product Ecosystem Split */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-stretch">
        {/* Primary 12-Month Sales Dynamics Chart (8 cols) */}
        <div className="xl:col-span-8 bg-white rounded-xl p-5 sm:p-7 shadow-sm border border-[#122d1a]/5 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Ambient Background Accents */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#ffddaf]/20 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#cbebce]/30 blur-3xl pointer-events-none"></div>

          {/* Chart Header & Executive Legend */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10 pb-2 border-b border-[#c2c8c0]/20">
            <div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#122d1a] text-[20px]">
                  insights
                </span>
                <span className="font-headline-sm text-[20px] text-[#122d1a] font-bold">
                  Monthly Gross Sales Volume (THB)
                </span>
              </div>
              <p className="font-body-sm text-[13px] text-[#424842]">
                ยอดจำหน่ายสุทธิรายเดือนกลุ่ม Natural Reed Diffuser ประจำรอบบัญชี 2026
              </p>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 font-label-sm text-[11px] flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-[#424842]">
                <span className="w-3 h-3 rounded-sm bg-[#122d1a]"></span> ยอดขายปกติ
              </span>
              <span className="inline-flex items-center gap-1.5 text-[#7d5712] font-bold">
                <span className="w-3 h-3 rounded-sm bg-[#7d5712]"></span> จุดพีคสูงสุด (Peak 1 &amp; 2)
              </span>
              <span className="inline-flex items-center gap-1.5 text-[#737972]">
                <span className="w-3 h-0.5 bg-[#c2c8c0]"></span> ค่าเฉลี่ยเดือนละ ฿154k
              </span>
            </div>
          </div>

          {/* High-Impact Bespoke Data Visualization */}
          <div className="relative w-full pt-8 pb-2 flex-1 flex flex-col justify-end min-h-[360px] z-10">
            {/* Baseline Reference Line (Average: ฿154k) */}
            <div className="absolute left-0 right-0 top-[38%] border-t border-dashed border-[#c2c8c0]/70 flex items-center justify-end pr-2 pointer-events-none z-0">
              <span className="font-label-caps text-[10px] text-[#424842] bg-[#fbf9f4] px-1.5 py-0.5 rounded border border-[#c2c8c0]/40 font-mono">
                Avg ฿154.2k
              </span>
            </div>

            {/* Y-Axis Grid Marks */}
            <div className="absolute inset-y-0 left-0 flex flex-col justify-between text-[11px] font-mono text-[#737972] pointer-events-none -ml-1 py-1">
              <span>฿220k</span>
              <span>฿165k</span>
              <span>฿110k</span>
              <span>฿55k</span>
              <span>฿0</span>
            </div>

            {/* Columns Canvas (12 Months) */}
            <div className="grid grid-cols-12 gap-1.5 sm:gap-2.5 lg:gap-3.5 h-64 pl-12 pr-2 items-end z-10">
              {MONTHLY_SALES_DATA.map((item) => {
                const isHovered = activeMonthHover === item.month;
                return (
                  <div
                    key={item.month}
                    onMouseEnter={() => setActiveMonthHover(item.month)}
                    onMouseLeave={() => setActiveMonthHover(null)}
                    className="group flex flex-col items-center h-full justify-end relative cursor-pointer"
                  >
                    {/* Hover tooltip */}
                    <div
                      className={`absolute -top-10 transition-all duration-200 z-40 pointer-events-none ${
                        isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                    >
                      <div className="bg-[#122d1a] text-white text-[11px] font-mono px-2 py-1 rounded shadow-lg whitespace-nowrap text-center">
                        <div className="font-bold text-[#ffddaf]">฿{item.salesK},000</div>
                        <div className="text-[9px] text-[#afceb3]">{item.monthEn} 2026</div>
                      </div>
                    </div>

                    {/* Peak Callout Pins */}
                    {item.isPeak && item.month === 'เม.ย.' && (
                      <div className="absolute -top-12 sm:-top-16 flex flex-col items-center z-30 transform hover:scale-105 transition-transform duration-200">
                        <span className="px-2 py-0.5 rounded-full bg-[#7d5712] text-white font-label-caps text-[10px] whitespace-nowrap shadow-md flex items-center gap-1 font-bold">
                          🔥 PEAK 1 • ฿205k
                        </span>
                        <span className="w-1.5 h-1.5 bg-[#7d5712] rotate-45 -mt-1"></span>
                      </div>
                    )}

                    {item.isPeak && item.month === 'พ.ย.' && (
                      <div className="absolute -top-12 sm:-top-16 flex flex-col items-center z-30 transform hover:scale-105 transition-transform duration-200">
                        <span className="px-2 py-0.5 rounded-full bg-[#7d5712] text-white font-label-caps text-[10px] whitespace-nowrap shadow-md flex items-center gap-1 font-bold">
                          🔥 PEAK 2 • ฿170k
                        </span>
                        <span className="w-1.5 h-1.5 bg-[#7d5712] rotate-45 -mt-1"></span>
                      </div>
                    )}

                    {item.isTrough && (
                      <div className="absolute -top-7 flex flex-col items-center pointer-events-none">
                        <span className="font-label-caps text-[9px] text-[#737972] tracking-tight bg-[#f5f3ee] px-1 rounded">
                          Trough
                        </span>
                      </div>
                    )}

                    {/* The Bar Element */}
                    <div
                      className={`w-full rounded-t transition-all duration-300 relative ${
                        item.isPeak
                          ? 'bg-[#7d5712] shadow-md group-hover:brightness-110'
                          : item.month === 'ธ.ค.'
                          ? 'bg-[#122d1a] shadow-sm group-hover:brightness-110'
                          : item.isTrough || item.month === 'ก.ย.'
                          ? 'bg-[#e4e2dd] group-hover:bg-[#28432f]/50'
                          : 'bg-[#28432f]/75 group-hover:bg-[#122d1a]'
                      }`}
                      style={{ height: `${item.heightPercent}%` }}
                    >
                      {item.isPeak && (
                        <div className="absolute inset-x-0 top-0 h-1 bg-[#ffddaf] rounded-t"></div>
                      )}
                      {item.month === 'ธ.ค.' && (
                        <div className="absolute inset-x-0 top-0 h-1 bg-[#cbebce] rounded-t"></div>
                      )}
                    </div>

                    {/* Month Label */}
                    <span
                      className={`mt-2 font-label-caps text-[11px] transition-colors ${
                        item.isPeak
                          ? 'text-[#7d5712] font-bold'
                          : item.month === 'ธ.ค.'
                          ? 'text-[#122d1a] font-bold'
                          : item.isTrough || item.month === 'ก.ย.'
                          ? 'text-[#737972]'
                          : 'text-[#424842]'
                      }`}
                    >
                      {item.month}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2 Detailed Peak Callout Banner Strips (Bottom of Chart) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 pt-4 border-t border-[#c2c8c0]/30">
            <div className="flex items-start gap-3 bg-[#f5f3ee] p-3 rounded-lg border border-[#c2c8c0]/20">
              <div className="w-7 h-7 rounded bg-[#7d5712]/15 flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[#7d5712] text-[18px]">
                  celebration
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-label-caps text-[11px] text-[#7d5712] uppercase font-bold">
                    Peak 1 (เม.ย. - พ.ค.)
                  </span>
                  <span className="font-body-sm text-[13px] font-bold text-[#1b1c19]">
                    ฿205,000 / ด.
                  </span>
                </div>
                <p className="font-body-sm text-[13px] text-[#424842] leading-tight mt-1">
                  ขานรับแคมเปญเปิดตัวบรรจุภัณฑ์ใหม่ Botanical Collection และเทศกาลสงกรานต์ ยอดซื้อของฝากเดินทางสูงขึ้น 38%
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#f5f3ee] p-3 rounded-lg border border-[#c2c8c0]/20">
              <div className="w-7 h-7 rounded bg-[#122d1a]/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[#122d1a] text-[18px]">
                  featured_seasonal_and_gifts
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-label-caps text-[11px] text-[#122d1a] uppercase font-bold">
                    Peak 2 (พ.ย. - ธ.ค.)
                  </span>
                  <span className="font-body-sm text-[13px] font-bold text-[#1b1c19]">
                    ฿170,000 / ด.
                  </span>
                </div>
                <p className="font-body-sm text-[13px] text-[#424842] leading-tight mt-1">
                  อานิสงส์เทศกาลของขวัญปีใหม่ (Holiday Gifting Boxsets) ผสานแรงกระตุ้นแคมเปญ 11.11 &amp; 12.12 Mega Sales
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Product Presentation & Seasonality Driver (4 cols) */}
        <div className="xl:col-span-4 flex flex-col gap-4">
          {/* Organic Luxury Aesthetic Showcase Card */}
          <div className="bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-[#122d1a]/5 flex flex-col gap-4 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="font-label-caps text-[11px] uppercase text-[#7d5712] tracking-wider font-bold">
                Top Seasonal Anchors
              </span>
              <span className="px-2.5 py-0.5 rounded bg-[#122d1a]/10 font-label-caps text-[10px] text-[#122d1a] font-bold uppercase">
                Walk on Sunshine Series
              </span>
            </div>

            {/* Editorial Imagery Window */}
            <div className="relative w-full h-48 rounded-lg overflow-hidden group shadow-inner">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={EDITORIAL_SUNSHINE_URL}
                alt="Phutawan Walk on Sunshine Reed Diffuser editorial photo"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#122d1a]/85 via-black/20 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="font-label-caps text-[10px] uppercase text-[#cbebce] font-bold tracking-wider">
                  Gift Basket Hero Scent
                </span>
                <p className="font-headline-sm text-[18px] leading-tight font-semibold">
                  Dreamscent &amp; Lavender Reserve
                </p>
              </div>
            </div>

            {/* Mini Quarterly Performance Breakdown */}
            <div className="grid grid-cols-4 gap-2 pt-1 text-center">
              <div className="bg-[#f5f3ee] p-2 rounded flex flex-col items-center">
                <span className="font-label-caps text-[10px] text-[#737972]">Q1 2026</span>
                <span className="font-body-sm text-[13px] font-bold text-[#122d1a]">฿448k</span>
                <span className="text-[10px] text-[#7d5712] font-semibold">24.2%</span>
              </div>
              <div className="bg-[#ffddaf]/25 p-2 rounded flex flex-col items-center border border-[#7d5712]/20">
                <span className="font-label-caps text-[10px] text-[#7d5712] font-bold">Q2 (Peak)</span>
                <span className="font-body-sm text-[13px] font-bold text-[#7d5712]">฿529k</span>
                <span className="text-[10px] text-[#7d5712] font-bold">28.6%</span>
              </div>
              <div className="bg-[#f5f3ee] p-2 rounded flex flex-col items-center opacity-75">
                <span className="font-label-caps text-[10px] text-[#737972]">Q3 (Slow)</span>
                <span className="font-body-sm text-[13px] font-bold text-[#1b1c19]">฿412k</span>
                <span className="text-[10px] text-[#737972] font-semibold">22.2%</span>
              </div>
              <div className="bg-[#122d1a]/10 p-2 rounded flex flex-col items-center border border-[#122d1a]/20">
                <span className="font-label-caps text-[10px] text-[#122d1a] font-bold">Q4 (Gifting)</span>
                <span className="font-body-sm text-[13px] font-bold text-[#122d1a]">฿464k</span>
                <span className="text-[10px] text-[#122d1a] font-semibold">25.0%</span>
              </div>
            </div>
          </div>

          {/* Inventory Velocity Micro-Stat */}
          <div className="bg-[#122d1a] text-white rounded-xl p-5 sm:p-6 shadow-sm flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="font-label-caps text-[11px] uppercase text-[#afceb3] tracking-wider font-bold">
                Lead Time Allocation
              </span>
              <span className="font-headline-sm text-[22px] text-white font-bold">
                60-Day Advance Prep
              </span>
              <span className="font-body-sm text-[13px] text-white/80 mt-1 leading-snug">
                ต้องเตรียมกระจกแก้ว Amber และก้านหวายธรรมชาติล่วงหน้าก่อนเดือน ก.พ. และ ก.ย.
              </span>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#28432f] flex items-center justify-center shrink-0 border border-[#91af96]/30">
              <span className="material-symbols-outlined text-[#ffddaf] text-[26px]">
                inventory_2
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: 3 Strategic Takeaways */}
      <div className="flex flex-col gap-3 pt-1">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#7d5712] text-[20px]">
            flag
          </span>
          <h2 className="font-headline-sm text-[22px] text-[#122d1a] font-bold">
            3 Strategic Takeaways สำหรับฝ่ายปฏิบัติการและจัดจำหน่าย
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STRATEGIC_TAKEAWAYS.map((pillar) => (
            <div
              key={pillar.pillarNum}
              className={`bg-white rounded-xl p-5 sm:p-6 shadow-sm border-l-4 ${pillar.borderColor} border border-[#122d1a]/5 flex flex-col justify-between`}
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span
                    className={`font-label-caps text-[11px] uppercase px-2 py-0.5 rounded font-bold ${
                      pillar.pillarNum.includes('01')
                        ? 'bg-[#7d5712]/15 text-[#7d5712]'
                        : pillar.pillarNum.includes('02')
                        ? 'bg-[#e4e2dd] text-[#424842]'
                        : 'bg-[#122d1a]/10 text-[#122d1a]'
                    }`}
                  >
                    {pillar.pillarNum}
                  </span>
                  <span
                    className={`font-headline-sm text-[20px] font-bold ${
                      pillar.pillarNum.includes('01')
                        ? 'text-[#7d5712]'
                        : pillar.pillarNum.includes('02')
                        ? 'text-[#424842]'
                        : 'text-[#122d1a]'
                    }`}
                  >
                    {pillar.metric}
                  </span>
                </div>

                <h3 className="font-headline-sm text-[18px] text-[#122d1a] leading-snug font-semibold mt-2">
                  {pillar.title}
                </h3>

                <p className="font-body-sm text-[13px] text-[#424842] mt-1 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-[#c2c8c0]/30 flex items-center gap-2 text-[#7d5712] font-label-sm text-[12px] font-semibold">
                <span className="material-symbols-outlined text-[16px]">
                  {pillar.iconName}
                </span>
                <span>{pillar.actionText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
