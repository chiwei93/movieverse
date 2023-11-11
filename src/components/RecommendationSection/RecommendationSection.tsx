"use client";

import type { CardType } from "@/types/cardType";
import type { RecommendedMoviesResponse } from "@/types/movies";

import { useState } from "react";
import Swiper from "swiper";

import RecommendationCarousel from "../RecommendationCarousel/RecommendationCarousel";

type RecommendationSectionProps = {
  type?: CardType;
  movies: RecommendedMoviesResponse["results"];
};

export default function RecommendationSection({
  type = "movie",
  movies
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
        <RecommendationCarousel setSwiper={setSwiper} type={type} movies={movies} />
      </div>
    </>
  );
}
