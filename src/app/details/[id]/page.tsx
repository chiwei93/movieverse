import type { DetailsPageData } from "@/types/DetailsPageData";
import type { Video } from "@/types/Videos";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import Review from "@/components/Review/Review";
import Carousel from "@/components/Carousel/Carousel";
import Grid from "@/components/Grid/Grid";

import { sliceResultsLengthForCards } from "@/utils/sliceResultsToShow";
import { fetchData } from "@/utils/fetchData";

type DetailsPageProps = {
  params: {
    id: string;
  };
  searchParams: {
    type: string;
  };
};

const MOVIE_TYPE = "movie";
const TV_SHOW_TYPE = "tv-show";
const POSTER_TYPE = "poster";
const MAX_POSTERS_TO_SHOW = 16;
const MAX_REVIEWS_TO_SHOW = 5;

function getYoutubeTrailerKeyFromVideos(videos: Video[]): string | null {
  if (videos.length <= 0) return null;

  let filteredVideos = videos.filter((video) => {
    return (
      video.site === "YouTube" &&
      (video.type === "Teaser" || video.type === "Trailer") &&
      video["iso_639_1"] === "en"
    );
  });

  // find other video types instead of teasers if there is no teaser
  if (filteredVideos.length <= 0) {
    filteredVideos = videos.filter((video) => {
      return (
        (video.type === "Featurette" || video.type === "Clip") &&
        video["iso_639_1"] === "en"
      );
    });
  }

  if (filteredVideos.length <= 0) return null;

  // sort it to get latest teaser
  return filteredVideos.sort(
    (video1, video2) =>
      new Date(video2.published_at).getTime() -
      new Date(video1.published_at).getTime(),
  )[0].key;
}

function convertMovieRuntimeIntoHoursAndMinutes(runtime: number) {
  if (!runtime) return "";
  const hours = Math.floor(runtime / 60);
  const minutes = runtime - hours * 60;
  return `${hours}h ${minutes}min`;
}

async function getDetailPageData(
  id: number,
  type: string,
): Promise<DetailsPageData> {
  try {
    const promises =
      type === MOVIE_TYPE
        ? [
            fetchData(
              `/movie/${id}?append_to_response=videos,reviews,recommendations&language=en-US`,
            ),
            fetchData(`/movie/${id}/images`),
          ]
        : [
            fetchData(
              `/tv/${id}?append_to_response=videos,recommendations,reviews&language=en-US`,
            ),
            fetchData(`/tv/${id}/images`),
          ];

    const res = await Promise.all(promises);

    return {
      detail: res[0],
      posters: res[1].posters.length > 0 ? res[1].posters : res[1].backdrops,
    };
  } catch (err) {
    if (err instanceof Error) throw new Error(err.message);
    throw new Error("Internal server error: Failed to fetch data");
  }
}

