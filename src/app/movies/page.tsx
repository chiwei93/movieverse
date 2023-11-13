import type { MoviesPageData } from "@/types/moviesPageData";

import CardsGrid from "@/components/CardsGrid/CardsGrid";
import Hero from "@/components/Hero/Hero";
import Card from "@/components/Card/Card";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import GenresSection from "@/components/GenresSection/GenresSection";

import { fetchData } from "@/utils/fetchData";
import { mockMoviesPageData } from "@/mocks/mockMoviesPageData";
import { sliceResultsLengthForCards } from "@/utils/sliceResultsToShow";

async function getMoviesPageData(): Promise<MoviesPageData> {
  try {
    const promises = [
      fetchData("/movie/now_playing?language=en-US&page=1"),
      fetchData("/movie/popular?language=en-US&page=1"),
      fetchData("/movie/top_rated?language=en-US&page=1"),
      fetchData("/movie/upcoming?language=en-US&page=1"),
      fetchData("/genre/movie/list?language=en"),
    ];

    const res = await Promise.all(promises);

    return {
      nowPlaying: res[0],
      popular: res[1],
      topRated: res[2],
      upcoming: res[3],
      genres: res[4],
    };
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
    throw new Error("Internal server error: Failed to fetch data");
  }
}

export default async function Movies() {
  // const res = await getMoviesPageData();
  const res = mockMoviesPageData;

  return (
    <>
      <div className="md:pt-8 lg:pt-12">
        <Hero slides={res.nowPlaying.results} key="moviesPage" type="movies" />
      </div>

      <div className="pt-24">
        <CardsGrid>
          <div className="col-span-2 pb-8 sm:pt-6">
            <SectionTitle
              title="popular"
              description="Most popular movies over the years"
              href="/category/popular?page=1&type=movie"
            />
          </div>

          {sliceResultsLengthForCards(res.nowPlaying.results).map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              name={movie.title}
              type="movie"
              bottomRowProps={{
                rating: movie.vote_average,
                releaseDate: movie.release_date,
              }}
            />
          ))}
        </CardsGrid>
      </div>

      <div className="pt-32 xl:pt-40">
        <GenresSection title="genres" genres={res.genres.genres} />
      </div>

      <div className="pt-32 xl:pt-40">
        <CardsGrid>
          <div className="col-span-2 pb-8 sm:pt-6">
            <SectionTitle
              title="top rated"
              description="The top rated movies over the years"
              href="/category/top-rated?page=1&type=movie"
            />
          </div>

          {sliceResultsLengthForCards(res.topRated.results).map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              name={movie.title}
              type="movie"
              bottomRowProps={{
                rating: movie.vote_average,
                releaseDate: movie.release_date,
              }}
            />
          ))}
        </CardsGrid>
      </div>

      <div className="pt-32 xl:pt-40">
        <CardsGrid>
          <div className="col-span-2 pb-8 sm:pt-6">
            <SectionTitle
              title="upcoming"
              description="Upcoming movies that are yet to be released"
              href="/category/upcoming?page=1&type=movie"
            />
          </div>

          {sliceResultsLengthForCards(res.upcoming.results).map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              name={movie.title}
              type="movie"
              bottomRowProps={{
                rating: movie.vote_average,
                releaseDate: movie.release_date,
              }}
            />
          ))}
        </CardsGrid>
      </div>
    </>
  );
}
