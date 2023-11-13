import type { Genre } from "./Genres";
import type { MovieOrTV } from "./MovieOrTV";

export type HomePageData = {
  nowPlaying: {
    results: MovieOrTV[];
  };
  trendingMovies: {
    page: number;
    results: MovieOrTV[];
    total_pages: number;
    total_results: number;
  };
  trendingTV: {
    page: number;
    results: MovieOrTV[];
    total_pages: number;
    total_results: number;
  };
  genresMovies: {
    genres: Genre[];
  };
  genresTV: {
    genres: Genre[];
  };
};
