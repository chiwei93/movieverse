"use client";

import type { MovieOrTV } from "@/types/MovieOrTV";

import { useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Ratings
type RatingsProps = {
  rating: number;
};

const MAX_NUMBER_OF_STARS = 5;
const MAX_NUMBER_OF_RATINGS = 10;

const renderStars = (rating: number, id: string) => {
  const numOfStars = Math.round(
    (rating * MAX_NUMBER_OF_STARS) / MAX_NUMBER_OF_RATINGS,
  );
  const stars: JSX.Element[] = [];

  for (let i = 1; i <= numOfStars; i++) {
    stars.push(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4"
        key={`star-${i}-${id}`}
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>,
    );
  }

  let outlineStars = MAX_NUMBER_OF_STARS - stars.length;

  while (outlineStars > 0) {
    stars.push(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-4 w-4"
        key={`star-${id}-${outlineStars}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>,
    );
    outlineStars -= 1;
  }

  return stars;
};

function Ratings({ rating }: RatingsProps) {
  const id = useId();

  return (
    <div className="flex items-center gap-x-4 text-[#F50057]">
      <div className="flex gap-x-1">{renderStars(rating, id)}</div>

      <span className="pt-[0.1rem] text-[0.8rem] xl:text-[1rem]">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

// Hero section
type HeroSectionProps = {
  type: "movie" | "tv-show";
  slides: MovieOrTV[];
};

const MAX_LENGTH_OF_OVERVIEW = 400;

export default function HeroSection({ type, slides }: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentActiveSlide = slides[activeIndex];
  const overview =
    currentActiveSlide.overview.length > MAX_LENGTH_OF_OVERVIEW
      ? `${currentActiveSlide.overview.slice(0, MAX_LENGTH_OF_OVERVIEW)}...`
      : currentActiveSlide.overview;
  const detailUrl = `/details/${currentActiveSlide.id}?type=${type}`;
  const altText = `Hero image for ${
    type === "movie" ? currentActiveSlide.title : currentActiveSlide.name
  }`;

  const setNextSlide = () => {
    if (activeIndex < slides.length - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };

  const setPrevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    } else {
      setActiveIndex(slides.length - 1);
    }
  };

  return (
    <div className="md:grid md:grid-cols-8 md:gap-x-4 lg:grid-cols-12">
      <motion.div
        className="relative aspect-[2/3] object-cover md:col-span-5 lg:col-span-7 lg:aspect-[2/2.8]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        key={currentActiveSlide.poster_path}
      >
        <Image
          src={`https://image.tmdb.org/t/p/original${currentActiveSlide.poster_path}`}
          alt={altText}
          fill
          priority
          sizes="(max-width: 0) 100%"
        />

        <div className="absolute left-0 right-0 top-0 h-[5rem] bg-gradient-to-b from-[#121012]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[5rem] bg-gradient-to-t from-[#121012]"></div>
        <div className="hidden md:absolute md:bottom-0 md:left-0 md:top-0 md:block md:w-[4rem] md:bg-gradient-to-r md:from-[#121012]"></div>
        <div className="hidden md:absolute md:bottom-0 md:right-0 md:top-0 md:block md:w-[4rem] md:bg-gradient-to-l md:from-[#121012] md:via-[#131113]"></div>
      </motion.div>

      <motion.div
        className="md:col-span-3 lg:col-span-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        key={`${currentActiveSlide.poster_path}-overview`}
      >
        <div className="flex justify-end py-4 md:justify-start md:py-6 lg:pb-8 lg:pt-14 xl:pb-12">
          <div className="flex items-center gap-x-4">
            <button
              className="text-[#9F939F] transition hover:text-[#F3F1F3]"
              onClick={setPrevSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 lg:h-8 lg:w-8"
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
              onClick={setNextSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 lg:h-8 lg:w-8"
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
          <h1 className="text-[1.563rem] font-bold uppercase leading-7 text-[#F3F1F3] md:text-[1.953rem] md:leading-8 lg:text-[3.052rem] lg:leading-none">
            {type === "movie"
              ? currentActiveSlide.title
              : currentActiveSlide.name}
          </h1>

          <div className="pt-2">
            <Ratings rating={currentActiveSlide.vote_average} />
          </div>

          <div className="pb-6 pt-4 leading-7 text-[#CFC9CF] lg:pb-10 lg:pt-8 lg:leading-relaxed xl:pb-14 xl:pt-10 xl:text-[1.13rem]">
            {overview}
          </div>

          <div className="text-[0.8rem] xl:text-[1rem]">
            <Link
              href={detailUrl}
              className="inline-block rounded border border-[#F50057] bg-[#F50057] px-8 py-2 text-center text-white sm:px-12"
            >
              See details
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
