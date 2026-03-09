import { useTranslations } from 'next-intl';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

export function ClientLogos() {
  const t = useTranslations('ClientLogos');

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-center text-lg font-semibold leading-8 text-secondary-600">
            {t('trustedBy')}
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {['Transistor', 'Reform', 'Tuple', 'SavvyCal', 'Statamic'].map((company, index) => (
               <div key={company} className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-400 grayscale hover:grayscale-0 transition-all duration-300 cursor-default">{company}</span>
               </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
