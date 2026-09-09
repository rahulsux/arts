'use client';

import Link from 'next/link';
import Image from 'next/image';
import { products, getBestSellers, getNewArrivals } from '@/data/products';
import { categories } from '@/data/categories';
import ProductCard from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Heart, Award } from 'lucide-react';

export default function Home() {
  const bestSellers = getBestSellers().slice(0, 8);
  const newArrivals = getNewArrivals().slice(0, 8);
  const mainCategories = categories.filter((c) => c.slug !== 'new-arrivals');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-background to-amber-50 px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 lg:items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-900">
                  <Leaf className="h-4 w-4" /> Handcrafted with Passion
                </span>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                  Timeless Wooden Decor & Gifts
                </h1>
                <p className="text-lg text-muted-foreground sm:text-xl">
                  Discover our exquisite collection of handcrafted wooden items. Each piece tells a story of artisanal craftsmanship and natural beauty.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/products">
                  <Button size="lg" className="gap-2">
                    Shop All Products <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t pt-6">
                <div>
                  <p className="text-2xl font-bold text-foreground">100+</p>
                  <p className="text-sm text-muted-foreground">Handcrafted Items</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">4.8★</p>
                  <p className="text-sm text-muted-foreground">Customer Rating</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">2.5K+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 sm:h-[500px] lg:h-full">
              <Image
                src="https://images.pexels.com/photos/31352326/pexels-photo-31352326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Handcrafted wooden wall art"
                fill
                priority
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 bg-secondary/30">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Explore Categories
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Find the perfect wooden pieces for every room and occasion
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mainCategories.map((category) => {
              const categoryCount = products.filter((p) => p.category === category.slug).length;
              return (
                <Link
                  key={category.id}
                  href={`/products?category=${category.slug}`}
                  className="group relative overflow-hidden rounded-xl bg-background transition-all hover:shadow-lg"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/40" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                    <h3 className="text-lg font-semibold">{category.name}</h3>
                    <p className="text-sm text-gray-200">{categoryCount} items</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-amber-600 mb-2">
                <Award className="h-4 w-4" /> BESTSELLERS
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Customer Favorites
              </h2>
            </div>
            <Link href="/products?sort=popular" className="hidden sm:inline-block">
              <Button variant="outline" className="gap-2">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((product, idx) => (
              <ProductCard key={product.id} product={product} priority={idx < 4} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/products">
              <Button className="w-full gap-2">
                Shop All <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8 bg-secondary/30">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 mb-2">
                <span className="h-2 w-2 rounded-full bg-blue-600" /> NEW ARRIVALS
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Latest Additions
              </h2>
            </div>
            <Link href="/products?sort=newest" className="hidden sm:inline-block">
              <Button variant="outline" className="gap-2">
                View All <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {newArrivals.map((product, idx) => (
              <ProductCard key={product.id} product={product} priority={idx < 4} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/products">
              <Button className="w-full gap-2">
                Shop All <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-lg bg-amber-100 p-3">
                <Leaf className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Handcrafted</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Each piece is carefully handcrafted by skilled artisans using sustainable materials.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-lg bg-blue-100 p-3">
                <Award className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Premium Quality</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We use only the finest wood varieties and finishes for lasting beauty.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-lg bg-rose-100 p-3">
                <Heart className="h-6 w-6 text-rose-700" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Unique Designs</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Every item has its own character and charm, making it truly one-of-a-kind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-32 lg:px-8 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Space?
          </h2>
          <p className="mt-6 text-lg text-amber-50">
            Browse our complete collection of 100+ handcrafted wooden items and find the perfect pieces for your home.
          </p>
          <Link href="/products" className="mt-8 inline-block">
            <Button size="lg" variant="secondary" className="gap-2">
              Shop Now <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
