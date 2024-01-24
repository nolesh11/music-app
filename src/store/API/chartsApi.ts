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
        url: 'chart/songs/',
        params: {
          time_period: params[0],
          chart_genre: params[1],
        }
      })
    })
  }),
})

export const { useGetChartSongsQuery } = chartApi