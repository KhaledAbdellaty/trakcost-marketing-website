import { render, screen } from '@testing-library/react';
import { MarketingButton } from '@/components/marketing/shared/MarketingButton';

describe('MarketingButton', () => {
  it('renders with brutalist styling and handles clicks', () => {
    const handleClick = jest.fn();
    
    render(
      <MarketingButton onClick={handleClick} variant="primary">
        Action
      </MarketingButton>
    );

    const button = screen.getByRole('button', { name: 'Action' });
    expect(button).toBeInTheDocument();
    
    // Verify it applies our custom brutalist utility classes (or hardcoded equivalents)
    expect(button.className).toMatch(/border-2/);
    expect(button.className).toMatch(/rounded-none/);
    
    button.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
