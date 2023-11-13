import type { GenrePageData } from "@/types/GenrePageData";

import Link from "next/link";

import Grid from "@/components/Grid/Grid";
import Pagination from "@/components/Pagination/Pagination";

import { fetchData } from "@/utils/fetchData";

import {
  mockMovieGenresPageData,
  mockTVShowGenresPageData,
} from "@/mocks/mockGenresPageData";

type GenresPageProps = {
  params: {
    genre: string;
  };
  searchParams: {
    type: string;
    page: string;
  };
};

const MOVIE_TYPE = "movie";
const TV_SHOW_TYPE = "tv-show";

async function getGenresPageData(
  genre: string,
  type: string,
  page: number,
): Promise<GenrePageData> {
  try {
    const url =
      type === MOVIE_TYPE
        ? `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}`
        : `/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}`;
    return await fetchData(url);
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
    throw new Error("Internal server error: Failed to fetch data");
  }
}

export default async function GenresPage({
  params,
  searchParams,
}: GenresPageProps) {
  const type = searchParams.type ?? MOVIE_TYPE;
  const page = parseInt(searchParams.page ?? 1);
  // const res = await getGenresPageData(params.genre, type, page);
  const res =
    type === MOVIE_TYPE ? mockMovieGenresPageData : mockTVShowGenresPageData;

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

      {(type === MOVIE_TYPE || type === TV_SHOW_TYPE) && (
        <div className="pt-6 md:pt-10">
          <Grid largeLessCols>
            {res.results.map((movieOrTV) => (
              <Grid.Card
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
                key={movieOrTV.id}
              />
            ))}
          </Grid>
        </div>
      )}

      <div className="flex justify-end pt-20 lg:pt-32">
        <Pagination
          baseUrl={`/genres/${params.genre}`}
          currentPage={page}
          totalPages={res.total_pages}
          queryParams={`type=${type}`}
        />
      </div>
    </div>
  );
}
