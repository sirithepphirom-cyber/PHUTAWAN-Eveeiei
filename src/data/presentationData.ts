import { SlideTab, BestSellerProduct, FlavorContribution, MonthSalesData, StrategicTakeaway } from '../types';

export const SLIDE_TABS: SlideTab[] = [
  { id: '01-executive-overview', number: '01', title: '01. Executive Overview', shortTitle: 'Overview' },
  { id: '02-sales-channel-mix', number: '02', title: '02. Sales & Channel Mix', shortTitle: 'Channel Mix' },
  { id: '03-top-best-sellers', number: '03', title: '03. Top Best Sellers', shortTitle: 'Top Best Sellers' },
  { id: '04-seasonality-trends', number: '04', title: '04. Seasonality & Trends', shortTitle: 'Seasonality & Trends' },
  { id: '05-strategic-growth', number: '05', title: '05. Strategic Growth', shortTitle: 'Strategic Growth' },
];

export const PHUTAWAN_LOGO_URL =
  'https://lh3.googleusercontent.com/aida/AEtjO1XKHxY5qCBbRLo28mxQ77ZUiGSozbKDlmIfyrbEfwc0eY1T19KLsHVbapGk_6k6CZ7LLzMfP5_bqWLsNzfvuPa0l24ECzqbnxmFpl3eYh13xR8MAYTOIE3jASHiqBPQrySFSSyHyhBcuT5tPm9Sjwx2tsCXJWPJdnJJzF8O8y9ONfzh1htBqWwnk98T99dATy31z7JH71X7KO47fFIUhKObRlmsTM0Vn9wy3FsSmlAnysh3SkFR32Q5eT8qGVZl3U2FwBdaUor9gh8';

export const BEST_SELLER_PRODUCTS: BestSellerProduct[] = [
  {
    id: 'lavender-100',
    rank: 1,
    rankBadge: '🏆 อันดับ 1 (Best Seller)',
    sku: 'SKU: RD-LAV-100',
    nameEn: 'Lavender',
    nameTh: 'ลาเวนเดอร์',
    sizeLabel: '100ml Premium Glass',
    tagline: 'กลิ่นยอดนิยมตลอดกาล ให้มิติความผ่อนคลายล้ำลึก',
    description:
      'กลิ่นยอดนิยมตลอดกาล ให้มิติความผ่อนคลายล้ำลึก อัตราการซื้อซ้ำ (Repeat Purchase Rate) สูงที่สุดทั้งสาขา Retail และ Official Store',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC9r2ReiD38-NSH80FqAUasIf6n_9Gi_Fw6PjyjpxvsGpMSsxIv-QP1b-pTCXZqQg-VlrO9GZIt1NWx8WRPTa06MJ_ddiLvTJ7gFq8YAVpAizM6FF7pgrn5nmm8i43JcjvJ0194UIQGJFTdblHESu3oDroqBtOCWTWKYlTkr9FbSzNXX8tl0zxR4kMdkcDk4D6_9tkXO9DebeAytut25SYyd57kRCPbsMyAMnGVnAhd8oCknQ3DjoMWGU75dDyEWBOYZB4',
    alt: 'Phutawan Reed Diffuser 100ml Lavender with presentation box',
    revenue: 778000,
    revenueText: '฿778,000+',
    sharePercent: 42,
    accentColor: '#122d1a',
    progressColor: 'bg-primary',
    scentNotes: {
      top: 'French Lavender Buds, Bergamot Zest',
      heart: 'English Chamomile, Clary Sage',
      base: 'Cedarwood, Amber Balsam',
    },
    keyHighlights: [
      'อัตราการซื้อซ้ำ (Repeat Purchase) สูงสุด 68.4%',
      'เหมาะสำหรับห้องนอน พื้นที่พักผ่อน และสปาคลินิก',
      'ขวดแก้ว Amber Glass รีไซเคิล 100% พร้อมก้านหวายธรรมชาติ',
    ],
  },
  {
    id: 'dreamscent-50',
    rank: 2,
    rankBadge: '⭐ อันดับ 2 (Gift & Entry)',
    sku: 'SKU: RD-DRM-050',
    nameEn: 'Dreamscent',
    nameTh: 'ดรีมเซนต์',
    sizeLabel: '50ml Entry Size • ฿290',
    tagline: 'ไซส์ 50ml ที่ตอบโจทย์การทดลองกลิ่นแรกเริ่ม ราคาเข้าถึงง่าย',
    description:
      'ไซส์ 50ml ที่ตอบโจทย์การทดลองกลิ่นแรกเริ่ม ราคาเข้าถึงง่าย (290 บาท) นิยมสูงสุดเป็นของขวัญช่วงเทศกาลปีใหม่และโอกาสพิเศษ',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBOWWua5YP_jGmmyPjw1Fw4xsLfAP9ZQhE91iC5DVT480s7IlSCUOo2Eih0Gq67UKq_RP0xGoqkdhcvWwsAqBzn6iMZwXf-t2M4dZEIWM1jgfY0CauT0LeSi6_59nYvo_yf95bCisvAXaPsPvCXgpiBuRLKGB8qWSTMvHV85QvV7VDA2QN1zAjob8hVYn4pOQDzjRGNyHS7l3vXf0pw5k-yQmrXLuB5xvy8mDfGmNOaLBmpXfs3y6bnjHzcUd4HnSAOtWc',
    alt: 'Phutawan Reed Diffuser 50ml Dreamscent with presentation box',
    revenue: 435000,
    revenueText: '฿435,000+',
    sharePercent: 23,
    accentColor: '#7d5712',
    progressColor: 'bg-secondary',
    scentNotes: {
      top: 'White Peach, Morning Dew Grass',
      heart: 'Water Lily, Soft Jasmine Petals',
      base: 'Sheer Musk, Light Sandalwood',
    },
    keyHighlights: [
      'ยอดขายพุ่งสูงที่สุดในเทศกาลปีใหม่ (Q4 Gifting Index +118%)',
      'ขนาด 50ml ราคา 290 บาท เป็นจุดดึงดูด New Buyers ยอดเยี่ยม',
      'ติดอันดับ Top Wishlist ของขวัญบนโซเชียลมีเดีย',
    ],
  },
  {
    id: 'lemongrass-100',
    rank: 3,
    rankBadge: '🌿 อันดับ 3 (Thai Aroma)',
    sku: 'SKU: RD-LMG-100',
    nameEn: 'Lemongrass',
    nameTh: 'ตะไคร้หอม',
    sizeLabel: '100ml Heritage Formula',
    tagline: 'อัตลักษณ์กลิ่นสปาไทยระดับสากล',
    description:
      'อัตลักษณ์กลิ่นสปาไทยระดับสากล ครองส่วนแบ่งหลักในสาขาหน้าร้านหัวเมืองท่องเที่ยวและกลุ่มลูกค้าต่างชาติที่แสวงหา Thai Wellness',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCrWa8gqVkgnNHXtqKHNN6uQaaiG9G3UXk1SpilM1sHkccMXdnBPmUGO7CWP9AJGTlb4v7W52lYcROxZVJSrX1xXnMKeKDBLEzEAEUTQjIlzTW1njExFKjMRLfGGBMLnmFZiERnvoNkR4SBF-rzBWyzY2ALgRsmG4uZRbAgYO-Nd9YLwxooSIzwcRh-gKoU_uvYX2_VnwPPIEScyRR7iL5KxoxpukRrvPwpCoRcaL5KmmKv6PT-K0KKg8ElEmcaZsu1820',
    alt: 'Phutawan Reed Diffuser 100ml Lemongrass with presentation box',
    revenue: 272000,
    revenueText: '฿272,000+',
    sharePercent: 15,
    accentColor: '#1e2b00',
    progressColor: 'bg-tertiary-container',
    scentNotes: {
      top: 'Fresh Siamese Lemongrass, Lime Leaf',
      heart: 'Wild Mint, Ginger Blossom',
      base: 'Eucalyptus, Green Bamboo',
    },
    keyHighlights: [
      'ครองสัดส่วนยอดขายนักท่องเที่ยวต่างชาติ (Tourist Purchase) 82%',
      'สูตรน้ำมันหอมระเหยธรรมชาติ ช่วยดับกลิ่นอับและไล่ยุงอย่างอ่อนโยน',
      'เป็นกลิ่นเอกลักษณ์ในโรงแรมชั้นนำและสปาบูติก',
    ],
  },
];

