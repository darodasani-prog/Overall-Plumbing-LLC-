export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  priceIndicator?: string;
  category: 'emergency' | 'standard' | 'commercial';
}

export interface Review {
  id: string;
  author: string;
  location: string;
  text: string;
  source: 'Google' | 'Yelp' | 'BBB' | 'HomeAdvisor';
  bubblesColor?: string;
}

export interface Achievement {
  label: string;
  value: string;
  suffix: string;
}
