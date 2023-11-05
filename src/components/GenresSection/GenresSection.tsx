"use client";

import type { Genre } from "@/types/genres";

import { useState } from "react";
import Swiper from "swiper";

import GenresCarousel from "@/components/GenresCarousel/GenresCarousel";

// remove this default genre after development
const testgenres = [
  { name: "action", id: 1 },
  { name: "adventure", id: 2 },
  { name: "comedy", id: 3 },
  { name: "sci-fi", id: 4 },
  { name: "romance", id: 5 },
  { name: "mystery", id: 6 },
];

type Props = {
  title: string;
  genres?: Genre[];
};

const generateGenresWithHref = (genres: Genre[]) => {
  return genres.map((genre) => {
    return {
      ...genre,
      href: `/genres/${genre.name}`,
    };
  });
};

export default function GenresSection({ title, genres = testgenres }: Props) {
  const [swiper, setSwiper] = useState<Swiper | null>(null);

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

      <div className="">
        <GenresCarousel
          genres={generateGenresWithHref(genres)}
          setSwiper={setSwiper}
        />
      </div>
    </>
  );
}
