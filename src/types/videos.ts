type VideoType =
  | "Featurette"
  | "Behind the Scenes"
  | "Trailer"
  | "Teaser"
  | "Opening Credits";

export type Video = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: VideoType;
  official: boolean;
  published_at: string;
  id: string;
};

//get all the videos related to the movie
//https://api.themoviedb.org/3/movie/{movieid}/videos?language=en-US
export type MovieVideosResponse = {
  id?: number;
  results: Video[];
};

// get all the videos related to the tv shows
//https://api.themoviedb.org/3/tv/{series_id}/videos?language=en-US
export type TVShowsVideosResponse = {
  id: number;
  results: Video[];
};
