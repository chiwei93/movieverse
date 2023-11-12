import type { MovieGenrePageData } from "@/types/movieGenrePageData";

import Link from "next/link";

import CardsGrid from "@/components/CardsGrid/CardsGrid";
import Card from "@/components/Card/Card";
import Pagination from "@/components/Pagination/Pagination";

import { fetchData } from "@/utils/fetchData";
import { mockMovieGenrePageData } from "@/mocks/mockMovieGenrePageData";

type GenreProps = {
  params: { genre: string };
  searchParams: { page: string };
};

async function getGenrePageData(
  genre: string,
  page: number,
): Promise<MovieGenrePageData> {
  try {
    return await fetchData(
      `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}`,
    );
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
    throw new Error("Internal server error: Failed to fetch data");
  }
}

export default async function Genre({ params, searchParams }: GenreProps) {
  const page = parseInt(searchParams.page ?? 1);
  // const res = await getGenrePageData(params.genre, page);
  const res = mockMovieGenrePageData;

  return (
    <div className="md:pt-8 lg:pt-12">
      <div className="flex items-end justify-between gap-x-2 pt-4 sm:flex-col sm:items-start sm:justify-normal sm:gap-x-0 sm:gap-y-2 sm:pt-6 md:gap-y-2">
        <h2 className="text-[1.25rem] font-medium capitalize text-[#877887] md:text-[1.563rem] lg:text-[1.953rem]">
          {params.genre}
        </h2>

        <div>
          <Link href="/" className="text-[0.8rem] text-[#F50057]">
            Back to home
          </Link>
        </div>
      </div>

      <div className="pt-6 md:pt-10">
        <CardsGrid lesserCols>
          {res.results.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              type="movie"
              imagePriority
              imageUrl={movie.poster_path}
              name={movie.title}
              bottomRowProps={{
                rating: movie.vote_average,
                releaseDate: movie.release_date,
              }}
            />
          ))}
        </CardsGrid>
      </div>

      <div className="flex justify-end pt-20 lg:pt-32">
        <Pagination
          baseUrl={`/movies/genres/${params.genre}`}
          currentPage={page}
          totalPages={res.total_pages}
        />
      </div>
    </div>
  );
}
