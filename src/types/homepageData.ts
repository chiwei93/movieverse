import type { MovieGenresResponse, TVShowGenresResponse } from "./genres";
import type {
  NowPlayingMoviesResponse,
  TrendingMoviesResponse,
} from "./movies";
import type { TrendingTVShowsResponse } from "./tvshows";

export type HomePageData = {
  nowPlaying: NowPlayingMoviesResponse;
  trendingMovies: TrendingMoviesResponse;
  genresMovies: MovieGenresResponse;
  genresTV: TVShowGenresResponse;
  trendingTV: TrendingTVShowsResponse;
};
