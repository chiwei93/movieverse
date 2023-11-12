import Link from "next/link";

type ReviewProps = {
  author: string;
  rating: number | null;
  date: string;
  content: string;
  reviewUrl: string;
};

const MAX_REVIEW_OVERVIEW_LENGTH = 220;

export default function Review({
  author,
  rating,
  date,
  content,
  reviewUrl,
}: ReviewProps) {
  const slicedContent =
    content.length > MAX_REVIEW_OVERVIEW_LENGTH
      ? `${content.slice(0, MAX_REVIEW_OVERVIEW_LENGTH)}...`
      : content;

  return (
    <Link
      href={reviewUrl}
      className="col-span-2 rounded bg-[#1B181B] p-4 sm:p-6"
      target="_blank"
    >
      <div className="pb-1 text-[0.8rem] text-[#CFC9CF]">{author}</div>

      <div className="flex items-center gap-x-2 pb-4 text-[0.64rem] text-[#9F939F]">
        {rating && (
          <span className="flex items-center gap-x-1 text-[#F50057]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3 w-3"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>

            <span className="mt-0.5">{rating.toFixed(1)}</span>
          </span>
        )}

        {rating && (
          <span className="block h-[0.2rem] w-[0.2rem] rounded-full bg-[#9F939F] pt-0.5"></span>
        )}

        <span className="block pt-0.5">{new Date(date).toLocaleString()}</span>
      </div>

      <p className="overflow-clip text-[0.8rem] text-[#CFC9CF]">
        {slicedContent}
      </p>
    </Link>
  );
}
