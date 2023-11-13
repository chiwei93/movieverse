import type { PropsWithChildren } from "react";

import Link from "next/link";
import Image from "next/image";

// Grid Item
type PosterItemProps = { type: "poster" };
type MovieOrTVItemProps = {
  type: "movie" | "tv-show";
  id: number;
};

type ItemProps = MovieOrTVItemProps | PosterItemProps;

function Item(props: PropsWithChildren<ItemProps>) {
  const { type, children } = props;

  return type !== "poster" ? (
    <Link
      href={`/details/${props.id}?type=${type}`}
      className="flex h-full cursor-pointer flex-col"
    >
      {children}
    </Link>
  ) : (
    <div className="flex flex-col">{children}</div>
  );
}

// Grid card content
type PosterCardContentProps = {
  type: "poster";
  imageUrl: string | null;
  imagePriority: boolean;
  name: string;
};

type MovieOrTVCardContentProps = {
  type: "movie" | "tv-show";
  imageUrl: string | null;
  imagePriority: boolean;
  name: string;
  rating: number;
  releaseDate: string;
};

type CardContentProps = PosterCardContentProps | MovieOrTVCardContentProps;

function CardContent(props: CardContentProps) {
  const { type, imageUrl, name, imagePriority = false } = props;

  return (
    <>
      <div className="relative aspect-[2/3]">
        <Image
          src={
            imageUrl
              ? `https://image.tmdb.org/t/p/original${imageUrl}`
              : "/poster-holder.jpg"
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

      {type !== "poster" && (
        <div className="mt-auto flex items-end justify-between text-[0.64rem] xl:text-[0.8rem]">
          {props.releaseDate && (
            <span className="block text-[#9F939F]">
              {new Date(props.releaseDate).getFullYear()}
            </span>
          )}

          {props.rating && (
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
                {props.rating.toFixed(1)}
              </span>
            </div>
          )}
        </div>
      )}
    </>
  );
}

// // Grid Card
type PosterCardProps = {
  type: "poster";
  imageUrl: string | null;
  imagePriority?: boolean;
  name: string;
};

type MovieOrTVCardProps = {
  type: "movie" | "tv-show";
  imageUrl: string | null;
  imagePriority?: boolean;
  name: string;
  id: number;
  rating: number;
  releaseDate: string;
};

type CardProps = PosterCardProps | MovieOrTVCardProps;

function Card(props: CardProps) {
  const { imageUrl, name, type, imagePriority = false } = props;

  return type === "poster" ? (
    <Item type={type}>
      <CardContent
        imagePriority={imagePriority}
        imageUrl={imageUrl}
        type={type}
        name={name}
      />
    </Item>
  ) : (
    <Item type={type} id={props.id}>
      <CardContent
        imagePriority={imagePriority}
        imageUrl={imageUrl}
        name={name}
        type={type}
        rating={props.rating}
        releaseDate={props.releaseDate}
      />
    </Item>
  );
}

// Grid
type GridProps = {
  largeLessCols?: boolean;
};

export default function Grid({
  largeLessCols = false,
  children,
}: PropsWithChildren<GridProps>) {
  const largeGridClass = largeLessCols
    ? "lg:grid-cols-5 lg:gap-x-6"
    : "lg:grid-cols-6";

  return (
    <div
      className={`grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 sm:gap-y-8 ${largeGridClass}`}
    >
      {children}
    </div>
  );
}

Grid.Card = Card;
