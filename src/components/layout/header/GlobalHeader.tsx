'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/components/ui/link';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu } from 'lucide-react';

export function GlobalHeader() {
  const t = useTranslations('Navigation');

  const navItems = [
    { label: t('features'), href: '/features' },
    { label: t('solutions'), href: '/solutions' },
    { label: t('pricing'), href: '/pricing' },
    { label: t('about'), href: '/about' },
    { label: t('blog'), href: '/blog' },
    { label: t('contact'), href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-secondary-50/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Placeholder Logo Icon */}
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600">
            <span className="text-lg font-bold text-white">T</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-primary-900 font-heading">
            TrackCost
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex md:gap-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="text-sm font-medium text-secondary-600 hover:text-primary-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <div className="hidden sm:flex sm:gap-4">
            <Button variant="ghost" asChild>
              <Link href="/login">{t('login')}</Link>
            </Button>
            <Button asChild>
              <Link href="/start-trial">Get Started</Link>
            </Button>
          </div>
          {/* Mobile Menu Trigger (Placeholder) */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
