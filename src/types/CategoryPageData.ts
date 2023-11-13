import type { MovieOrTV } from "./MovieOrTV";

export type CategoryPageData = {
  page: number;
  results: MovieOrTV[];
  total_pages: number;
  total_results: number;
};
