import CardsGrid from "@/components/CardsGrid/CardsGrid";
import Hero from "@/components/Hero/Hero";
import MovieCard from "@/components/MovieCard/MovieCard";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

export default function Movies() {
  return (
    <>
      <div className="md:pt-8 lg:pt-12">
        <Hero />
      </div>

      <div className="pt-24">
        <CardsGrid>
          <div className="col-span-2 pb-8 sm:pt-6">
            <SectionTitle
              title="trending"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem porro
        iure deserunt ipsam."
              href="/trending"
            />
          </div>

          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </CardsGrid>
      </div>
    </>
  );
}
