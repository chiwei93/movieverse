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

export type MovieReviewsResponse = {
  id?: number;
  page: number;
  results: Review[];
  total_pages: number;
  total_results: number;
};

export type TVShowReviewsResponse = {
  id?: number;
  page: number;
  results: Review[];
  total_pages: number;
  total_results: number;
};