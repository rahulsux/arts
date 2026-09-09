'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  UserRound,
} from 'lucide-react';
import { categories } from '@/data/categories';
import { useCart } from '@/lib/cart-context';
import { useWishlist } from '@/lib/wishlist-context';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();
  const { count: wishlistCount } = useWishlist();

  return (
    <>
      <div className="hidden bg-primary py-2 text-center text-xs font-medium tracking-wide text-primary-foreground sm:block">
        Complimentary shipping on orders above ₹1,999
      </div>
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="container-mw container-px">
          <div className="flex h-20 items-center justify-between gap-6">
            <button
              className="rounded-md p-2 text-foreground transition-colors hover:bg-muted lg:hidden"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>

            <Link href="/" className="group flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center flex-shrink-0">
                <img src="/logo.png" alt="AruArts Logo" className="h-10 w-10" />
              </div>
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              <Link
                href="/"
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                Shop
              </Link>
              <Link
                href="/category/new-arrivals"
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                New Arrivals
              </Link>
              <Link
                href="/#our-story"
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                Our Story
              </Link>
            </nav>

            <div className="flex items-center gap-1 sm:gap-2">
              <Link
                href="/products"
                className="rounded-md p-2.5 text-foreground transition-colors hover:bg-muted hover:text-primary"
                aria-label="Search products"
              >
                <Search className="h-5 w-5" />
              </Link>
              <Link
                href="/wishlist"
                className="relative hidden rounded-md p-2.5 text-foreground transition-colors hover:bg-muted hover:text-primary sm:block"
                aria-label="Wishlist"
              >
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setIsOpen(true)}
                className="relative rounded-md p-2.5 text-foreground transition-colors hover:bg-muted hover:text-primary"
                aria-label="Open shopping bag"
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground">
                    {totalItems}
                  </span>
                )}
              </button>
              <Link
                href="/account"
                className="hidden rounded-md p-2.5 text-foreground transition-colors hover:bg-muted hover:text-primary sm:block"
                aria-label="Account"
              >
                <UserRound className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="animate-fade-in absolute bottom-0 left-0 top-0 w-[min(86%,360px)] overflow-y-auto bg-background p-6 shadow-2xl">
            <div className="mb-10 flex items-center justify-between">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center flex-shrink-0">
                  <img src="/logo.png" alt="AruArts Logo" className="h-9 w-9" />
                </div>
                <span className="font-serif text-xl font-semibold text-primary">AruArts</span>
              </Link>
              <button
                className="rounded-md p-2 hover:bg-muted"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="space-y-1">
              <Link href="/" onClick={() => setMobileOpen(false)} className="block border-b border-border py-4 text-lg font-medium">Home</Link>
              <Link href="/products" onClick={() => setMobileOpen(false)} className="block border-b border-border py-4 text-lg font-medium">Shop all</Link>
              <div className="border-b border-border py-4">
                <div className="mb-3 text-lg font-medium">Categories</div>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <Link key={category.id} href={`/category/${category.slug}`} onClick={() => setMobileOpen(false)} className="py-1 text-sm text-muted-foreground hover:text-primary">
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/category/new-arrivals" onClick={() => setMobileOpen(false)} className="block border-b border-border py-4 text-lg font-medium">New arrivals</Link>
              <Link href="/#our-story" onClick={() => setMobileOpen(false)} className="block border-b border-border py-4 text-lg font-medium">Our story</Link>
              <Link href="/products" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 py-4 text-lg font-medium"><Heart className="h-5 w-5" /> Wishlist</Link>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
