import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, xHost, xKey } from "../../utils/baseUrl";
import { ArtistResponse } from "../../modals/artist";
import { IGetArtistLeaderboard } from "../../modals/artistLeaderboard";
import { SongResponse } from "../../modals/artistSongs";
import { ArtistAlbumResponse } from "../../modals/artistAlbum";

export const artistApi = createApi({
  reducerPath: "artistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", xKey);
      headers.set("X-RapidAPI-Host", xHost);
    },
  }),
  endpoints: (build) => ({
    getArtistById: build.query<ArtistResponse, any>({ // eslint-disable-line
      query: (artistId: string) => ({
        url: `/artist/details/?id=${artistId}`,
      }),
    }),
    getArtistLeaderboardById: build.query<IGetArtistLeaderboard, any>({ // eslint-disable-line
      query: (artistId: string) => ({
        url: `/artist/leaderboard/?id=${artistId}`,
        params: {
          per_page: 10,
        },
      }),
    }),
    geyArtistSongsById: build.query<SongResponse, any>({ //eslint-disable-line
      query: (artistId: string) => ({
        url: `artist/songs/?id=${artistId}`,
        params: {
          sort: "popularity",
          per_page: 10,
        },
      }),
    }),
    getArtistAlbumsById: build.query<ArtistAlbumResponse, any>({ //eslint-disable-line
      query: (artistId: string) => ({
        url: `artist/albums/?id=${artistId}`,
        params: {
          per_page: 6,
        },
      }),
    }),
  }),
});

export const {
  useGetArtistByIdQuery,
  useGetArtistLeaderboardByIdQuery,
  useGeyArtistSongsByIdQuery,
  useGetArtistAlbumsByIdQuery,
} = artistApi;
