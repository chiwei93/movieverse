import type { Backdrop } from "./Backdrop";
import type { Genre } from "./Genres";
import type { ProductionCompany } from "./ProductionCompany";
import type { MovieReviewsResponse } from "./Reviews";
import type { SpokenLanguage } from "./spokenLanguage";
import type { MovieVideosResponse } from "./Videos";

export type Movie = {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  media_type?: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type NowPlayingMoviesResponse = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type PopularMoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type TopRatedMoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type TrendingMoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type UpcomingMoviesResponse = {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type MovieDetailsResponse = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  } | null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  videos?: MovieVideosResponse;
  reviews?: MovieReviewsResponse;
  production_countries?: {
    iso_3166_1: string;
    name: string;
  }[];
  recommendations?: RecommendedMoviesResponse;
};

export type RecommendedMoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type MovieImagesResponse = {
  backdrops: Backdrop[];
};

export type SearchMoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
