import React from 'react';
import { BestSellerProduct } from '../types';

interface ProductDetailModalProps {
  product: BestSellerProduct | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#fbf9f4] rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border border-[#122d1a]/10 relative overflow-hidden flex flex-col gap-5 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#eae8e3] text-[#424842] hover:bg-[#dbdad5] flex items-center justify-center transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Top Header */}
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-[#ffddaf]/50 text-[#614000] font-label-caps text-[11px] font-bold uppercase">
            {product.rankBadge}
          </span>
          <span className="font-mono text-xs text-[#737972] font-semibold">{product.sku}</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
          <div className="sm:col-span-5 bg-white rounded-xl p-4 flex items-center justify-center border border-[#c2c8c0]/40 shadow-inner h-60">
            <img
              src={product.imageUrl}
              alt={product.alt}
              className="h-full w-auto object-contain drop-shadow-md"
            />
          </div>

          <div className="sm:col-span-7 flex flex-col gap-2">
            <h2 className="font-headline-md text-[28px] text-[#122d1a] font-bold leading-tight">
              {product.nameEn}{' '}
              <span className="text-[20px] font-normal text-[#424842]">({product.nameTh})</span>
            </h2>
            <div className="font-label-caps text-[12px] text-[#7d5712] uppercase font-bold">
              {product.sizeLabel}
            </div>
            <p className="font-body-sm text-[14px] text-[#424842] leading-relaxed mt-1">
              {product.description}
            </p>

            <div className="bg-[#f5f3ee] p-3 rounded-xl border border-[#c2c8c0]/30 mt-2 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#737972] tracking-wider block">
                  FY2026 Net Contribution
                </span>
                <span className="font-headline-sm text-[22px] font-bold text-[#122d1a]">
                  {product.revenueText} THB
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#cbebce] text-[#05200f] font-bold text-xs">
                {product.sharePercent}% Category Share
              </span>
            </div>
          </div>
        </div>

        {/* Olfactory Pyramid (Notes) */}
        <div className="bg-white rounded-xl p-4 border border-[#c2c8c0]/40">
          <div className="flex items-center gap-2 mb-3 text-[#122d1a]">
            <span className="material-symbols-outlined text-[18px]">local_florist</span>
            <span className="font-label-caps text-[11px] uppercase tracking-wider font-bold">
              Olfactory Scent Pyramid (โน้ตกลิ่น)
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-[#f5f3ee] p-2.5 rounded-lg">
              <span className="font-label-caps text-[10px] text-[#7d5712] font-bold uppercase block">
                Top Notes
              </span>
              <span className="font-body-sm text-[12px] text-[#1b1c19] mt-1 block">
                {product.scentNotes.top}
              </span>
            </div>
            <div className="bg-[#f5f3ee] p-2.5 rounded-lg">
              <span className="font-label-caps text-[10px] text-[#122d1a] font-bold uppercase block">
                Heart Notes
              </span>
              <span className="font-body-sm text-[12px] text-[#1b1c19] mt-1 block">
                {product.scentNotes.heart}
              </span>
            </div>
            <div className="bg-[#f5f3ee] p-2.5 rounded-lg">
              <span className="font-label-caps text-[10px] text-[#334213] font-bold uppercase block">
                Base Notes
              </span>
              <span className="font-body-sm text-[12px] text-[#1b1c19] mt-1 block">
                {product.scentNotes.base}
              </span>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="flex flex-col gap-2">
          <span className="font-label-caps text-[11px] text-[#424842] uppercase font-bold tracking-wider">
            Key Strategic Highlights
          </span>
          <ul className="space-y-1.5 text-[13px] text-[#1b1c19]">
            {product.keyHighlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#122d1a] text-[16px] mt-0.5 shrink-0">
                  check_circle
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
