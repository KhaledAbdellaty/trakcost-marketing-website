import { useTranslations } from 'next-intl';
import { FinalCTASection } from '@/components/sections/homepage/FinalCTASection';
import { Wallet, BarChart3, ShoppingCart, Users } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.features' });

  return {
    title: t('title'),
    description: t('desc'),
  };
}

export default function FeaturesPage() {
  const t = useTranslations('FeaturesPage');

  const features = [
    { key: 'finance', icon: Wallet },
    { key: 'operations', icon: Users },
    { key: 'procurement', icon: ShoppingCart },
    { key: 'reporting', icon: BarChart3 },
  ];

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">TrackCost Modules</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl font-heading">
              {t('title')}
            </p>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              {t('subtitle')}
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.key} className="flex flex-col bg-secondary-50 p-8 rounded-2xl">
                  <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-primary-900 font-heading">
                    <feature.icon className="h-8 w-8 text-primary-600" aria-hidden="true" />
                    {t(`${feature.key}.title`)}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-secondary-600">
                    <p className="flex-auto">{t(`${feature.key}.desc`)}</p>
                  </dd>
                   {/* Placeholder visual for each feature */}
                   <div className="mt-6 aspect-[16/9] w-full rounded-xl bg-white border border-secondary-200 flex items-center justify-center text-sm text-secondary-400">
                      Feature Mockup: {t(`${feature.key}.title`)}
                   </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <FinalCTASection />
    </>
  );
}
