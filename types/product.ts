export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  tags: string[];
  images: string[];
  material: string;
  dimensions: string;
  careInstructions: string;
  availability: 'in-stock' | 'low-stock' | 'out-of-stock';
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  icon: string;
}