export default async function DetailsPage({
  params,
  searchParams,
}: DetailsPageProps) {
  const type = searchParams.type ?? MOVIE_TYPE;
  const res = await getDetailPageData(
    parseInt(params.id),
    searchParams.type ?? MOVIE_TYPE,
  );
  const { detail, posters } = res;
  const altTextForHero = `Hero image for ${
    type === MOVIE_TYPE ? detail.title : detail.name
  }`;
  const trailerKey = getYoutubeTrailerKeyFromVideos(res.detail.videos.results);
  console.log(detail.recommendations);

  return (
    <>
      <div className="md:pt-8 lg:pt-12">
        <div className="md:grid md:grid-cols-8 md:gap-x-4 lg:grid-cols-12">
          <div className="relative aspect-[2/3] object-cover md:col-span-5 lg:col-span-7 lg:aspect-[2/2.8]">
            <Image
              src={
                detail.poster_path
                  ? `https://image.tmdb.org/t/p/original${detail.poster_path}`
                  : "/starwars.jpeg"
              }
              alt={altTextForHero}
              fill
              priority
              sizes="(max-width: 0) 100%"
            />

            <div className="absolute left-0 right-0 top-0 h-[5rem] bg-gradient-to-b from-[#121012]"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[5rem] bg-gradient-to-t from-[#121012]"></div>
            <div className="absolute bottom-0 left-0 top-0 w-[4rem] bg-gradient-to-r from-[#121012]"></div>
            <div className="absolute bottom-0 right-0 top-0 w-[4rem] bg-gradient-to-l from-[#121012] md:via-[#131113]"></div>
          </div>

          <div className="pt-8 md:col-span-3 lg:col-span-5 lg:pt-16">
            <div>
              <h1 className="text-[1.563rem] font-bold uppercase leading-7 text-[#F3F1F3] md:text-[1.953rem] md:leading-8 lg:text-[3.052rem] lg:leading-none">
                {type === MOVIE_TYPE ? detail.title : detail.name}
              </h1>

              <div className="flex items-center gap-x-4 py-2 text-[0.8rem] text-[#9F939F] md:py-3 xl:text-[1rem]">
                <span className="flex items-center gap-x-2 text-[#F50057]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="mt-0.5">
                    {detail.vote_average.toFixed(1)}
                  </span>
                </span>

                <span className="block h-1 w-1 rounded-full bg-[#9F939F]"></span>

                {type === MOVIE_TYPE && detail.release_date && (
                  <span className="block">
                    {new Date(detail.release_date).getFullYear()}
                  </span>
                )}

                {type === TV_SHOW_TYPE && detail.first_air_date && (
                  <span className="block">
                    {new Date(detail.first_air_date).getFullYear()}
                  </span>
                )}

                <span className="block h-1 w-1 rounded-full bg-[#9F939F]"></span>

                {type === MOVIE_TYPE && (
                  <span className="block">
                    {convertMovieRuntimeIntoHoursAndMinutes(
                      detail.runtime ?? 0,
                    )}
                  </span>
                )}

                {type === TV_SHOW_TYPE && (
                  <span className="block capitalize">
                    {detail.number_of_episodes} episodes
                  </span>
                )}

                {type === TV_SHOW_TYPE && (
                  <span className="block h-1 w-1 rounded-full bg-[#9F939F]"></span>
                )}

                {type === TV_SHOW_TYPE && (
                  <span className="block capitalize">
                    {detail.number_of_seasons} seasons
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {detail.genres.map((genre) => (
                  <span
                    className="block rounded bg-[#1B181B] px-6 py-2 text-[0.8rem] capitalize text-[#9F939F]"
                    key={genre.id}
                  >
                    {genre.name}
                  </span>
                ))}
              </div>

              <div className="py-6 leading-7 text-[#CFC9CF] lg:py-10 lg:leading-relaxed xl:py-14 xl:text-[1.25rem]">
                {detail.overview}
              </div>

              <div className="grid grid-cols-2 gap-x-4 text-[0.8rem] md:grid-cols-1 md:gap-x-0 md:gap-y-4 lg:flex lg:gap-x-4 lg:gap-y-0 xl:text-[1rem]">
                <Link
                  href={`https://www.youtube.com/watch?v=${trailerKey}`}
                  target="_blank"
                  className="rounded border border-[#F50057] bg-[#F50057] px-4 py-2 text-white sm:px-8"
                >
                  Watch trailer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {detail.production_companies.length > 0 && (
        <div className="pt-16 md:pt-24 lg:pt-28">
          <h2 className="pb-4 text-[1.25rem] font-medium text-[#877887] md:text-[1.563rem] lg:text-[1.953rem]">
            Production companies
          </h2>

          <div className="flex items-center gap-x-3">
            {detail.production_companies.map((company, index) => (
              <Fragment key={company.id}>
                <span className="block font-semibold capitalize text-[#CFC9CF]">
                  {company.name}
                </span>

                {index < detail.production_companies.length - 1 && (
                  <span className="block h-[0.375rem] w-[0.375rem] rounded-full bg-[#CFC9CF]"></span>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      )}

      <div className="pt-16 md:pt-24 lg:pt-28">
        <Grid>
          <div className="col-span-2 flex items-end justify-between gap-x-2 pt-4 sm:flex-col sm:items-start sm:justify-normal sm:gap-x-0 sm:gap-y-2 sm:pt-6 md:gap-y-6">
            <h2 className="text-[1.25rem] font-medium text-[#877887] md:text-[1.563rem] lg:text-[1.953rem]">
              Posters
            </h2>
          </div>

          {sliceResultsLengthForCards(posters, MAX_POSTERS_TO_SHOW).map(
            (poster, index) => (
              <Grid.Card
                key={index}
                imageUrl={poster.file_path}
                type={POSTER_TYPE}
                name={
                  type === MOVIE_TYPE ? detail.title ?? "" : detail.name ?? ""
                }
              />
            ),
          )}
        </Grid>
      </div>

      {detail.reviews && detail.reviews.results.length > 0 && (
        <div className="pt-16 md:pt-24 lg:pt-28">
          <Grid>
            <div className="col-span-2 flex items-end justify-between gap-x-2 pt-4 sm:flex-col sm:items-start sm:justify-normal sm:gap-x-0 sm:gap-y-2 sm:pt-6 md:gap-y-6">
              <h2 className="text-[1.25rem] font-medium text-[#877887] md:text-[1.563rem] lg:text-[1.953rem]">
                Reviews
              </h2>
            </div>

            {sliceResultsLengthForCards(
              detail.reviews.results,
              MAX_REVIEWS_TO_SHOW,
            ).map((review) => (
              <Review
                key={review.id}
                author={review.author}
                rating={review.author_details.rating}
                content={review.content}
                date={review.updated_at ?? review.created_at}
                reviewUrl={review.url}
              />
            ))}
          </Grid>
        </div>
      )}

      {detail.recommendations && detail.recommendations.results.length > 0 && (
        <div className="pt-16 md:pt-24 lg:pt-28">
          <Carousel
            slides={detail.recommendations.results}
            type={type === MOVIE_TYPE ? MOVIE_TYPE : TV_SHOW_TYPE}
          />
        </div>
      )}
    </>
  );
}
