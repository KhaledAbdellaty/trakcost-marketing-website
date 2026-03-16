import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/marketing/hero/Hero';

describe('Hero Compound Component', () => {
  it('renders all compound sub-components correctly', () => {
    render(
      <Hero.Root>
        <Hero.Tagline>ERP Reimagined</Hero.Tagline>
        <Hero.Subtitle>For the construction industry.</Hero.Subtitle>
        <Hero.CTA>
          <button>Get Started</button>
        </Hero.CTA>
        <Hero.Visual>
          <img src="/hero-img.jpg" alt="Hero visual" />
        </Hero.Visual>
      </Hero.Root>
    );

    expect(screen.getByText('ERP Reimagined')).toBeInTheDocument();
    expect(screen.getByText('For the construction industry.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Get Started/i })).toBeInTheDocument();
    expect(screen.getByAltText('Hero visual')).toBeInTheDocument();
  });
});
