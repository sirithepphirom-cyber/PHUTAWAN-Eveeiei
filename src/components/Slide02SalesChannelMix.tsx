import React from 'react';

interface Slide02Props {
  onNavigateSlide: (slideId: '03-top-best-sellers') => void;
}

export const Slide02SalesChannelMix: React.FC<Slide02Props> = ({ onNavigateSlide }) => {
  const channels = [
    {
      name: 'Retail Stores & Concept Boutiques',
      thaiName: 'สาขาหน้าร้านภูตะวัน & ห้างสรรพสินค้า',
      share: '45%',
      revenue: '฿832,500',
      growth: '+18.4% YoY',
      color: 'bg-[#122d1a]',
      icon: 'storefront',
      driver: 'การทดลองดมกลิ่นจริง ณ จุดขาย และการแนะนำของผู้เชี่ยวชาญ',
    },
    {
      name: 'E-Commerce & Social Commerce',
      thaiName: 'Shopee, Lazada, TikTok Shop, Web',
      share: '30%',
      revenue: '฿555,000',
      growth: '+48.2% YoY',
      color: 'bg-[#7d5712]',
      icon: 'shopping_bag',
      driver: 'การซื้อซ้ำ Refill และแรงส่งจาก Double-Day Mega Sales',
    },
    {
      name: 'Hospitality & Luxury Wellness Spas',
      thaiName: 'โรงแรมบูติกและสปาพาร์ทเนอร์',
      share: '15%',
      revenue: '฿277,500',
      growth: '+24.0% YoY',
      color: 'bg-[#334213]',
      icon: 'spa',
      driver: 'ความต้องการกลิ่น Lemongrass & Lavender ในการสร้าง Signature Scent',
    },
    {
      name: 'Export & Tourist Destination Hubs',
      thaiName: 'จุดจำหน่ายสนามบินและเมืองท่องเที่ยว',
      share: '10%',
      revenue: '฿185,000',
      growth: '+31.5% YoY',
      color: 'bg-[#737972]',
      icon: 'flight_takeoff',
      driver: 'ของฝากพรีเมียมจากไทยสำหรับนักท่องเที่ยวเอเชียและยุโรป',
    },
  ];

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-16 py-6 md:py-8 flex flex-col gap-6 md:gap-8 animate-fadeIn">
      {/* Top Third Rule */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-[#c2c8c0]/40 pb-6">
        <div className="flex flex-col gap-1 max-w-4xl">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-[#7d5712]/15 text-[#7d5712] font-label-caps text-[11px] uppercase tracking-wider font-bold">
              Slide 02 • Channel Mix
            </span>
            <span className="text-[#737972] text-[11px]">•</span>
            <span className="font-label-caps text-[11px] uppercase text-[#424842] tracking-wider font-semibold">
              Omnichannel Architecture &amp; Penetration
            </span>
          </div>

          <h1 className="font-headline-lg text-[28px] sm:text-[34px] md:text-[40px] text-[#122d1a] tracking-tight mt-1 leading-tight">
            โครงสร้างช่องทางจำหน่าย: หน้าร้านผสานออนไลน์ ดันยอดโตคู่ขนาน
          </h1>

          <p className="font-lead text-[16px] sm:text-[18px] text-[#424842] font-normal leading-relaxed mt-1">
            Retail Stores ยังคงเป็นฐานสร้าง Brand Experience หลัก (45%) ในขณะที่ E-Commerce เติบโตอย่างก้าวกระโดด (+48.2%) จากพฤติกรรมซื้อซ้ำ
          </p>
        </div>

        <div className="flex items-center gap-4 bg-[#f5f3ee] p-3 sm:p-4 rounded-xl shadow-sm border border-[#c2c8c0]/30 shrink-0 self-start lg:self-end">
          <div className="flex flex-col px-2 sm:px-3">
            <span className="font-label-caps text-[11px] text-[#424842] uppercase tracking-wider">
              Online Growth Rate
            </span>
            <span className="font-headline-sm text-[24px] sm:text-[28px] text-[#7d5712] font-bold">
              +48.2%
            </span>
          </div>
          <div className="h-8 w-px bg-[#c2c8c0]/50"></div>
          <div className="flex flex-col px-2 sm:px-3">
            <span className="font-label-caps text-[11px] text-[#122d1a] uppercase tracking-wider">
              Retail Share
            </span>
            <span className="font-headline-sm text-[24px] sm:text-[28px] text-[#122d1a] font-bold">
              45.0%
            </span>
          </div>
        </div>
      </div>

      {/* Channel Breakdown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {channels.map((ch) => (
          <div
            key={ch.name}
            className="bg-white rounded-xl p-5 shadow-sm border border-[#122d1a]/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#f5f3ee] flex items-center justify-center text-[#122d1a]">
                  <span className="material-symbols-outlined text-[22px]">{ch.icon}</span>
                </div>
                <span className="font-headline-sm text-[24px] font-bold text-[#122d1a]">
                  {ch.share}
                </span>
              </div>

              <h3 className="font-label-sm text-[13px] text-[#122d1a] font-bold leading-snug">
                {ch.name}
              </h3>
              <div className="font-body-sm text-[12px] text-[#737972] mt-0.5">{ch.thaiName}</div>

              <div className="my-3 py-2 px-3 bg-[#f5f3ee] rounded-lg flex items-center justify-between">
                <span className="text-[11px] text-[#424842] font-semibold">รายได้</span>
                <span className="font-mono text-[13px] font-bold text-[#122d1a]">{ch.revenue}</span>
              </div>

              <p className="font-body-sm text-[12px] text-[#424842] leading-relaxed">
                {ch.driver}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#c2c8c0]/30 flex items-center justify-between text-[11px]">
              <span className="text-[#424842]">อัตราเติบโต</span>
              <span className="font-bold text-[#7d5712]">{ch.growth}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation button */}
      <div className="flex justify-end">
        <button
          onClick={() => onNavigateSlide('03-top-best-sellers')}
          className="px-5 py-2.5 rounded-lg bg-[#122d1a] text-white font-bold text-xs hover:bg-[#28432f] transition-colors cursor-pointer flex items-center gap-2 shadow"
        >
          <span>ไปที่ 03. Top Best Sellers</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
