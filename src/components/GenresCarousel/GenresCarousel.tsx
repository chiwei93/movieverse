"use client";

import Link, { type LinkProps } from "next/link";
import {
  type Dispatch,
  type SetStateAction,
  useLayoutEffect,
  useState,
} from "react";
import { Swiper as SwiperClass } from "swiper";

import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

type Genre = {
  name: string;
  href: LinkProps["href"];
};

type GenresCarouselProps = {
  genres: Genre[];
  setSwiper: Dispatch<SetStateAction<SwiperClass | null>>;
};

const GAP_BETWEEN_SLIDES = 16;
const TABLET_VIEWPORT = 640;
const LARGE_MOBILE_VIEWPORT = 450;
const SLIDES_IN_TABLETS = 4;
const SLIDES_IN_LARGE_MOBILE = 3;
const SLIDES_IN_MOBILE = 2;

export default function GenresCarousel({
  genres,
  setSwiper,
}: GenresCarouselProps) {
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
    <Swiper
      spaceBetween={GAP_BETWEEN_SLIDES}
      slidesPerView={slidesPerView}
      onSwiper={(swiper) => setSwiper(swiper)}
    >
      {genres.map((genre) => (
        <SwiperSlide className="relative" key={genre.name}>
          <Link
            href={genre.href}
            className="inline-block w-full rounded bg-[#1B181B] px-8 py-4 text-center text-[0.8rem] capitalize text-[#CFC9CF] xl:text-[1rem]"
          >
            {genre.name}
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
