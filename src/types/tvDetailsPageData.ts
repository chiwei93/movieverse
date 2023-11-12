import type { Backdrop } from "./backdrop";
import type { TVShowsDetailsResponse } from "./tvshows";

export type TVShowDetailsPageData = {
  tvshow: TVShowsDetailsResponse;
  posters: Backdrop[];
};
