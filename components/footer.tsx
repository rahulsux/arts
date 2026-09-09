import Link from 'next/link';
import { Instagram, Facebook, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-mw container-px py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] md:gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/30"><span className="font-serif text-xl font-semibold">A</span></span>
              <span className="font-serif text-2xl font-semibold">AruArts</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/65">Thoughtfully crafted wooden pieces that bring warmth, beauty, and a little bit of soul to your everyday spaces.</p>
            <div className="mt-6 flex items-center gap-3"><a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:bg-primary-foreground/10"><Instagram className="h-4 w-4" /></a><a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:bg-primary-foreground/10"><Facebook className="h-4 w-4" /></a><a href="mailto:hello@aruarts.in" aria-label="Email" className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:bg-primary-foreground/10"><Mail className="h-4 w-4" /></a></div>
          </div>
          <div><h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/50">Explore</h3><div className="space-y-3 text-sm text-primary-foreground/75"><Link href="/shop" className="block transition-colors hover:text-primary-foreground">Shop all</Link><Link href="/category/new-arrivals" className="block transition-colors hover:text-primary-foreground">New arrivals</Link><Link href="/category/best-sellers" className="block transition-colors hover:text-primary-foreground">Best sellers</Link><Link href="/#our-story" className="block transition-colors hover:text-primary-foreground">Our story</Link></div></div>
          <div><h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/50">Help</h3><div className="space-y-3 text-sm text-primary-foreground/75"><Link href="#" className="block transition-colors hover:text-primary-foreground">Shipping & returns</Link><Link href="#" className="block transition-colors hover:text-primary-foreground">Care guide</Link><Link href="#" className="block transition-colors hover:text-primary-foreground">Contact us</Link><Link href="#" className="block transition-colors hover:text-primary-foreground">FAQs</Link></div></div>
          <div><h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/50">Come say hello</h3><p className="text-sm leading-relaxed text-primary-foreground/75">Made with love in Jaipur, India.<br />Shipped with care, across the country.</p><Link href="mailto:hello@aruarts.in" className="mt-5 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4">hello@aruarts.in <ArrowUpRight className="h-3.5 w-3.5" /></Link></div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50 sm:flex-row"><p>© {new Date().getFullYear()} AruArts. Made for meaningful spaces.</p><div className="flex gap-5"><Link href="#" className="hover:text-primary-foreground">Privacy</Link><Link href="#" className="hover:text-primary-foreground">Terms</Link></div></div>
      </div>
    </footer>
  );
}
