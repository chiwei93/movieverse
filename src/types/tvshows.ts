import type { Backdrop } from "./Backdrop";
import type { Genre } from "./Genres";
import type { ProductionCompany } from "./ProductionCompany";
import type { TVShowReviewsResponse } from "./Reviews";
import type { SpokenLanguage } from "./spokenLanguage";
import type { TVShowsVideosResponse } from "./Videos";

export type TVShow = {
  adult?: boolean;
  backdrop_path: string | null;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string | null;
  media_type?: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
};

export type TrendingTVShowsResponse = {
  page: number;
  results: TVShow[];
  total_pages: number;
  total_results: number;
};

export type PopularTVShowResponse = {
  page: number;
  results: TVShow[];
  total_pages: number;
  total_results: number;
};

export type TopRatedTVShowResponse = {
  page: number;
  results: TVShow[];
  total_pages: number;
  total_results: number;
};

type CreatedAt = {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
};

type Episode = {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  episode_type?: string;
};

type Network = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type Season = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
};

export type TVShowsDetailsResponse = {
  adult: boolean;
  backdrop_path: string;
  created_by: CreatedAt[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: Episode;
  name: string;
  next_episode_to_air: Episode | null;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  seasons: Season[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
  videos?: TVShowsVideosResponse;
  recommendations?: RecommendedTVShowResponse;
  reviews?: TVShowReviewsResponse;
};

export type RecommendedTVShowResponse = {
  page: number;
  results: TVShow[];
  total_pages: number;
  total_results: number;
};

export type TVShowImagesResponse = {
  backdrops: Backdrop[];
};

export type SearchTVShowResponse = {
  page: number;
  results: TVShow[];
  total_pages: number;
  total_results: number;
};

export type AiringTodayTVShowResponse = {
  page: number;
  results: TVShow[];
  total_pages: number;
  total_results: number;
};

export type OnAirTVShowResponse = {
  page: number;
  results: TVShow[];
  total_pages: number;
  total_results: number;
};
