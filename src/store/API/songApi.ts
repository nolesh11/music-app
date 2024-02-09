import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, xHost, xKey } from "../../utils/baseUrl";
import { SongResponse } from "../../modals/artistSongs";
import { LyricsResponse } from "../../modals/lyrics";

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
    getSongById: build.query<SongResponse, any>({ //eslint-disable-line
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

export const { useGetSongByIdQuery, useGetLyricsQuery } = songApi