import { useTranslations } from 'next-intl';
import { X, Check } from 'lucide-react';

export function ProblemSolutionSection() {
  const t = useTranslations('ProblemSolution');

  return (
    <section className="bg-secondary-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">{t('label')}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl font-heading">
            {t('title')}
          </p>
          <p className="mt-6 text-lg leading-8 text-secondary-600">
            {t('description')}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 md:max-w-none md:grid-cols-2">
          
          {/* The Old Way */}
          <div className="rounded-3xl bg-white p-8 ring-1 ring-secondary-200/50 sm:p-10 shadow-sm relative overflow-hidden">
            <h3 className="text-lg font-semibold leading-8 text-secondary-900 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                 <X className="h-5 w-5 text-red-600" />
              </span>
              {t('problemTitle')}
            </h3>
            <ul className="mt-8 space-y-4 text-sm leading-6 text-secondary-600">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="flex gap-x-3 opacity-75">
                  <X className="h-6 w-5 flex-none text-red-500" aria-hidden="true" />
                  {t(`problemList.${i}`)}
                </li>
              ))}
            </ul>
             {/* Abstract messy background */}
             <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
                <div className="w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
             </div>
          </div>

          {/* The TrackCost Way */}
          <div className="rounded-3xl bg-primary-900 p-8 ring-1 ring-primary-900 sm:p-10 shadow-2xl relative overflow-hidden text-white transform md:scale-105 transition-transform z-10">
            <h3 className="text-lg font-semibold leading-8 text-white flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-success/20">
                 <Check className="h-5 w-5 text-accent-success" />
              </span>
              {t('solutionTitle')}
            </h3>
            <ul className="mt-8 space-y-4 text-sm leading-6 text-secondary-100">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-accent-success" aria-hidden="true" />
                  {t(`solutionList.${i}`)}
                </li>
              ))}
            </ul>
             {/* Glow effect */}
             <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 rounded-full bg-primary-600 blur-3xl opacity-20 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
