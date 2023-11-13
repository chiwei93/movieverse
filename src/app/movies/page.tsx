import type { MoviesPageData } from "@/types/MoviesPageData";

import Grid from "@/components/Grid/Grid";
import HeroSection from "@/components/HeroSection/HeroSection";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import GenresCarousel from "@/components/NewGenresCarousel/NewGenresCarousel";

import { fetchData } from "@/utils/fetchData";
import { sliceResultsLengthForCards } from "@/utils/sliceResultsToShow";
import { mockMoviesPageData } from "@/mocks/mockMoviesPageData";

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

export default async function MoviesPage() {
  // const res = await getMoviesPageData();
  const res = mockMoviesPageData;

  return (
    <>
      <div className="md:pt-8 lg:pt-12">
        <HeroSection
          type="tv-show"
          slides={res.nowPlaying.results}
          key="moviesPageNowPlayingHeroSection"
        />
      </div>

      <div className="pt-24">
        <Grid>
          <div className="col-span-2 pb-8 sm:pt-6">
            <SectionTitle
              title="popular"
              description="Most popular movies over the years"
              href="/category/popular?type=movie&page=1"
              shouldShowLink={res.popular.total_pages > 1}
            />
          </div>

          {sliceResultsLengthForCards(res.popular.results).map((movieOrTV) => (
            <Grid.Card
              type="movie"
              key={movieOrTV.id}
              id={movieOrTV.id}
              imageUrl={movieOrTV.poster_path}
              name={movieOrTV.title ?? ""}
              rating={movieOrTV.vote_average}
              releaseDate={movieOrTV.release_date ?? ""}
            />
          ))}
        </Grid>
      </div>

      <div className="pt-32 xl:pt-40">
        <GenresCarousel
          type="movie"
          genres={res.genres.genres}
          title="genres"
        />
      </div>

      <div className="pt-32 xl:pt-40">
        <Grid>
          <div className="col-span-2 pb-8 sm:pt-6">
            <SectionTitle
              title="top rated"
              description="The top rated movies over the years"
              href="/category/top-rated?type=movie&page=1"
              shouldShowLink={res.topRated.total_pages > 1}
            />
          </div>

          {sliceResultsLengthForCards(res.topRated.results).map((movieOrTV) => (
            <Grid.Card
              type="movie"
              key={movieOrTV.id}
              id={movieOrTV.id}
              imageUrl={movieOrTV.poster_path}
              name={movieOrTV.title ?? ""}
              rating={movieOrTV.vote_average}
              releaseDate={movieOrTV.release_date ?? ""}
            />
          ))}
        </Grid>
      </div>

      <div className="pt-32 xl:pt-40">
        <Grid>
          <div className="col-span-2 pb-8 sm:pt-6">
            <SectionTitle
              title="upcoming"
              description="Upcoming movies that are yet to be released"
              href="/category/upcoming?type=movie&page=1"
              shouldShowLink={res.upcoming.total_pages > 1}
            />
          </div>

          {sliceResultsLengthForCards(res.upcoming.results).map((movieOrTV) => (
            <Grid.Card
              type="movie"
              key={movieOrTV.id}
              id={movieOrTV.id}
              imageUrl={movieOrTV.poster_path}
              name={movieOrTV.title ?? ""}
              rating={movieOrTV.vote_average}
              releaseDate={movieOrTV.release_date ?? ""}
            />
          ))}
        </Grid>
      </div>
    </>
  );
}