export const FLAVOR_CONTRIBUTIONS: FlavorContribution[] = [
  { name: 'Lavender', thaiName: 'ลาเวนเดอร์', revenue: 778000, revenueText: '฿778,000', sharePercent: 42, color: 'bg-primary' },
  { name: 'Dreamscent', thaiName: 'ดรีมเซนต์', revenue: 435000, revenueText: '฿435,000', sharePercent: 23, color: 'bg-secondary-container' },
  { name: 'Lemongrass', thaiName: 'ตะไคร้หอม', revenue: 272000, revenueText: '฿272,000', sharePercent: 15, color: 'bg-tertiary-fixed-dim' },
  { name: 'Rose', thaiName: 'กุหลาบโรแมนติก', revenue: 208000, revenueText: '฿208,000', sharePercent: 11, color: 'bg-outline-variant' },
  { name: 'Vanilla', thaiName: 'วานิลลาอบอุ่น', revenue: 159000, revenueText: '฿159,000', sharePercent: 9, color: 'bg-surface-dim' },
];

export const MONTHLY_SALES_DATA: MonthSalesData[] = [
  { month: 'ม.ค.', monthEn: 'Jan', salesK: 132, heightPercent: 60, notes: 'เริ่มปีเปิดขวดใหม่ รับต้นปี' },
  { month: 'ก.พ.', monthEn: 'Feb', salesK: 148, heightPercent: 67, notes: 'เทศกาลวาเลนไทน์ กลิ่นกุหลาบพุ่ง' },
  { month: 'มี.ค.', monthEn: 'Mar', salesK: 168, heightPercent: 76, notes: 'เตรียมรับแคมเปญร้อน Summer' },
  {
    month: 'เม.ย.',
    monthEn: 'Apr',
    salesK: 205,
    heightPercent: 93,
    isPeak: true,
    peakLabel: '🔥 PEAK 1 • ฿205k',
    peakTag: 'Peak 1',
    notes: 'เปิดตัว Botanical Collection & สงกรานต์ ซื้อของฝากเดินทางสูงขึ้น 38%',
  },
  { month: 'พ.ค.', monthEn: 'May', salesK: 178, heightPercent: 81, notes: 'ต่อเนื่องจากเทศกาลหน้าร้อน' },
  { month: 'มิ.ย.', monthEn: 'Jun', salesK: 146, heightPercent: 66, notes: 'เข้าสู่ช่วงกลางปี' },
  { month: 'ก.ค.', monthEn: 'Jul', salesK: 138, heightPercent: 62, notes: 'เริ่มฤดูฝน เข้าสู่ช่วงซบเซา' },
  { month: 'ส.ค.', monthEn: 'Aug', salesK: 141, heightPercent: 64, notes: 'วันแม่แห่งชาติ กระตุ้นยอดของขวัญ' },
  { month: 'ก.ย.', monthEn: 'Sep', salesK: 133, heightPercent: 60, notes: 'ฝนตกชุก ยอดเปิดขวดใหม่ชะลอตัว' },
  { month: 'ต.ค.', monthEn: 'Oct', salesK: 128, heightPercent: 58, isTrough: true, notes: 'จุดต่ำสุดประจำปี เตรียมบุก Q4' },
  {
    month: 'พ.ย.',
    monthEn: 'Nov',
    salesK: 170,
    heightPercent: 77,
    isPeak: true,
    peakLabel: '🔥 PEAK 2 • ฿170k',
    peakTag: 'Peak 2',
    notes: 'Double 11 Mega Sale และเปิดจอง Holiday Gifting Sets ล่วงหน้า',
  },
  { month: 'ธ.ค.', monthEn: 'Dec', salesK: 166, heightPercent: 75, notes: 'เทศกาลปีใหม่และของขวัญองค์กร ยอด 50ml พุ่ง' },
];

