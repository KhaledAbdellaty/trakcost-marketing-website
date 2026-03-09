import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { Check } from 'lucide-react';
import { FinalCTASection } from '@/components/sections/homepage/FinalCTASection';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.pricing' });

  return {
    title: t('title'),
    description: t('desc'),
  };
}

export default function PricingPage() {
  const t = useTranslations('PricingPage');
  
  const tiers = [
    { key: 'starter', featured: false },
    { key: 'growth', featured: true },
    { key: 'enterprise', featured: false },
  ];

  return (
    <>
      <div className="bg-secondary-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl font-heading">{t('title')}</h2>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              {t('subtitle')}
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
            {tiers.map((tier, tierIdx) => (
              <div
                key={tier.key}
                className={`
                  ${tier.featured ? 'relative bg-white shadow-2xl scale-105 z-10' : 'bg-white/60 sm:mx-8 lg:mx-0 shadow-lg'}
                  ${tier.featured ? '' : tierIdx === 0 ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl' : 'rounded-b-3xl sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl'}
                  rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10
                `}
              >
                <h3 id={tier.key} className="text-base font-semibold leading-7 text-primary-600">
                  {t(`plans.${tier.key}.name`)}
                </h3>
                <p className="mt-4 flex items-baseline gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-primary-900">{t(`plans.${tier.key}.price`)}</span>
                  {tier.key !== 'enterprise' && <span className="text-base text-gray-500">{t('monthly')}</span>}
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  {t(`plans.${tier.key}.desc`)}
                </p>
                
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                   {[1, 2, 3, 4, 5].map((i) => {
                      const featureKey = `plans.${tier.key}.features.${i}`;
                      // Check if translation exists by comparing to key (simple heuristic for this setup)
                      // In a real app, we'd use a better way to check for existence or array structures
                      const text = t(featureKey as any);
                      if (text === featureKey) return null; // primitive existence check if t returns key on missing

                      return (
                        <li key={i} className="flex gap-x-3">
                          <Check className="h-6 w-5 flex-none text-primary-600" aria-hidden="true" />
                          {text}
                        </li>
                      );
                   })}
                </ul>

                <Button className="mt-8 w-full" variant={tier.featured ? 'default' : 'outline'} asChild>
                   <Link href={tier.key === 'enterprise' ? '/contact' : '/start-trial'}>
                     {tier.key === 'enterprise' ? t('contact') : t('cta')}
                   </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FinalCTASection />
    </>
  );
}
