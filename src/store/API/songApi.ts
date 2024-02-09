import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, xHost, xKey } from "../../utils/baseUrl";
import { LyricsResponse } from "../../modals/lyrics";
import { IGetSongResponse } from "../../modals/song";

export const songApi = createApi({
  reducerPath: 'songApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", xKey);
      headers.set("X-RapidAPI-Host", xHost);
    },
  }),
  endpoints: (build) => ({
    getSongById: build.query<IGetSongResponse, any>({ //eslint-disable-line
      query: (songId: string) => ({
        url: `/song/details/?id=${songId}`
      })
    }),
    getLyrics: build.query<LyricsResponse, any>({ //eslint-disable-line
      query: (lyricsId: string) => ({
        url: `/song/lyrics/?id=${lyricsId}`
      })
    })
  })
})

export const { useLazyGetSongByIdQuery, useGetLyricsQuery } = songApi