export type Genre = {
  id: number;
  name: string;
};

export type MovieGenresResponse = {
  genres: Genre[];
};

export type TVShowGenresResponse = {
  genres: Genre[];
};
