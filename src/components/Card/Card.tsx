"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type CardProps = {
  name?: string;
  bottomRow?: {
    rating: number;
    year: number;
  };
};

export default function Card({
  bottomRow,
  name = "star wars: the last jedi",
}: CardProps) {
  const router = useRouter();

  return (
    <div className="cursor-pointer" onClick={() => router.push("/movies/1")}>
      <div className="relative aspect-[2/3]">
        <Image src="/starwars.jpeg" alt="movie poster" fill />
      </div>

      <div className="pb-1 pt-2 text-[0.8rem] font-semibold uppercase leading-tight xl:text-[1rem]">
        {name}
      </div>

      {bottomRow && (
        <div className="flex items-end justify-between text-[0.64rem] xl:text-[0.8rem]">
          <span className="block text-[#9F939F]">2020</span>

          <div className="flex items-center gap-x-1 text-[#F50057]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3 w-3 xl:h-4 xl:w-4"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>

            <span className="block pt-[0.12rem]">7.0</span>
          </div>
        </div>
      )}
    </div>
  );
}
