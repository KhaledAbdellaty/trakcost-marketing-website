import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeaturesPage from '@/app/[locale]/(marketing)/features/page';
import { NextIntlClientProvider } from 'next-intl';

jest.mock('next-intl/server', () => ({
  getTranslations: jest.fn().mockResolvedValue((key: string) => key),
}));

describe('Features Overview Page', () => {
  it('renders the features overview header', async () => {
    const Component = await FeaturesPage();
    render(
      <NextIntlClientProvider messages={{}} locale="en">
        {Component}
      </NextIntlClientProvider>
    );
    expect(screen.getByText(/Everything You Need/i)).toBeInTheDocument();
  });
});
