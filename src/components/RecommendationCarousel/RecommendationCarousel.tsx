"use client";

import type { CardType } from "@/types/cardType";
import type { Dispatch, SetStateAction } from "react";
import type { RecommendedMoviesResponse } from "@/types/movies";

import { useLayoutEffect, useState } from "react";
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import Card from "@/components/Card/Card";

import { sliceResultsLengthForCards } from "@/utils/sliceResultsToShow";

const maxSlidesToShow = 24;

type RecommendationCarouselProps = {
  setSwiper: Dispatch<SetStateAction<SwiperClass | null>>;
  type: CardType;
  movies: RecommendedMoviesResponse["results"];
};

const GAP_BETWEEN_SLIDES = 16;
const DESKTOP_VIEWPORT = 1024;
const TABLET_VIEWPORT = 640;
const LARGE_MOBILE_VIEWPORT = 450;
const SLIDES_IN_DESKTOP = 6;
const SLIDES_IN_TABLETS = 4;
const SLIDES_IN_LARGE_MOBILE = 3;
const SLIDES_IN_MOBILE = 2;

export default function RecommendationCarousel({
  setSwiper,
  type,
  movies,
}: RecommendationCarouselProps) {
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
    <Swiper
      spaceBetween={GAP_BETWEEN_SLIDES}
      slidesPerView={slidesPerView}
      onSwiper={(swiper) => setSwiper(swiper)}
    >
      {sliceResultsLengthForCards(movies, maxSlidesToShow).map((movie) => (
        <SwiperSlide key={movie.id}>
          <Card
            type={type}
            id={movie.id}
            imageUrl={movie.poster_path}
            name={movie.title}
            bottomRowProps={{
              rating: movie.vote_average,
              releaseDate: movie.release_date,
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
