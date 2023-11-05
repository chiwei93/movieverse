import type { HomePageData } from "@/types/homepageData";

import { mockNowPlayingMovie } from "./mockNowPlayingMovies";
import { mockTrendingMovies } from "./mockTrendingMovies";
import { mockTrendingTVShows } from "./mockTrendingTVShows";
import { mockMovieGenres } from "./mockMovieGenres";
import { mockTVShowGenres } from "./mockTVShowGenres";

export const mockHomePageData: HomePageData = {
  nowPlaying: mockNowPlayingMovie,
  trendingMovies: mockTrendingMovies,
  trendingTV: mockTrendingTVShows,
  genresMovies: mockMovieGenres,
  genresTV: mockTVShowGenres,
};
