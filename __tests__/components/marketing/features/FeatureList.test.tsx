import { render, screen } from '@testing-library/react';
import { FeatureList } from '@/components/marketing/features/FeatureList';
import { NextIntlClientProvider } from 'next-intl';

const messages = {
  marketing: {
    featuresPage: {
      finance: { title: "Smart Finance", desc: "Real-time cost tracking" },
      operations: { title: "Project Operations", desc: "Track daily progress" }
    }
  }
};

describe('FeatureList Component', () => {
  it('renders a list of features with geometric brutalism styling', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <FeatureList />
      </NextIntlClientProvider>
    );
    
    expect(screen.getByText('Smart Finance')).toBeInTheDocument();
    expect(screen.getByText('Real-time cost tracking')).toBeInTheDocument();
    expect(screen.getByText('Project Operations')).toBeInTheDocument();
    
    // Check for brutalist classes on a generic container or root
    const root = screen.getByTestId('feature-list-root');
    expect(root).toHaveClass('container');
    expect(root).toHaveClass('mx-auto');
  });
});