export const EDITORIAL_SUNSHINE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDIu2uyzN-RtU_P7UkvU6QicApdv5JPRBDsTApgg_tOJwb8URXEhh3FPBYYr3KetZJ4WEh8jOzv7xpch9kRHMMlo9j6cFvAO0mRi8W8W_m0BsgN_uDf1KD8Cl5VpWvyY6UJmjENxL3QzlzlHXV9l68n4ZQfbgwZTbqoWskHThVqCQWI-GWE-CdwCPQNgwRyx_lpAhsaQzbUxt5dRj6fftr-T4itDBgycznInkm-EI6yz-OMY_9S95s5ow';

export const STRATEGIC_TAKEAWAYS: StrategicTakeaway[] = [
  {
    pillarNum: '01. Inventory Rhythm',
    title: 'Q2 & Q4 คือช่วงสร้างรายได้หลัก คิดเป็นเกินครึ่งหนึ่งของยอดทั้งปี',
    metric: '53.6%',
    description:
      'ฝ่ายจัดซื้อต้องทำการจองโควตาแก้วสีชา (Amber Glass Bottles) และหัวน้ำหอมนำเข้าล่วงหน้าอย่างน้อย 60 วัน เพื่อป้องกันสถานการณ์ Stockout ระหว่างสงกรานต์และเทศกาลปีใหม่',
    actionText: 'Safety Stock +40% ในเดือน มี.ค. และ ต.ค.',
    borderColor: 'border-l-secondary',
    iconName: 'priority_high',
  },
  {
    pillarNum: '02. Slowdown Defense',
    title: 'Q3 (ก.ค. - ต.ค.) เป็นช่วง Low Season ต้องกระตุ้นด้วยชุดรีฟิล',
    metric: '฿128k',
    description:
      'ช่วงฝนตกยอดการเปิดขวดใหม่ในครัวเรือนชะลอตัว แก้ไขโดยจัดโปรโมชัน "Refill Bundle Plus" (ซื้อก้านไม้คู่ถุงเติมลด 20%) เพื่อเร่งรอบหมุนเวียนสินค้าในบ้านลูกค้าประจำ',
    actionText: 'เป้ากระตุ้นยอดขาย Q3 เพิ่มขึ้น ฿85,000',
    borderColor: 'border-l-outline',
    iconName: 'autorenew',
  },
  {
    pillarNum: '03. Omnichannel Synergy',
    title: 'ออนไลน์เติบโตสม่ำเสมอในทุกเทศกาล Double-Day E-Commerce',
    metric: '+28% YoY',
    description:
      'Shopee, Lazada, และ TikTok Shop แสดงอัตราการพุ่งของยอดขายตรงกับรอบ Double-Day (8.8, 9.9, 11.11) อย่างมีนัยสำคัญ สามารถใช้ Flash Sales ชดเชยยอดออฟไลน์ที่ซบเซาได้ทันที',
    actionText: 'ผูกแคมเปญ Early Bird Gift Sets ตั้งแต่ 11.11',
    borderColor: 'border-l-primary',
    iconName: 'shopping_bag',
  },
];
