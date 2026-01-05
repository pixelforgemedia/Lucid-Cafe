
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'coffee' | 'specialty' | 'pastry' | 'savory';
}

export interface NavItem {
  label: string;
  href: string;
}
