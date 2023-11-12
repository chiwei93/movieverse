"use client";

import type { Movie, RecommendedMoviesResponse } from "@/types/movies";

import { useState } from "react";
import Swiper from "swiper";

import RecommendationCarousel from "../RecommendationCarousel/RecommendationCarousel";
import { RecommendedTVShowResponse, TVShow } from "@/types/tvshows";

type MovieRecommendationProps = {
  type: "movie";
  slides: RecommendedMoviesResponse["results"];
};

type TVRecommendationProps = {
  type: "tv-show";
  slides: RecommendedTVShowResponse["results"];
};

type RecommendationSectionProps =
  | MovieRecommendationProps
  | TVRecommendationProps;

export default function RecommendationSection({
  type,
  slides,
}: RecommendationSectionProps) {
  const [swiper, setSwiper] = useState<Swiper | null>(null);

  return (
    <>
      <div className="flex items-center justify-between gap-x-2 pb-4">
        <h2 className="text-[1.25rem] font-medium text-[#877887] md:text-[1.563rem] lg:text-[1.953rem]">
          Recommendations
        </h2>

        <div className="flex items-center gap-x-2 md:gap-x-4">
          <button
            className="text-[#9F939F] transition hover:text-[#F3F1F3]"
            onClick={() => {
              swiper?.slidePrev();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 lg:h-7 lg:w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            className="text-[#9F939F] transition hover:text-[#F3F1F3]"
            onClick={() => {
              swiper?.slideNext();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 lg:h-7 lg:w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="">
        {type === "movie" ? (
          <RecommendationCarousel
            setSwiper={setSwiper}
            type={type}
            slides={slides}
          />
        ) : (
          <RecommendationCarousel
            setSwiper={setSwiper}
            type={type}
            slides={slides}
          />
        )}
      </div>
    </>
  );
}
