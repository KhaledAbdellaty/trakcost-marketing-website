import { useTranslations } from 'next-intl';
import { Wallet, Users, ShoppingCart, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

export function ProductModulesSection() {
  const t = useTranslations('ProductModules');

  const features = [
    {
      name: t('finance.title'),
      description: t('finance.desc'),
      icon: Wallet,
      image: '/feature-finance.png',
      href: '/features#finance',
    },
    {
      name: t('operations.title'),
      description: t('operations.desc'),
      icon: Users,
      image: '/feature-operations.png',
      href: '/features#operations',
    },
    {
      name: t('procurement.title'),
      description: t('procurement.desc'),
      icon: ShoppingCart,
      image: '/feature-procurement.png',
      href: '/features#procurement',
    },
     {
      name: t('hr.title'),
      description: t('hr.desc'),
      icon: BarChart3,
      image: '/feature-finance.png', // Reusing finance chart for HR as placeholder/similar
      href: '/features#hr',
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollAnimation>
            <h2 className="text-base font-semibold leading-7 text-primary-600">Modules</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl font-heading">
              {t('title')}
            </p>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              {t('subtitle')}
            </p>
          </ScrollAnimation>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature, idx) => (
              <ScrollAnimation key={feature.name} delay={idx * 0.1} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-primary-900">
                  <feature.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-secondary-600">
                  <p className="flex-auto">{feature.description}</p>
                  <div className="mt-6 flex gap-x-3 group cursor-pointer">
                     <div className="relative overflow-hidden rounded-xl bg-gray-50 ring-1 ring-gray-900/10 w-full aspect-video flex items-center justify-center">
                        <img 
                            src={feature.image} 
                            alt={feature.name} 
                            className="w-full h-full object-contain p-2 transform transition-transform duration-500 group-hover:scale-105" 
                        />
                     </div>
                  </div>
                  <p className="mt-6">
                    <Link href={feature.href} className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </ScrollAnimation>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
