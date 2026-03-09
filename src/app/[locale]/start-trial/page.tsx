import { useTranslations } from 'next-intl';
import { LeadForm } from '@/components/forms/LeadForm';

export default function StartTrialPage() {
  const t = useTranslations('ContactForm');

  return (
    <div className="bg-white min-h-screen flex items-center justify-center py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 flex flex-col items-center">
        
        <div className="max-w-xl text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-primary-900 font-heading">
            {t('trialTitle')}
          </h1>
          <p className="mt-4 text-lg leading-8 text-secondary-600">
            {t('trialSubtitle')}
          </p>
        </div>

        <div className="w-full max-w-xl bg-secondary-50 p-8 rounded-2xl shadow-lg ring-1 ring-secondary-200/50">
          <LeadForm type="trial" />
        </div>

      </div>
    </div>
  );
}
