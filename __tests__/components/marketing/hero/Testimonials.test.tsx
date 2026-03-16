import { render, screen } from '@testing-library/react';
import { Testimonials } from '@/components/marketing/hero/Testimonials';

describe('Testimonials Compound Component', () => {
  it('renders testimonials correctly', () => {
    render(
      <Testimonials.Root>
        <Testimonials.Quote>
          &quot;This is the best tool ever.&quot;
          <Testimonials.Author name="John Doe" role="CEO, Acme Corp" />
        </Testimonials.Quote>
      </Testimonials.Root>
    );

    expect(screen.getByText(/This is the best tool ever/i)).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('CEO, Acme Corp')).toBeInTheDocument();
  });
});
