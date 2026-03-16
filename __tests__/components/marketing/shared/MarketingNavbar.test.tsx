import { render, screen } from '@testing-library/react';
import { MarketingNavbar } from '@/components/marketing/shared/MarketingNavbar';
import { NextIntlClientProvider } from 'next-intl';

const messages = {
  marketing: {
    nav: {
      features: 'Features',
      pricing: 'Pricing',
      about: 'About',
      contact: 'Contact',
      demo: 'Book Demo'
    }
  }
};

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <NextIntlClientProvider locale="en" messages={messages}>
      {ui}
    </NextIntlClientProvider>
  );
};

describe('MarketingNavbar Compound Component', () => {
  it('renders all compound sub-components correctly', () => {
    renderWithProviders(
      <MarketingNavbar.Root>
        <MarketingNavbar.Logo />
        <MarketingNavbar.Links />
        <MarketingNavbar.CTA />
      </MarketingNavbar.Root>
    );

    // Verify logo
    expect(screen.getByText('TrakCost')).toBeInTheDocument();

    // Verify navigation links
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();

    // Verify CTA
    expect(screen.getByRole('button', { name: /Book Demo/i })).toBeInTheDocument();
  });
});
