import type { Category } from '@/types/product';

export const categories: Category[] = [
  {
    id: 'cat-1',
    slug: 'wall-decor',
    name: 'Wall Decor',
    description: 'Handcrafted wooden wall panels and art to transform your walls.',
    image:
      'https://images.pexels.com/photos/31352326/pexels-photo-31352326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Frame',
  },
  {
    id: 'cat-2',
    slug: 'table-decor',
    name: 'Table Decor',
    description: 'Elegant wooden accents for your tabletops and consoles.',
    image:
      'https://images.pexels.com/photos/8987436/pexels-photo-8987436.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Table2',
  },
  {
    id: 'cat-3',
    slug: 'wooden-trays',
    name: 'Wooden Trays',
    description: 'Serve in style with our handcrafted wooden serving trays.',
    image:
      'https://images.pexels.com/photos/30470468/pexels-photo-30470468.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Tray',
  },
  {
    id: 'cat-4',
    slug: 'candle-holders',
    name: 'Candle Holders',
    description: 'Warm, ambient lighting with artisan wooden candle holders.',
    image:
      'https://images.pexels.com/photos/19986299/pexels-photo-19986299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Flame',
  },
  {
    id: 'cat-5',
    slug: 'organizers',
    name: 'Organizers',
    description: 'Keep your space tidy with beautiful wooden organizers.',
    image:
      'https://images.pexels.com/photos/31152180/pexels-photo-31152180.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Archive',
  },
  {
    id: 'cat-6',
    slug: 'kitchen-decor',
    name: 'Kitchen Decor',
    description: 'Functional and decorative wooden pieces for your kitchen.',
    image:
      'https://images.pexels.com/photos/18877529/pexels-photo-18877529.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'CookingPot',
  },
  {
    id: 'cat-7',
    slug: 'gift-items',
    name: 'Gift Items',
    description: 'Thoughtful wooden gifts for every occasion.',
    image:
      'https://images.pexels.com/photos/29135632/pexels-photo-29135632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Gift',
  },
  {
    id: 'cat-8',
    slug: 'new-arrivals',
    name: 'New Arrivals',
    description: 'The latest additions to our handcrafted collection.',
    image:
      'https://images.pexels.com/photos/6692152/pexels-photo-6692152.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Sparkles',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
