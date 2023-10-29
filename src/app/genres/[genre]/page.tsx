import Link from "next/link";

import CardsGrid from "@/components/CardsGrid/CardsGrid";
import Card from "@/components/Card/Card";

export default function Genre() {
  return (
    <div className="md:pt-8 lg:pt-12">
      <div className="flex items-end justify-between gap-x-2 pt-4 sm:flex-col sm:items-start sm:justify-normal sm:gap-x-0 sm:gap-y-2 sm:pt-6 md:gap-y-2">
        <h2 className="text-[1.25rem] font-medium text-[#877887] md:text-[1.563rem] lg:text-[1.953rem]">
          Action
        </h2>

        <div>
          <Link href="/" className="text-[0.8rem] text-[#F50057]">
            Back to home
          </Link>
        </div>
      </div>

      <div className="pt-6 md:pt-10">
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
        </CardsGrid>
      </div>
    </div>
  );
}
