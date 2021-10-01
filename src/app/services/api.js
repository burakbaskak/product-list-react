import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),
  endpoints: (builder) => ({
    companies: builder.query({ query: () => "companies" }),
    items: builder.query({ query: () => "items" }),
    getTagList: builder.query({ query: () => "get-tag-list" }),
  }),
});

export const { useCompaniesQuery, useGetTagListQuery, useItemsQuery } = api;
