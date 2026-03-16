'use server';

import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

const schema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  companyName: z.string().optional(),
  message: z.string().optional(),
  requestType: z.enum(['contact', 'demo', 'pricing']).default('contact')
});

export async function submitLead(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  
  const validated = schema.safeParse(data);
  if (!validated.success) {
    return { success: false, errors: validated.error.flatten().fieldErrors };
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
     return { success: false, error: 'Database connection error' };
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  const { error } = await supabase.from('marketing_leads').insert([
    {
      full_name: validated.data.fullName,
      email: validated.data.email,
      company_name: validated.data.companyName,
      message: validated.data.message,
      request_type: validated.data.requestType
    }
  ]);

  if (error) {
    console.error("Supabase insert error:", error);
    return { success: false, error: 'Failed to submit lead to database.' };
  }

  // Simulated CRM Webhook Call
  try {
    const webhookUrl = process.env.CRM_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validated.data),
      });
    }
  } catch (e) {
    console.error("CRM webhook error:", e);
    // Proceed regardless of webhook success
  }

  return { success: true };
}
