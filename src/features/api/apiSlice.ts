import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    checkHealth: builder.query<string, void>({
      queryFn: async () => {
        return { data: 'ok' };
      },
    }),
  }),
});
