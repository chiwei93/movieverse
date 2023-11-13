import type { MovieOrTV } from "./MovieOrTV";

export type GenrePageData = {
  page: number;
  results: MovieOrTV[];
  total_pages: number;
  total_results: number;
};
