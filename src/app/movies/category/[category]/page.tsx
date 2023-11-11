import type { MovieCategoryPageData } from "@/types/movieCategoryPageData";

import Link from "next/link";

import Card from "@/components/Card/Card";
import CardsGrid from "@/components/CardsGrid/CardsGrid";

import { fetchData } from "@/utils/fetchData";
import { mockMovieCategoryData } from "@/mocks/mockMovieCategoryData";
import Pagination from "@/components/Pagination/Pagination";

async function getMovieCategoryData(
  category: string,
  page: number,
): Promise<MovieCategoryPageData> {
  const urlMap: Map<string, string> = new Map([
    ["trending", "/trending/movie/day?language=en-US"],
    ["now-playing", "/movie/now_playing?language=en-US"],
    ["popular", "/movie/popular?language=en-US"],
    ["top-rated", "/movie/top_rated?language=en-US"],
    ["upcoming", "/movie/upcoming?language=en-US"],
  ]);

  try {
    const url = urlMap.get(category);
    console.log(url, "value of url");
    return await fetchData(`${url}&page=${page}`);
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
    throw new Error("Internal server error: Failed to fetch data");
  }
}

export default async function MovieCategory({
  searchParams,
  params,
}: {
  searchParams: { page: string };
  params: { category: string };
}) {
  const page = parseInt(searchParams.page) ?? 1;
  // const res = await getMovieCategoryData(params.category, searchParams.page);
  const res = mockMovieCategoryData;

  return (
    <div className="md:pt-8">
      <div className="flex items-end justify-between gap-x-2 pt-4 sm:flex-col sm:items-start sm:justify-normal sm:gap-x-0 sm:gap-y-2 sm:pt-6 md:gap-y-2">
        <h2 className="text-[1.25rem] font-medium capitalize text-[#877887] md:text-[1.563rem] lg:text-[1.953rem]">
          {params.category.split("-").join(" ")}
        </h2>

        <div>
          <Link href="/" className="text-[0.8rem] text-[#F50057]">
            Back to home
          </Link>
        </div>
      </div>

      <div className="pt-6 md:pt-10">
        <CardsGrid responsive={{ large: { cols: 5, xGap: 6 } }}>
          {res.results.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              type="movie"
              imageUrl={movie.poster_path}
              name={movie.title}
              imagePriority={true}
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
          baseUrl={`/movies/category/${params.category}`}
          currentPage={page}
          totalPages={res.total_pages}
        />
      </div>
    </div>
  );
}
