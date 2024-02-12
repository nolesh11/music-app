import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ServerResponse } from "../../modals/search";
import { baseUrl, xHost, xKey } from "../../utils/baseUrl";

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', xKey);
      headers.set('X-RapidAPI-Host', xHost)
    },
  }),
  // refetchOnFocus: true,
  endpoints: (build) => ({
    searchLyrics: build.query<ServerResponse, any>({ //eslint-disable-line
      query: (q: string) => ({
        url: `/search/multi/?q=${q}`,
      }),
    }),
  }),
})

export const { useSearchLyricsQuery } = searchApi