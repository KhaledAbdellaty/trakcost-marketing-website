import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FeatureDetailPage } from '@/components/marketing/feature-grid/FeatureDetailPage';

describe('FeatureDetailPage', () => {
  it('renders all compound components properly', () => {
    render(
      <FeatureDetailPage.Root data-testid="root">
        <FeatureDetailPage.Hero data-testid="hero">Hero Content</FeatureDetailPage.Hero>
        <FeatureDetailPage.Content data-testid="content">Main Content</FeatureDetailPage.Content>
      </FeatureDetailPage.Root>
    );
    expect(screen.getByTestId('root')).toBeInTheDocument();
    expect(screen.getByTestId('hero')).toHaveTextContent('Hero Content');
    expect(screen.getByTestId('content')).toHaveTextContent('Main Content');
  });
});
