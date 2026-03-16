import { render, screen } from '@testing-library/react';
import { PricingPlans } from '@/components/marketing/pricing/PricingPlans';
import { NextIntlClientProvider } from 'next-intl';

const messages = {
  marketing: {
    pricingPage: {
      title: "Simple, Transparent Pricing",
      plans: {
        starter: { name: "Starter", price: "$299" },
        growth: { name: "Growth", price: "$599" },
        enterprise: { name: "Enterprise", price: "Custom" }
      }
    }
  }
};

describe('PricingPlans Component', () => {
  it('renders all three pricing tiers', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <PricingPlans />
      </NextIntlClientProvider>
    );
    
    expect(screen.getByText('Starter')).toBeInTheDocument();
    expect(screen.getByText('$299')).toBeInTheDocument();
    expect(screen.getByText('Growth')).toBeInTheDocument();
    expect(screen.getByText('$599')).toBeInTheDocument();
    expect(screen.getByText('Enterprise')).toBeInTheDocument();
    expect(screen.getByText('Custom')).toBeInTheDocument();
  });
});
