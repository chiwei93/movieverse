import type { PropsWithChildren } from "react";
import type { CardType } from "@/types/cardType";

import Image from "next/image";
import Link from "next/link";

// fix the type after integration with api
type CardProps = {
  name?: string;
  bottomRowProps?: {
    rating: number;
    releaseDate: string;
  };
  imageUrl?: string | null;
  id?: number;
  type?: CardType;
  imagePriority?: boolean;
};

const getUrl = (type: CardType, id?: number) => {
  if (type === "movie") return `/movies/${id}`;
  if (type === "tv-show") return `/tv-shows/${id}`;
  return "";
};

function CardParent({
  id,
  type,
  children,
}: PropsWithChildren<{ id?: number; type: CardType }>) {
  const url = getUrl(type, id);

  return type !== "poster" ? (
    <Link href={url} className="flex h-full cursor-pointer flex-col">
      {children}
    </Link>
  ) : (
    <div className="flex flex-col">{children}</div>
  );
}

// remove the default name and imageurl
export default function Card({
  bottomRowProps,
  name = "star wars: the last jedi",
  imageUrl,
  id,
  type = "movie",
  imagePriority = false,
}: CardProps) {
  return (
    <CardParent id={id} type={type}>
      <div className="relative aspect-[2/3]">
        {/* remove the default src */}
        <Image
          src={
            imageUrl
              ? `https://image.tmdb.org/t/p/original${imageUrl}`
              : "/starwars.jpeg"
          }
          alt={`poster for ${name}`}
          fill
          sizes="(max-width: 0) 100%"
          priority={imagePriority}
        />
      </div>

      {type !== "poster" && (
        <div className="pb-1 pt-2 text-[0.8rem] font-semibold uppercase leading-tight">
          {name}
        </div>
      )}

      {bottomRowProps && (
        <div className="mt-auto flex items-end justify-between text-[0.64rem] xl:text-[0.8rem]">
          {bottomRowProps.releaseDate && (
            <span className="block text-[#9F939F]">
              {new Date(bottomRowProps.releaseDate).getFullYear()}
            </span>
          )}

          <div className="ml-auto flex items-center gap-x-1 text-[#F50057]">
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

            <span className="block pt-[0.12rem] font-semibold">
              {bottomRowProps.rating.toFixed(1)}
            </span>
          </div>
        </div>
      )}
    </CardParent>
  );
}
