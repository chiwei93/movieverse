import Link from "next/link";

type Props = {
  baseUrl: string;
  currentPage: number;
  totalPages: number;
  queryParams?: string;
};

function getPageNumbers(currentPage: number, totalPages: number) {
  const hasPrevious = currentPage > 1;
  const hasNext = totalPages > currentPage;
  const result = [];

  if (hasPrevious) {
    result.push(currentPage - 1);
  }

  result.push(currentPage);

  if (hasNext) {
    result.push(currentPage + 1);
  }

  if (result.length < 3 && totalPages > 2 && currentPage === totalPages) {
    result.unshift(currentPage - 2);
  }

  if (result.length < 3 && totalPages > 2 && currentPage === 1) {
    result.push(currentPage + 2);
  }

  return result;
}

export default function Pagination({
  baseUrl,
  currentPage,
  totalPages,
  queryParams,
}: Props) {
  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;
  const pageNums = getPageNumbers(currentPage, totalPages);

  return (
    <div className="flex items-center gap-x-4">
      {hasPreviousPage && (
        <Link
          href={`${baseUrl}?page=${currentPage - 1}&${queryParams}`}
          className="text-[#9F939F] transition hover:text-[#F3F1F3]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      )}

      <div className="flex items-center gap-x-2">
        {pageNums.map((num) => (
          <Link
            href={`${baseUrl}?page=${num}&${queryParams}`}
            className={`flex items-center justify-center rounded px-4 py-2 text-[1rem] transition hover:bg-[#CFC9CF] hover:text-black ${
              currentPage === num
                ? "bg-[#CFC9CF] text-black"
                : "bg-[#1B181B] text-[#9F939F]"
            }`}
            key={num}
          >
            {num}
          </Link>
        ))}
      </div>

      {hasNextPage && (
        <Link
          href={`${baseUrl}?page=${currentPage + 1}&${queryParams}`}
          className="text-[#9F939F] transition hover:text-[#F3F1F3]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      )}
    </div>
  );
}
