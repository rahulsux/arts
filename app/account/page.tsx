'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Heart, 
  ShoppingBag, 
  MapPin, 
  Bell, 
  Lock, 
  LogOut,
  ChevronRight
} from 'lucide-react';

export default function AccountPage() {
  const accountSections = [
    {
      icon: User,
      title: 'Profile',
      description: 'View and edit your personal information',
      href: '#profile'
    },
    {
      icon: ShoppingBag,
      title: 'Orders',
      description: 'Track your orders and purchases',
      href: '#orders'
    },
    {
      icon: Heart,
      title: 'Wishlist',
      description: 'Your saved favorite items',
      href: '/products?favorite=true'
    },
    {
      icon: MapPin,
      title: 'Addresses',
      description: 'Manage your delivery addresses',
      href: '#addresses'
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Manage your notification preferences',
      href: '#notifications'
    },
    {
      icon: Lock,
      title: 'Security',
      description: 'Change password and security settings',
      href: '#security'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-secondary/30 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-foreground">My Account</h1>
          <p className="mt-2 text-muted-foreground">Manage your profile, orders, and preferences</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* User Welcome Section */}
          <div className="mb-12 rounded-lg bg-gradient-to-r from-amber-50 to-blue-50 p-8 border border-amber-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Welcome back!</p>
                <h2 className="text-2xl font-bold text-foreground">John Doe</h2>
                <p className="text-muted-foreground mt-1">john@example.com</p>
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-3xl font-bold text-amber-600">5</p>
                <p className="text-sm text-muted-foreground">Orders</p>
              </div>
            </div>
          </div>

          {/* Account Sections Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            {accountSections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <Link
                  key={idx}
                  href={section.href}
                  className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{section.description}</p>
                    <ChevronRight className="absolute right-4 top-6 h-5 w-5 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Recent Orders Preview */}
          <div className="mb-12 border-t pt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Recent Orders</h2>
            <div className="grid gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between rounded-lg border border-border p-4 hover:bg-secondary/50 transition-colors cursor-pointer">
                  <div>
                    <p className="font-medium text-foreground">Order #OR{1000 + i}</p>
                    <p className="text-sm text-muted-foreground">3 items • 5 days ago</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">₹4,299</p>
                    <p className="text-xs text-green-600 font-medium">Delivered</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="#orders" className="mt-4 block">
              <Button variant="outline" className="w-full">View All Orders</Button>
            </Link>
          </div>

          {/* Danger Zone */}
          <div className="border-t pt-12">
            <h3 className="text-lg font-semibold text-foreground mb-4">Account Actions</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <Button variant="outline" className="gap-2">
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
              <Button variant="outline" className="gap-2 text-red-600 hover:text-red-700">
                <User className="h-4 w-4" />
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
