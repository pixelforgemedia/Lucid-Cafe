
import { MenuItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: 'home' },
  { label: 'Menu', href: 'menu' },
  { label: 'The Story', href: 'story' },
  { label: 'Gallery', href: 'gallery' },
  { label: 'Visit Us', href: 'visit' },
];

export const CAFE_DETAILS = {
  name: 'Lucid Café',
  address: '311 Lexington Ave, New York, NY 10016',
  neighborhood: 'Midtown Manhattan',
  phone: '+1 212-867-3490',
  hours: [
    { days: 'Monday – Thursday', time: '7:00 AM – 3:00 PM' },
    { days: 'Friday', time: '7:00 AM – 4:00 PM' },
    { days: 'Saturday', time: '8:00 AM – 4:00 PM' },
    { days: 'Sunday', time: '8:00 AM – 3:00 PM' },
  ],
};

export const MENU_PHOTOS = [
  { 
    url: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=2070&auto=format&fit=crop', 
    title: 'Signature Brews', 
    desc: 'Our curated selection of single-origin espresso and meticulous pour-overs.' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1534706936160-d5ee67737249?q=80&w=1974&auto=format&fit=crop', 
    title: 'Specialty Lattes', 
    desc: 'Hand-crafted lattes featuring house-made botanicals and elegant micro-foam art.' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1926&auto=format&fit=crop', 
    title: 'Morning Pastries', 
    desc: 'Flaky, artisanal croissants and pastries baked fresh in our Midtown kitchen daily.' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop', 
    title: 'Seasonal Selections', 
    desc: 'Our latest curated offerings inspired by the shifting energy of New York City.' 
  },
];

export const MENU_DATA: MenuItem[] = [
  // Coffee & Espresso
  { id: '1', name: 'Brew Coffee', description: 'Freshly brewed house blend.', price: '$3.25 / $3.75', category: 'coffee' },
  { id: '2', name: 'Iced Coffee', description: 'Chilled house blend served over ice.', price: '$3.75 / $4.25 / $4.75', category: 'coffee' },
  { id: '3', name: 'Cafe au lait', description: 'Brewed coffee with steamed milk.', price: '$3.75 / $4.25', category: 'coffee' },
  { id: '4', name: 'Cold Brew', description: 'Slow-steeped for 24 hours.', price: '$4.50 / $5 / $5.50', category: 'coffee' },
  { id: '5', name: 'Espresso', description: 'Concentrated shot of our signature blend.', price: '$3.50', category: 'coffee' },
  { id: '6', name: 'Macchiato', description: 'Espresso marked with a dollop of foam.', price: '$4', category: 'coffee' },
  { id: '7', name: 'Americano', description: 'Espresso with hot water.', price: '$4 / $5.75', category: 'coffee' },
  { id: '8', name: 'Cortado', description: 'Equal parts espresso and steamed milk.', price: '$4.25', category: 'coffee' },
  { id: '9', name: 'Cappuccino', description: 'Espresso with steamed milk and deep foam.', price: '$4.75 / $5.25', category: 'coffee' },
  { id: '10', name: 'Flat White', description: 'Velvety micro-foam over a double shot.', price: '$4.75', category: 'coffee' },
  { id: '11', name: 'Latte', description: 'Espresso with silky steamed milk.', price: '$5.25', category: 'coffee' },
  { id: '12', name: 'Mocha', description: 'Espresso with rich chocolate and steamed milk.', price: '$6', category: 'coffee' },
  { id: '13', name: 'Shakerato', description: 'Espresso shaken with ice and a touch of sweetness.', price: '$4.75', category: 'coffee' },
  
  // Specialty & Tea
  { id: '14', name: 'Tea', description: 'Selection of premium hot teas.', price: '$3.50 / $3.75', category: 'specialty' },
  { id: '15', name: 'Iced Tea', description: 'Refreshing premium tea over ice.', price: '$3.75 / $4.25 / $4.75', category: 'specialty' },
  { id: '16', name: 'Hot Chocolate', description: 'Rich, creamy house-made chocolate.', price: '$6', category: 'specialty' },
  { id: '17', name: 'Chai Latte', description: 'Spiced black tea with steamed milk.', price: '$5.50', category: 'specialty' },
  { id: '18', name: 'Matcha Latte', description: 'Ceremonial grade matcha with steamed milk.', price: '$5.25', category: 'specialty' },
  { id: '19', name: 'Honey Lemon Ginger Tea', description: 'Lucid Special: soothing and aromatic.', price: '$6.75', category: 'specialty' },
  { id: '20', name: 'Almond Golden Turmeric Latte', description: 'Nourishing turmeric blend with almond milk.', price: '$6', category: 'specialty' },
  { id: '21', name: 'Affogato', description: 'Double espresso poured over vanilla gelato.', price: '$6', category: 'specialty' },
  { id: '22', name: 'Fresh Orange Juice (12oz)', description: 'Squeezed fresh daily.', price: '$6.50', category: 'specialty' },
  { id: '23', name: 'Smoothie', description: 'Seasonal fruit and vegetable blend.', price: '$6.25', category: 'specialty' },

  // Savory & Bites
  { id: '24', name: 'Avocado Toast', description: 'Creamy avocado on artisanal bread.', price: '$8.25 (+tax)', category: 'savory' },
  { id: '25', name: 'Ham & Cheese Panini', description: 'Pressed sandwich with premium ham and cheese.', price: '$8 (+tax)', category: 'savory' },
  { id: '26', name: 'Greek Yogurt', description: 'Served with fresh fruit and granola.', price: '$6.75 (+tax)', category: 'savory' },
  { id: '27', name: 'Croissant Egg/Cheese', description: 'Buttery croissant with egg and melted cheese.', price: '$7 (+tax)', category: 'savory' },
  { id: '28', name: 'Brioche French Toast', description: 'Thick-cut brioche with Vermont maple syrup.', price: '$12 (+tax)', category: 'savory' },
];
