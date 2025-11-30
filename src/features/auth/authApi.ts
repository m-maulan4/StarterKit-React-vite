import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { AuthState, LoginRequest } from "./authType";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthState, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
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

export const { useLoginMutation, useLogoutMutation } = authApi;
