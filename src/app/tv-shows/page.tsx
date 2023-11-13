import type { TVShowsPageData } from "@/types/tvShowsPageData";

import Hero from "@/components/Hero/Hero";

import CardsGrid from "@/components/CardsGrid/CardsGrid";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Card from "@/components/Card/Card";
import GenresSection from "@/components/GenresSection/GenresSection";

import { fetchData } from "@/utils/fetchData";
import { sliceResultsLengthForCards } from "@/utils/sliceResultsToShow";
import { mockTVShowsPageData } from "@/mocks/mockTVShowsPageData";

async function getTVShowsData(): Promise<TVShowsPageData> {
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
  // const res = await getTVShowsData();
  const res = mockTVShowsPageData;

  return (
    <>
      <div className="md:pt-8 lg:pt-12">
        <Hero slides={res.popular.results} key="tvshowsPage" type="tvshows" />
      </div>

      <div className="pt-24">
        <CardsGrid>
          <div className="col-span-2 pb-8 sm:pt-6">
            <SectionTitle
              title="top rated"
              description="Top rated TV series over the years"
              href="/category/top-rated?page=1&type=tv-show"
            />
          </div>

          {sliceResultsLengthForCards(res.topRated.results).map((tv) => (
            <Card
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              name={tv.name}
              type="tv-show"
              bottomRowProps={{
                rating: tv.vote_average,
                releaseDate: tv.first_air_date,
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
              title="on air"
              description="TV series that are on air"
              href="/category/on-air?page=1&type=tv-show"
            />
          </div>

          {sliceResultsLengthForCards(res.onAir.results).map((tv) => (
            <Card
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              name={tv.name}
              type="tv-show"
              bottomRowProps={{
                rating: tv.vote_average,
                releaseDate: tv.first_air_date,
              }}
            />
          ))}
        </CardsGrid>
      </div>

      <div className="pt-32 xl:pt-40">
        <CardsGrid>
          <div className="col-span-2 pb-8 sm:pt-6">
            <SectionTitle
              title="airing today"
              description="TV series that are airing today"
              href="/category/airing-today?page=1&type=tv-show"
            />
          </div>

          {sliceResultsLengthForCards(res.airingToday.results).map((tv) => (
            <Card
              key={tv.id}
              id={tv.id}
              imageUrl={tv.poster_path}
              name={tv.name}
              type="tv-show"
              bottomRowProps={{
                rating: tv.vote_average,
                releaseDate: tv.first_air_date,
              }}
            />
          ))}
        </CardsGrid>
      </div>
    </>
  );
}
