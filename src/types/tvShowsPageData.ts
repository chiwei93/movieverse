import type { Genre } from "./Genres";
import type { MovieOrTV } from "./MovieOrTV";

export type TVShowsPageData = {
  popular: {
    results: MovieOrTV[];
  };
  airingToday: {
    page: number;
    results: MovieOrTV[];
    total_pages: number;
    total_results: number;
  };
  onAir: {
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
  genres: {
    genres: Genre[];
  };
};
