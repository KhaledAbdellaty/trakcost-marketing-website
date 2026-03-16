'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/design/Section';
import { BarChart3, Shield, Zap } from 'lucide-react';

export function SolutionGrid() {
  const t = useTranslations('marketing.home.solution');

  const cards = [
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
      title: t('cards.unified.title'),
      description: t('cards.unified.desc'),
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: t('cards.accounting.title'),
      description: t('cards.accounting.desc'),
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: t('cards.tax.title'),
      description: t('cards.tax.desc'),
    }
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
          {t('description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -8 }}
            className="group relative bg-[#161b27] border border-slate-800 rounded-2xl p-8 hover:border-blue-600/50 hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              {card.icon}
            </div>
            
            <h4 className="font-heading font-bold text-xl text-white mb-4">
              {card.title}
            </h4>
            
            <p className="text-slate-400">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
