import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, xHost, xKey } from "../../utils/baseUrl";
import { AlbumResponse } from "../../modals/album";
import { AppearanceResponse } from "../../modals/albumAppearance";

export const albumApi = createApi({
  reducerPath: "albumApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", xKey);
      headers.set("X-RapidAPI-Host", xHost);
    },
  }),
  endpoints: (build) => ({
    getAlbumById: build.query<AlbumResponse, any>({ // eslint-disable-line
      query: (albumId: string) => ({
        url: `/album/details/?id=${albumId}`,
      }),
    }),
    getAppearanceById: build.query<AppearanceResponse, any>({ // eslint-disable-line
      query: (albumId: string) => ({
        url: `/album/appearances/?id=${albumId}`,
      }),
    }),
  }),
});

export const { useGetAlbumByIdQuery, useGetAppearanceByIdQuery } = albumApi;
