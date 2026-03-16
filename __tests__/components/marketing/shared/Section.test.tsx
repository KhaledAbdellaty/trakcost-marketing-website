import { render, screen } from '@testing-library/react';
import { Root as SectionRoot, Header as SectionHeader, Content as SectionContent } from '@/components/marketing/shared/Section';

describe('Section Compound Component', () => {
  it('renders header and content correctly with brutalist spacing', () => {
    render(
      <SectionRoot data-testid="section-root">
        <SectionHeader title="Testing Header" subtitle="Test Sub" data-testid="section-header" />
        <SectionContent data-testid="section-content">
          <p>Content goes here</p>
        </SectionContent>
      </SectionRoot>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByTestId('content-inner')).toBeInTheDocument();
    
    // The root should be a section element
    const section = screen.getByRole('region') || document.querySelector('section');
    expect(section).toBeInTheDocument();
  });
});
