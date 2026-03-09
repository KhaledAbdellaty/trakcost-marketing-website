import { apiSlice } from '@/features/api/apiSlice';
import { LeadFormValues } from './schemas';

export const leadApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createLead: builder.mutation<void, LeadFormValues>({
      queryFn: async (arg) => {
        // In a real app, this would use supbase.from('leads').insert(arg)
        // For now, we simulate a successful API call
        console.log('Lead Submitted:', arg);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return { data: undefined };
      },
    }),
  }),
});

export const { useCreateLeadMutation } = leadApi;
