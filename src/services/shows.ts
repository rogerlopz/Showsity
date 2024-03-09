import {api} from './api';

export const showsApi = api.injectEndpoints({
  endpoints: builder => ({
    getShows: builder.query({
      query: (page = 0) => `/shows?page=${page}`,
    }),
    getShowById: builder.query({
      query: showId => `/shows/${showId}?embed[]=seasons&embed[]=episodes`,
      transformResponse: (response: any) => {
        const seasons = response._embedded.seasons;
        const episodes = response._embedded.episodes;
        const seasonsWithEpisodes = [];

        for (let i = 0; i < seasons.length; i++) {
          seasonsWithEpisodes.push({
            season: seasons[i],
            episodes: episodes.filter(
              episode => episode.season === seasons[i].number,
            ),
          });
        }

        return {
          ...response,
          seasons: seasonsWithEpisodes,
          totalSeasons: seasons.length,
          totalEpisodes: episodes.length,
        };
      },
    }),
    getShowsBySearch: builder.query({
      query: search => `/search/shows?q=${encodeURI(search)}`,
    }),
  }),
});

export const {useGetShowsQuery, useGetShowByIdQuery, useGetShowsBySearchQuery} =
  showsApi;
