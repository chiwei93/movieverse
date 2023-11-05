import type { Backdrop } from "./backdrop";
import type { Genre } from "./genres";
import type { ProductionCompany } from "./productionCompany";
import { MovieReviewsResponse } from "./reviews";
import type { SpokenLanguage } from "./spokenLanguage";
import type { MovieVideosResponse } from "./videos";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type?: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

// now playing movies
//https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1
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

// get popular movies
//https://api.themoviedb.org/3/movie/popular?language=en-US&page=1
export type PopularMoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

// get top rated movies
//https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1
export type TopRatedMoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

// get trending movies
//https://api.themoviedb.org/3/trending/movie/day?language=en-US
export type TrendingMoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

// get upcoming movies
//https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1
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

// get the detail of the movie
//https://api.themoviedb.org/3/movie/{movieid}?language=en-US
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
};

//get recommendations of similar movies
//https://api.themoviedb.org/3/movie/{movieid}/recommendations?language=en-US&page=1
export type RecommendedMoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

// get all the images of the movie
// https://api.themoviedb.org/3/movie/movie_id/images
export type MovieImagesResponse = {
  backdrops: Backdrop[];
};

// search for movie
// https://api.themoviedb.org/3/search/movie?query={title}&include_adult=false&language=en-US&page=1
export type SearchMoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
