'use client';

import { useState, useMemo } from 'react';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import ProductCard from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { X } from 'lucide-react';

const PRICE_MIN = 0;
const PRICE_MAX = 3500;

export default function ProductsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([PRICE_MIN, PRICE_MAX]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high' | 'newest'>('popular');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Filter by categories
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Filter by price range
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort products
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => {
          if (a.isNew === b.isNew) return 0;
          return a.isNew ? -1 : 1;
        });
        break;
      case 'popular':
      default:
        result.sort((a, b) => b.rating * b.reviewCount - a.rating * a.reviewCount);
        break;
    }

    return result;
  }, [selectedCategories, priceRange, searchQuery, sortBy]);

  const toggleCategory = (slug: string) => {
    setSelectedCategories((prev) =>
      prev.includes(slug) ? prev.filter((c) => c !== slug) : [...prev, slug]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([PRICE_MIN, PRICE_MAX]);
    setSearchQuery('');
    setSortBy('popular');
  };

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    priceRange[0] !== PRICE_MIN ||
    priceRange[1] !== PRICE_MAX ||
    searchQuery.trim() !== '';

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-secondary/30 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            All Products
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Explore our collection of {filteredProducts.length} handcrafted wooden items
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar - Filters */}
          <aside className="hidden space-y-8 lg:block">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Filters</h2>
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="mt-2 h-auto text-xs text-muted-foreground hover:text-foreground"
                >
                  Clear all filters <X className="ml-1 h-3 w-3" />
                </Button>
              )}
            </div>

            {/* Search */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Search</label>
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-secondary/50"
              />
            </div>

            {/* Price Range */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Price Range</label>
              <Slider
                min={PRICE_MIN}
                max={PRICE_MAX}
                step={50}
                value={priceRange}
                onValueChange={(value) => setPriceRange([value[0], value[1]])}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>₹{priceRange[0].toLocaleString('en-IN')}</span>
                <span>₹{priceRange[1].toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-foreground">Categories</h3>
              <div className="space-y-2">
                {categories
                  .filter((c) => c.slug !== 'new-arrivals') // Exclude new-arrivals from filter
                  .map((category) => {
                    const categoryProducts = products.filter((p) => p.category === category.slug);
                    const isSelected = selectedCategories.includes(category.slug);

                    return (
                      <label
                        key={category.id}
                        className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 transition-colors hover:bg-secondary/50"
                      >
                        <Checkbox
                          checked={isSelected}
                          onCheckedChange={() => toggleCategory(category.slug)}
                          className="h-4 w-4"
                        />
                        <span className="flex-1 text-sm text-foreground">{category.name}</span>
                        <span className="text-xs text-muted-foreground">
                          ({categoryProducts.length})
                        </span>
                      </label>
                    );
                  })}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Mobile Filters & Sort */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-secondary/50 lg:hidden"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
              >
                <option value="popular">Most Popular</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <>
                <div className="mb-6 text-sm text-muted-foreground">
                  Showing {filteredProducts.length} of {products.length} products
                </div>
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} priority={index < 6} />
                  ))}
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-lg border border-dashed bg-secondary/30 py-12">
                <p className="text-lg font-medium text-foreground">No products found</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Try adjusting your filters or search query
                </p>
                <Button onClick={clearFilters} variant="outline" className="mt-4">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
