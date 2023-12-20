import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '9d04a978admshd5498f1cd8338f9p11a334jsn76d1506f9367',
//     'X-RapidAPI-Host': '',
//   },
// };

// fetch('https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world', options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core7.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '9d04a978admshd5498f1cd8338f9p11a334jsn76d1506f9367');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: (params) => ({
        url: '/charts/get-top-songs-in_world_by_genre',
        params: { ...params },
      }),
    }),
    getSongDetails: builder.query({ query: ({ songid }) => ({
      url: '/songs/get_details',
      params: {
        id: songid,
      },
    }),
    }),
    getSongRelated: builder.query({ query: ({ songid }) => ({
      url: '/songs/list-recommendations',
      params: {
        id: songid,
      },
    }),
    }),
    getArtistDetails: builder.query({ query: ({ artistId }) => ({
      url: '/artist/get-details',
      params: {
        id: artistId,
      },
    }),
    }),
    getSongsByCountry: builder.query({ query: ({ countryCode }) => ({
      url: '/charts/get-top-songs-in-country',
      params: {
        country_code: countryCode,
      },
    }),
    }),
    getSongsBySearch: builder.query({ query: ({ searchTerm }) => ({
      url: '/search',
      params: {
        term: searchTerm,
      },
    }),
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;
