"use client";

import Image from "next/image";
import { useId } from "react";

type RatingsProps = {
  rating: number;
};

const MAX_NUMBER_OF_STARS = 5;
const MAX_NUMBER_OF_RATINGS = 10;

function Ratings({ rating }: RatingsProps) {
  const id = useId();

  const renderStars = (_rating: number) => {
    const numOfStars = Math.ceil(
      (_rating * MAX_NUMBER_OF_STARS) / MAX_NUMBER_OF_RATINGS,
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
          key={`star-${id}`}
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

  return (
    <div className="flex items-center gap-x-4 text-[#F50057]">
      <div className="flex gap-x-1">{renderStars(rating)}</div>

      <span className="pt-[0.1rem] text-[0.8rem] xl:text-[1rem]">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="md:grid md:grid-cols-8 md:gap-x-4 lg:grid-cols-12">
      <div className="relative aspect-[2/3] object-cover md:col-span-5 lg:col-span-7 lg:aspect-[2/2.8]">
        <Image src="/starwars.jpeg" alt="Hero image for movie" fill priority />

        <div className="absolute left-0 right-0 top-0 h-[5rem] bg-gradient-to-b from-[#121012]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[5rem] bg-gradient-to-t from-[#121012]"></div>
        <div className="absolute bottom-0 left-0 top-0 w-[4rem] bg-gradient-to-r from-[#121012]"></div>
        <div className="absolute bottom-0 right-0 top-0 w-[4rem] bg-gradient-to-l from-[#121012] md:via-[#131113]"></div>
      </div>

      <div className="md:col-span-3 lg:col-span-5">
        <div className="flex justify-end py-4 md:justify-start md:py-6 lg:pb-8 lg:pt-16 xl:pb-12 xl:pt-24">
          <div className="flex items-center gap-x-4">
            <button className="text-[#9F939F] transition hover:text-[#F3F1F3]">
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

            <button className="text-[#9F939F] transition hover:text-[#F3F1F3]">
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
            star wars: the last jedi
          </h1>

          <div className="flex items-center gap-x-2 pb-1 pt-2 text-[0.8rem] text-[#9F939F] md:pb-2 md:pt-3 xl:text-[1rem]">
            <span className="block">2020</span>

            <span className="block h-1 w-1 rounded-full bg-[#9F939F]"></span>

            <span className="block">Action, Adventure, Sci-fi</span>
          </div>

          <div>
            <Ratings rating={7.5} />
          </div>

          <div className="pb-6 pt-4 leading-7 text-[#CFC9CF] lg:pb-10 lg:pt-8 lg:leading-relaxed xl:pb-14 xl:pt-10 xl:text-[1.25rem]">
            Rey seeks to learn the ways of the Jedi under Luke Skywalker, its
            remaining member, to reinvigorate the Resistance&apos;s war against
            the First Order.
          </div>

          <div className="grid grid-cols-2 gap-x-4 text-[0.8rem] md:grid-cols-1 md:gap-x-0 md:gap-y-4 lg:flex lg:gap-x-4 lg:gap-y-0 xl:text-[1rem]">
            <button className="rounded border border-[#F50057] bg-[#F50057] px-4 py-2 text-white sm:px-8">
              Watch trailer
            </button>

            <button className="rounded border border-[#F3F1F3] px-4 py-2 text-[#F3F1F3] sm:px-8">
              See details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
