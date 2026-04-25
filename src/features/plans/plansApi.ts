import { apiSlice } from '@/features/api/apiSlice';
import { Plan } from './types';

export const plansApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPlans: builder.query<Plan[], void>({
      queryFn: async () => {
        try {
          const res = await fetch('/api/plans');
          if (!res.ok) {
            const body = await res.json().catch(() => ({}));
            return { error: { status: res.status, error: body.error ?? 'Failed to fetch plans' } };
          }
          const data: Plan[] = await res.json();
          return { data };
        } catch (e) {
          return { error: { status: 'FETCH_ERROR', error: String(e) } };
        }
      },
    }),
  }),
});

export const { useGetPlansQuery } = plansApi;
