import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "@/api/baseQuery";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    me: builder.query<{ username: string; token_user: string }, void>({
      query: () => "/me",
    }),
  }),
});

export const { useMeQuery, useLazyMeQuery } = userApi;
