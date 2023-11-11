import type { Movie } from "./movies";

export type MovieCategoryPageData = {
  dates?: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
