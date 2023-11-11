import type { MoviesPageData } from "@/types/moviesPageData";

import { mockNowPlayingMovie } from "./mockNowPlayingMovies";
import { mockPopularMovies } from "./mockPopularMovies";
import { mockTopRatedMovies } from "./mockTopRatedMovies";
import { mockUpcomingMovies } from "./mockUpcomingMovies";
import { mockMovieGenres } from "./mockMovieGenres";

export const mockMoviesPageData: MoviesPageData = {
  nowPlaying: mockNowPlayingMovie,
  popular: mockPopularMovies,
  topRated: mockTopRatedMovies,
  upcoming: mockUpcomingMovies,
  genres: mockMovieGenres,
};
