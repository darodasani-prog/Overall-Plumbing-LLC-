import { Service, Review, Achievement } from './types';

export const SERVICES: Service[] = [
  {
    id: 'emergency',
    title: 'Emergency Plumbing',
    description: 'Burst pipes, floods, backups. We\'re en route now.',
    icon: '🚨',
    priceIndicator: 'From $152',
    category: 'emergency'
  },
  {
    id: 'drain',
    title: 'Drain Cleaning',
    description: 'Clogs cleared fast. Hydro jetting available.',
    icon: '🚿',
    priceIndicator: 'Flat Rate',
    category: 'standard'
  },
  {
    id: 'heater',
    title: 'Water Heater Repair',
    description: 'Traditional & tankless. Endless hot water.',
    icon: '🔥',
    priceIndicator: 'Free Estimate',
    category: 'standard'
  },
  {
    id: 'leak',
    title: 'Leak Detection',
    description: 'Slab leaks, pinholes, main lines. We find it.',
    icon: '🔧',
    priceIndicator: 'Camera Inspection',
    category: 'standard'
  },
  {
    id: 'toilet',
    title: 'Toilet Repair',
    description: 'Running, leaking, or upgrading. Any brand.',
    icon: '🚽',
    priceIndicator: 'Flat Rate',
    category: 'standard'
  },
  {
    id: 'jetting',
    title: 'Hydro Jetting',
    description: '3,000 PSI pipe cleaning. Grease, roots—gone.',
    icon: '💨',
    priceIndicator: 'Flat Rate',
    category: 'standard'
  },
  {
    id: 'commercial',
    title: 'Commercial Plumbing',
    description: 'Restaurants, offices, rentals. Keep flowing.',
    icon: '🏢',
    priceIndicator: 'Custom Quote',
    category: 'commercial'
  },
  {
    id: 'sewer',
    title: 'Sewer Line Services',
    description: 'Backups, tree roots. Trenchless options.',
    icon: '🕳️',
    priceIndicator: 'Camera + Locate',
    category: 'standard'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Sarah M.',
    location: 'Wylie',
    text: 'Came within an hour on a Sunday night. Fixed the burst pipe and didn\'t charge emergency rates. Lifesavers!',
    source: 'Google',
    bubblesColor: '#4285F4'
  },
  {
    id: '2',
    author: 'James K.',
    location: 'Plano',
    text: 'Flat rate meant no surprises. Professional, clean, and fast. Highly recommend Overall Plumbing.',
    source: 'Yelp',
    bubblesColor: '#D32323'
  },
  {
    id: '3',
    author: 'Maria G.',
    location: 'Garland',
    text: 'They\'ve handled our restaurant plumbing for 3 years. Always reliable and fair pricing.',
    source: 'HomeAdvisor',
    bubblesColor: '#FF9900'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { label: 'Jobs Completed', value: '10,000', suffix: '+' },
  { label: 'Average Rating', value: '4.9', suffix: '★' },
  { label: 'Avg. Response', value: '90', suffix: 'min' },
  { label: 'Always Open', value: '24/7', suffix: '' }
];

export const LOCATIONS = [
  'Wylie', 'Garland', 'Sachse', 'Murphy', 'Parker', 'Lucas', 'Allen', 'Plano'
];
