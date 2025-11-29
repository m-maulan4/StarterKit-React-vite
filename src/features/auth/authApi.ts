import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "@/api/baseQuery";
import type { AuthState, LoginRequest } from "./authType";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation<AuthState, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    me: builder.query<{ username: string; token_user: string }, void>({
      query: () => "/me",
    }),
    logout: builder.mutation<{ msg: string }, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
        body: { action: "logout" },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
  useLazyMeQuery,
} = authApi;
