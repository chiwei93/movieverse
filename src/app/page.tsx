import type { HomePageData } from "@/types/HomePageData";

import Grid from "@/components/Grid/Grid";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import GenresCarousel from "@/components/GenresCarousel/GenresCarousel";
import HeroSection from "@/components/HeroSection/HeroSection";

import { fetchData } from "@/utils/fetchData";
import { sliceResultsLengthForCards } from "@/utils/sliceResultsToShow";

async function getHomePageData(): Promise<HomePageData> {
  try {
    const promises = [
      fetchData("/movie/now_playing?language=en-US&page=1"),
      fetchData("/trending/movie/day?language=en-US"),
      fetchData("/trending/tv/day?language=en-US"),
      fetchData("/genre/movie/list?language=en"),
      fetchData("/genre/tv/list?language=en"),
    ];

    const res = await Promise.all(promises);

    return {
      nowPlaying: res[0],
      trendingMovies: res[1],
      trendingTV: res[2],
      genresMovies: res[3],
      genresTV: res[4],
    };
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
    throw new Error("Internal server error: Failed to fetch data");
  }
}

export default async function HomePage() {
  const res = await getHomePageData();

  return (
    <>
      <div className="md:pt-8 lg:pt-12">
        <HeroSection
          type="movie"
          slides={res.nowPlaying.results}
          key="movieNowPlayingHeroSection"
        />
      </div>

      <div className="pt-24">
        <Grid>
          <div className="col-span-2 pb-8 sm:pt-6">
            <SectionTitle
              title="trending movies"
              description="Trending movies of the day"
              href="/category/trending?type=movie&page=1"
              shouldShowLink={res.trendingMovies.total_pages > 1}
            />
          </div>

          {sliceResultsLengthForCards(res.trendingMovies.results).map(
            (movieOrTV) => (
              <Grid.Card
                key={movieOrTV.id}
                type="movie"
                id={movieOrTV.id}
                name={movieOrTV.title ?? ""}
                imageUrl={movieOrTV.poster_path}
                rating={movieOrTV.vote_average}
                releaseDate={movieOrTV.release_date ?? ""}
              />
            ),
          )}
        </Grid>
      </div>

      <div className="pt-32">
        <GenresCarousel
          type="movie"
          key="movieGenres"
          title="movies"
          genres={res.genresMovies.genres}
        />
      </div>

      <div className="pt-24">
        <GenresCarousel
          type="tv-show"
          key="tvGenres"
          title="tv shows"
          genres={res.genresTV.genres}
        />
      </div>

      <div className="pt-32">
        <Grid>
          <div className="col-span-2 pb-8 sm:pt-6">
            <SectionTitle
              title="trending tv shows"
              description="Trending TV Shows of the day"
              href="/category/trending?type=tv-show&page=1"
              shouldShowLink={res.trendingTV.total_pages > 1}
            />
          </div>

          {sliceResultsLengthForCards(res.trendingTV.results).map(
            (movieOrTV) => (
              <Grid.Card
                key={movieOrTV.id}
                type="tv-show"
                id={movieOrTV.id}
                imageUrl={movieOrTV.poster_path}
                name={movieOrTV.name ?? ""}
                rating={movieOrTV.vote_average}
                releaseDate={movieOrTV.first_air_date ?? ""}
              />
            ),
          )}
        </Grid>
      </div>
    </>
  );
}
