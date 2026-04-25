'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/design/Section';

const ITEM_KEYS = ['scattered', 'compliance', 'budget', 'procurement'] as const;

interface ChaosSectionProps {
  namespace: string;
}

export function ChaosSection({ namespace }: ChaosSectionProps) {
  const t = useTranslations(namespace);

  return (
    <Section background="dark" size="default">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
          {t('chaos.title')}
        </h2>
        <p className="text-lg text-slate-400">
          {t('chaos.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {ITEM_KEYS.map((key, index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-[#161b27] border border-slate-800 rounded-2xl p-8 hover:border-red-500/30 transition-all group"
          >
            <h4 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-red-400 transition-colors">
              {t(`chaos.items.${key}.title`)}
            </h4>
            <p className="text-slate-400 leading-relaxed">
              {t(`chaos.items.${key}.desc`)}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
