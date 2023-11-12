import type { Backdrop } from "./Backdrop";
import type { MovieDetailsResponse } from "./movies";

export type MovieDetailData = {
  movie: MovieDetailsResponse;
  posters: Backdrop[];
};
