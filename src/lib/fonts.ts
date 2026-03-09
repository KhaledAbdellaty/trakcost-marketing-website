import { Inter, Outfit, IBM_Plex_Sans_Arabic, Cairo } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans', // Reusing the same variable name for convenient switching
  display: 'swap',
});

export const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-heading',
  display: 'swap',
});
