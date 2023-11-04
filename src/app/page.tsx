import CardsGrid from "@/components/CardsGrid/CardsGrid";
import GenresSection from "@/components/GenresSection/GenresSection";
import Hero from "@/components/Hero/Hero";
import Card from "@/components/Card/Card";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const bottomRow = {
  year: 2020,
  rating: 7,
};

async function getHomePageData() {
  const baseUrl = "https://api.themoviedb.org/3";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };

  const promises = [
    fetch(`${baseUrl}/movie/now_playing?language=en-US&page=1`, options),
    fetch(`${baseUrl}/trending/movie/day?language=en-US`, options),
    fetch(`${baseUrl}/genre/movie/list?language=en`, options),
    fetch(`${baseUrl}/genre/tv/list?language=en`, options),
    fetch(`${baseUrl}/trending/tv/day?language=en-US`, options),
  ]

  //https://api.themoviedb.org/3/movie/945729/videos?language=en-US

  try {
    const res = await Promise.all(promises);

    return {
      nowPlaying: await res[0].json(),
      trendingMovies: await res[1].json(),
      genresMovies: await res[2].json(),
      genresTV: await res[3].json(),
      trendingTV: await res[4].json()
    }
  } catch {
    throw new Error("Failed to fetch")
  }
}

export default async function Home() {
  // const data = await getHomePageData();
  // console.log(data)

  return (
    <>
      <div className="md:pt-8 lg:pt-12">
        <Hero />
      </div>

      <div className="pt-24">
        <CardsGrid>
          <div className="col-span-2 pb-8 sm:pt-6">
            <SectionTitle
              title="now showing"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem porro
        iure deserunt ipsam."
              href="/now-showing"
            />
          </div>

          <Card bottomRow={bottomRow} />
          <Card bottomRow={bottomRow} />
          <Card bottomRow={bottomRow} />
          <Card bottomRow={bottomRow} />
          <Card bottomRow={bottomRow} />
          <Card bottomRow={bottomRow} />
          <Card bottomRow={bottomRow} />
          <Card bottomRow={bottomRow} />
        </CardsGrid>
      </div>

      <div className="pt-32">
        <GenresSection title="movies" />
      </div>

      <div className="pt-24">
        <GenresSection title="tv shows" />
      </div>

      <div className="pt-32">
        <CardsGrid>
          <div className="col-span-2 pb-8 sm:pt-6">
            <SectionTitle
              title="trending"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem porro
        iure deserunt ipsam."
              href="/trending"
            />
          </div>

          <Card bottomRow={bottomRow} />
          <Card bottomRow={bottomRow} />
          <Card bottomRow={bottomRow} />
          <Card bottomRow={bottomRow} />
          <Card bottomRow={bottomRow} />
          <Card bottomRow={bottomRow} />
          <Card bottomRow={bottomRow} />
          <Card bottomRow={bottomRow} />
        </CardsGrid>
      </div>
    </>
  );
}
