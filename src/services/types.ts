interface Country {
  name: string;
  code: string;
  timezone: string;
}

interface ShowImages {
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
interface ShowRating {
  average?: number;
}

interface ShowSchedule {
  time: string;
  days: string[];
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
  rating: ShowRating;
  weight: number;
  network: ShowNetwork;
  webChannel: null;
  dvdCountry: null;
  externals: ShowExternals;
  image: ShowImages;
  summary: string;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode: {
      href: string;
    };
  };
}
