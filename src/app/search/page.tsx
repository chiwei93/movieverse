import type { SearchPageData } from "@/types/SearchPageData";

import Link from "next/link";

import SearchInput from "@/components/SearchInput/SearchInput";
import Grid from "@/components/Grid/Grid";
import Pagination from "@/components/Pagination/Pagination";

import { fetchData } from "@/utils/fetchData";

type SearchPageProps = {
  searchParams: {
    q: string;
    page: string;
  };
};

async function getSearchPageData(
  query: string,
  page: number,
): Promise<SearchPageData> {
  try {
    const promises = [
      fetchData(`/search/movie?query=${query}&language=en-US&page=${page}`),
      fetchData(`/search/tv?query=${query}&language=en-US&page=${page}`),
    ];

    const res = await Promise.all(promises);

    return {
      page: res[0].page ?? res[1].page,
      results: ((res[0].results ?? []) as SearchPageData["results"]).concat(
        res[1].results ?? [],
      ),
      total_pages: Math.max(res[0].total_pages ?? 1, res[1].total_pages ?? 1),
      total_results: Math.max(res[0].total_results ?? 1, res[1].total_results),
    };
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
    throw new Error("Internal server error: Failed to fetch data");
  }
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = decodeURIComponent(searchParams.q);
  const page = parseInt(searchParams.page ?? 1);
  const res = await getSearchPageData(query, page);

  return (
    <div className="min-h-[80vh]">
      <div className="relative lg:hidden">
        <SearchInput fullWidth />
      </div>

      <div className="pt-8 md:pt-4">
        <div>
          <h2 className="text-[1.25rem] font-medium text-[#877887] md:text-[1.563rem] lg:text-[1.953rem]">
            Results: {query}
          </h2>

          <div className="pt-2">
            <Link href="/" className="text-[0.8rem] text-[#F50057]">
              Back to home
            </Link>
          </div>
        </div>

        <div className="pt-8">
          <Grid largeLessCols>
            {res.results.map((movieOrTV) => {
              const type = movieOrTV.title ? "movie" : "tv-show";

              return (
                <Grid.Card
                  key={movieOrTV.id}
                  type={type}
                  id={movieOrTV.id}
                  imageUrl={movieOrTV.poster_path}
                  name={
                    type === "movie"
                      ? movieOrTV.title ?? ""
                      : movieOrTV.name ?? ""
                  }
                  rating={movieOrTV.vote_average}
                  imagePriority
                  releaseDate={
                    type === "movie"
                      ? movieOrTV.release_date ?? ""
                      : movieOrTV.first_air_date ?? ""
                  }
                />
              );
            })}
          </Grid>
        </div>

        <div className="flex justify-end pt-20 lg:pt-32">
          <Pagination
            baseUrl={`/search`}
            currentPage={page}
            totalPages={res.total_pages}
            queryParams={`q=${query}`}
          />
        </div>
      </div>
    </div>
  );
}
