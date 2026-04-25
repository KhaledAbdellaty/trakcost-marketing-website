'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { Button } from '@/components/ui/design/Button';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { name: t('features'), href: '/features' },
    { name: t('pricing'), href: '/pricing' },
    { name: t('about'), href: '/about' },
    { name: t('contact'), href: '/contact' },
  ];

  return (
    <>
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
            <button
              onClick={() => setDrawerOpen(true)}
              className="md:hidden flex items-center justify-center w-10 h-10 text-slate-400 hover:text-white transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setDrawerOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 end-0 z-50 h-full w-72 bg-[#0f172a] border-s border-[#252e46] flex flex-col md:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 h-20 border-b border-[#252e46]">
                <Logo />
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center justify-center w-10 h-10 text-slate-400 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href as "/features" | "/pricing" | "/about" | "/contact" | "/"}
                        onClick={() => setDrawerOpen(false)}
                        className={`flex items-center px-4 py-3 rounded-xl font-sans text-sm transition-all ${
                          isActive
                            ? 'bg-blue-600/10 text-white font-medium border border-blue-600/20'
                            : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Auth buttons */}
              <div className="px-4 py-6 border-t border-[#252e46] flex flex-col gap-3">
                <a href={`https://app.trakcost.com/${locale}/auth/login`} className="w-full">
                  <Button variant="ghost" className="w-full text-slate-300 hover:text-white border border-slate-700">
                    {t('login')}
                  </Button>
                </a>
                <Link href="/contact" onClick={() => setDrawerOpen(false)} className="w-full">
                  <Button variant="primary" className="w-full bg-[#1D4FD7] hover:bg-[#1a45c4]">
                    {t('contact')}
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
