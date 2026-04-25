'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/design/Button';
import { Section } from '@/components/ui/design/Section';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function HeroSection() {
  const t = useTranslations('marketing.home.hero');
  const locale = useLocale();

  return (
    <Section background="dark" size="lg" className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-32">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 start-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full mb-8"
        >
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-400">
            {t('badge')}
          </span>
        </motion.div>

        {/* Hero Title */}
        <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl leading-tight text-white mb-6">
          {t('title.line1')}
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            {t('title.line2')}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a href={`https://app.trakcost.com/${locale}/auth/register`} className="w-full sm:w-auto">
            <Button size="lg" variant="primary" fullWidth className="group gap-2">
              {t('primaryCta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:scale-x-[-1]" />
            </Button>
          </a>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" variant="secondary" fullWidth>
              {t('secondaryCta')}
            </Button>
          </Link>
        </div>

        {/* Trust indicators */}
        {/* <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
          {[
            t('trust.walkthrough'),
            t('trust.noCard'),
            t('trust.compliance')
          ].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-sm text-slate-400">
                {feature}
              </span>
            </div>
          ))}
        </div> */}
      </motion.div>
    </Section>
  );
}
