'use client';

import { useEffect, useState } from 'react';
import { X, Minus, Plus, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';

export default function CartDrawer() {
  const { items, totalPrice, totalItems, isOpen, setIsOpen, updateQuantity, removeItem } = useCart();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) setVisible(true);
  }, [isOpen]);

  if (!visible) return null;

  const close = () => {
    setIsOpen(false);
    window.setTimeout(() => setVisible(false), 250);
  };

  return (
    <div className="fixed inset-0 z-[70]">
      <button aria-label="Close cart" className={`absolute inset-0 bg-foreground/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={close} />
      <aside className={`absolute bottom-0 right-0 top-0 flex w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <div>
            <h2 className="font-serif text-xl font-semibold">Your bag</h2>
            <p className="mt-1 text-xs text-muted-foreground">{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
          </div>
          <button onClick={close} className="rounded-md p-2 hover:bg-muted" aria-label="Close cart"><X className="h-5 w-5" /></button>
        </div>
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-secondary"><ShoppingBag className="h-7 w-7 text-primary" /></div>
            <h3 className="font-serif text-xl font-semibold">Your bag is waiting</h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">Discover handcrafted pieces made to bring warmth and character to your home.</p>
            <Link href="/shop" onClick={close} className="mt-6 inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground">Explore the collection <ArrowRight className="h-4 w-4" /></Link>
          </div>
        ) : (
          <>
            <div className="flex-1 divide-y divide-border overflow-y-auto px-6">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-4 py-5">
                  <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-md bg-secondary"><Image src={product.images[0]} alt={product.name} fill sizes="80px" className="object-cover" /></div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2"><Link href={`/product/${product.slug}`} onClick={close} className="line-clamp-2 text-sm font-medium hover:text-primary">{product.name}</Link><button onClick={() => removeItem(product.id)} className="shrink-0 text-muted-foreground hover:text-destructive" aria-label={`Remove ${product.name}`}><Trash2 className="h-4 w-4" /></button></div>
                    <p className="mt-1 text-sm font-semibold text-primary">₹{product.price.toLocaleString('en-IN')}</p>
                    <div className="mt-auto flex items-center justify-between pt-3"><div className="flex h-8 items-center rounded-md border border-border"><button onClick={() => updateQuantity(product.id, quantity - 1)} className="flex h-full w-8 items-center justify-center hover:bg-muted" aria-label="Decrease quantity"><Minus className="h-3 w-3" /></button><span className="w-7 text-center text-xs font-medium">{quantity}</span><button onClick={() => updateQuantity(product.id, quantity + 1)} className="flex h-full w-8 items-center justify-center hover:bg-muted" aria-label="Increase quantity"><Plus className="h-3 w-3" /></button></div><span className="text-sm font-medium">₹{(product.price * quantity).toLocaleString('en-IN')}</span></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border bg-card px-6 py-5"><div className="mb-4 flex items-center justify-between"><span className="text-sm text-muted-foreground">Subtotal</span><span className="font-semibold text-primary">₹{totalPrice.toLocaleString('en-IN')}</span></div><p className="mb-4 text-xs text-muted-foreground">Shipping calculated at checkout. Complimentary shipping on orders above ₹1,999.</p><button onClick={() => window.alert('Checkout will be available soon.')} className="flex h-12 w-full items-center justify-center gap-2 rounded-md bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Proceed to checkout <ArrowRight className="h-4 w-4" /></button></div>
          </>
        )}
      </aside>
    </div>
  );
}
