import { baseApi } from '../../../shared/api/baseApi';
import type { LoginRequest, RegisterRequest, IUser } from '../../../types/auth';

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<IUser, LoginRequest>({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['User'],
        }),

        register: builder.mutation<IUser, RegisterRequest>({
            query: (body) => ({
                url: '/auth/register',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['User'],
        }),

        getMe: builder.query<IUser, void>({
            query: () => '/auth/me',
            providesTags: ['User'],
        }),

        logout: builder.mutation<void, void>({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
            invalidatesTags: ['User'],
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useGetMeQuery, useLogoutMutation } = authApi;
