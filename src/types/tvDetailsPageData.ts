import type { Backdrop } from "./Backdrop";
import type { TVShowsDetailsResponse } from "./tvshows";

export type TVShowDetailsPageData = {
  tvshow: TVShowsDetailsResponse;
  posters: Backdrop[];
};
