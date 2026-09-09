'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-amber-50 via-background to-blue-50">
      <div className="max-w-md text-center">
        {/* Cute 404 Illustration */}
        <div className="mb-8 relative h-64 w-full flex items-center justify-center">
          <div className="relative">
            {/* Large "404" text */}
            <div className="text-9xl font-bold text-amber-200/30 select-none">404</div>
            
            {/* Cute wooden box character */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Box body */}
                <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-amber-400 rounded-2xl shadow-xl transform -rotate-3 border-4 border-amber-600 relative">
                  {/* Wood grain effect */}
                  <div className="absolute inset-0 opacity-10 rounded-2xl" style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.1) 2px, rgba(0,0,0,.1) 4px)'
                  }} />
                  
                  {/* Sad eyes */}
                  <div className="absolute top-8 left-6 w-4 h-4 bg-amber-900 rounded-full" />
                  <div className="absolute top-8 right-6 w-4 h-4 bg-amber-900 rounded-full opacity-30" />
                  
                  {/* Sad mouth */}
                  <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-12 h-2 border-b-4 border-amber-900 rounded-full" />
                  
                  {/* Tears */}
                  <div className="absolute top-12 left-7 w-1 h-3 bg-blue-300 rounded-full animate-bounce" />
                  <div className="absolute top-12 right-7 w-1 h-3 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>

                {/* Floating items around the box */}
                <div className="absolute -top-8 -left-6 w-8 h-8 bg-blue-300 rounded-lg transform rotate-45 animate-pulse opacity-70" />
                <div className="absolute -bottom-8 -right-6 w-6 h-6 bg-rose-300 rounded-full animate-pulse opacity-70" />
                <div className="absolute top-1/2 -right-12 w-4 h-8 bg-green-300 rounded transform -rotate-12 animate-pulse opacity-70" />
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-4xl font-bold text-foreground mb-2">Oops! Lost in the Woodshop</h1>
        <p className="text-lg text-muted-foreground mb-2">
          We couldn't find that page
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          The page you're looking for seems to have been misplaced. Let's get you back on track!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/">
            <Button className="w-full sm:w-auto gap-2 bg-amber-600 hover:bg-amber-700">
              <Home className="h-4 w-4" />
              Go Home
            </Button>
          </Link>
          <Link href="/products">
            <Button variant="outline" className="w-full sm:w-auto gap-2">
              <Search className="h-4 w-4" />
              Browse Products
            </Button>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground mb-4">Popular destinations:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/" className="text-sm text-primary hover:underline">Home</Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/products" className="text-sm text-primary hover:underline">Shop</Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/login" className="text-sm text-primary hover:underline">Login</Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/signup" className="text-sm text-primary hover:underline">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
