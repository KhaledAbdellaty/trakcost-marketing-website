import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function GlobalFooter() {
  const t = useTranslations('Footer');
  const tCommon = useTranslations('Common');

  return (
    <footer className="border-t border-secondary-50/10 bg-primary-950 text-secondary-50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand & Newsletter */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600">
                <span className="text-lg font-bold text-white">T</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-heading">
                TrackCost
              </span>
            </Link>
            <p className="text-sm leading-6 text-secondary-600 max-w-sm">
              {t('description')}
            </p>
            <div className="flex space-x-6 rtl:space-x-reverse">
               {/* Social placeholders */}
               <a href="#" className="text-secondary-600 hover:text-white"><span className="sr-only">Facebook</span><Facebook className="h-5 w-5"/></a>
               <a href="#" className="text-secondary-600 hover:text-white"><span className="sr-only">Twitter</span><Twitter className="h-5 w-5"/></a>
               <a href="#" className="text-secondary-600 hover:text-white"><span className="sr-only">LinkedIn</span><Linkedin className="h-5 w-5"/></a>
               <a href="#" className="text-secondary-600 hover:text-white"><span className="sr-only">Instagram</span><Instagram className="h-5 w-5"/></a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">{t('product')}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/features" className="text-sm leading-6 text-secondary-600 hover:text-white">{t('links.features')}</Link></li>
                  <li><Link href="/pricing" className="text-sm leading-6 text-secondary-600 hover:text-white">{t('links.pricing')}</Link></li>
                  <li><Link href="/enterprise" className="text-sm leading-6 text-secondary-600 hover:text-white">{t('links.enterprise')}</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">{t('company')}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/about" className="text-sm leading-6 text-secondary-600 hover:text-white">{t('links.about')}</Link></li>
                  <li><Link href="/careers" className="text-sm leading-6 text-secondary-600 hover:text-white">{t('links.careers')}</Link></li>
                  <li><Link href="/contact" className="text-sm leading-6 text-secondary-600 hover:text-white">{t('links.contact')}</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">{t('resources')}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/blog" className="text-sm leading-6 text-secondary-600 hover:text-white">{t('links.blog')}</Link></li>
                  <li><Link href="/changelog" className="text-sm leading-6 text-secondary-600 hover:text-white">{t('links.changelog')}</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">{t('legal')}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/privacy" className="text-sm leading-6 text-secondary-600 hover:text-white">{t('links.privacy')}</Link></li>
                  <li><Link href="/terms" className="text-sm leading-6 text-secondary-600 hover:text-white">{t('links.terms')}</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-secondary-600">{tCommon('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
