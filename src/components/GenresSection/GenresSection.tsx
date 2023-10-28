"use client";

import { useState } from "react";
import Swiper from "swiper";

import GenresCarousel from "@/components/GenresCarousel/GenresCarousel";

const genres = [
  { name: "action", href: "/genres/action" },
  { name: "adventure", href: "/genres/action" },
  { name: "comedy", href: "/genres/action" },
  { name: "sci-fi", href: "/genres/action" },
  { name: "romance", href: "/genres/action" },
  { name: "mystery", href: "/genres/action" },
];

export default function GenresSection() {
  const [swiper, setSwiper] = useState<Swiper | null>(null);

  return (
    <>
      <div className="flex items-end justify-between gap-x-2 pb-4">
        <h2 className="text-[1.563rem] font-bold uppercase lg:text-[1.953rem]">
          genres
        </h2>

        <div>
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
        <GenresCarousel genres={genres} setSwiper={setSwiper} />
      </div>
    </>
  );
}
