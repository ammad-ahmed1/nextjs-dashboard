import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseurl } from "./apiConfig";

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({ baseUrl: baseurl }),
  tagTypes: ["Albums"], //By adding this, we are refetching data on each updated record
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["Albums"], //as after first fetch, it loads data from cache. but how to tell we want to fetch from API, here comes the provide-tags
    }),
    signup: builder.mutation({
      query: ({ email, password }) => ({
        url: "/register",
        method: "POST",
        body: { email, password },
      }),
    }),
    // ---these are for CRUD
    updateAlbum: builder.mutation({
      query: ({ id, title }) => ({
        url: `albums/${id}`,
        method: "PUT",
        body: { title },
      }),
      invalidatesTags: ["Albums"],
    }),

    deleteAlbum: builder.mutation({
      query: (id) => ({
        url: `albums/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Albums"],
    }),
  }),
});
export const { useGetUsersQuery, useSignupMutation } = authAPI;
