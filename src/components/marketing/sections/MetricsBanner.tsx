'use client';

import { useTranslations } from 'next-intl';
import { Section } from '@/components/ui/design/Section';

export function MetricsBanner() {
  const t = useTranslations('marketing.home.metrics');

  const stats = [
    { value: "300+", label: t('projects') },
    { value: "$10M+", label: t('invoices') },
    { value: "3", label: t('countries') },
  ];

  return (
    <Section background="dark" size="sm" className="!bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-y border-blue-600/20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-heading font-bold text-5xl md:text-6xl text-white mb-2 tracking-tighter">
              {stat.value}
            </div>
            <p className="text-slate-400 uppercase tracking-widest text-sm font-semibold">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
