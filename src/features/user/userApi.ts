import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "@/api/baseQuery";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    me: builder.query<void, void>({
      query: () => "/me",
    }),
  }),
});

export const { useMeQuery } = userApi;
