'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useTransition } from 'react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLocale}
      disabled={isPending}
      className="gap-2"
    >
      <Globe className="h-4 w-4" />
      <span className="uppercase">{locale === 'en' ? 'العربية' : 'English'}</span>
    </Button>
  );
}
