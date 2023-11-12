import type { MovieOrTV } from "./MovieOrTV";
import type { Backdrop } from "./Backdrop";
import type { Genre } from "./Genres";
import type { ProductionCompany } from "./ProductionCompany";
import type { Review } from "./Reviews";
import type { Video } from "./Videos";

type DetailResponse = {
  id: number;
  genres: Genre[];
  overview: string;
  poster_path: string;
  production_companies: ProductionCompany[];
  vote_average: number;
  first_air_date?: string;
  name?: string;
  number_of_episodes?: number;
  number_of_seasons?: number;
  release_date?: string;
  runtime?: number;
  title?: string;
  videos: {
    results: Video[];
  };
  reviews: {
    page: number;
    results: Review[];
    total_pages: number;
    total_results: number;
  };
  recommendations: {
    page: number;
    results: MovieOrTV[];
    total_pages: number;
    total_results: number;
  };
};

export type DetailsPageData = {
  detail: DetailResponse;
  posters: Backdrop[];
};
