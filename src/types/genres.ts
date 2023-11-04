export type Genre = {
  id: number;
  name: string;
};

// get all the genres of movies
//https://api.themoviedb.org/3/genre/movie/list?language=en
export type MovieGenresResponse = {
  genres: Genre[];
};

// get all the genres of tv shows
//https://api.themoviedb.org/3/genre/tv/list?language=en
export type TVShowGenresResponse = {
  genres: Genre[];
};
