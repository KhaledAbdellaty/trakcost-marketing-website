'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { Section } from '@/components/ui/design/Section';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/design/Button';
import { useLocale } from 'next-intl';

export function FeaturesHighlight() {
  const t = useTranslations('marketing.home.features');
  const locale = useLocale();

  const features = [
    {
      title: t('items.projects.title'),
      description: t('items.projects.desc')
    },
    {
      title: t('items.invoicing.title'),
      description: t('items.invoicing.desc')
    },
    {
      title: t('items.purchaseOrders.title'),
      description: t('items.purchaseOrders.desc')
    },
    {
      title: t('items.expenses.title'),
      description: t('items.expenses.desc')
    }
  ];

  return (
    <Section background="dark" size="default" className="bg-gradient-to-b from-transparent to-slate-900/30">
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
        <p className="mb-4 block text-blue-400 text-xs font-semibold tracking-widest uppercase">
          {t('label')}
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
          {t('title')}
        </h2>
        <p className="text-lg text-slate-400">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#161b27] border border-slate-800 rounded-2xl p-8 hover:border-blue-600/50 hover:shadow-lg hover:shadow-blue-600/5 transition-all group"
          >
            <h4 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-blue-400 transition-colors">
              {feature.title}
            </h4>
            <p className="text-slate-400">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-row items-center gap-4 mt-12 md:mt-16 justify-center">
        <a href={`https://app.trakcost.com/${locale}/auth/register`} className="w-full sm:w-auto">
          <Button size="lg" variant="primary" fullWidth className="group gap-2">
            {t('primaryCta')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:scale-x-[-1]" />
          </Button>
        </a>
        <Link href="/features" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold tracking-wide transition-colors group">
          {t('viewAll')}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:scale-x-[-1] transition-transform" />
        </Link>
      </div>

    </Section>
  );
}
