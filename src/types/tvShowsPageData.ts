import type { TVShowGenresResponse } from "./Genres";
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
