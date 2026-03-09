import { useTranslations } from 'next-intl';
import { FinalCTASection } from '@/components/sections/homepage/FinalCTASection';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.about' });

  return {
    title: t('title'),
    description: t('desc'),
  };
}

export default function AboutPage() {
  const t = useTranslations('AboutPage');
  
  const stats = [
    { id: 1, name: t('stats.customers'), value: '500+' },
    { id: 2, name: t('stats.projects'), value: '$2B+' },
    { id: 3, name: t('stats.team'), value: '50+' },
  ];

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base font-semibold leading-7 text-primary-600">{t('mission.title')}</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl font-heading">
              {t('title')}
            </h1>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-secondary-600 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>{t('subtitle')}</p>
                <p className="mt-8">{t('mission.desc')}</p>
              </div>
              <div>
                 {/* Placeholder for team image or mission graphics */}
                 <div className="aspect-[4/3] w-full rounded-2xl bg-secondary-100 object-cover flex items-center justify-center text-sm text-secondary-400">
                    Mission Image Placeholder
                 </div>
              </div>
            </div>
            
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-secondary-600">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-primary-900">{stat.value}</dd>
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
