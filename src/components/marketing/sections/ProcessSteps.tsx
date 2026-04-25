'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/design/Section';
import { Button } from '@/components/ui/design/Button';
import { ArrowRight } from 'lucide-react';
import { useLocale } from 'next-intl';

export function ProcessSteps() {
  const t = useTranslations('marketing.home.process');
  const locale = useLocale();

  const steps = [
    { step: "01", title: t('steps.setup.title'), description: t('steps.setup.desc') },
    { step: "02", title: t('steps.create.title'), description: t('steps.create.desc') },
    { step: "03", title: t('steps.track.title'), description: t('steps.track.desc') },
  ];

  return (
    <Section background="dark" size="default">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {steps.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="text-center flex flex-col items-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-600/10 border border-blue-600/30 mb-8">
              <span className="font-heading font-bold text-3xl text-blue-400">{item.step}</span>
            </div>

            <h3 className="font-heading font-bold text-2xl text-white mb-4">
              {item.title}
            </h3>

            <p className="text-slate-400 max-w-sm">
              {item.description}
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
      </div>
    </Section>
  );
}
