type GenreProps = {
  params: { genre: string };
  searchParams: { page: string };
};

async function getTVShowGenrePageData(genre: string, page: number) {}

export default async function TVShowsGenrePage({
  params,
  searchParams,
}: GenreProps) {
  const page = parseInt(searchParams.page ?? 1);

  return <div>genre for tv shows</div>;
}
