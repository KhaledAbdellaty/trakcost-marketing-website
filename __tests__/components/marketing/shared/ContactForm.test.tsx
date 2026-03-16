import { render, screen } from '@testing-library/react';
import { ContactForm } from '@/components/marketing/shared/ContactForm';
import { NextIntlClientProvider } from 'next-intl';

const messages = {
  marketing: {
    contactForm: {
      title: "Contact Sales",
      fields: {
        fullName: "Full Name",
        email: "Business Email"
      },
      submit: "Send Message"
    }
  }
};

describe('ContactForm Component', () => {
  it('renders correctly with brutalist inputs and submit button', () => {
    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <ContactForm />
      </NextIntlClientProvider>
    );
    
    expect(screen.getByText('Contact Sales')).toBeInTheDocument();
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Business Email')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument();
  });
});
