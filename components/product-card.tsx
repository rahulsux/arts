'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import type { Product } from '@/types/product';
import { useWishlist } from '@/lib/wishlist-context';
import { useCart } from '@/lib/cart-context';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addItem } = useCart();
  const isWishlisted = isInWishlist(product.id);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <article className="group relative">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-secondary/60">
        <Link href={`/product/${product.slug}`} className="block h-full w-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition duration-700 ease-out group-hover:scale-105"
          />
          <Image
            src={product.images[1] || product.images[0]}
            alt=""
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover opacity-0 transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
          />
        </Link>
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">New</span>
          )}
          {discount > 0 && (
            <span className="rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">-{discount}%</span>
          )}
        </div>
        <button
          onClick={() => toggleWishlist(product.id)}
          className={cn(
            'absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 shadow-sm backdrop-blur transition-all hover:scale-105',
            isWishlisted ? 'text-accent' : 'text-foreground/70 hover:text-accent'
          )}
          aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
        >
          <Heart className={cn('h-4 w-4', isWishlisted && 'fill-current')} />
        </button>
        <div className="absolute inset-x-3 bottom-3 flex translate-y-3 items-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={() => {
              addItem(product);
            }}
            disabled={product.availability === 'out-of-stock'}
            className="flex h-10 flex-1 items-center justify-center gap-2 rounded-md bg-primary text-xs font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-primary/90 disabled:opacity-50"
          >
            <ShoppingBag className="h-4 w-4" /> Add to bag
          </button>
          <Link
            href={`/product/${product.slug}`}
            className="flex h-10 w-10 items-center justify-center rounded-md bg-background text-foreground shadow-lg transition-colors hover:bg-secondary"
            aria-label={`View details ${product.name}`}
          >
            <Eye className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="pt-4">
        <div className="mb-1 flex items-center justify-between gap-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            {product.category.replace('-', ' ')}
          </p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="h-3 w-3 fill-accent text-accent" /> {product.rating}
          </div>
        </div>
        <Link href={`/product/${product.slug}`}>
          <h3 className="line-clamp-1 text-sm font-medium text-foreground transition-colors hover:text-primary sm:text-[15px]">{product.name}</h3>
        </Link>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm font-semibold text-primary">₹{product.price.toLocaleString('en-IN')}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
          )}
        </div>
      </div>
    </article>
  );
}
