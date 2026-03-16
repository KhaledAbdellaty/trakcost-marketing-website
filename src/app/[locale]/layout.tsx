import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { inter, jakarta, ibmPlexArabic, cairo } from '@/lib/fonts';
import "../globals.css";
import { Metadata } from 'next';
import { PageTransition } from '@/components/ui/PageTransition';

export const metadata: Metadata = {
  title: "TrackCost - Modern ERP for Construction",
  description: "Track costs, manage projects, and streamline operations.",
  icons: {
    icon: '/logo.png?v=1',
    apple: '/logo.png?v=1',
  },
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
    : `${inter.variable} ${jakarta.variable}`;       // English Primary, English Heading

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className={`${fontClassNames} antialiased min-h-screen flex flex-col bg-brand-light text-brand-dark`} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <main className="flex-1">
            {/* <PageTransition> */}
              {children}
            {/* </PageTransition> */}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

