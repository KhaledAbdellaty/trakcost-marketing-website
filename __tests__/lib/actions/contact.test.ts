import { submitLead } from '@/lib/actions/contact';

// Mock Supabase client
jest.mock('@supabase/supabase-js', () => {
  const insertMock = jest.fn().mockResolvedValue({ data: { id: 'test-id' }, error: null });
  return {
    createClient: jest.fn(() => ({
      from: jest.fn(() => ({
        insert: insertMock
      }))
    }))
  };
});

// Mock fetch for CRM webhook
global.fetch = jest.fn().mockResolvedValue({
  ok: true,
  json: jest.fn().mockResolvedValue({ success: true })
} as unknown as typeof fetch);

describe('submitLead Server Action', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.NEXT_PUBLIC_SUPABASE_URL = 'http://localhost:54321';
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'anon-key';
  });

  it('submits a lead successfully', async () => {
    const formData = new FormData();
    formData.append('fullName', 'John Doe');
    formData.append('email', 'john@example.com');
    formData.append('requestType', 'contact');

    const result = await submitLead(formData);
    expect(result.success).toBe(true);
  });

  it('fails on missing required fields (email)', async () => {
    const formData = new FormData();
    formData.append('fullName', 'John Doe');
    
    const result = await submitLead(formData);
    expect(result.success).toBe(false);
  });
});
