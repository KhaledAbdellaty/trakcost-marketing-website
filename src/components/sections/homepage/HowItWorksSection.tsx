import { useTranslations } from 'next-intl';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { UserPlus, FileUp, Activity } from 'lucide-react';

export function HowItWorksSection() {
  const t = useTranslations('HowItWorks');

  const steps = [
    { id: '1', icon: UserPlus },
    { id: '2', icon: FileUp },
    { id: '3', icon: Activity },
  ];

  return (
    <section className="bg-secondary-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">How It Works</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl font-heading">
            {t('title')}
          </p>
          <p className="mt-6 text-lg leading-8 text-secondary-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8">
            {steps.map((step, index) => (
              <ScrollAnimation key={step.id} delay={index * 0.2}>
                <div className="relative pl-16 rtl:pl-0 rtl:pr-16">
                  {/* Connector Line (Desktop) */}
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-16 rtl:right-16 rtl:left-auto w-full h-[2px] bg-secondary-200" aria-hidden="true" />
                  )}
                  
                  <div className="absolute top-0 left-0 rtl:right-0 rtl:left-auto flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 shadow-lg z-10 transition-transform hover:scale-110">
                    <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="text-base leading-7">
                    <h3 className="font-semibold text-primary-900">
                      {t(`steps.${step.id}.title`)}
                    </h3>
                    <p className="mt-2 text-secondary-600">
                      {t(`steps.${step.id}.desc`)}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
