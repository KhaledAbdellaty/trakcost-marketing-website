import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

export function HeroSection() {
  const t = useTranslations('HomePage');

  return (
    <section className="relative overflow-hidden bg-primary-900 pt-16 pb-20 md:pt-32 md:pb-40">
      
      {/* Background Gradient Elements */}
      <div className="absolute top-0 left-1/2 -ml-[40rem] -mt-16 w-[80rem] h-[40rem] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-success blur-[100px] rounded-full mix-blend-screen animate-pulse" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation>
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-primary-600/10 px-3 py-1 text-sm font-medium text-primary-600 ring-1 ring-inset ring-primary-600/20 mb-8 backdrop-blur-sm bg-white/5 border-white/10 text-white">
              <span className="flex h-2 w-2 rounded-full bg-accent-success mr-2 animate-pulse"></span>
              Now Available in MENA Region
            </div>

            {/* Heading */}
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl max-w-4xl mx-auto leading-tight">
              {t('title')}
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg leading-8 text-secondary-50/80 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="rounded-full px-8 py-6 text-base shadow-xl shadow-primary-600/20 border-white/10" asChild>
                <Link href="/start-trial">{t('getStarted')}</Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-base bg-white/5 text-white border-white/10 hover:bg-white/10 hover:text-white" asChild>
                <Link href="/contact">{t('contactSales')}</Link>
              </Button>
            </div>
        </ScrollAnimation>

        {/* Visual Mockup */}
        <ScrollAnimation delay={0.2} className="mt-16 md:mt-24 relative z-10 -mb-48 md:-mb-72">
           <div className="bg-secondary-600/5 rounded-2xl border border-white/10 p-2 md:p-4 backdrop-blur-md shadow-2xl">
             <div className="rounded-xl overflow-hidden relative shadow-inner border border-white/5 bg-secondary-900">
                <img 
                    src="/hero-dashboard.png" 
                    alt="TrackCost Dashboard" 
                    className="w-full h-auto max-h-[600px] object-cover"
                />
             </div>
           </div>
           
           {/* Glow behind mockup */}
           <div className="absolute -inset-4 bg-primary-600/30 blur-3xl -z-10 rounded-full opacity-50"></div>
        </ScrollAnimation>
      </div>
      
      {/* Bottom fade to content */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
