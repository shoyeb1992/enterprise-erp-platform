import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface LoginRequest {
  usernameOrEmail: string;
  password: string;
}

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  role: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    accessToken: string;
    user: User;
  };
}

interface MeResponse {
  success: boolean;
  data: {
    userId: string;
    username: string;
    email?: string;
    role?: string;
  };
}

export const authApi = createApi({
  reducerPath: "authApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",

    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      headers.set("Content-Type", "application/json");

      return headers;
    },
  }),

  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),

    me: builder.query<MeResponse, void>({
      query: () => "/auth/me",
    }),
  }),
});

export const { useLoginMutation, useMeQuery } = authApi;
