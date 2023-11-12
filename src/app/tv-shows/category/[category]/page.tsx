import type { TVCategoryPageData } from "@/types/tvCategoryPageData";

import Link from "next/link";

import CardsGrid from "@/components/CardsGrid/CardsGrid";
import Card from "@/components/Card/Card";
import Pagination from "@/components/Pagination/Pagination";

import { fetchData } from "@/utils/fetchData";

import { mockTVCategoryPageData } from "@/mocks/mockTVCategoryPageData";

type TVCategoryPageProps = {
  searchParams: { page: string };
  params: { category: string };
};

const urlMap = new Map<string, string>([
  ["trending", "/trending/tv/day?language=en-US"],
  ["top-rated", "/tv/top_rated?language=en-US&page=1"],
  ["on-air", "/tv/on_the_air?language=en-US&page=1"],
  ["airing-today", "/tv/airing_today?language=en-US&page=1"],
  ["popular", "/tv/popular?language=en-US&page=1"],
]);

async function getTVCategoryData(
  category: string,
  page: number,
): Promise<TVCategoryPageData> {
  try {
    const url = urlMap.get(category);
    return await fetchData(`${url}&page=${page}`);
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
    throw new Error("Internal server error: Failed to fetch data");
  }
}

export default async function TVShowCategoryPage({
  params,
  searchParams,
}: TVCategoryPageProps) {
  const page = parseInt(searchParams.page ?? 1);
  // const res = await getTVCategoryData(params.category, page);
  const res = mockTVCategoryPageData;

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
        <CardsGrid lesserCols>
          {res.results.map((tv) => (
            <Card
              key={tv.id}
              id={tv.id}
              type="tv-show"
              imageUrl={tv.poster_path}
              name={tv.name}
              imagePriority
              bottomRowProps={{
                rating: tv.vote_average,
                releaseDate: tv.first_air_date,
              }}
            />
          ))}
        </CardsGrid>
      </div>

      <div className="flex justify-end pt-20 lg:pt-32">
        <Pagination
          baseUrl={`/tv-shows/category/${params.category}`}
          currentPage={page}
          totalPages={res.total_pages}
        />
      </div>
    </div>
  );
}
