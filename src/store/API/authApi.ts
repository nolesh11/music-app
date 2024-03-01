import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IRegistarionPayload {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  user_city: string;
}

interface IRegistrationResponse {
  status: number;
  user_id: number;
}

interface ILoginUserPayload {
  email: string;
  password: string;
}

export interface ILoginUserResponse extends IRegistrationResponse {}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<IRegistrationResponse, IRegistarionPayload>({
      // mutation когда отдаем backend query когда надо получить от backend
      query: (payload) => ({
        url: "/registration",
        method: "POST",
        body: payload,
      }),
    }),
    loginUser: builder.mutation<ILoginUserResponse, ILoginUserPayload>({
      query: (payload) => ({
        url: "/login",
        method: "POST",
        body: payload,
      }),
    })
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi
