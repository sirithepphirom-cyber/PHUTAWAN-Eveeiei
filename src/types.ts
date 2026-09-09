export type SlideId =
  | '01-executive-overview'
  | '02-sales-channel-mix'
  | '03-top-best-sellers'
  | '04-seasonality-trends'
  | '05-strategic-growth';

export interface SlideTab {
  id: SlideId;
  number: string;
  title: string;
  shortTitle: string;
}

export interface BestSellerProduct {
  id: string;
  rank: number;
  rankBadge: string;
  sku: string;
  nameEn: string;
  nameTh: string;
  sizeLabel: string;
  tagline: string;
  description: string;
  imageUrl: string;
  alt: string;
  revenue: number;
  revenueText: string;
  sharePercent: number;
  accentColor: string;
  progressColor: string;
  scentNotes: {
    top: string;
    heart: string;
    base: string;
  };
  keyHighlights: string[];
}

export interface FlavorContribution {
  name: string;
  thaiName: string;
  revenue: number;
  revenueText: string;
  sharePercent: number;
  color: string;
}

export interface MonthSalesData {
  month: string;
  monthEn: string;
  salesK: number;
  heightPercent: number;
  isPeak?: boolean;
  peakLabel?: string;
  peakTag?: string;
  isTrough?: boolean;
  notes?: string;
}

export interface StrategicTakeaway {
  pillarNum: string;
  title: string;
  metric: string;
  description: string;
  actionText: string;
  borderColor: string;
  iconName: string;
}
