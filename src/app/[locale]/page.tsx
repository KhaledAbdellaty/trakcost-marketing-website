import { HeroSection } from '@/components/sections/homepage/HeroSection';
import { ClientLogos } from '@/components/sections/homepage/ClientLogos';
import { ProblemSolutionSection } from '@/components/sections/homepage/ProblemSolutionSection';
import { ProductModulesSection } from '@/components/sections/homepage/ProductModulesSection';
import { HowItWorksSection } from '@/components/sections/homepage/HowItWorksSection';
import { FinalCTASection } from '@/components/sections/homepage/FinalCTASection';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.home' });

  return {
    title: t('title'),
    description: t('pid'),
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientLogos />
      <ProblemSolutionSection />
      <ProductModulesSection />
      <HowItWorksSection />
      <FinalCTASection />
    </>
  );
}
