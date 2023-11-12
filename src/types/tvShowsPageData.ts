import type { TVShowGenresResponse } from "./genres";
import type {
  AiringTodayTVShowResponse,
  OnAirTVShowResponse,
  PopularTVShowResponse,
  TopRatedTVShowResponse,
} from "./tvshows";

export type TVShowsPageData = {
  airingToday: AiringTodayTVShowResponse;
  onAir: OnAirTVShowResponse;
  genres: TVShowGenresResponse;
  popular: PopularTVShowResponse;
  topRated: TopRatedTVShowResponse;
};
