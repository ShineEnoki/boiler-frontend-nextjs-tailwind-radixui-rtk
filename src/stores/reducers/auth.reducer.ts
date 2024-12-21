import { APIResponse } from '@/types/base.types';
import { apiSlice } from '../api.slice';
import { LoginForm } from '@/types/auth.types';

interface TokenData {
  accessToken: string;
  refreshToken: string;
}

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<APIResponse<TokenData>, LoginForm>({
      query: (payload) => ({
        url: '/auth/login',
        method: 'POST',
        body: payload,
      }),
      transformResponse: (response: APIResponse<TokenData>) => {
        if (response.data?.accessToken) {
          localStorage.setItem('token', response.data.accessToken);
          localStorage.setItem('refreshToken', response.data.refreshToken);
        }
        return response;
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
