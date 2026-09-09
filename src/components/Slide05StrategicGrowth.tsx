import React from 'react';

interface Slide05Props {
  onNavigateSlide: (slideId: '04-seasonality-trends') => void;
}

export const Slide05StrategicGrowth: React.FC<Slide05Props> = ({ onNavigateSlide }) => {
  const initiatives = [
    {
      badge: '01. Product Innovation',
      title: 'เปิดตัวถุงเติม Refill Pouch 250ml & Eco-Pouch',
      impact: '+฿350k Revenue',
      description:
        'ลดการใช้บรรจุภัณฑ์ขวดแก้วลง 60% ตอบโจทย์ลูกค้ารักษ์โลก และเพิ่ม Margin กำไรสุทธิจากต้นทุน Packaging ที่ลดลง',
      timeline: 'Q2 2026 Rollout',
      icon: 'recycling',
    },
    {
      badge: '02. Tourism & Export',
      title: 'ขยายจุดวางจำหน่าย King Power และ Premium Spas',
      impact: '+45% Tourist Sales',
      description:
        'ผลักดันกลิ่น Lemongrass และ Siam Jasmine เป็นของฝากอันดับ 1 สำหรับนักท่องเที่ยวที่เดินทางกลับจากไทย',
      timeline: 'Q3 2026 Deployment',
      icon: 'flight',
    },
    {
      badge: '03. Digital Loyalty',
      title: 'ระบบสมาชิก Subscription "Refill Routine"',
      impact: '75% Retention Rate',
      description:
        'ส่งก้านหวายใหม่และหัวน้ำหอมเติมตรงถึงบ้านทุกๆ 45 วัน สร้างรายได้ประจำ (Recurring Revenue) ที่สม่ำเสมอ',
      timeline: 'Q4 2026 Launch',
      icon: 'loyalty',
    },
  ];

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-16 py-6 md:py-8 flex flex-col gap-6 md:gap-8 animate-fadeIn">
      {/* Top Third Rule */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-[#c2c8c0]/40 pb-6">
        <div className="flex flex-col gap-1 max-w-4xl">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-[#1e2b00]/15 text-[#1e2b00] font-label-caps text-[11px] uppercase tracking-wider font-bold">
              Slide 05 • Strategic Growth
            </span>
            <span className="text-[#737972] text-[11px]">•</span>
            <span className="font-label-caps text-[11px] uppercase text-[#424842] tracking-wider font-semibold">
              FY2026-FY2027 Strategic Roadmap
            </span>
          </div>

          <h1 className="font-headline-lg text-[28px] sm:text-[34px] md:text-[40px] text-[#122d1a] tracking-tight mt-1 leading-tight">
            แผนกลยุทธ์การเติบโต: ยกระดับสู่ผู้นำเครื่องหอมออร์แกนิกสากล
          </h1>

          <p className="font-lead text-[16px] sm:text-[18px] text-[#424842] font-normal leading-relaxed mt-1">
            มุ่งเน้น 3 แกนขับเคลื่อนหลัก: สินค้ารีฟิลเพื่อความยั่งยืน, การขยายช่องทางท่องเที่ยวระดับสากล, และโมเดลบริการสมัครสมาชิกเพื่อเพิ่ม Customer Lifetime Value
          </p>
        </div>

        <div className="flex items-center gap-4 bg-[#f5f3ee] p-3 sm:p-4 rounded-xl shadow-sm border border-[#c2c8c0]/30 shrink-0 self-start lg:self-end">
          <div className="flex flex-col px-2 sm:px-3">
            <span className="font-label-caps text-[11px] text-[#424842] uppercase tracking-wider">
              FY2027 Target
            </span>
            <span className="font-headline-sm text-[24px] sm:text-[28px] text-[#122d1a] font-bold">
              ฿2.60M
            </span>
          </div>
          <div className="h-8 w-px bg-[#c2c8c0]/50"></div>
          <div className="flex flex-col px-2 sm:px-3">
            <span className="font-label-caps text-[11px] text-[#7d5712] uppercase tracking-wider">
              ESG Score Target
            </span>
            <span className="font-headline-sm text-[24px] sm:text-[28px] text-[#7d5712] font-bold">
              95/100
            </span>
          </div>
        </div>
      </div>

      {/* 3 Strategic Initiatives */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {initiatives.map((item) => (
          <div
            key={item.badge}
            className="bg-white rounded-xl p-6 shadow-sm border border-[#122d1a]/5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-label-caps text-[11px] uppercase bg-[#ffddaf]/40 text-[#614000] px-2.5 py-1 rounded-full font-bold">
                  {item.badge}
                </span>
                <span className="w-9 h-9 rounded-full bg-[#f5f3ee] flex items-center justify-center text-[#122d1a]">
                  <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                </span>
              </div>

              <h3 className="font-headline-sm text-[20px] text-[#122d1a] font-bold leading-snug">
                {item.title}
              </h3>

              <div className="my-3 py-1.5 px-3 bg-[#cbebce]/50 rounded-lg inline-block font-label-caps text-[11px] text-[#05200f] font-bold">
                {item.impact}
              </div>

              <p className="font-body-sm text-[13px] text-[#424842] leading-relaxed mt-2">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-[#c2c8c0]/30 flex items-center justify-between font-label-sm text-[12px] text-[#737972]">
              <span>ระยะเวลาดำเนินงาน</span>
              <span className="font-bold text-[#122d1a]">{item.timeline}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center bg-[#f5f3ee] p-4 rounded-xl border border-[#c2c8c0]/40">
        <button
          onClick={() => onNavigateSlide('04-seasonality-trends')}
          className="px-4 py-2 rounded-lg bg-white text-[#122d1a] border border-[#c2c8c0] font-semibold text-xs hover:bg-[#eae8e3] transition-colors cursor-pointer flex items-center gap-1.5"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          <span>ย้อนกลับไป 04. Seasonality &amp; Trends</span>
        </button>

        <span className="text-xs text-[#424842] font-medium hidden sm:inline">
          ภูตะวัน Natural Reed Diffuser • แผนปฏิบัติการปี 2026-2027
        </span>
      </div>
    </div>
  );
};
