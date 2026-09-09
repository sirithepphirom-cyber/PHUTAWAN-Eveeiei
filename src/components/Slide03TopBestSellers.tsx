import React, { useState } from 'react';
import { BEST_SELLER_PRODUCTS, FLAVOR_CONTRIBUTIONS } from '../data/presentationData';
import { BestSellerProduct } from '../types';

interface Slide03Props {
  onSelectProduct: (product: BestSellerProduct) => void;
  onNavigateSlide: (slideId: '04-seasonality-trends') => void;
}

export const Slide03TopBestSellers: React.FC<Slide03Props> = ({
  onSelectProduct,
  onNavigateSlide,
}) => {
  const [activeFlavorHover, setActiveFlavorHover] = useState<string | null>(null);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-16 py-6 md:py-8 flex flex-col gap-6 md:gap-8 animate-fadeIn">
      {/* Top Third Rule: Category Eyebrow, Executive Assertion & Strategic Subtitle */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-[#c2c8c0]/40 pb-6">
        <div className="flex flex-col gap-1 max-w-4xl">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-[#ffddaf]/40 text-[#7d5712] font-label-caps text-[11px] uppercase tracking-wider font-bold">
              Slide 03 • Product Portfolio Architecture
            </span>
            <span className="text-[#737972] text-[11px]">•</span>
            <span className="font-label-caps text-[11px] uppercase text-[#424842] tracking-wider font-semibold">
              FY2026 Volume &amp; Revenue Analysis
            </span>
          </div>

          <h1 className="font-headline-lg text-[28px] sm:text-[34px] md:text-[40px] text-[#122d1a] tracking-tight mt-1 leading-tight">
            Top Best Sellers: กลิ่นยอดนิยมและส่วนแบ่งรายได้ตามผลิตภัณฑ์
          </h1>

          <p className="font-lead text-[16px] sm:text-[18px] text-[#424842] font-normal leading-relaxed mt-1">
            <span className="font-semibold text-[#122d1a]">Lavender 100ml</span> ครองแชมป์ยอดขายอันดับ 1 ตลอดทั้ง 4 ไตรมาส ร่วมกับ Dreamscent 50ml และ Lemongrass 100ml รวมขับเคลื่อนกว่า 80% ของรายได้ทั้งหมด
          </p>
        </div>

        {/* Quick C-Suite Metric Overview Bar */}
        <div className="flex items-center gap-4 bg-[#f5f3ee] p-3 sm:p-4 rounded-xl shadow-sm self-start lg:self-end border border-[#c2c8c0]/30 shrink-0">
          <div className="flex flex-col px-2 sm:px-3">
            <span className="font-label-caps text-[11px] text-[#424842] uppercase tracking-wider">
              Top 3 Concentration
            </span>
            <span className="font-headline-sm text-[24px] sm:text-[28px] text-[#122d1a] font-bold">
              80.2%
            </span>
          </div>
          <div className="h-8 w-px bg-[#c2c8c0]/50"></div>
          <div className="flex flex-col px-2 sm:px-3">
            <span className="font-label-caps text-[11px] text-[#7d5712] uppercase tracking-wider">
              Hero SKU Volume
            </span>
            <span className="font-headline-sm text-[24px] sm:text-[28px] text-[#7d5712] font-bold">
              ฿1.48M+
            </span>
          </div>
        </div>
      </div>

      {/* 3 Hero Product Spotlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {BEST_SELLER_PRODUCTS.map((product) => {
          return (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="flex flex-col bg-white rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 relative group overflow-hidden border border-[#122d1a]/5 cursor-pointer hover:-translate-y-1"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10 opacity-60"
                style={{ backgroundColor: product.accentColor + '15' }}
              ></div>

              {/* Header & Rank Badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-label-caps text-[11px] uppercase font-bold tracking-wider ${
                    product.rank === 1
                      ? 'bg-[#ffddaf]/50 text-[#614000]'
                      : product.rank === 2
                      ? 'bg-[#e4e2dd] text-[#424842]'
                      : 'bg-[#d7eaaa]/60 text-[#3d4c1c]'
                  }`}
                >
                  {product.rankBadge}
                </span>
                <span className="font-label-caps text-[11px] text-[#424842] font-semibold">
                  {product.sku}
                </span>
              </div>

              {/* Product Presentation Viewport */}
              <div className="relative w-full h-72 bg-[#f5f3ee] rounded-lg p-4 flex items-center justify-center overflow-hidden mb-4 group-hover:bg-[#f0eee9] transition-colors duration-200 border border-[#c2c8c0]/20">
                <img
                  alt={product.alt}
                  src={product.imageUrl}
                  className="h-full w-auto object-contain drop-shadow-[0_12px_24px_rgba(18,45,26,0.18)] transform group-hover:scale-105 transition-transform duration-300 ease-out"
                />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-md shadow-sm border border-black/5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7d5712]"></span>
                  <span className="font-label-caps text-[11px] text-[#122d1a] uppercase font-bold">
                    {product.sizeLabel}
                  </span>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white px-2 py-1 rounded text-[11px] flex items-center gap-1 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-[14px]">visibility</span>
                  <span>ดูรายละเอียด</span>
                </div>
              </div>

              {/* Meta & Pricing Structure */}
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <h2 className="font-headline-md text-[26px] text-[#122d1a] font-semibold flex items-baseline gap-2">
                      {product.nameEn}
                      <span className="text-[16px] font-normal text-[#424842]">
                        ({product.nameTh})
                      </span>
                    </h2>
                  </div>
                  <p className="font-body-sm text-[14px] text-[#424842] line-clamp-2 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Revenue Strip & Stat */}
                <div className="bg-[#f5f3ee] rounded-lg p-4 flex flex-col gap-1.5 border border-[#c2c8c0]/20">
                  <div className="flex items-baseline justify-between">
                    <span className="font-label-caps text-[11px] text-[#424842] uppercase font-medium">
                      FY2026 Net Contribution
                    </span>
                    <span
                      className={`font-label-caps text-[11px] font-bold px-2 py-0.5 rounded ${
                        product.rank === 1
                          ? 'text-[#122d1a] bg-[#cbebce]/70'
                          : product.rank === 2
                          ? 'text-[#7d5712] bg-[#ffddaf]/60'
                          : 'text-[#1e2b00] bg-[#d7eaaa]/70'
                      }`}
                    >
                      {product.sharePercent}% Share
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1.5">
                    <span className="font-kpi-stat text-[32px] md:text-[36px] text-[#122d1a] font-bold tracking-tight">
                      {product.revenueText}
                    </span>
                    <span className="font-body-sm text-[13px] text-[#424842] font-semibold">
                      THB
                    </span>
                  </div>

                  {/* Progress Share Bar */}
                  <div className="w-full bg-[#eae8e3] h-2 rounded-full overflow-hidden mt-1">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ease-out ${
                        product.rank === 1
                          ? 'bg-[#122d1a]'
                          : product.rank === 2
                          ? 'bg-[#7d5712]'
                          : 'bg-[#334213]'
                      }`}
                      style={{ width: `${product.sharePercent}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Strip: Other Flavors Comparison & Strategic Portfolio Insight */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Portfolio Revenue Distribution Bar & Secondary Fragrances */}
        <div className="lg:col-span-7 bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-[#122d1a]/5 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-[#c2c8c0]/30">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#122d1a] text-[20px]">
                pie_chart
              </span>
              <span className="font-label-caps text-[11px] uppercase text-[#122d1a] tracking-wider font-bold">
                Flavors Contribution Breakdown
              </span>
            </div>
            <span className="font-label-sm text-[12px] text-[#424842] font-medium">
              Top 5 Scent Analysis
            </span>
          </div>

          {/* Visual Proportion Bar */}
          <div className="my-4">
            <div className="w-full h-4 rounded-full flex overflow-hidden shadow-inner bg-[#eae8e3]">
              {FLAVOR_CONTRIBUTIONS.map((flavor) => (
                <div
                  key={flavor.name}
                  onMouseEnter={() => setActiveFlavorHover(flavor.name)}
                  onMouseLeave={() => setActiveFlavorHover(null)}
                  className={`h-full transition-all duration-200 cursor-pointer ${flavor.color} ${
                    activeFlavorHover === flavor.name ? 'brightness-110 scale-y-110' : ''
                  }`}
                  style={{ width: `${flavor.sharePercent}%` }}
                  title={`${flavor.name} (${flavor.thaiName}): ${flavor.sharePercent}% (฿${flavor.revenue.toLocaleString()})`}
                ></div>
              ))}
            </div>

            {/* Flavor legend labels under progress bar */}
            <div className="flex items-center justify-between text-[11px] text-[#737972] mt-2 font-mono px-1">
              <span>Lavender (42%)</span>
              <span>Dreamscent (23%)</span>
              <span>Lemongrass (15%)</span>
              <span>Rose (11%)</span>
              <span>Vanilla (9%)</span>
            </div>
          </div>

          {/* Secondary Fragrances Grid Rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {/* Rose 100ml */}
            <div
              className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                activeFlavorHover === 'Rose'
                  ? 'bg-[#eae8e3] border-[#737972]'
                  : 'bg-[#f5f3ee] border-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#c2c8c0]"></div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-[12px] text-[#1b1c19] font-bold">
                    Rose 100ml
                  </span>
                  <span className="font-body-sm text-[13px] text-[#424842]">
                    กุหลาบโรแมนติก
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="font-label-sm text-[13px] font-bold text-[#122d1a]">
                  ฿208,000
                </div>
                <div className="font-label-caps text-[10px] text-[#424842] font-semibold">
                  11% Share
                </div>
              </div>
            </div>

            {/* Vanilla 100ml */}
            <div
              className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                activeFlavorHover === 'Vanilla'
                  ? 'bg-[#eae8e3] border-[#737972]'
                  : 'bg-[#f5f3ee] border-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#dbdad5]"></div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-[12px] text-[#1b1c19] font-bold">
                    Vanilla 100ml
                  </span>
                  <span className="font-body-sm text-[13px] text-[#424842]">
                    วานิลลาอบอุ่น
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="font-label-sm text-[13px] font-bold text-[#122d1a]">
                  ฿159,000
                </div>
                <div className="font-label-caps text-[10px] text-[#424842] font-semibold">
                  9% Share
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Executive Takeaway Card */}
        <div className="lg:col-span-5 bg-[#122d1a] text-white p-5 sm:p-6 rounded-xl shadow-md flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#28432f] rounded-full blur-3xl pointer-events-none opacity-40"></div>

          <div className="flex items-center gap-2 mb-3 text-[#ffddaf]">
            <span className="material-symbols-outlined text-[20px]">lightbulb</span>
            <span className="font-label-caps text-[11px] uppercase tracking-widest font-bold">
              Product Strategic Insight
            </span>
          </div>

          <div className="flex flex-col gap-1 my-auto z-10">
            <div className="flex items-baseline gap-2">
              <span className="font-display-hero-mobile text-[40px] font-bold text-[#cbebce]">
                76%
              </span>
              <span className="font-headline-sm text-[22px] text-white font-light">
                Dominance
              </span>
            </div>
            <p className="font-body-lg text-[15px] sm:text-[16px] text-[#f2f1ec] leading-relaxed">
              สัดส่วนยอดขายขนาด{' '}
              <span className="font-bold text-[#ffddaf]">
                100ml รวมคิดเป็นกว่า 76% ของมูลค่ารายได้ทั้งหมด
              </span>{' '}
              สะท้อนว่าฐานลูกค้าของภูตะวันมีพฤติกรรมยอมรับขนาดใหญ่ที่คุ้มค่ากว่าอย่างชัดเจน
            </p>
          </div>

          <div
            onClick={() => onNavigateSlide('04-seasonality-trends')}
            className="mt-4 pt-3 border-t border-[#28432f] flex items-center justify-between text-[#91af96] hover:text-[#ffddaf] cursor-pointer z-10 transition-colors group"
          >
            <span className="font-label-sm text-[12px] group-hover:underline">
              คำแนะนำ: มุ่งเน้นชุด Refill &amp; 100ml Bundle ในปี 2026
            </span>
            <span className="material-symbols-outlined text-[18px] text-[#ffddaf] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
