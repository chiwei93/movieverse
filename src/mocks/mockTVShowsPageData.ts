import type { TVShowsPageData } from "@/types/tvShowsPageData";

import { mockAiringTodayTVData } from "./mockAiringTodayTVData";
import { mockOnAirTVData } from "./mockOnAirTVData";
import { mockTVShowGenres } from "./mockTVShowGenres";
import { mockPopularTVShows } from "./mockPopularTVShows";
import { mockTopRatedTVShows } from "./mockTopRatedTVShows";

export const mockTVShowsPageData: TVShowsPageData = {
  airingToday: mockAiringTodayTVData,
  onAir: mockOnAirTVData,
  genres: mockTVShowGenres,
  popular: mockPopularTVShows,
  topRated: mockTopRatedTVShows,
};
