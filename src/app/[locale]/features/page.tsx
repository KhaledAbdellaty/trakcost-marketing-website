'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { MarketingHeader } from '@/components/marketing/layout/MarketingHeader';
import { MarketingFooter } from '@/components/marketing/layout/MarketingFooter';
import { Section } from '@/components/ui/design/Section';
import { BarChart3, Calculator, FileText, ShoppingCart, Receipt, CheckCircle2 } from 'lucide-react';
import { CtaSection } from '@/components/marketing/sections/CtaSection';

export default function FeaturesPage() {
  const t = useTranslations('marketing.featuresPage');
  const locale = useLocale();

  const featureKeys = ['projects', 'accounting', 'invoicing', 'procurement', 'expenses'] as const;
  
  const icons = {
    projects: BarChart3,
    accounting: Calculator,
    invoicing: FileText,
    procurement: ShoppingCart,
    expenses: Receipt,
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <MarketingHeader />
      <div className="flex flex-col min-h-screen bg-[#0f172a]">
        {/* Hero Section */}
        <Section background="dark" size="lg" className="relative overflow-hidden pt-16 pb-16 md:pt-16 md:pb-24">
          {/* Decorative gradient blur */}
          <div className="absolute top-0 start-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <p className="mb-6 block text-blue-400 text-xs font-semibold tracking-widest uppercase">
              {t('hero.badge')}
            </p>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-5xl tracking-tight leading-tight text-white mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-slate-400 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </motion.div>
        </Section>

        {/* Features Grid */}
        <Section background="dark" size="default" className="pb-16 py-16 md:py-16">
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {featureKeys.map((key) => {
              const Icon = icons[key];
              const badge = t.has(`items.${key}.badge`) ? t(`items.${key}.badge`) : null;
              const highlights = t.raw(`items.${key}.highlights`);
              const highlightKeys = Object.keys(highlights);

              return (
                <motion.div 
                  key={key} 
                  variants={item}
                  whileHover={{ y: -8 }}
                  className="bg-[#161b27] border border-slate-800 rounded-2xl p-8 hover:border-blue-600/50 hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="w-12 h-12 mb-6 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  {badge && (
                    <div className="absolute top-6 end-6 bg-blue-600/10 border border-blue-600/20 px-3 py-1 rounded-full">
                      <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">{badge}</span>
                    </div>
                  )}

                  <h4 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {t(`items.${key}.title`)}
                  </h4>
                  <p className="text-slate-400 mb-6 line-clamp-3">
                    {t(`items.${key}.description`)}
                  </p>

                  <ul className="space-y-3">
                    {highlightKeys.map((hKey) => (
                      <li key={hKey} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm text-slate-500">
                          {highlights[hKey]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </Section>

        {/* Comparison Section */}
        <Section background="dark" size="default" className="pb-16 py-24 md:py-24">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                {t('comparison.title')}
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                {t('comparison.subtitle')}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="overflow-x-auto rounded-2xl border border-slate-800 bg-[#161b27]/30"
            >
              <table className="w-full text-start border-collapse">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="p-6 text-slate-400 font-semibold text-sm text-start w-1/3">
                      {t('comparison.headers.features')}
                    </th>
                    <th className="p-6 text-blue-400 font-bold text-sm text-center bg-blue-600/5 border-x border-slate-800">
                      {t('comparison.headers.trakcost')}
                    </th>
                    <th className="p-6 text-slate-500 font-semibold text-sm text-center">
                      {t('comparison.headers.procore')}
                    </th>
                    <th className="p-6 text-slate-500 font-semibold text-sm text-center">
                      {t('comparison.headers.buildertrend')}
                    </th>
                    <th className="p-6 text-slate-500 font-semibold text-sm text-center">
                      {t('comparison.headers.monday')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {(['boq', 'tax', 'billing', 'procurement', 'budgeting'] as const).map((rowKey) => (
                    <tr key={rowKey} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors group">
                      <td className="p-6 text-white font-medium text-sm">
                        {t(`comparison.rows.${rowKey}.label`)}
                      </td>
                      <td className="p-6 text-center bg-blue-600/5 border-x border-slate-800">
                        <div className="flex flex-col items-center gap-1">
                          <CheckCircle2 className="w-5 h-5 text-blue-500" />
                          <span className="text-[10px] font-bold text-blue-400/80 uppercase tracking-tighter">
                            {t(`comparison.rows.${rowKey}.trakcost`)}
                          </span>
                        </div>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-xs text-slate-500 font-medium whitespace-nowrap">
                          {t(`comparison.rows.${rowKey}.procore`)}
                        </span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-xs text-slate-500 font-medium whitespace-nowrap">
                          {t(`comparison.rows.${rowKey}.buildertrend`)}
                        </span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="text-xs text-slate-500 font-medium whitespace-nowrap">
                          {t(`comparison.rows.${rowKey}.monday`)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </Section>

        {/* Global CTA Section */}
        <CtaSection 
          title={t('cta.title')}
          subtitle={t('cta.subtitle')}
          primaryButton={{
            label: t('cta.primary'),
            href: `https://app.trakcost.com/${locale}/auth/register`,
            variant: 'primary',
            showArrow: true
          }}
          secondaryButton={{
            label: t('cta.secondary'),
            href: '/pricing',
            variant: 'secondary'
          }}
        />
      </div>
      <MarketingFooter />
    </>
  );
}

