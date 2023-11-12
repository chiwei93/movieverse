import type { Movie } from "./movies";

export type MovieGenrePageData = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
