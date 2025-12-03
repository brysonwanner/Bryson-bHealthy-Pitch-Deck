export interface CoreValue {
  title: string;
  shortDef: string;
  fullDef: string;
  iconName: string;
}

export interface StatMetric {
  label: string;
  value: string;
  growth?: string;
  sub?: string;
}

export interface SocialPlatform {
  name: string;
  handle: string;
  url: string;
  icon: 'facebook' | 'instagram' | 'tiktok' | 'youtube';
  followers: string;
}

export interface Testimonial {
  author: string;
  text: string;
  date?: string;
  platform?: 'YouTube' | 'Facebook' | 'Instagram' | 'TikTok';
}