interface Country {
  name: string;
  code: string;
  timezone: string;
}

interface Link {
  href?: string;
}
interface Links {
  self?: Link;
  previousepisode?: Link;
  nextepisode?: Link;
  show?: Link;
}

interface Images {
  medium?: string;
  original?: string;
}
interface ShowExternals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}
interface ShowNetwork {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}
interface Rating {
  average?: number;
}

interface ShowSchedule {
  time: string;
  days: string[];
}

interface Embedded {
  seasons?: Season[];
  episodes?: Episode[];
}

interface Season {
  id: number;
  url: string;
  number: number;
  name: string;
  episodeOrder: number;
  premiereDate: string;
  endDate: string;
  network: ShowNetwork;
  webChannel?: string;
  image: Images;
  summary?: string;
  _links: Links;
}

export interface Episode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating: Rating;
  image: Images;
  summary: string;
  _links: Links;
}

export interface SeasonsWithEpisodes {
  season: Season;
  episodes: Episode[];
}
export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres?: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: ShowSchedule;
  rating: Rating;
  weight: number;
  network: ShowNetwork;
  webChannel: null;
  dvdCountry: null;
  externals: ShowExternals;
  image: Images;
  summary: string;
  updated: number;
  seasons: SeasonsWithEpisodes[];
  totalSeasons: number;
  totalEpisodes: number;
  _links: Links;
  _embedded?: Embedded;
}

export interface SearchShow {
  score: number;
  show: Show;
}
