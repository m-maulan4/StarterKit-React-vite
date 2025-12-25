import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { AuthState, LoginRequest } from "./authType";
import type { getMeType } from "../user/userType";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/auth`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthState, LoginRequest>({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
      // transformErrorResponse: (response: { status: number; data: unknown }) => {
      //   return response.data;
      // },
    }),
    logout: builder.query<void, void>({
      query: () => "logout",
    }),
    me: builder.query<getMeType, void>({
      query: () => "me",
    }),
  }),
});

export const { useLoginMutation, useLazyLogoutQuery, useLazyMeQuery } = authApi;
