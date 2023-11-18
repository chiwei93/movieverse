import type { TVShowsPageData } from "@/types/TVShowsPageData";

import HeroSection from "@/components/HeroSection/HeroSection";
import Grid from "@/components/Grid/Grid";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import GenresCarousel from "@/components/GenresCarousel/GenresCarousel";

import { fetchData } from "@/utils/fetchData";
import { sliceResultsLengthForCards } from "@/utils/sliceResultsToShow";

async function getTVShowsPageData(): Promise<TVShowsPageData> {
  try {
    const promises = [
      fetchData("/tv/airing_today?language=en-US&page=1"),
      fetchData("/tv/on_the_air?language=en-US&page=1"),
      fetchData("/genre/tv/list?language=en"),
      fetchData("/tv/popular?language=en-US&page=1"),
      fetchData("/tv/top_rated?language=en-US&page=1"),
    ];

    const res = await Promise.all(promises);

    return {
      airingToday: res[0],
      onAir: res[1],
      genres: res[2],
      popular: res[3],
      topRated: res[4],
    };
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
    throw new Error("Internal server error: Failed to fetch data");
  }
}

export default async function TVShowsPage() {
  const res = await getTVShowsPageData();

  return (
    <>
      <div className="md:pt-8 lg:pt-12">
        <HeroSection
          key="TVShowsPagePopularHeroSection"
          type="tv-show"
          slides={res.popular.results}
        />
      </div>

      <div className="pt-24">
        <Grid>
          <div className="col-span-2 pb-8 sm:pt-6">
            <SectionTitle
              title="top rated"
              description="Top rated TV series over the years"
              href="/category/top-rated?type=tv-show&page=1"
              shouldShowLink={res.topRated.total_pages > 1}
            />
          </div>

          {sliceResultsLengthForCards(res.topRated.results).map((movieOrTV) => (
            <Grid.Card
              key={movieOrTV.id}
              type="tv-show"
              id={movieOrTV.id}
              imageUrl={movieOrTV.poster_path}
              name={movieOrTV.name ?? ""}
              rating={movieOrTV.vote_average}
              releaseDate={movieOrTV.first_air_date ?? ""}
            />
          ))}
        </Grid>
      </div>

      <div className="pt-32 xl:pt-40">
        <GenresCarousel
          type="tv-show"
          title="genres"
          genres={res.genres.genres}
        />
      </div>

      <div className="pt-32 xl:pt-40">
        <Grid>
          <div className="col-span-2 pb-8 sm:pt-6">
            <SectionTitle
              title="on air"
              description="TV series that are on air"
              href="/category/on-air?type=tv-show&page=1"
              shouldShowLink={res.onAir.total_pages > 1}
            />
          </div>

          {sliceResultsLengthForCards(res.onAir.results).map((movieOrTV) => (
            <Grid.Card
              key={movieOrTV.id}
              type="tv-show"
              id={movieOrTV.id}
              imageUrl={movieOrTV.poster_path}
              name={movieOrTV.name ?? ""}
              rating={movieOrTV.vote_average}
              releaseDate={movieOrTV.first_air_date ?? ""}
            />
          ))}
        </Grid>
      </div>

      <div className="pt-32 xl:pt-40">
        <Grid>
          <div className="col-span-2 pb-8 sm:pt-6">
            <SectionTitle
              title="airing today"
              description="TV series that are airing today"
              href="/category/airing-today?type=tv-show&page=1"
              shouldShowLink={res.airingToday.total_pages > 1}
            />
          </div>

          {sliceResultsLengthForCards(res.airingToday.results).map(
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
