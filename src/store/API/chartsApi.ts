import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, xHost, xKey } from "../../utils/baseUrl";
import { Response } from "../../modals/chartSongs";

export const chartApi = createApi({
  reducerPath: "chartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", xKey);
      headers.set("X-RapidAPI-Host", xHost);
    },
  }),
  endpoints: (build) => ({
    getChartSongs: build.query<Response, any>({ // eslint-disable-line
      query: (params: [string, string]) => ({
        url: "chart/songs/",
        params: {
          time_period: params[0],
          chart_genre: params[1],
        },
      }),
    }),
    getChartAlbums: build.query<Response, any>({ // eslint-disable-line
      query: (timePeriod: string) => ({
        url: "/chart/albums/",
        params: {
          time_period: timePeriod,
        },
      }),
    }),
    getChartArtist: build.query<Response, string>({
      query: (timePeriod: string) => ({
        url: "/chart/artists/",
        params: {
          time_period: timePeriod,
        },
      }),
    }),
    getChartLyrics: build.query<Response, string>({
      query: (timePeriod: string) => ({
        url: "/chart/referents/",
        params: {
          time_period: timePeriod,
        },
      }),
    }),
    getChartsSongsById: build.query<Response, string>({
      query: (q: string) => ({
        url: `chart/songs/${q}`,
      }),
    }),
  }),
});

export const {
  useGetChartSongsQuery,
  useGetChartAlbumsQuery,
  useGetChartArtistQuery,
  useGetChartLyricsQuery,
  useLazyGetChartsSongsByIdQuery,
} = chartApi;
