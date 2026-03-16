import { MarketingHeader } from '@/components/marketing/layout/MarketingHeader';
import { MarketingFooter } from '@/components/marketing/layout/MarketingFooter';
import { HeroSection } from '@/components/marketing/sections/HeroSection';
import { TrustBanner } from '@/components/marketing/sections/TrustBanner';
import { SolutionGrid } from '@/components/marketing/sections/SolutionGrid';
import { FeaturesHighlight } from '@/components/marketing/sections/FeaturesHighlight';
import { ProcessSteps } from '@/components/marketing/sections/ProcessSteps';
import { MetricsBanner } from '@/components/marketing/sections/MetricsBanner';
import { CtaSection } from '@/components/marketing/sections/CtaSection';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('marketing.home');
  return (
    <>
      <MarketingHeader />
      <div className="flex flex-col min-h-screen">
        <HeroSection />
        <TrustBanner />
        <SolutionGrid />
        <FeaturesHighlight />
        <ProcessSteps />
        <MetricsBanner />
        <CtaSection  title={t('cta.title')}
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
          }} />
      </div>
      <MarketingFooter />
    </>
  );
}
