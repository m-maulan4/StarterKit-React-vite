import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@/api/baseQuery";
import type { getMeType } from "./userType";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery,
  endpoints: (builder) => ({
    user: builder.query<getMeType, void>({
      query: () => "/",
    }),
  }),
});

export const { useUserQuery } = userApi;
