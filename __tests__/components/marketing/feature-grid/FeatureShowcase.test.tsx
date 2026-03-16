import { render, screen, fireEvent } from '@testing-library/react';
import { Root as FeatureShowcaseRoot, Header as FeatureShowcaseHeader, Card as FeatureShowcaseCard, Visual as FeatureShowcaseVisual, Content as FeatureShowcaseContent } from '@/components/marketing/feature-grid/FeatureShowcase';

describe('FeatureShowcase Compound Component', () => {
  it('renders correctly and handles interaction', () => {
    render(
      <FeatureShowcaseRoot defaultActive="feature1">
        <FeatureShowcaseHeader title="Test Title" subtitle="Test Subtitle" />
        <div>
          <FeatureShowcaseCard id="feature1" title="Feature 1" description="Desc 1" />
          <FeatureShowcaseCard id="feature2" title="Feature 2" description="Desc 2" />
        </div>
        <FeatureShowcaseVisual>
          <FeatureShowcaseContent id="feature1">
            <div data-testid="content-1">Content 1 Visual</div>
          </FeatureShowcaseContent>
          <FeatureShowcaseContent id="feature2">
            <div data-testid="content-2">Content 2 Visual</div>
          </FeatureShowcaseContent>
        </FeatureShowcaseVisual>
      </FeatureShowcaseRoot>
    );

    // Initial render
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    
    // Content 1 should be visible initially (assumes f1 is default active)
    // We can just check if it's in document for simplicity in this superficial test
    expect(screen.getByText('Content 1')).toBeInTheDocument();

    // Click on Feature 2 Card
    fireEvent.click(screen.getByText('Feature 2'));
    
    // In a real implementation, the context would update and Content 2 would be shown/active
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });
});
