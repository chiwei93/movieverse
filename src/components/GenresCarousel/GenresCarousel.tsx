"use client";

import type { Swiper as SwiperClass } from "swiper";
import type { Genre } from "@/types/Genres";

import { useLayoutEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import "swiper/css";

type GenresCarousel = {
  title: string;
  genres: Genre[];
  type: "movie" | "tv-show";
};

const GAP_BETWEEN_SLIDES = 16;
const TABLET_VIEWPORT = 640;
const LARGE_MOBILE_VIEWPORT = 450;
const SLIDES_IN_TABLETS = 4;
const SLIDES_IN_LARGE_MOBILE = 3;
const SLIDES_IN_MOBILE = 2;

export default function GenresCarousel({
  title,
  genres,
  type,
}: GenresCarousel) {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [slidesPerView, setSlidePerView] = useState(SLIDES_IN_TABLETS);

  useLayoutEffect(() => {
    const resizeNumberOfSlides = () => {
      if (window.innerWidth >= TABLET_VIEWPORT) {
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
        <h2 className="text-[1.563rem] font-bold uppercase lg:text-[1.953rem]">
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

      <div>
        <Swiper
          spaceBetween={GAP_BETWEEN_SLIDES}
          slidesPerView={slidesPerView}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          {genres.map((genre) => (
            <SwiperSlide
              className="relative"
              key={genre.id}
              style={{ height: "auto" }}
            >
              <Link
                href={`/genres/${encodeURIComponent(genre.name.toLowerCase())}?type=${type}&page=1`}
                className="flex h-full w-full items-center justify-center rounded bg-[#1B181B] px-8 py-4 text-center text-[0.8rem] capitalize text-[#CFC9CF] xl:text-[1rem]"
              >
                {genre.name}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
