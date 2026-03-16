'use client';

import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/design/Section';

export function TrustBanner() {
  const t = useTranslations('marketing.home.trustBanner');
  
  return (
    <Section background="dark" size="sm" className="border-y border-slate-800/50">
      <div className="flex flex-col items-center">
        <p className="mb-8 text-slate-500 text-xs font-semibold tracking-widest uppercase text-center">
          {t('label')}
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-40 hover:opacity-60 transition-opacity duration-700">
          {['Enterprise Build', 'Horizon Construction', 'United Developers', 'Atlas Group', 'Skyline'].map((name) => (
            <div key={name} className="font-heading font-bold text-xl md:text-2xl text-white">
              {name}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
