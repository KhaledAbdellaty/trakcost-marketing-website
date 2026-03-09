import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import StoreProvider from '@/components/providers/StoreProvider';
import { GlobalHeader } from '@/components/layout/header/GlobalHeader';
import { GlobalFooter } from '@/components/layout/footer/GlobalFooter';
import { inter, outfit, ibmPlexArabic, cairo } from '@/lib/fonts';
import "../globals.css";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "TrackCost - Modern ERP for Construction",
  description: "Track costs, manage projects, and streamline operations.",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  // Choose fonts based on locale
  const fontClassNames = locale === 'ar' 
    ? `${ibmPlexArabic.variable} ${cairo.variable}` // Arabic Primary, Arabic Heading
    : `${inter.variable} ${outfit.variable}`;       // English Primary, English Heading

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className={`${fontClassNames} antialiased min-h-screen flex flex-col bg-secondary-50`} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <StoreProvider>
            <GlobalHeader />
            <main className="flex-1">
              {children}
            </main>
            <GlobalFooter />
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
