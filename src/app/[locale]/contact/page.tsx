import { useTranslations } from 'next-intl';
import { LeadForm } from '@/components/forms/LeadForm';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('ContactForm');

  return (
    <div className="bg-secondary-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          {/* Info Side */}
          <div className="pr-8 rtl:pr-0 rtl:pl-8">
            <h2 className="text-3xl font-bold tracking-tight text-primary-900 font-heading">{t('title')}</h2>
            <p className="mt-4 text-lg leading-8 text-secondary-600">
              {t('subtitle')}
            </p>
            
            <dl className="mt-10 space-y-4 text-base leading-7 text-secondary-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <MapPin className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  123 Business Road<br />
                  Cairo, Egypt
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <Phone className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-primary-600" href="tel:+20123456789">+20 123 456 789</a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <Mail className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-primary-600" href="mailto:sales@trackcost.com">sales@trackcost.com</a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-900/5 sm:p-10">
            <LeadForm type="contact" />
          </div>
        </div>
      </div>
    </div>
  );
}
