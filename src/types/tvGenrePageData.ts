import type { TVShow } from "./tvshows";

export type TVGenrePageData = {
  page: number;
  results: TVShow[];
  total_pages: number;
  total_results: number;
};
