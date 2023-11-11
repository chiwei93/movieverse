import type { HomePageData } from "@/types/homepageData";

import Card from "@/components/Card/Card";
import CardsGrid from "@/components/CardsGrid/CardsGrid";
import GenresSection from "@/components/GenresSection/GenresSection";
import Hero from "@/components/Hero/Hero";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

import { fetchData } from "@/utils/fetchData";
import { sliceResultsLengthForCards } from "@/utils/sliceResultsToShow";

// for development purposes
import { mockHomePageData } from "@/mocks/mockHomePageData";

const MAX_NUMBER_OF_CARD_SHOWN = 16;

async function getHomePageData(): Promise<HomePageData> {
  const promises = [
    fetchData("/movie/now_playing?language=en-US&page=1"),
    fetchData("/trending/movie/day?language=en-US"),
    fetchData("/trending/tv/day?language=en-US"),
    fetchData("/genre/movie/list?language=en"),
    fetchData("/genre/tv/list?language=en`"),
  ];

  try {
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

export default async function Home() {
  // const data = await getHomePageData();
  // console.log(data);

  return (
    <>
      <div className="md:pt-8 lg:pt-12">
        <Hero movies={mockHomePageData.nowPlaying.results} key="homePage" />
      </div>

      <div className="pt-24">
        <CardsGrid>
          <div className="col-span-2 pb-8 sm:pt-6">
            <SectionTitle
              title="trending movies"
              description="Trending movies of the day"
              href="/movies/category/trending"
              shouldShowLink={
                mockHomePageData.trendingMovies.results.length >
                MAX_NUMBER_OF_CARD_SHOWN
              }
            />
          </div>

          {sliceResultsLengthForCards(
            mockHomePageData.trendingMovies.results,
          ).map((movie) => (
            <Card
              bottomRowProps={{
                rating: movie.vote_average,
                releaseDate: movie.release_date,
              }}
              key={movie.id}
              name={movie.title}
              imageUrl={movie.poster_path}
              id={movie.id}
            />
          ))}
        </CardsGrid>
      </div>

      <div className="pt-32">
        <GenresSection
          title="movies"
          genres={mockHomePageData.genresMovies.genres}
        />
      </div>

      <div className="pt-24">
        <GenresSection
          title="tv shows"
          genres={mockHomePageData.genresTV.genres}
        />
      </div>

      <div className="pt-32">
        <CardsGrid>
          <div className="col-span-2 pb-8 sm:pt-6">
            <SectionTitle
              title="trending tv shows"
              description="Trending TV Shows of the day"
              href="/trending"
              shouldShowLink={
                mockHomePageData.trendingTV.results.length >
                MAX_NUMBER_OF_CARD_SHOWN
              }
            />
          </div>

          {sliceResultsLengthForCards(mockHomePageData.trendingTV.results).map(
            (tv) => (
              <Card
                bottomRowProps={{
                  rating: tv.vote_average,
                  releaseDate: tv.first_air_date,
                }}
                key={tv.id}
                name={tv.name}
                imageUrl={tv.poster_path}
              />
            ),
          )}
        </CardsGrid>
      </div>
    </>
  );
}
