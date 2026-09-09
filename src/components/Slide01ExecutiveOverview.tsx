import React from 'react';

interface Slide01Props {
  onNavigateSlide: (slideId: '02-sales-channel-mix' | '03-top-best-sellers') => void;
}

export const Slide01ExecutiveOverview: React.FC<Slide01Props> = ({ onNavigateSlide }) => {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-16 py-6 md:py-8 flex flex-col gap-6 md:gap-8 animate-fadeIn">
      {/* Top Third Rule */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-[#c2c8c0]/40 pb-6">
        <div className="flex flex-col gap-1 max-w-4xl">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-[#122d1a]/10 text-[#122d1a] font-label-caps text-[11px] uppercase tracking-wider font-bold">
              Slide 01 • Executive Overview
            </span>
            <span className="text-[#737972] text-[11px]">•</span>
            <span className="font-label-caps text-[11px] uppercase text-[#424842] tracking-wider font-semibold">
              FY2026 Strategic Vision &amp; Performance
            </span>
          </div>

          <h1 className="font-headline-lg text-[28px] sm:text-[34px] md:text-[40px] text-[#122d1a] tracking-tight mt-1 leading-tight">
            สรุปผลการดำเนินงานกลุ่มก้านไม้หอมธรรมชาติ: ยอดรวมเติบโตทะลุเป้าหมาย
          </h1>

          <p className="font-lead text-[16px] sm:text-[18px] text-[#424842] font-normal leading-relaxed mt-1">
            กลุ่มผลิตภัณฑ์ Natural Reed Diffuser ก้าวขึ้นเป็นหัวหอกสำคัญของพอร์ต Herbal Wellness ด้วยยอดขายรวมกว่า ฿1.85M และอัตราการซื้อซ้ำสูงกว่าค่าเฉลี่ยอุตสาหกรรม
          </p>
        </div>

        <div className="flex items-center gap-4 bg-[#f5f3ee] p-3 sm:p-4 rounded-xl shadow-sm border border-[#c2c8c0]/30 shrink-0 self-start lg:self-end">
          <div className="flex flex-col px-2 sm:px-3">
            <span className="font-label-caps text-[11px] text-[#424842] uppercase tracking-wider">
              Total Category Revenue
            </span>
            <span className="font-headline-sm text-[24px] sm:text-[28px] text-[#122d1a] font-bold">
              ฿1.85M
            </span>
          </div>
          <div className="h-8 w-px bg-[#c2c8c0]/50"></div>
          <div className="flex flex-col px-2 sm:px-3">
            <span className="font-label-caps text-[11px] text-[#7d5712] uppercase tracking-wider">
              YoY Growth
            </span>
            <span className="font-headline-sm text-[24px] sm:text-[28px] text-[#7d5712] font-bold">
              +34.2%
            </span>
          </div>
        </div>
      </div>

      {/* 4 Pillar Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#122d1a]/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[#7d5712] mb-3">
              <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
              <span className="font-label-caps text-[11px] uppercase bg-[#ffddaf]/40 px-2 py-0.5 rounded font-bold">
                Market Leadership
              </span>
            </div>
            <div className="font-headline-sm text-[28px] text-[#122d1a] font-bold">#1 Top Scent</div>
            <div className="font-lead text-[15px] text-[#7d5712] font-medium mt-1">Lavender 100ml</div>
            <p className="font-body-sm text-[13px] text-[#424842] mt-2">
              กวาดยอดขาย ฿778,000 คิดเป็น 42% ของรายได้ทั้งหมด ครองใจผู้บริโภคสายผ่อนคลาย
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#c2c8c0]/30 font-label-caps text-[11px] text-[#122d1a] font-bold">
            Customer Rating 4.9/5.0
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#122d1a]/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[#122d1a] mb-3">
              <span className="material-symbols-outlined text-[24px]">eco</span>
              <span className="font-label-caps text-[11px] uppercase bg-[#cbebce]/50 px-2 py-0.5 rounded font-bold">
                Sustainability
              </span>
            </div>
            <div className="font-headline-sm text-[28px] text-[#122d1a] font-bold">100% Eco</div>
            <div className="font-lead text-[15px] text-[#122d1a] font-medium mt-1">Amber Glass &amp; Rattan</div>
            <p className="font-body-sm text-[13px] text-[#424842] mt-2">
              ใช้วัสดุกระจายกลิ่นจากธรรมชาติ ปลอดสารพิษ สอดคล้องกับมาตรฐานสิ่งแวดล้อมสากล
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#c2c8c0]/30 font-label-caps text-[11px] text-[#122d1a] font-bold">
            Zero Harmful Chemicals
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#122d1a]/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[#7d5712] mb-3">
              <span className="material-symbols-outlined text-[24px]">repeat</span>
              <span className="font-label-caps text-[11px] uppercase bg-[#ffddaf]/40 px-2 py-0.5 rounded font-bold">
                Customer Loyalty
              </span>
            </div>
            <div className="font-headline-sm text-[28px] text-[#122d1a] font-bold">68.4%</div>
            <div className="font-lead text-[15px] text-[#7d5712] font-medium mt-1">Repeat Purchase</div>
            <p className="font-body-sm text-[13px] text-[#424842] mt-2">
              อัตราการกลับมาซื้อซ้ำของลูกค้าประจำและผู้ใช้สปาชั้นนำสูงที่สุดในหมวดเครื่องหอม
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#c2c8c0]/30 font-label-caps text-[11px] text-[#122d1a] font-bold">
            High Lifetime Value (LTV)
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-[#122d1a]/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[#122d1a] mb-3">
              <span className="material-symbols-outlined text-[24px]">hub</span>
              <span className="font-label-caps text-[11px] uppercase bg-[#122d1a]/10 px-2 py-0.5 rounded font-bold">
                Distribution
              </span>
            </div>
            <div className="font-headline-sm text-[28px] text-[#122d1a] font-bold">4 Channels</div>
            <div className="font-lead text-[15px] text-[#122d1a] font-medium mt-1">Omnichannel Synergy</div>
            <p className="font-body-sm text-[13px] text-[#424842] mt-2">
              Retail Stores, E-Commerce, Hospitality &amp; Spas, และ Tourist Destination Outlets
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#c2c8c0]/30 font-label-caps text-[11px] text-[#122d1a] font-bold">
            280+ Active Touchpoints
          </div>
        </div>
      </div>

      {/* Strategic Callout Banner */}
      <div className="bg-[#122d1a] text-white p-6 rounded-xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#28432f] flex items-center justify-center shrink-0 border border-[#91af96]/30">
            <span className="material-symbols-outlined text-[#ffddaf] text-[24px]">flag</span>
          </div>
          <div>
            <h3 className="font-headline-sm text-[20px] text-white font-bold">
              เข้าสู่การวิเคราะห์เชิงลึกของคณะกรรมการบริหาร (Board Analysis)
            </h3>
            <p className="text-[14px] text-[#afceb3] mt-0.5">
              เลือกสไลด์ 03 เพื่อดูรายละเอียด 3 กลิ่นยอดนิยม หรือ สไลด์ 04 เพื่อดูความเคลื่อนไหว 12 เดือน
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigateSlide('03-top-best-sellers')}
            className="px-4 py-2 rounded-lg bg-[#ffddaf] text-[#614000] font-bold text-xs hover:bg-[#f1be71] transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>ดู 03. Top Best Sellers</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
