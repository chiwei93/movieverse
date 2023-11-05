type AuthorDetail = {
  name: string;
  username: string;
  avatar_path: string | null;
  rating: number | null;
};

type Review = {
  author: string;
  author_details: AuthorDetail;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
};

//get all the reviews of the movie
//https://api.themoviedb.org/3/movie/{movieid}/reviews?language=en-US&page=1
export type MovieReviewsResponse = {
  id?: number;
  page: number;
  results: Review[];
  total_pages: number;
  total_results: number;
};

//get all the reviews of the tv show
//https://api.themoviedb.org/3/tv/series_id/reviews?language=en-US&page=1
export type TVShowReviewsResponse = {
  id: number;
  page: number;
  results: Review[];
  total_pages: number;
  total_results: number;
};