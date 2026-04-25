'use server';

import { createClient } from '@supabase/supabase-js';
import { headers } from 'next/headers';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  subject: z.string().optional(),
  message: z.string().optional(),
});

export async function submitLead(formData: {
  name: string;
  email: string;
  subject?: string;
  message?: string;
}) {
  const validated = schema.safeParse(formData);
  if (!validated.success) {
    return { success: false, error: 'Invalid form data' };
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    console.error('[submitLead] Missing Supabase env vars');
    return { success: false, error: 'Server configuration error' };
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey);

  const headersList = await headers();
  const userAgent = headersList.get('user-agent') ?? '';
  const referer = headersList.get('referer') ?? '';

  const { name, email, subject, message } = validated.data;

  const { data: crmRequest, error: requestError } = await supabase
    .schema('internal')
    .from('crm_requests')
    .insert({
      contact_name: name,
      contact_email: email,
      company_name: '',
      company_domain: '',
      message: [subject, message].filter(Boolean).join('\n\n') || null,
      source: 'marketing_site',
      source_path: referer || null,
    })
    .select('id')
    .single();

  if (requestError) {
    console.error('[submitLead] crm_requests insert error:', requestError.message);
    return { success: false, error: 'Failed to submit request' };
  }

  const { error: submissionError } = await supabase
    .schema('internal')
    .from('crm_request_submissions')
    .insert({
      crm_request_id: crmRequest.id,
      payload: { name, email, subject: subject ?? null, message: message ?? null },
      user_agent: userAgent || null,
    });

  if (submissionError) {
    console.error('[submitLead] crm_request_submissions insert error:', submissionError.message);
    // Non-fatal — the main record was saved
  }

  return { success: true };
}
