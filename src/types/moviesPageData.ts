import type { MovieGenresResponse } from "./genres";
import type {
  NowPlayingMoviesResponse,
  PopularMoviesResponse,
  TopRatedMoviesResponse,
  UpcomingMoviesResponse,
} from "./movies";

export type MoviesPageData = {
  nowPlaying: NowPlayingMoviesResponse;
  popular: PopularMoviesResponse;
  topRated: TopRatedMoviesResponse;
  upcoming: UpcomingMoviesResponse;
  genres: MovieGenresResponse
};
