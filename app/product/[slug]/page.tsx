'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { products, getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCart } from '@/lib/cart-context';
import { useWishlist } from '@/lib/wishlist-context';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/product-card';
import { Heart, ShoppingBag, Star, Check, Truck, RotateCcw, Shield, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const relatedProducts = product ? getRelatedProducts(product) : [];

  const { addItem } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const isWishlisted = product ? isInWishlist(product.id) : false;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold text-foreground mb-2">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/products">
            <Button>Browse All Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setQuantity(1);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b bg-secondary/30 px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex items-center gap-2 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link>
          <span className="text-muted-foreground">/</span>
          <Link href="/products" className="text-muted-foreground hover:text-foreground">Products</Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium line-clamp-1">{product.name}</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary/50">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                />
                
                {/* Badges */}
                <div className="absolute left-4 top-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold uppercase text-white">
                      New
                    </span>
                  )}
                  {discount > 0 && (
                    <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold uppercase text-white">
                      -{discount}%
                    </span>
                  )}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={cn(
                        'relative aspect-square overflow-hidden rounded-lg border-2 transition-colors',
                        selectedImage === index ? 'border-primary' : 'border-border hover:border-primary/50'
                      )}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                      {product.category.replace('-', ' ')}
                    </span>
                    <h1 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
                      {product.name}
                    </h1>
                  </div>
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className={cn(
                      'flex h-10 w-10 items-center justify-center rounded-full border transition-all',
                      isWishlisted
                        ? 'border-red-500 bg-red-50 text-red-500'
                        : 'border-border hover:border-primary hover:bg-primary/5'
                    )}
                  >
                    <Heart className={cn('h-5 w-5', isWishlisted && 'fill-current')} />
                  </button>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          'h-4 w-4',
                          i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
                </div>
              </div>

              {/* Price */}
              <div className="space-y-2 border-b pb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">₹{product.price.toLocaleString('en-IN')}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-lg text-muted-foreground line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-sm font-semibold text-green-600">Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}</span>
                    </>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  Inclusive of all taxes. Free shipping on orders above ₹1,999
                </p>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">About this item</h3>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-4 rounded-lg bg-secondary/30 p-4">
                  <div>
                    <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Material</p>
                    <p className="font-medium text-foreground">{product.material}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Dimensions</p>
                    <p className="font-medium text-foreground">{product.dimensions}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Availability</p>
                    <p className={cn(
                      'font-medium',
                      product.availability === 'in-stock' ? 'text-green-600' : 'text-orange-600'
                    )}>
                      {product.availability === 'in-stock' ? 'In Stock' : 'Low Stock'}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">Care</p>
                    <p className="font-medium text-foreground text-sm">{product.careInstructions.substring(0, 20)}...</p>
                  </div>
                </div>
              </div>

              {/* Care Instructions */}
              <div className="border-t pt-6">
                <h3 className="font-semibold text-foreground mb-2">Care Instructions</h3>
                <p className="text-sm text-muted-foreground">{product.careInstructions}</p>
              </div>

              {/* Add to Cart */}
              <div className="space-y-4 border-t pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-foreground hover:bg-secondary transition-colors"
                    >
                      −
                    </button>
                    <span className="px-4 py-2 border-l border-r border-border">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-foreground hover:bg-secondary transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm text-muted-foreground">Stock: {product.availability === 'in-stock' ? '5+' : '1-2'}</span>
                </div>

                <Button
                  onClick={handleAddToCart}
                  disabled={product.availability === 'out-of-stock'}
                  size="lg"
                  className="w-full bg-amber-600 hover:bg-amber-700 h-12 gap-2 text-base font-semibold"
                >
                  <ShoppingBag className="h-5 w-5" />
                  Add to Bag
                </Button>
              </div>

              {/* Benefits */}
              <div className="grid gap-3 border-t pt-6">
                <div className="flex gap-3">
                  <Truck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Free Shipping</p>
                    <p className="text-xs text-muted-foreground">On orders above ₹1,999</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <RotateCcw className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Easy Returns</p>
                    <p className="text-xs text-muted-foreground">30 days return policy</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Shield className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Secure Payment</p>
                    <p className="text-xs text-muted-foreground">100% secure transactions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20 border-t pt-12">
              <h2 className="text-2xl font-bold text-foreground mb-8">Related Products</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
