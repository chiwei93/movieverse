import Card from "@/components/Card/Card";
import CardsGrid from "@/components/CardsGrid/CardsGrid";
import Link from "next/link";

export default function Search() {
  return (
    <div className="min-h-[80vh]">
      <div className="relative lg:hidden">
        <input
          type="text"
          className="w-full rounded bg-[#292429] py-2 pl-4 pr-12 text-[0.8rem] text-[#CFC9CF]"
          placeholder="Search"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>

      <div className="pt-8 md:pt-4">
        <div>
          <h2 className="text-[1.25rem] font-medium text-[#877887] md:text-[1.563rem] lg:text-[1.953rem]">
            Results: Star wars
          </h2>

          <div className="pt-2">
            <Link href="/" className="text-[0.8rem] text-[#F50057]">
              Back to home
            </Link>
          </div>
        </div>

        <div className="pt-8">
          <CardsGrid>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </CardsGrid>
        </div>
      </div>
    </div>
  );
}
