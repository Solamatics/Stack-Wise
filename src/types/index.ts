export interface WaitlistFormData {
  name: string;
  email: string;
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  accentColor: string;
}

export interface PricingPlan {
  name: string;
  price: {
    ngn: number;
    usd: number;
  };
  originalPrice?: {
    ngn: number;
    usd: number;
  };
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaVariant: 'primary' | 'secondary';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}
