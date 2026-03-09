import { z } from 'zod';

export const leadSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Phone number is required'),
  companyName: z.string().min(2, 'Company name is required'),
  role: z.string().optional(),
  message: z.string().optional(),
  type: z.enum(['contact', 'trial']).default('contact'),
});

export type LeadFormValues = z.infer<typeof leadSchema>;
