import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "@/api/baseQuery";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    user: builder.query<any, void>({
      query: () => "user",
    }),
  }),
});

export const { useUserQuery } = userApi;
