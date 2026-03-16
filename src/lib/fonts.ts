import { Inter, Plus_Jakarta_Sans, IBM_Plex_Sans_Arabic, Cairo } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-heading',
  display: 'swap',
});
