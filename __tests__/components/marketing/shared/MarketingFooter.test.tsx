import { render, screen } from '@testing-library/react';
import { MarketingFooter } from '@/components/marketing/shared/MarketingFooter';

describe('MarketingFooter Compound Component', () => {
  it('renders all compound sub-components correctly', () => {
    render(
      <MarketingFooter.Root>
        <MarketingFooter.Column title="Product">
          <MarketingFooter.Link href="/features">Features</MarketingFooter.Link>
          <MarketingFooter.Link href="/pricing">Pricing</MarketingFooter.Link>
        </MarketingFooter.Column>
        <MarketingFooter.Legal />
      </MarketingFooter.Root>
    );

    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(screen.getByText('Features')).toHaveAttribute('href', '/features');
    expect(screen.getByText('Pricing')).toHaveAttribute('href', '/pricing');
    expect(screen.getByText(/TrakCost. All rights reserved/i)).toBeInTheDocument();
  });
});
