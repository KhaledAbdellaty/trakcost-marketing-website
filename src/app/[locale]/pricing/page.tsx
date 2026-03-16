'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { MarketingHeader } from '@/components/marketing/layout/MarketingHeader';
import { MarketingFooter } from '@/components/marketing/layout/MarketingFooter';
import { Section } from '@/components/ui/design/Section';
import { Typography } from '@/components/ui/design/Typography';
import { Button } from '@/components/ui/design/Button';
import { Zap, CheckCircle2, Minus, Plus, HelpCircle } from 'lucide-react';
import { CtaSection } from '@/components/marketing/sections/CtaSection';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function PricingPage() {
  const t = useTranslations('marketing.pricingPage');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const planKeys = ['free', 'pro', 'enterprise'] as const;
  const rowKeys = ['projects', 'users', 'accounting', 'tax', 'api', 'support'] as const;
  const faqKeys = ['1', '2', '3', '4'] as const;

  return (
    <>
      <MarketingHeader />
      <div className="flex flex-col min-h-screen bg-[#0f172a]">
        {/* Hero Section */}
        <Section background="dark" size="lg" className="relative overflow-hidden pt-16 pb-16 md:pt-16 md:pb-24">
          <div className="absolute top-0 start-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-6 block text-blue-400 text-xs font-semibold tracking-widest uppercase italic">
                {t('hero.badge')}
              </p>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight text-white mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed text-slate-400 max-w-2xl mx-auto mb-12">
                {t('hero.subtitle')}
              </p>

              {/* Billing Toggle */}
              <div className="flex flex-col items-center gap-6">
                <div className="inline-flex items-center p-1 bg-[#161b27] border border-slate-800 rounded-2xl">
                  <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                      billingCycle === 'monthly'
                        ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {t('hero.billing.monthly')}
                  </button>
                  <button
                    onClick={() => setBillingCycle('annual')}
                    className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                      billingCycle === 'annual'
                        ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {t('hero.billing.annual')}
                  </button>
                </div>
                
                <AnimatePresence mode="wait">
                  {billingCycle === 'annual' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
                    >
                      <Zap className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm font-bold text-emerald-400 uppercase tracking-tight">
                        {t('hero.billing.save')}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Pricing Cards */}
        <Section background="dark" size="default" className="pb-16 py-16 md:py-16">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6"
          >
            {planKeys.map((key) => {
              const highlighted = key === 'pro';
              const price = key === 'pro' && billingCycle === 'annual' 
                ? t('plans.pro.priceAnnual') 
                : t(`plans.${key}.price`);
              const features = t.raw(`plans.${key}.features`);
              const badge = t.has(`plans.${key}.badge`) ? t(`plans.${key}.badge`) : null;

              return (
                <motion.div
                  key={key}
                  variants={item}
                  whileHover={{ y: -8 }}
                  className={`relative flex flex-col rounded-3xl p-8 transition-all duration-500 overflow-hidden ${
                    highlighted
                      ? 'bg-[#1e293b] border-2 border-blue-500 shadow-2xl shadow-blue-600/10'
                      : 'bg-[#161b27] border border-slate-800 hover:border-blue-600/50'
                  }`}
                >
                  {highlighted && (
                    <div className="absolute top-0 right-0 p-4">
                      <div className="bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                        {badge}
                      </div>
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="font-heading font-bold text-2xl text-white mb-2">
                      {t(`plans.${key}.name`)}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {t(`plans.${key}.desc`)}
                    </p>
                  </div>

                  <div className="mb-8 flex items-baseline gap-1">
                    {key !== 'enterprise' ? (
                      <>
                        <span className="text-5xl font-black text-white">${price}</span>
                        <span className="text-slate-500 font-bold text-sm">/user/mo</span>
                      </>
                    ) : (
                      <span className="text-4xl font-black text-white">{price}</span>
                    )}
                  </div>

                  <ul className="space-y-4 mb-10 flex-grow">
                    {Object.values(features).map((feature: any) => (
                      <li key={feature} className="flex items-start gap-3 group">
                        <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-colors ${highlighted ? 'text-blue-400' : 'text-emerald-500/80'}`} />
                        <span className="text-sm text-slate-300 leading-tight group-hover:text-white transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={highlighted ? 'primary' : 'outline'}
                    size="lg"
                    className={`w-full font-bold tracking-tight rounded-2xl py-6 ${
                      highlighted 
                        ? 'bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/20 border-none' 
                        : 'border-slate-800 text-white hover:border-blue-600 transition-all'
                    }`}
                  >
                    {t(`plans.${key}.cta`)}
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>
        </Section>

        {/* Comparison Table */}
        <Section background="dark" size="default" className="pb-24 py-24 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
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
              className="overflow-x-auto rounded-3xl border border-slate-800 bg-[#161b27]/30 backdrop-blur-sm shadow-2xl"
            >
              <table className="w-full text-start border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-slate-800/80">
                    <th className="p-8 text-slate-500 font-bold text-[10px] uppercase tracking-widest text-start">
                      {t('comparison.headers.feature')}
                    </th>
                    <th className="p-8 text-white font-bold text-sm text-center bg-slate-800/20">
                      {t('comparison.headers.free')}
                    </th>
                    <th className="p-8 text-blue-400 font-bold text-sm text-center bg-blue-600/5">
                      {t('comparison.headers.pro')}
                    </th>
                    <th className="p-8 text-white font-bold text-sm text-center bg-slate-800/20">
                      {t('comparison.headers.enterprise')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rowKeys.map((rowKey) => (
                    <tr key={rowKey} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-all group">
                      <td className="p-8 flex items-center gap-3">
                        <span className="text-slate-200 font-medium text-sm group-hover:text-blue-400 transition-colors">
                          {t(`comparison.rows.${rowKey}.label`)}
                        </span>
                      </td>
                      <td className="p-8 text-center bg-slate-800/20">
                        {['Accounting Suite', 'Tax Compliance', 'API Access'].includes(t(`comparison.rows.${rowKey}.label`)) && t(`comparison.rows.${rowKey}.free`) === 'No' ? (
                          <Minus className="w-5 h-5 text-slate-700 mx-auto" />
                        ) : (
                          <span className="text-sm font-bold text-slate-400">{t(`comparison.rows.${rowKey}.free`)}</span>
                        )}
                      </td>
                      <td className="p-8 text-center bg-blue-600/5">
                        {t(`comparison.rows.${rowKey}.pro`) === 'Yes' ? (
                          <CheckCircle2 className="w-5 h-5 text-blue-500 mx-auto" />
                        ) : (
                          <span className="text-sm font-bold text-blue-400">{t(`comparison.rows.${rowKey}.pro`)}</span>
                        )}
                      </td>
                      <td className="p-8 text-center bg-slate-800/20">
                         {t(`comparison.rows.${rowKey}.enterprise`) === 'Yes' ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" />
                        ) : (
                          <span className="text-sm font-bold text-slate-200">{t(`comparison.rows.${rowKey}.enterprise`)}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section background="dark" size="default" className="pb-24 py-24 md:py-24 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute bottom-0 end-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mx-auto mb-6">
                <HelpCircle className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                {t('faqs.title')}
              </h2>
            </motion.div>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6"
            >
              {faqKeys.map((key) => (
                <motion.div 
                  key={key}
                  variants={item}
                  className="bg-[#161b27] border border-slate-800 rounded-3xl p-8 hover:border-blue-600/30 transition-all group"
                >
                  <h4 className="font-heading font-bold text-xl text-white mb-4 flex items-center gap-3">
                    <span className="text-blue-500/50 text-sm font-black italic">Q.</span>
                    {t(`faqs.items.${key}.q`)}
                  </h4>
                  <p className="text-slate-400 leading-relaxed ps-8 border-s border-slate-800 group-hover:border-blue-600/30 transition-colors">
                    {t(`faqs.items.${key}.a`)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Section>

        {/* Global CTA Section */}
        <CtaSection 
          title={t('cta.title')}
          subtitle={t('cta.subtitle')}
          primaryButton={{
            label: t('cta.primary'),
            href: '/contact',
            variant: 'primary',
            showArrow: true
          }}
          secondaryButton={{
            label: t('cta.secondary'),
            href: '/contact',
            variant: 'secondary'
          }}
        />
      </div>
      <MarketingFooter />
    </>
  );
}
