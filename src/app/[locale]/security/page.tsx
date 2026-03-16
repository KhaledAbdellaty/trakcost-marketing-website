'use client';

import { useTranslations } from 'next-intl';
import { MarketingHeader } from '@/components/marketing/layout/MarketingHeader';
import { MarketingFooter } from '@/components/marketing/layout/MarketingFooter';
import { Section } from '@/components/ui/design/Section';

export default function SecurityPage() {
  const t = useTranslations('marketing.securityPage');

  return (
    <>
      <MarketingHeader />
      <main className="min-h-screen bg-[#0a0f1e] pt-32">
        <Section className="py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('title')}
            </h1>
            <p className="text-slate-400 mb-8 border-b border-[#252e46] pb-8">
              {t('subtitle')}
            </p>
            
            <div className="prose prose-invert max-w-none">
              <div className="space-y-12 pt-4">
                {[
                  'overview',
                  'architecture',
                  'authentication',
                  'protection',
                  'audit',
                  'compliance',
                  'operational',
                  'residency',
                  'responsibilities',
                  'reporting'
                ].map((section) => (
                  <div key={section}>
                    <h2 className="text-2xl font-bold text-white mb-4">{t(`sections.${section}.title`)}</h2>
                    <p className="text-slate-400 leading-relaxed font-sans whitespace-pre-line">{t(`sections.${section}.content`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>
      <MarketingFooter />
    </>
  );
}
