import { useTranslations } from 'next-intl';
import { FinalCTASection } from '@/components/sections/homepage/FinalCTASection';
import { Building2, HardHat, Hammer } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.solutions' });

  return {
    title: t('title'),
    description: t('desc'),
  };
}

export default function SolutionsPage() {
  const t = useTranslations('SolutionsPage');

  const solutions = [
    { key: 'contractors', icon: HardHat },
    { key: 'developers', icon: Building2 },
    { key: 'subcontractors', icon: Hammer },
  ];

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Industries</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl font-heading">
              {t('title')}
            </p>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              {t('subtitle')}
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {solutions.map((solution) => (
                <div key={solution.key} className="flex flex-col bg-secondary-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                  <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-primary-900 font-heading">
                    <solution.icon className="h-8 w-8 text-primary-600" aria-hidden="true" />
                    {t(`${solution.key}.title`)}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-secondary-600">
                    <p className="flex-auto">{t(`${solution.key}.desc`)}</p>
                  </dd>
                   {/* Visual Placeholder */}
                   <div className="mt-8 aspect-[4/3] w-full rounded-xl bg-white border border-secondary-200 flex items-center justify-center text-sm text-secondary-400 group-hover:border-primary-200">
                      Solution Diagram: {t(`${solution.key}.title`)}
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
