import { TVGenrePageData } from "@/types/tvGenrePageData";
import { fetchData } from "@/utils/fetchData";

type GenreProps = {
  params: { genre: string };
  searchParams: { page: string };
};

async function getTVShowGenrePageData(
  genre: string,
  page: number,
): Promise<TVGenrePageData> {
  try {
    return await fetchData(
      `/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}`,
    );
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
    throw new Error("Internal server error: Failed to fetch data");
  }
}

export default async function TVShowsGenrePage({
  params,
  searchParams,
}: GenreProps) {
  const page = parseInt(searchParams.page ?? 1);

  return <div>genre for tv shows</div>;
}
