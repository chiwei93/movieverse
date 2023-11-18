import type { CategoryPageData } from "@/types/CategoryPageData";

import Link from "next/link";

import Grid from "@/components/Grid/Grid";
import Pagination from "@/components/Pagination/Pagination";

import { fetchData } from "@/utils/fetchData";

type CategoryPageProps = {
  params: {
    category: string;
  };
  searchParams: {
    type: string;
    page: string;
  };
};

const MOVIE_TYPE = "movie";
const TV_SHOW_TYPE = "tv-show";

const movieUrlsMap: Map<string, string> = new Map([
  ["trending", "/trending/movie/day?language=en-US"],
  ["now-playing", "/movie/now_playing?language=en-US"],
  ["popular", "/movie/popular?language=en-US"],
  ["top-rated", "/movie/top_rated?language=en-US"],
  ["upcoming", "/movie/upcoming?language=en-US"],
]);

const tvUrlsMap = new Map<string, string>([
  ["trending", "/trending/tv/day?language=en-US"],
  ["top-rated", "/tv/top_rated?language=en-US&page=1"],
  ["on-air", "/tv/on_the_air?language=en-US&page=1"],
  ["airing-today", "/tv/airing_today?language=en-US&page=1"],
  ["popular", "/tv/popular?language=en-US&page=1"],
]);

async function getCategoryPageData(
  category: string,
  type: string,
  page: number,
): Promise<CategoryPageData> {
  try {
    const urlMap = type === MOVIE_TYPE ? movieUrlsMap : tvUrlsMap;
    const url = urlMap.get(category);
    return await fetchData(`${url}&page=${page}`);
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
    throw new Error("Internal server error: Failed to fetch data");
  }
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const type = searchParams.type ?? MOVIE_TYPE;
  const page = parseInt(searchParams.page ?? 1);
  const res = await getCategoryPageData(params.category, type, page);

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

      {(type === MOVIE_TYPE || type === TV_SHOW_TYPE) && (
        <div className="pt-6 md:pt-10">
          <Grid largeLessCols>
            {res.results.map((movieOrTV) => (
              <Grid.Card
                key={movieOrTV.id}
                type={type}
                id={movieOrTV.id}
                imageUrl={movieOrTV.poster_path}
                name={
                  type === MOVIE_TYPE
                    ? movieOrTV.title ?? ""
                    : movieOrTV.name ?? ""
                }
                rating={movieOrTV.vote_average}
                imagePriority
                releaseDate={
                  type === MOVIE_TYPE
                    ? movieOrTV.release_date ?? ""
                    : movieOrTV.first_air_date ?? ""
                }
              />
            ))}
          </Grid>
        </div>
      )}

      <div className="flex justify-end pt-20 lg:pt-32">
        <Pagination
          baseUrl={`/category/${params.category}`}
          currentPage={page}
          totalPages={res.total_pages}
          queryParams={`type=${type}`}
        />
      </div>
    </div>
  );
}
