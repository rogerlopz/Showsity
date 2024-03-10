import {api} from './api';
import {SearchShow, Show} from './types.ts';

export const showsApi = api.injectEndpoints({
  endpoints: builder => ({
    getShows: builder.query<Show[], number>({
      query: (page = 0) => `/shows?page=${page}`,
    }),
    getShowById: builder.query<Show, number>({
      query: showId => ({
        url: `/shows/${showId}?embed[]=seasons&embed[]=episodes`,
      }),
      transformResponse: (response: Show) => {
        const seasons = response._embedded?.seasons || [];
        const episodes = response._embedded?.episodes || [];
        const seasonsWithEpisodes = [];

        if (seasons.length && episodes.length) {
          for (let i = 0; i < seasons.length; i++) {
            seasonsWithEpisodes.push({
              season: seasons[i],
              episodes: episodes.filter(
                episode => episode.season === seasons[i].number,
              ),
            });
          }
        }

        return {
          ...response,
          seasons: seasonsWithEpisodes,
          totalSeasons: seasons.length,
          totalEpisodes: episodes.length,
        };
      },
    }),
    getShowsBySearch: builder.query<SearchShow[], string>({
      query: search => `/search/shows?q=${encodeURI(search)}`,
    }),
  }),
});

export const {useGetShowsQuery, useGetShowByIdQuery, useGetShowsBySearchQuery} =
  showsApi;
