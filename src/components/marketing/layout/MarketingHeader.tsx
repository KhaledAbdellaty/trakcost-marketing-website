'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { Button } from '@/components/ui/design/Button';
import Image from 'next/image';

function Logo() {
  return (
    <Link href="/" className="flex items-center group">
      <Image
        src="/logo.png"
        alt="TrakCost"
        width={120}
        height={40}
        className="h-10 w-auto"
        style={{ height: 'auto' }}
        priority
      />
    </Link>
  );
}

function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const nextLocale = locale === 'en' ? 'ar' : 'en';

  return (
    <Link href={pathname} locale={nextLocale} className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center justify-center h-10 w-10 border border-slate-700 rounded-full">
      {locale === 'en' ? 'عربي' : 'EN'}
    </Link>
  );
}

export function MarketingHeader() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const locale = useLocale();

  const navLinks = [
    { name: t('features'), href: '/features' },
    { name: t('pricing'), href: '/pricing' },
    { name: t('about'), href: '/about' },
    { name: t('contact'), href: '/contact' },
  ];

  return (
    <header className="border-b border-[#252e46] sticky top-0 z-50 bg-[#0f172a]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href as "/features" | "/pricing" | "/about" | "/contact" | "/"}
                className={`font-sans text-sm transition-all hover:text-white ${
                  isActive ? "text-white font-medium" : "text-slate-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <div className="hidden sm:flex items-center gap-3">
            <a href={`https://app.trakcost.com/${locale}/auth/login`}>
              <Button variant="ghost" className="text-slate-300 hover:text-white">
                {t('login')}
              </Button>
            </a>
            <Link href="/contact">
              <Button variant="primary" className="bg-[#1D4FD7] hover:bg-[#1a45c4] hover:shadow-lg hover:shadow-blue-500/20">
                {t('contact')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
