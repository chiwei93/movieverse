import type { Genre } from "./Genres";
import type { MovieOrTV } from "./MovieOrTV";

export type MoviesPageData = {
  nowPlaying: {
    results: MovieOrTV[];
  };
  popular: {
    page: number;
    results: MovieOrTV[];
    total_pages: number;
    total_results: number;
  };
  topRated: {
    page: number;
    results: MovieOrTV[];
    total_pages: number;
    total_results: number;
  };
  upcoming: {
    page: number;
    results: MovieOrTV[];
    total_pages: number;
    total_results: number;
  };
  genres: {
    genres: Genre[];
  };
};
