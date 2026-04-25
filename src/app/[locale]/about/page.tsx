'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MarketingHeader } from '@/components/marketing/layout/MarketingHeader';
import { MarketingFooter } from '@/components/marketing/layout/MarketingFooter';
import { Section } from '@/components/ui/design/Section';
import { Target, Lightbulb, Users, Globe2, ArrowRight } from 'lucide-react';
import { CtaSection } from '@/components/marketing/sections/CtaSection';

export default function AboutPage() {
  const t = useTranslations('marketing.aboutPage');
  return (
    <>
      <MarketingHeader />
      <div className="flex flex-col min-h-screen">

        {/* Hero Section */}
        <Section background="dark" size="sm" className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 py-24 md:py-24">
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

        {/* Quote Section */}
        <Section background="dark" size="sm" className="py-16 md:py-20">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative bg-[#161b27] border-s-4 border-blue-600 rounded-3xl p-10 md:p-16 shadow-2xl"
            >
              <h3 className="font-heading font-bold text-2xl md:text-3xl italic text-white mb-8 leading-relaxed">
                {t('quote.text')}
              </h3>
              <p className="text-lg text-slate-400">
                {t('quote.desc')}
              </p>
            </motion.div>
          </div>
        </Section>

        {/* Mission & Vision */}
        <Section background="dark" size="sm" className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative bg-[#161b27] border border-slate-800 rounded-3xl p-10 hover:border-blue-600/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-8 text-blue-500 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4 group-hover:text-blue-400 transition-colors">
                {t('mission.title')}
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                {t('mission.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative bg-[#161b27] border border-slate-800 rounded-3xl p-10 hover:border-blue-600/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-8 text-blue-500 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4 group-hover:text-blue-400 transition-colors">
                {t('vision.title')}
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                {t('vision.desc')}
              </p>
            </motion.div>
          </div>
        </Section>

        {/* The Chaos Section */}
        <Section background="dark" size="sm" className="py-16 md:py-24 bg-[#0f172a]/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              {t('chaos.title')}
            </h2>
            <p className="text-xl text-slate-400">
              {t('chaos.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {['scattered', 'compliance', 'budget', 'procurement'].map((key, index) => (
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

        {/* The TrakCost Advantage */}
        <Section background="dark" size="sm" className="py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              {t('advantage.title')}
            </h2>
            <p className="text-xl text-slate-400">
              {t('advantage.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {['accounting', 'compliance', 'tracking'].map((key, index) => {
              const advantageIcons = { accounting: Users, compliance: Globe2, tracking: Target };
              const Icon = advantageIcons[key as keyof typeof advantageIcons];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-[#161b27] border border-slate-800 rounded-3xl p-10 hover:shadow-2xl hover:shadow-blue-600/5 hover:border-blue-600/50 transition-all group h-full"
                >
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-14 h-14 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="font-heading font-bold text-4xl text-white/10 tracking-tighter group-hover:text-blue-600/20 transition-colors">
                      {t(`advantage.items.${key}.number`)}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {t(`advantage.items.${key}.title`)}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    {t(`advantage.items.${key}.desc`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Section>

        {/* Global CTA Section */}
        <CtaSection
          title={t('cta.title')}
          subtitle={t('cta.subtitle')}
          primaryButton={{
            label: t('cta.primary'),
            href: `/contact`,
            variant: 'primary',
            showArrow: true
          }}
          secondaryButton={{
            label: t('cta.secondary'),
            href: '/features',
            variant: 'secondary'
          }}
        />

      </div>
      <MarketingFooter />
    </>
  );
}
