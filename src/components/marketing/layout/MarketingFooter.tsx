'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

function Logo() {
  return (
    <Link href="/" className="flex items-center group">
      <Image
        src="/logo.png"
        alt="TrakCost"
        width={120}
        height={32}
        className="h-8 w-auto group-hover:opacity-80 transition-opacity"
        style={{ height: 'auto' }}
      />
    </Link>
  );
}

export function MarketingFooter() {
  const t = useTranslations('marketing.nav');

  return (
    <footer className="border-t border-[#252e46] bg-[#0a0f1e] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-slate-500">
              The ERP built for MENA construction.
            </p>
          </div>
          
          <div>
            <p className="font-bold text-white text-xs mb-6 block uppercase tracking-wider">
              Product
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/features" className="text-sm text-slate-400 hover:text-white transition-colors font-sans text-start">
                {t('features')}
              </Link>
              <Link href="/pricing" className="text-sm text-slate-400 hover:text-white transition-colors font-sans text-start">
                {t('pricing')}
              </Link>
            </div>
          </div>
          
          <div>
            <p className="font-bold text-white text-xs mb-6 block uppercase tracking-wider">
              Company
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors font-sans text-start">
                {t('about')}
              </Link>
              <Link href="/contact" className="text-sm text-slate-400 hover:text-white transition-colors font-sans text-start">
                {t('contact')}
              </Link>
            </div>
          </div>
          
          <div>
            <p className="font-bold text-white text-xs mb-6 block uppercase tracking-wider">
              Legal
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors font-sans text-start">
                {t('privacy')}
              </Link>
              <Link href="/terms" className="text-sm text-slate-400 hover:text-white transition-colors font-sans text-start">
                {t('terms')}
              </Link>
              <Link href="/security" className="text-sm text-slate-400 hover:text-white transition-colors font-sans text-start">
                {t('security')}
              </Link>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#252e46] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © 2026 TrakCost Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
