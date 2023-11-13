"use client";

import type { MovieOrTV } from "@/types/MovieOrTV";
import type { Swiper as SwiperClass } from "swiper";

import { useLayoutEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import Grid from "../Grid/Grid";

import { sliceResultsLengthForCards } from "@/utils/sliceResultsToShow";

type CarouselProps = {
  type: "movie" | "tv-show";
  title?: string;
  slides: MovieOrTV[];
};

const GAP_BETWEEN_SLIDES = 16;
const DESKTOP_VIEWPORT = 1024;
const TABLET_VIEWPORT = 640;
const LARGE_MOBILE_VIEWPORT = 450;
const SLIDES_IN_DESKTOP = 6;
const SLIDES_IN_TABLETS = 4;
const SLIDES_IN_LARGE_MOBILE = 3;
const SLIDES_IN_MOBILE = 2;
const MAX_SLIDES_TO_SHOW = 24;
const MOVIE_TYPE = "movie";

export default function Carousel({
  title = "recommendations",
  slides,
  type,
}: CarouselProps) {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [slidesPerView, setSlidePerView] = useState(SLIDES_IN_TABLETS);

  useLayoutEffect(() => {
    const resizeNumberOfSlides = () => {
      if (window.innerWidth >= DESKTOP_VIEWPORT) {
        setSlidePerView(SLIDES_IN_DESKTOP);
      } else if (window.innerWidth >= TABLET_VIEWPORT) {
        setSlidePerView(SLIDES_IN_TABLETS);
      } else if (window.innerWidth >= LARGE_MOBILE_VIEWPORT) {
        setSlidePerView(SLIDES_IN_LARGE_MOBILE);
      } else {
        setSlidePerView(SLIDES_IN_MOBILE);
      }
    };

    resizeNumberOfSlides();

    window.addEventListener("resize", resizeNumberOfSlides);

    return () => {
      window.removeEventListener("resize", resizeNumberOfSlides);
    };
  }, []);

  return (
    <>
      <div className="flex items-center justify-between gap-x-2 pb-4">
        <h2 className="text-[1.25rem] font-medium capitalize text-[#877887] md:text-[1.563rem] lg:text-[1.953rem]">
          {title}
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

      <Swiper
        spaceBetween={GAP_BETWEEN_SLIDES}
        slidesPerView={slidesPerView}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {sliceResultsLengthForCards(slides, MAX_SLIDES_TO_SHOW).map((slide) => (
          <SwiperSlide
            key={slide.id}
            style={{ height: "auto" }}
            className="relative"
          >
            <Grid.Card
              type={type}
              id={slide.id}
              imageUrl={slide.poster_path}
              name={type === MOVIE_TYPE ? slide.title ?? "" : slide.name ?? ""}
              rating={slide.vote_average}
              releaseDate={
                type === MOVIE_TYPE
                  ? slide.release_date ?? ""
                  : slide.first_air_date ?? ""
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
