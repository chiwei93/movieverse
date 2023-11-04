import type { Backdrop } from "./backdrop";
import type { Genre } from "./genres";
import type { ProductionCompany } from "./productionCompany";
import type { SpokenLanguage } from "./spokenLanguage";

type TVShow = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
};

// get trending tv shows for the day
//https://api.themoviedb.org/3/trending/tv/day?language=en-US
export type TrendingTVShowsResponse = {
  page: number;
  results: TVShow[];
  total_pages: number;
  total_results: number;
};

// get popular tv shows
//https://api.themoviedb.org/3/tv/popular?language=en-US&page=1
export type PopularTVShowResponse = {
  page: number;
  results: TVShow[];
  total_pages: number;
  total_results: number;
};

// get top rated tv shows
//https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1
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

// get details of tv shows
//https://api.themoviedb.org/3/tv/{series_id}?language=en-US
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
};

// get recommendations of similar tv shows
//https://api.themoviedb.org/3/tv/series_id/recommendations?language=en-US&page=1
export type RecommendedTVShowResponse = {
  page: number;
  results: TVShow[];
  total_pages: number;
  total_results: number;
};

// get all the images of the tv show
// https://api.themoviedb.org/3/tv/series_id/images
export type TVShowImagesResponse = {
  backdrops: Backdrop[];
};

// search tv shows
// https://api.themoviedb.org/3/search/tv?query=title&include_adult=false&language=en-US&page=1
export type SearchTVShowResponse = {
  page: number;
  results: TVShow[];
  total_pages: number;
  total_results: number;
};
