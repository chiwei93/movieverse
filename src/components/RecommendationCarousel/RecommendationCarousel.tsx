"use client";

import {
  useLayoutEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import Card from "@/components/Card/Card";

const bottomRow = {
  year: 2020,
  rating: 7,
};

type RecommendationCarouselProps = {
  setSwiper: Dispatch<SetStateAction<SwiperClass | null>>;
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
      <SwiperSlide>
        <Card bottomRow={bottomRow} />
      </SwiperSlide>
      <SwiperSlide>
        <Card bottomRow={bottomRow} />
      </SwiperSlide>
      <SwiperSlide>
        <Card bottomRow={bottomRow} />
      </SwiperSlide>
      <SwiperSlide>
        <Card bottomRow={bottomRow} />
      </SwiperSlide>
      <SwiperSlide>
        <Card bottomRow={bottomRow} />
      </SwiperSlide>
      <SwiperSlide>
        <Card bottomRow={bottomRow} />
      </SwiperSlide>
    </Swiper>
  );
}
