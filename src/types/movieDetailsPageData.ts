import type { Backdrop } from "./backdrop";
import type { MovieDetailsResponse } from "./movies";

export type MovieDetailData = {
  movie: MovieDetailsResponse;
  posters: Backdrop[];
};
