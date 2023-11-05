"use client";

import type { LinkProps } from "next/link";
import type { Dispatch, SetStateAction } from "react";

import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

type Genre = {
  name: string;
  href: LinkProps["href"];
  id: number;
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
        <SwiperSlide
          className="relative"
          key={genre.name}
          style={{ height: "auto" }}
        >
          <Link
            href={genre.href}
            className="flex h-full w-full items-center justify-center rounded bg-[#1B181B] px-8 py-4 text-center text-[0.8rem] capitalize text-[#CFC9CF] xl:text-[1rem]"
          >
            {genre.name}
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
