import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { APIResponse, IOptions } from '@/types/base.types';
import { getToken } from '@/utils/auth';

const baseQuery = fetchBaseQuery({
  baseUrl: '',
  prepareHeaders: (headers) => {
    console.log(headers)
    const token = getToken();
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
  },
});

const baseQueryWithReAuth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: any,
) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    window.location.href = window.location.origin + '/login';
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReAuth,
  tagTypes: [
    'OPTIONS',
    'ME',
  ],
  endpoints: (builder) => ({
    getOptions: builder.query<APIResponse<IOptions[]>, string>({
      query: (query: string) => query,
      providesTags: ['OPTIONS'],
    }),
  }),
});

export const { useGetOptionsQuery } = apiSlice;
