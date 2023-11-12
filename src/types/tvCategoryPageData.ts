import type { TVShow } from "./tvshows";

export type TVCategoryPageData = {
  page: number;
  results: TVShow[];
  total_pages: number;
  total_results: number;
};
