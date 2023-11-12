export type MovieOrTV = {
  id: number;
  overview: string;
  poster_path: string | null;
  vote_average: number;
  title?: string;
  name?: string;
  release_date?: string;
  first_air_date?: string;
};
